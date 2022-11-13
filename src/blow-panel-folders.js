import {LitElement, css, html} from 'lit';
import './blow-tk/blow-panel.js';
import './blow-tk/blow-tree.js';
import './blow-tk/blow-tree-item.js';

export class BlowPanelFolders extends LitElement {

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
    `;
  }

}

customElements.define('blow-panel-folders', BlowPanelFolders);
