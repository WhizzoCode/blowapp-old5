import {LitElement, css, html} from 'lit';

export class BlowApp extends LitElement {

  constructor() {
    super();
  }

  static styles = css`
    :host {
      color: tomato;
    }
  `;

  render() {
    return html`
      <h1>BlowApp</h1>
    `;
  }

}

customElements.define('blow-app', BlowApp);
