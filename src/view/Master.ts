import BaseView from '@view/BaseView';

export default class Master implements BaseView {
    constructor() {

    }

    createDOM(object?: any): HTMLElement {
        let element = document.createElement('div');
        element.style.background = 'rgba(0,0,0,.5)';
        element.style.position = 'fixed';
        element.style.zIndex = '99999';

        return element;
    }

}