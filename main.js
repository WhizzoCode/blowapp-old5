import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path.js';
import './src/blow-app.js';

setBasePath('./node_modules/@shoelace-style/shoelace/dist');

const app = document.createElement('blow-app');
document.body.appendChild(app);
