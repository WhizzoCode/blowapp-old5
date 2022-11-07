import {LitElement, css, html} from 'lit';
import './blow-panel.js';

export class BlowSidebar extends LitElement {

  constructor() {
    super();
  }

  static styles = css`
    :host {
      display: block;
      background-color: var(--sl-color-neutral-50);
    }

    sl-split-panel {
      --min: 100px;
      --max: calc(100% - var(--min));
      height: 100%;
    }
  `;

  render() {
    return html`
      <sl-split-panel vertical position="50" snap="50%">
        <blow-panel slot="start"></blow-panel>
        <blow-panel slot="end"></blow-panel>
      </sl-split-panel>
    `;
  }

}

customElements.define('blow-sidebar', BlowSidebar);
