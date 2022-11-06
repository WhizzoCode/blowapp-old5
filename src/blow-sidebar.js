import {LitElement, css, html} from 'lit';

export class BlowSidebar extends LitElement {

  constructor() {
    super();
  }

  static styles = css`
    :host {
      display: block;
      background-color: var(--sl-color-neutral-50);
    }
  `;

  render() {
    return html`
      <p>Sidebar</p>
    `;
  }

}

customElements.define('blow-sidebar', BlowSidebar);
