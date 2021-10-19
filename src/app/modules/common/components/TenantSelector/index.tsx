import React from 'react';

import {useAppDispatch, useAppSelector} from 'app/modules/common/hooks/use-app-redux';

import {TenantState, setTenantInfo, unSetTenantInfo} from 'app/modules/common/store/tenant.slice';
import {SimplifiedTenant} from 'api/repositories/tenant/types/tenant.types';
import {toast} from 'react-toastify';
import {List, Popover, MenuItem, Icon, Tooltip} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {LaunchGqlClient} from 'app/modules/common/services/LaunchGqlClient';
import useRepository from "../../hooks/use-repository";
import {TenantRepository} from "api/repositories/tenant/tenant.repository";

type Props = {}


const TenantSelector: React.FC<Props> = (props: Props) => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation(['common']);
    const tenantRepo = useRepository(TenantRepository)
    const {info} = useAppSelector(state => state.app.tenant) as TenantState;
    const [tenants, setTenants] = React.useState<Array<SimplifiedTenant>>([]);
    const [loading, setLoading] = React.useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null | undefined>();

    const tenant = info;

    const handleOpen = ({currentTarget}: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleSelect = (selected: SimplifiedTenant) => {
        // @ts-ignore
        dispatch(setTenantInfo(selected));
        LaunchGqlClient.rebuildLink()
        handleClose();
    };

    const handleUnset = () => {
        // @ts-ignore
        dispatch(unSetTenantInfo());
        LaunchGqlClient.rebuildLink()
        handleClose();
    };

    React.useEffect(() => {
        setLoading(true);
        tenantRepo.getTenantsInfo({input: {where: {}}}).then((res) => {
            setTenants(res);
            setLoading(false);
        }).catch((err) => {
            setLoading(false);
            toast.error(err.toString());
        });
    }, []);


    const displayName = tenant.name ?? t('NO_TENANT');
    return (
        <>
            <div className='w-full flex justify-between'>
                <div className='w-full flex justify-center'>
                    <strong className='cursor-pointer' onClick={handleOpen}>{displayName}</strong>
                </div>
                <div>
                    <Tooltip title={t('TENANT_SELECTOR_INFO_MSG') ?? ''}>
                        <Icon fontSize='small'>info</Icon>
                    </Tooltip>
                </div>
            </div>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center'
                }}
                classes={{
                    paper: 'py-8'
                }}
            >
                <List>
                    {tenants.map((item, index) => {

                        return (
                            <MenuItem selected={item.id === tenant.id}
                                      onClick={() => handleSelect(item)}>{item.name}</MenuItem>
                        );
                    })}

                    <MenuItem selected={tenant.id === null} onClick={handleUnset}>{t('NO_TENANT')}</MenuItem>
                </List>
            </Popover>
        </>
    );
};

export default TenantSelector;
