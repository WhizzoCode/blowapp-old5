import {LitElement, css, html} from 'lit';

export class BlowGallery extends LitElement {

  constructor() {
    super();
  }

  static styles = css`
    :host {
      display: block;
      background-color: var(--sl-color-neutral-0);
    }
  `;

  render() {
    return html`
      <p>Gallery</p>
    `;
  }

}

customElements.define('blow-gallery', BlowGallery);
