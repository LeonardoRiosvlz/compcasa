import React from 'react';
import { User } from 'api/repositories/user/types/user.types';
import { toast } from 'react-toastify';
import useRepository from "../../common/hooks/use-repository";
import {UserRepository} from "../../../../api/repositories/user/user.repository";


type UseUserFilterHook = {
	findBy: string | null | undefined
	queryLoading: boolean;
	users: Array<User>
	usersIds: Array<string>
}


const useUserFilter = (findBy: string | null | undefined): UseUserFilterHook => {

	const [queryLoading, setQueryLoading] = React.useState<boolean>(false);
	const [users, setUsers] = React.useState<Array<User>>([]);
	const userRepo = useRepository(UserRepository)


	React.useEffect(() => {
		setQueryLoading(true);
		userRepo.findAll({
			input: {
				where: !findBy ? {} : {
					or: [
						{ email: { iLike: findBy } },
						{ username: { iLike: findBy } },
						{ firstname: { iLike: findBy } },
						{ lastname: { iLike: findBy } }
					]
				}
			}
		}).then((r) => {

			setUsers(r);
			setQueryLoading(false);
		}).catch((err) => {
			toast.error(err?.toString());
			setQueryLoading(false);
		});


	}, [findBy]);


	return {
		findBy,
		users,
		usersIds: users.map(x => x.id),
		queryLoading

	};
};

export default useUserFilter;