import BaseView from '@view/BaseView';

export default class Master implements BaseView {
  createDOM(object?: any): HTMLElement {
    let element = document.createElement('div');
    element.style.background = 'rgba(0,0,0,.5)';
    element.style.position = 'fixed';
    element.style.zIndex = '99999';
    element.style.top = '0';
    element.style.left = '0';
    element.style.width = '100%';
    element.style.height = '100%';

    return element;
  }
}
