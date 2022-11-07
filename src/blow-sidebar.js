import {LitElement, css, html} from 'lit';
import './blow-panel-folders.js';
import './blow-panel-filters.js';

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
        <blow-panel-folders slot="start"></blow-panel-folders>
        <blow-panel-filters slot="end"></blow-panel-filters>
      </sl-split-panel>
    `;
  }

}

customElements.define('blow-sidebar', BlowSidebar);
