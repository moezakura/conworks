export default interface BaseView {
  createDOM(object?: any): HTMLElement;

  destroy(): void;
}
