import { FC, useId } from 'react';

import { CardProps } from './Card.model';
import classes from './Card.module.scss';

export const Card: FC<CardProps> = props => {
	const mainTitleId = useId();

	return (
		<article className={classes.card} aria-labelledby={mainTitleId}>
			<h1 id={mainTitleId}>Join our community</h1>
			{props.children}
		</article>
	);
};
