import $ from 'jquery';

import IntroView from './views/intro';
import PantryEmptyView from './views/pantry-empty';
import ScannerView from './views/scanner';
import ScannerReviewView from './views/scanner-review';
import PantryItemsView from './views/pantry-items';
import RecipesView from './views/recipes';
import StatsView from './views/stats';
import HistoryView from './views/history';

class App {

    constructor() {
        this.$stage = $('.js-stage-target');
        this.$fore = this.$stage.find('.foreground');
        this.$steps = $('.js-steps');

        this.hasSetup = false;
    }

    setup() {
        this.hasSetup = true;

        this.views = [
            IntroView,
            PantryEmptyView,
            ScannerView,
            ScannerReviewView,
            PantryItemsView,
            RecipesView,
            StatsView,
            HistoryView
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

        view.render(this.$fore, this.$stage);
        view.once('goto', (step) => this.render(step));
    }
}

new App().render(0);

