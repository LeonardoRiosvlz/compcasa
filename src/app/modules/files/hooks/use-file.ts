import React from 'react';

import axios from 'axios';
import useRepository from "app/modules/common/hooks/use-repository";
import {FileRepository} from "api/repositories/files/file.repository";
import {AppFile, SignedWriteUrl} from "api/repositories/files/types/file.types";

type UseFileLoading = { signed: boolean, upload: boolean, create: boolean, fetch: boolean }

type ProcessFileParams<T> = {
    file: File;
    fileParam: keyof T;
    storage?: string;
    toRemove?: string;
    isVideo?: boolean
}

type ProcessFileResult<T> = {
    [k in keyof T]: string;
}

type UseFileHook = {
    processFile: <T>(params: ProcessFileParams<T>) => Promise<ProcessFileResult<T>>
    loading: UseFileLoading;
}


const useFile = (): UseFileHook => {

    const [loading, setLoading] = React.useState<UseFileLoading>({
        signed: false,
        upload: false,
        create: false,
        fetch: false
    });
    const filesRepo = useRepository(FileRepository)


    const processFile = async <T>(params: ProcessFileParams<T>): Promise<ProcessFileResult<T> | undefined> => {
        const {file, toRemove, fileParam} = params;
        return new Promise(async (resolve, reject) => {

            try {

                // 1Get Write Signed Url
                setLoading({...loading, signed: true});
                const signedUrl: SignedWriteUrl = await filesRepo.getSignedUrl({
                    filename: file.name,
                    contentType: file.type
                });


                //2 Upload File to cloud
                setLoading({...loading, signed: false, upload: true});
                await axios.put(signedUrl.url, file);


                // 3 Create Uploaded File in Database
                setLoading({...loading, upload: false, create: true});
                await filesRepo.create({
                    input: {
                        key: signedUrl.key,
                        isVideo: new RegExp(/video/i).test(file.type),
                        toRemove
                    }
                });


                //4 Get Uploaded
                setLoading({...loading, create: false, fetch: true});
                const appFile: AppFile = await filesRepo.findOne({
                    input: {
                        where: {key: {eq: signedUrl.key}}
                    }
                });

                setLoading({...loading, fetch: false});


                // @ts-ignore
                appFile ? resolve({
                    [fileParam]: appFile.id
                }) : reject(undefined);


            } catch (err) {
                setLoading({...loading, upload: false});
                reject(err);
            }
        });
    };


    return {
        // @ts-ignore
        processFile,
        loading

    };
};

export default useFile;