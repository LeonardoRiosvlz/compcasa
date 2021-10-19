import React from 'react';
import {Avatar} from '@material-ui/core';
import {User} from 'api/repositories/user/types/user.types';

type Props = {
    item: User
}


const UserSelectorRenderer: React.FC<Props> = ({item}: Props) => {

    const fullName = `${item.firstname} ${item.lastname ?? ''}`;
    const avatarSrc = item?.avatarFile ? item.avatarFile.url : undefined;


    const style = {width: 18, height: 18}

    return (

        <div className='w-full flex'>
            {avatarSrc ? <Avatar src={avatarSrc} style={style}/> :
                <Avatar style={style}>{fullName[0].toUpperCase()}</Avatar>}
            <div className='flex ml-8 flex-col justify-center'>
                <small>{fullName}</small>
            </div>
        </div>


    );
};

export default UserSelectorRenderer;
