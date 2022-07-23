import { FC, useContext } from 'react';

import { LaballedbyContenxt } from '../../context/LabelledbyContext';

import { CardProps } from './Card.model';
import classes from './Card.module.scss';

export const Card: FC<CardProps> = props => {
	const mainTitleId = useContext(LaballedbyContenxt);

	return (
		<article className={classes.card} aria-labelledby={mainTitleId}>
			{props.children}
		</article>
	);
};
