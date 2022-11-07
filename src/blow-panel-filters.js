import {LitElement, css, html} from 'lit';
import './blow-panel.js';

export class BlowPanelFilters extends LitElement {

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
      <blow-panel name="Filters">
        Contenido filtros
      </blow-panel>
    `;
  }

}

customElements.define('blow-panel-filters', BlowPanelFilters);
