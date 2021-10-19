import React  from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import FuseAnimate from '@fuse/core/FuseAnimate/index';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			background: `radial-gradient(${darken(theme.palette.primary.dark, 0.5)} 0%, ${theme.palette.primary.dark} 80%)`,
			color: theme.palette.primary.contrastText
		}
	})
);

type Props = {
	children: React.ReactNode | Array<React.ReactNode>;
	title: string;
}
const AuthFormContainer: React.FC<Props> = ({ children, title }: Props) => {
	const classes = useStyles();


	return (
		<div className={clsx(classes.root, 'flex flex-col flex-auto flex-shrink-0 items-center justify-center p-32')}>
			<div className="flex flex-col items-center justify-center w-full">
				<FuseAnimate>
					<Card className="w-full max-w-384 rounded-8">
						<CardContent className="flex flex-col items-center justify-center p-32">
							<img className="w-200 m-32" src="/assets/images/logos/app-logo.png" alt="logo" />

							<label className='text-md mb-48'>
								{title}
							</label>
							<div className='w-full flex flex-col'>
								{children}
							</div>
						</CardContent>
					</Card>
				</FuseAnimate>
			</div>
		</div>

	);
};

export default AuthFormContainer;
