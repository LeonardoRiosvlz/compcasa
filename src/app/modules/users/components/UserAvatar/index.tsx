import React, { ChangeEvent } from 'react';
import { Avatar, AvatarProps, Badge, Icon, IconButton, CircularProgress } from '@material-ui/core';
import { CloudFile } from 'api/types/cloud-file.type';


export type UserAvatarProps = {
	avatar?: CloudFile | null,
	firstname: string,
	readonly?: boolean;
	loading?: boolean
	callBack?: (file: File) => void

} & AvatarProps
const UserAvatar: React.FC<UserAvatarProps> = ({ avatar, firstname, loading, readonly = false, callBack, ...props }: UserAvatarProps) => {

	const [file, setFile] = React.useState<File | null>(null);
	const [src, setSrc] = React.useState<string | null>(null);

	React.useEffect(() => {
		if (file) {
			setSrc(URL.createObjectURL(file));
		} else if (avatar && avatar?.url) {
			setSrc(avatar.url);
		}

	}, [file, avatar]);


	const uploadAction = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { files } = target;
		const firstFile = files ? files[0] : null;
		if (firstFile) {
			setFile(firstFile);
			if (callBack) callBack(firstFile);
		}
	};

	return (
		<>
			<Badge anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'right'
			}}
				   badgeContent={<>{!readonly && <IconButton size='small' component="label">
					   {!loading ?
						   <>
							   <Icon>edit</Icon>
							   <input type="file" onChange={uploadAction}
									  accept="image/png, image/jpeg, image/gif"
									  name="file"
									  style={{ display: 'none' }} />
						   </> : <CircularProgress size={20} color='secondary' />}

				   </IconButton>} </>}
			>
				{src ? <Avatar src={src} {...props} /> :
					<Avatar {...props}>{firstname[0]}</Avatar>}
			</Badge>

		</>

	);


};


export default UserAvatar;
