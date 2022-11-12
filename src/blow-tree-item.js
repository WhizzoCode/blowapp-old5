import {LitElement, css, html} from 'lit';

export class BlowTreeItem extends LitElement {

  static properties = {
    label:    { type: String },
    expanded: { type: Boolean, reflect: true },
    selected: { type: Boolean, reflect: true },
    level:    { type: Number, attribute: false }
  };

  constructor() {
    super();
    this.expanded = false;
    this.selected = false;
    this.level = 0;
  }

  static styles = css`
    :host {
      display: block;
      user-select: none;
    }

    :host([expanded]) .icon {
      transform: rotate(90deg);
    }

    :host([selected]) .item {
      background-color: var(--color-panel-selection);
    }

    .item {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    .expand-button.hidden {
      visibility: hidden;
    }

    .icon {
      display: block;
      width: 1em;
      height: 1em;
      margin: 0 0.25em;
    }

    .label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `;

  render() {
    return html`
      <style>
        .item {
          padding-left: ${ this.level }em;
        }
      </style>
      <div class="item" @click=${ this.#handleClick }>
        <div class="expand-button hidden">
          <!--heroicons: chevron-right-->
          <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </div>
        <div class="label">
          ${ this.label }
        </div>
      </div>
      <div class="children" ?hidden=${ !this.expanded }>
        <slot @slotchange=${ this.#handleSlotchange }></slot>
      </div>
    `;
  }

  get #children() {
    return this.shadowRoot.querySelector('slot').assignedElements();
  }

  get #expandButton() {
    return this.shadowRoot.querySelector('.expand-button');
  }

  #handleClick() {
    if (!!this.#children.length) {
      this.expanded = !this.expanded;
    }
    this.dispatchEvent(new Event('selected', { bubbles: true }));
  }

  #handleSlotchange() {
    if (!!this.#children.length) {
      this.#expandButton.classList.remove('hidden');
    } else {
      this.#expandButton.classList.add('hidden');
    }

    this.#children.forEach(element => {
      if (element.tagName === 'BLOW-TREE-ITEM') {
        element.level = this.level + 1;
      }
    });
  }

}

customElements.define('blow-tree-item', BlowTreeItem);
