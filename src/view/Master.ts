import BaseView from '@view/BaseView';

export default class Master implements BaseView {
  private element: HTMLElement | null = null;

  public createDOM(object?: any): HTMLElement {
    this.destroy();
    this.element = document.createElement('div');
    this.element.style.background = 'rgba(0,0,0,.5)';
    this.element.style.position = 'fixed';
    this.element.style.zIndex = '99999';
    this.element.style.top = '0';
    this.element.style.left = '0';
    this.element.style.width = '100%';
    this.element.style.height = '100%';

    this.element.addEventListener('click', () => {
      this.destroy();
    });

    return this.element;
  }

  public destroy() {
    const element = this.element;
    if (element === null) {
      return;
    }

    let parent = element.parentNode;
    if (parent === null) {
      return;
    }
    parent.removeChild(element);
  }
}
