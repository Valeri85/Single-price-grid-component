import { FC, createContext, useId } from 'react';

import { LaballedbyContenxtProps } from './LaballedbyContext.model';

export const LaballedbyContenxt = createContext('');

export const LaballedbyContenxtProvider: FC<
	LaballedbyContenxtProps
> = props => {
	const mainTitleId = useId();

	return (
		<LaballedbyContenxt.Provider value={mainTitleId}>
			{props.children}
		</LaballedbyContenxt.Provider>
	);
};
