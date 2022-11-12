import {LitElement, css, html} from 'lit';
import './blow-panel.js';
import './blow-tree.js';
import './blow-tree-item.js';

export class BlowApp extends LitElement {

  constructor() {
    super();
  }

  static styles = css`
    :host {
      height: 100%;
      display: flex;
    }

    .panels {
      background-color: var(--color-panel);
      width: 250px;
      flex-shrink: 0;
    }

    .main {
      flex-grow: 1;
    }
  `;

  render() {
    return html`
      <div class="panels">
        <blow-panel header="Folders">
          <blow-tree>
            <blow-tree-item label="assets">
              <blow-tree-item label="images">
                <blow-tree-item label="photo.jpg"></blow-tree-item>
                <blow-tree-item label="landscape.jpg"></blow-tree-item>
              </blow-tree-item>
              <blow-tree-item label="fonts">
                <blow-tree-item label="inter.woff2"></blow-tree-item>
                <blow-tree-item label="montserrat.woff2"></blow-tree-item>
              </blow-tree-item>
              <blow-tree-item label="style1.css"></blow-tree-item>
              <blow-tree-item label="style2.css"></blow-tree-item>
              <blow-tree-item label="style3.css"></blow-tree-item>
            </blow-tree-item>
            <blow-tree-item label="dist"></blow-tree-item>
            <blow-tree-item label="node_modules"></blow-tree-item>
            <blow-tree-item label="src"></blow-tree-item>
          </blow-tree>
        </blow-panel>
      </div>

      <div class="main"></div>
    `;
  }

}

customElements.define('blow-app', BlowApp);
