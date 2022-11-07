import {LitElement, css, html} from 'lit';

export class BlowPanel extends LitElement {

  static properties = {
    name: {}
  };

  constructor() {
    super();
    this.name = 'Panel';
  }

  static styles = css`
    :host {
      display: block;
    }

    div {
      background-color: var(--sl-color-neutral-100);
    }
  `;

  render() {
    return html`
      <div>${ this.name }</div>
      <slot></slot>
    `;
  }

}

customElements.define('blow-panel', BlowPanel);
