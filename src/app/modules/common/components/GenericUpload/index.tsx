import React, {useState} from 'react';
import {Dropzone, FileItem, FullScreenPreview} from 'dropzone-ui';
import {FileValidated} from 'dropzone-ui/build/components/dropzone/components/utils/validation.utils';
import {CloudFile} from 'api/types/cloud-file.type';
import {toast} from 'react-toastify';
import clsx from 'clsx';
import './styles.css';

export type Props = {
    title: string;
    initial?: Array<CloudFile> | CloudFile | null
    upFiles: (files: Array<File>) => void
    maxFiles?: number
    accept?: 'image/*' | 'video/*' | 'application/pdf' | 'audio/*'
    disabled?: boolean
}

const GenericUpload: React.FC<Props> = ({title, initial, upFiles, accept, disabled, maxFiles = 1}: Props) => {
    accept = accept ? accept : 'image/*';
    const [files, setFiles] = useState<Array<FileValidated>>([]);
    const [focusedSrc, setFocusedSrc] = useState<any>(null);
    const updateFiles = (incoming: Array<FileValidated>) => {
        //do something with the files
        setFiles(incoming.slice(incoming.length - maxFiles));
    };


    const cloudFileToFile = async (cf: CloudFile): Promise<File> => {

        return new Promise((resolve, reject) => {
            fetch(`${cf.url}`)
                .then((e) => {
                    return e.blob();
                })
                .then((blob) => {
                    let b: any = blob;
                    b.lastModifiedDate = new Date();
                    b.name = cf.key;
                    const f = new File([b], `${cf.key}`, {
                        type: accept
                    });
                    //resolve(b as File);
                    resolve(f);
                }).catch((err) => {
                toast.error(err?.toString());
            });
        });

    };


    const setInitialData = async (entry: Array<CloudFile> | CloudFile) => {
        const result: Array<FileValidated> = new Array<FileValidated>();
        if (entry && entry instanceof Array) {
            entry.map(async (item, i) => {
                result.push({
                        id: i,
                        file: await cloudFileToFile(item),
                        valid: true
                    }
                );
            });
        } else if (entry) {
            result.push({
                id: 1,
                file: await cloudFileToFile(entry as CloudFile),
                valid: true
            });
        }

        setFiles(result);
    };

    React.useEffect(() => {
        if (initial) {
            setInitialData(initial);
        }
    }, [initial]);


    React.useEffect(() => {
        let toUpFiles = files.map(x => x.file)
        if (initial) {
            toUpFiles = toUpFiles.filter((f) => {
                return initial instanceof Array ?
                    !initial.some(i => i.key === f.name) :
                    f.name !== initial.key;
            })
        }
        upFiles(toUpFiles);
    }, [files]);


    const removeFile = (id: any) => {
        setFiles(files.filter((x) => x.id !== id));
    };
    return (
        <div className={clsx('w-full d-flex flex-column', {
            disable: disabled
        })}>

            <label className='mb-4'>{title}</label>
            <Dropzone
                maxFiles={maxFiles}
                footer={false}
                header={true}
                accept={accept}
                maxHeight={'1rem'}
                onChange={updateFiles}
                value={files}>
                {files.map((file) => (
                    <FileItem {...file} onDelete={removeFile} preview info onSee={(src: any) => setFocusedSrc(src)}/>
                ))}

                <FullScreenPreview
                    imgSource={focusedSrc}
                    openImage={focusedSrc}
                    onClose={() => setFocusedSrc(undefined)}
                />
            </Dropzone>
        </div>
    );
};

export default GenericUpload;


