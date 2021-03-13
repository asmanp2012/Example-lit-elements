import { LitElement, html, property, PropertyValues } from 'lit-element'
class hello extends LitElement {
  // type: String, Specifies how to convert between property and attribute.
  // attribute: 'my-prop', Specifies corresponding observed attribute.
  // reflect: true, Specifies whether to reflect property to attribute on changes.
  // hasChanged(newValue, oldValue) { ... }, Specifies how to evaluate whether the property has changed.
  @property({
    type: String,
    reflect: true,
    hasChanged (newValue, oldValue): boolean {
      console.log('hasChanged %s => %s', oldValue, newValue)
      return newValue !== oldValue
    }
  })
  name = 'World';

  constructor () {
    super()
    console.log('constructor')
  }

  connectedCallback () {
    super.connectedCallback()
    console.log('connectedCallback')
  }

  attributeChangedCallback (name: string, old: string|null, value: string|null) {
    super.attributeChangedCallback(name, old, value)
    console.log('attributeChangedCallback')
  }

  // requestUpdate() {

  // }

  shouldUpdate (_changedProperties: PropertyValues) {
    console.log('shouldUpdate')
    return super.shouldUpdate(_changedProperties)
  }

  update (_changedProperties: PropertyValues) {
    console.log('updated')
    super.update(_changedProperties)
  }

  render () {
    console.log('render')
    return html`
      <p>Hello 2 ${this.name}!</p>
    `
  }

  firstUpdated (_changedProperties: PropertyValues) {
    super.firstUpdated(_changedProperties)
    console.log('firstUpdated')
  }

  updated (_changedProperties: PropertyValues) {
    super.updated(_changedProperties)
    console.log('updated')
  }

  disconnectedCallback () {
    super.disconnectedCallback()
    console.log('disconnectedCallback')
  }
}
customElements.define('hello-world', hello)
