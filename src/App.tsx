import { FC } from 'react';

import { Card } from './components/UI/Card';
import { Content } from './components/Content/Content';
import { Footer } from './components/Layout/Footer/Footer';

export const App: FC = () => (
	<>
		<main>
			<Card>
				<Content />
			</Card>
		</main>
		<Footer />
	</>
);
