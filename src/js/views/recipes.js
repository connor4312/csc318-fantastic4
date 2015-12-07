import $ from 'jquery';
import View from '../view';
import data from './recipe-data';

export default class Intro extends View {

    render($el) {
        $el.html(`
            <div class="menu" >
                <h1>My Recipes</h1>
                <a class="menu-action icon icon-plus"></a>
            </div>
            <div class="page-content recipes"></div>
            <div class="menu-bottom">
                <a class="icon icon-pantry" click-to="4">Pantry</a>
                <a class="icon icon-chart" click-to="6">Stats</a>
                <a class="icon icon-food" click-to="5">Recipes</a>
            </div>
        `);

        const $target = $el.find('.page-content');
        this.recipes = data.map((recipe, i) => $(`
            <div class="recipe">
                <h3>${recipe.name}</h3>
                <div class="row">
                    <div class="col-xs-6">
                        <ul class="bullets">
                            ` + recipe.bullets.map((b) => `<li>${b}</li>`).join('') + `
                        </ul>
                        <div class="source">
                            From <a href="${recipe.href}">${recipe.source}</a>
                        </div>
                    </div>
                    <div class="col-xs-6">
                        <img src="img/recipe-${i + 1}.jpg" style="width:100%">
                    </div>
                </div>
                <ul class="ingredients">` +
                    recipe.ingredients.map((ing) => `
                        <li class="${ing.have ? 'has' : ''} ${ing.needsUsing ? 'needsUsing' : ''}">
                            ${ing.have ? '<span class="icon icon-check"></span>' : ''}
                            ${ing.name}
                        </li>
                    `).join('') +
                    (recipe.more ? `<div class="more">and ${recipe.more} more...</div>` : '') + `
                </ul>
                <div class="row buttons">
                    <div class="col-xs-6">
                        <button class="btn btn-lg btn-styled btn-block btn-default">
                            <span class="icon icon-plus"></span> Save
                        </button>
                    </div>
                    <div class="col-xs-6">
                        <button class="btn btn-lg btn-styled btn-block btn-primary" click-to="6">
                            <span class="icon icon-food"></span> Cook
                        </button>
                    </div>
                </div>
            </div>
        `).appendTo($target));

        this.select(0);
        this.boundFn = this.onKeyDown.bind(this);
        $(document).on('keydown', this.boundFn);

        this.bindHtml($el);
    }

    onKeyDown(e) {
        switch (e.which) {
            case 37:
            case 38:
                this.select(--this.lastSelect);
                break;
            case 39:
            case 40:
                this.select(++this.lastSelect);
                break;
            default: return;
        }

        e.preventDefault();
    }

    select(n) {
        const offset = n < 0 ? data.length - 1 : (n % data.length) * -100;
        this.recipes.forEach(($recipe, i) => $recipe.css(
            'transform',
            'translateX(' + (offset + i * 100) + '%'
        ));

        this.lastSelect = n;
    }

    remove() {
        $(document).off('keydown', this.boundFn);
    }

    slideClass() {
        return 'default';
    }

    static step($step) {
        $step.html(`
            <p>FoodSmart has found several recipes that you might like. You can swipe left or right (use you <span class="text-primary">arrow keys</span> on a computer) to view different suggestions.</p>
            <p>When you <span class="text-primary">Cook</span> one of these recipes, FoodSmart will automatically withdraw the ingredients from your pantry. It'll then show you and overview of your shopping and cooking history, so you can plan even better in the future!</p>
            <h2>When you've chosen a recipe click the <span class="icon icon-food"></span> <span class="text-primary">Cook</span> button!</h2>
        `);
    }
}
