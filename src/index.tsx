import { createRoot } from 'react-dom/client';

import { App } from './App';

import { LaballedbyContenxtProvider } from './context/LabelledbyContext';
import './assets/styles/style.scss';

createRoot(document.getElementById('root') as HTMLDivElement).render(
	<LaballedbyContenxtProvider>
		<App />
	</LaballedbyContenxtProvider>
);
