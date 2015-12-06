import {View} from 'backbone';
import $ from 'jquery';

import IntroView from './views/intro';

class App extends View {

    constructor(options) {
        super(options);

        this.$stage = $('.js-stage-target');
        this.$steps = $('.js-steps');

        this.hasSetup = false;
    }

    setup() {
        this.hasSetup = true;
        this.currentView = 0;

        this.views = [
            IntroView
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
            this.view.remove();
        }

        const View = this.views[step];
        const view = this.view = new View.View();
        this.$steps.css(
            'transform',
            'translateY(' + (-View.step.position().top) + 'px)'
        );

        view.render(this.$stage);
        view.once('transition', (step) => this.render(step));
    }
}

new App().render(0);

