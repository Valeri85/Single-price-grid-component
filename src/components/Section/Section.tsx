import { FC, useId } from 'react';

import { SectionProps } from './Section.model';
import classes from './Section.module.scss';

export const Section: FC<SectionProps> = props => {
	const titleId = useId();

	return (
		<section
			aria-labelledby={props.labelledby ?? titleId}
			className={`${classes.section} ${props.className}`}
		>
			{props.title && <h3 id={titleId}>{props.title}</h3>}
			{props.children}
		</section>
	);
};
