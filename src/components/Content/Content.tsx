import { FC, useId } from 'react';

import { Section } from '../Section/Section';

import classes from '../Section/Section.module.scss';

export const Content: FC = () => {
	const subTitleId = useId();

	return (
		<>
			<Section className={classes.section1} labelledby={subTitleId}>
				<h2 id={subTitleId}>
					30-day, hassle-free money back guarantee
				</h2>
				<p>
					Gain access to our full library of tutorials along with
					expert code reviews. Perfect for any developers who are
					serious about honing their skills.
				</p>
			</Section>
			<Section className={classes.section2} title="Monthly Subscription">
				<p className={classes.cost}>
					<strong className={classes.price}>&#36;29</strong>
					<span>per month</span>
				</p>
				<p>Full access for less than &#36;1 a day</p>
				<form className={classes.form}>
					<button>Sign Up</button>
				</form>
			</Section>
			<Section className={classes.section3} title="Why Us">
				<ul>
					<li>Tutorials by industry experts</li>
					<li>Peer &amp; expert code review</li>
					<li>Coding exercises</li>
					<li>Access to our GitHub repos</li>
					<li>Community forum</li>
					<li>Flashcard decks</li>
					<li>New videos every week</li>
				</ul>
			</Section>
		</>
	);
};
