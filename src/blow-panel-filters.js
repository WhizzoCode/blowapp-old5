import {LitElement, css, html} from 'lit';
import '@shoelace-style/shoelace/dist/components/rating/rating.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/tree/tree.js';
import '@shoelace-style/shoelace/dist/components/tree-item/tree-item.js';
import '@shoelace-style/shoelace/dist/components/checkbox/checkbox.js';
import './blow-panel.js';

export class BlowPanelFilters extends LitElement {

  constructor() {
    super();
  }

  static styles = css`
    :host {
      display: block;
    }

    sl-button.label::part(base) {
      border-width: 0;
    }

    sl-button.label.red::part(base)    { background-color: red; }
    sl-button.label.yellow::part(base) { background-color: yellow; }
    sl-button.label.green::part(base)  { background-color: green; }
    sl-button.label.blue::part(base)   { background-color: blue; }
    sl-button.label.purple::part(base) { background-color: purple; }

    sl-tree-item::part(item--selected) {
      background-color: transparent;
      border-inline-start-color: transparent;
    }
  `;

  render() {
    return html`
      <blow-panel name="Filters">

        <div class="label">Ratings</div>
        <sl-rating label="Rating"></sl-rating>

        <div class="label">Labels</div>
        <sl-button class="label red" variant="default" size="small" circle></sl-button>
        <sl-button class="label yellow" variant="default" size="small" circle></sl-button>
        <sl-button class="label green" variant="default" size="small" circle></sl-button>
        <sl-button class="label blue" variant="default" size="small" circle></sl-button>
        <sl-button class="label purple" variant="default" size="small" circle></sl-button>

        <div class="label">Keywords</div>
        <sl-tree>
          <sl-tree-item><sl-checkbox></sl-checkbox>places
            <sl-tree-item><sl-checkbox>spain</sl-checkbox></sl-tree-item>
            <sl-tree-item><sl-checkbox>portugal</sl-checkbox></sl-tree-item>
            <sl-tree-item><sl-checkbox>france</sl-checkbox></sl-tree-item>
          </sl-tree-item>
          <sl-tree-item><sl-checkbox>animals</sl-checkbox>
            <sl-tree-item><sl-checkbox>snake</sl-checkbox></sl-tree-item>
            <sl-tree-item><sl-checkbox>monkey</sl-checkbox></sl-tree-item>
          </sl-tree-item>
          <sl-tree-item><sl-checkbox>computer</sl-checkbox>
            <sl-tree-item><sl-checkbox>cpu</sl-checkbox></sl-tree-item>
            <sl-tree-item><sl-checkbox>monitor</sl-checkbox>
              <sl-tree-item><sl-checkbox>lcd</sl-checkbox></sl-tree-item>
              <sl-tree-item><sl-checkbox>tft</sl-checkbox></sl-tree-item>
            </sl-tree-item>
            <sl-tree-item><sl-checkbox>ram</sl-checkbox></sl-tree-item>
          </sl-tree-item>
        </sl-tree>

      </blow-panel>
    `;
  }

}

customElements.define('blow-panel-filters', BlowPanelFilters);
