import View from '../view';

export default class Intro extends View {

    render($el) {
        $el.html(`
            <div class="icon">
                <div class="target"></div>
                <div class="text">FoodSmart</div>
            </div>
        `);

        $el.find('text').on('click', () => this.emit('goto', 1));
    }

    slideClass() {
        return 'intro';
    }

    static step($step) {
        $step.html(`This is the first step!`);
    }
}
