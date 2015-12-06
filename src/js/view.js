import {View} from 'backbone';

const STAGE = '.js-stage-target';

export default class FoodView extends View {

    bindHtml ($el) {
        const view = this;
        $el.find('[click-to]').on('click', function () {
            view.trigger('goto', parseInt(this.getAttribute('click-to'), 10));
        });
    }
}
