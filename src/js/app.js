import $ from 'jquery';

import IntroView from './views/intro';
import PantryEmptyView from './views/pantry-empty';

class App {

    constructor() {
        this.$stage = $('.js-stage-target');
        this.$fore = this.$stage.find('.foreground');
        this.$steps = $('.js-steps');

        this.hasSetup = false;
    }

    setup() {
        this.hasSetup = true;
        this.currentView = 0;

        this.views = [
            IntroView,
            PantryEmptyView,
        ].map((View) => {
            const step = $('<div class="step">');
            View.step(step);

            return { View, step: step.appendTo(this.$steps) };
        });
    }

    render(step) {
        if (!this.hasSetup) {
            this.setup();
        } else {
            this.$stage.removeClass(this.view.slideClass());
        }

        const View = this.views[step];
        const view = this.view = new View.View();
        this.$stage.addClass(view.slideClass());
        this.$steps.css(
            'transform',
            'translateY(' + (-View.step.position().top) + 'px)'
        );

        this.$steps.find('.step.active').removeClass('active');
        View.step.addClass('active');

        view.render(this.$fore);
        view.once('goto', (step) => this.render(step));
    }
}

new App().render(0);

