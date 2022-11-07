import {LitElement, css, html} from 'lit';
import '@shoelace-style/shoelace/dist/components/split-panel/split-panel.js';
import './blow-sidebar.js';
import './blow-gallery.js';

export class BlowApp extends LitElement {

  constructor() {
    super();
  }

  static styles = css`
    :host {
      display: block;
    }

    :host,
    sl-split-panel,
    sl-split-panel > * {
      height: 100%;
    }

    sl-split-panel {
      --min: 200px;
      --max: calc(100% - var(--min));
    }
  `;

  render() {
    return html`
      <sl-split-panel position-in-pixels="200" primary="start">
        <blow-sidebar slot="start"></blow-sidebar>
        <blow-gallery slot="end"></blow-gallery>
      </sl-split-panel>
    `;
  }

}

customElements.define('blow-app', BlowApp);
