import {LitElement, css, html} from 'lit';
import './blow-panel.js';

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
        <blow-panel header="Folders">
          Content
        </blow-panel>
      </div>

      <div class="main">
        Main
      </div>
    `;
  }

}

customElements.define('blow-app', BlowApp);
