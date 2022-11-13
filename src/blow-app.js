import {LitElement, css, html} from 'lit';
import './blow-panel-folders.js';

export class BlowApp extends LitElement {

  constructor() {
    super();
  }

  static styles = css`
    :host {
      height: 100%;
      display: flex;
    }

    .panels {
      background-color: var(--color-panel);
      width: 250px;
      flex-shrink: 0;
    }

    .main {
      flex-grow: 1;
    }
  `;

  render() {
    return html`
      <div class="panels">
        <blow-panel-folders></blow-panel-folders>
      </div>
      <div class="main"></div>
    `;
  }

}

customElements.define('blow-app', BlowApp);
