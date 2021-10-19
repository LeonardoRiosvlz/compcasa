import React from 'react';

import {toast} from 'react-toastify';

import {AvailablePermit} from 'api/repositories/roles/types/roles.types';
import useAuth from 'app/modules/auth/hooks/use-auth';
import {APP_MODULES, APP_ACTION} from 'app/modules/common/constants';
import useRepository from "../../common/hooks/use-repository";
import {RolesRepository} from "api/repositories/roles/role.repository";


type UsePermitsHook = {
    available: Array<AvailablePermit>;
    hasPermission: (module: APP_MODULES,
                    permit?: APP_ACTION) => boolean

}

const usePermits = (): UsePermitsHook => {
    const rolesRepo = useRepository(RolesRepository)

    const {user} = useAuth();
    const [available, setAvailable] = React.useState<Array<AvailablePermit>>([]);
    React.useEffect(() => {
        fetchAvailable();
    }, []);
    const fetchAvailable = (): void => {
        rolesRepo.getAvailablePermits().then((r) => {
            setAvailable(r);
        }).catch(err => toast.error(err?.toString));
    };

    const hasPermission = (module: APP_MODULES, permit?: APP_ACTION): boolean => {
        const userPermits = Array.from(user?.roles ?? []).map(x => x.permits).reduce((a, b) => {
            return [...a, ...b];
        }, []);
        if (user?.isAdmin) {
            return true;
        }


        let hasPermit;
        if (permit) {
            hasPermit = userPermits.some((x => x.module === module && x.action === permit));
        } else {
            hasPermit = userPermits.some((x => x.module === module));
        }
        return hasPermit;
    };

    return {
        available,
        hasPermission
    };
};

export default usePermits;