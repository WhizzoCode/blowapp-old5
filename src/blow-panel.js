import {LitElement, css, html} from 'lit';

export class BlowPanel extends LitElement {

  static properties = {
    title: {}
  };

  constructor() {
    super();
    this.title = 'Panel';
  }

  static styles = css`
    :host {
      display: block
    }

    .title {
      font-weight: 700;
    }
  `;

  render() {
    return html`
      <div class="title">${ this.title.toUpperCase() }</div>
      <slot></slot>
    `;
  }

}

customElements.define('blow-panel', BlowPanel);
