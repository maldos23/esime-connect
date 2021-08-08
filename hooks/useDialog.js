import React, { Fragment, useCallback, useState } from 'react';
import { makeStyles, DialogContent, DialogTitle, Typography, Button, Dialog } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
	subtitle: {
		marginTop: theme.spacing(2),
		textDecoration: 'none',
		color: theme.palette.primary.main,
		fontSize: 14,
		fontWeight: 'bold',
	},
	title: {
		color: theme.palette.secondary.main,
		fontSize: 24,
		fontWeight: 'bold',
		'& > b': {
			color: theme.palette.primary.main,
		},
	},
}));

function Tigger({ Componse, children, ...props }) {
	return <Componse {...props}>{children}</Componse>;
}

function DialogStyledTitle({ title = 'Title', subtitle = 'subtitle' }) {
	const classes = useStyle();
	return (
		<Fragment>
			<Typography align="left" className={classes.subtitle}>
				{subtitle}
			</Typography>
			<Typography align="left" className={classes.title}>
				{title}
			</Typography>
		</Fragment>
	);
}

export default function useDialog({ TiggerComponent = Button }) {
	const [open, setOpen] = useState(false);

	//Apertura del dialog
	const handleDialog = () => setOpen(!open);

	return {
		handleDialog,
		Tigger: useCallback(
			({ children, ...otherProps }) => (
				<Tigger Componse={TiggerComponent} onClick={handleDialog} {...otherProps}>
					{children}
				</Tigger>
			),
			[],
		),
		Constructor: useCallback(
			({ title, subtitle, children, dialogProps = {} }) => (
				<Dialog fullWidth open={open} onClose={handleDialog} {...dialogProps}>
					<DialogTitle>
						<DialogStyledTitle title={title} subtitle={subtitle} />
					</DialogTitle>
					<DialogContent>{children}</DialogContent>
				</Dialog>
			),
			[open],
		),
	};
}
