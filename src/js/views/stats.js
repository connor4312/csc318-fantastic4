import View from '../view';

export default class Stats extends View {

    render($el) {
        $el.html(`
            <div class="menu" >
                <h1>My Stats</h1>
                <a class="menu-action icon icon-close"></a>
            </div>
            <div class="page-content"></div>
            <div class="menu-bottom">
                <a class="icon icon-pantry" click-to="4">Pantry</a>
                <a class="icon icon-chart" click-to="6">Stats</a>
                <a class="icon icon-food" click-to="5">Recipes</a>
            </div>
        `);
        this.bindHtml($el);
    }

    slideClass() {
        return 'stats';
    }

    static step($step) {
        $step.html(`
            <p>Finally, FoodSmart records a history of exactly how much you buy and how much you waste. It can break down waste by food groups and even specific foods, so that you can plan your purchases more effectively.</p>
            <p>That's all for the alpha version of FoodSmart. We hope that you're interested in the application, and we welcome your feedback and suggestions!</p>
        `);
    }
}
