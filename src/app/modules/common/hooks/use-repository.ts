import React from 'react';
import {IRepository} from "api/interfaces/IRepository";



type Props<T> = { new(): T; }

const useRepository = <T extends IRepository<unknown>, >(repo: Props<T>): T => {
    return  new repo()
};

export default useRepository;