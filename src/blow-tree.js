import {LitElement, css, html} from 'lit';

export class BlowTree extends LitElement {

  constructor() {
    super();
    this.addEventListener('selected', e => {
      this.querySelectorAll('blow-tree-item[selected]').forEach(element => {
        element.attributes.removeNamedItem('selected');
      });
      e.target.selected = true;
    });
  }

  static styles = css`
    :host {
      display: block;
    }
  `;

  render() {
    return html`
      <slot></slot>
    `;
  }

}

customElements.define('blow-tree', BlowTree);
