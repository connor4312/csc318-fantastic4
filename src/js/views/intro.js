import View from '../view';

export default class Intro extends View {

    render($el) {
        $el.html(`
            <div class="icon" click-to="1">
                <div class="target"></div>
                <div class="text">FoodSmart</div>
            </div>
        `);

        this.bindHtml($el);
    }

    slideClass() {
        return 'intro';
    }

    static step($step) {
        $step.html(`
            <p>Welcome to the FoodSmart application! FoodSmart is an app that helps you reduce food waste by:</p>
            <ul>
                <li>monitoring foods that are going to go bad;</li>
                <li>suggesting ways to use those foods;</li>
                <li>and gathering data about your purchasing and consumption to help you plan your grocery purchases.</li>
            </ul>
            <h2>First, click the icon to open the FoodSmart app!</h2>
        `);
    }
}
