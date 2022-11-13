import {LitElement, css, html} from 'lit';

export class BlowPanel extends LitElement {

  static properties = {
    header: {}
  };

  constructor() {
    super();
  }

  static styles = css`
    :host {
      display: block;
    }

    header {
      padding: 1em;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `;

  render() {
    let header;
    if (this.header) {
      header = html`<header>${ this.header.toUpperCase() }</header>`;
    } else {
      header = html``;
    }

    return html`
      ${ header }
      <slot></slot>
    `;
  }

}

customElements.define('blow-panel', BlowPanel);
