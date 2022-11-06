import {LitElement, css, html} from 'lit';

export class BlowPanel extends LitElement {

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
      <p>Panel</p>
    `;
  }

}

customElements.define('blow-panel', BlowPanel);
