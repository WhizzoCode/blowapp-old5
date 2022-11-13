import {LitElement, css, html} from 'lit';

export class BlowPanel extends LitElement {

  static properties = {
    header: {}
  };

  constructor() {
    super();
    this.header = '';
  }

  static styles = css`
    :host {
      display: block;
    }

    .header {
      padding: 0.5em 1em;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `;

  render() {
    let header;
    if (this.header) {
      header = html`<div class="header">${ this.header.toUpperCase() }</div>`;
    } else {
      header = html``;
    }

    return html`
      ${ header }
      <div class="body">
        <slot></slot>
      </div>
    `;
  }

}

customElements.define('blow-panel', BlowPanel);
