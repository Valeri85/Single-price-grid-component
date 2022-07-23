import { ReactNode } from 'react';

export interface SectionProps {
	className: string;
	title?: string;
	labelledby?: string;
	children: ReactNode;
}
