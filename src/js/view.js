import {EventEmitter} from 'events';

const STAGE = '.js-stage-target';

export default class View extends EventEmitter {

    bindHtml ($el) {
        const view = this;
        $el.find('[click-to]').on('click', function () {
            view.emit('goto', parseInt(this.getAttribute('click-to'), 10));
        });
    }

    remove() {

    }
}
