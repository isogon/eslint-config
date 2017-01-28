import { renderToString } from 'react-dom/server';
import component from './react';

// eslint-disable-next-line no-console
console.log(renderToString(component));
