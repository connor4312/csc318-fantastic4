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

    render() {
        if (!this.hasSetup) {
            this.setup();
        } else {
            this.view.remove();
        }

        const View = this.views[this.currentView];
        this.view = new View.View().render(this.$stage);
        this.$steps.css(
            'transform',
            'translateY(' + (-View.step.position().top) + 'px)'
        );

    }
}

new App().render();

