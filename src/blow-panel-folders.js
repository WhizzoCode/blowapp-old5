import {LitElement, css, html} from 'lit';
import './blow-panel.js';

export class BlowPanelFolders extends LitElement {

  constructor() {
    super();
  }

  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <blow-panel name="Folders">
        Contenido carpetas
      </blow-panel>
    `;
  }

}

customElements.define('blow-panel-folders', BlowPanelFolders);
