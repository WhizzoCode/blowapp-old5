import {LitElement, css, html} from 'lit';
import './blow-tk/blow-panel.js';

export class BlowPanelFilters extends LitElement {

  constructor() {
    super();
  }

  static styles = css`
    :host {
      display: block;
    }

    p {
      margin: 0;
    }
  `;

  render() {
    return html`
      <blow-panel header="Filters">
        <p>
          Ratings<br>
          Labels<br>
          Keywords
        </p>
      </blow-panel>
    `;
  }

}

customElements.define('blow-panel-filters', BlowPanelFilters);
