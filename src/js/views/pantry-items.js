import View from '../view';

export default class PantryItems extends View {

    render($el) {
        const groups = [
            { expires: 'This Week', items: [
                ['Kale', '1 Bunch'],
                ['Tomatoes', '0.5kg'],
                ['Bananas', '0.3kg'],
            ]},
            { expires: 'Next Week', items: [
                ['Milk Pouch', '3 Liters'],
                ['Onions', '0.8kg'],
            ]},
            { expires: 'Next Month', items: [
                ['Large Eggs', '1 Dozen']
            ]},
            { expires: 'Next Year', items: [
                ['Peanut Butter', '400g'],
                ['Active Dry Yeast', '1 Jar']
            ]},
        ];

        $el.html(`
            <div class="menu" >
                <h1>My Pantry</h1>
                <a class="menu-action icon icon-plus"></a>
            </div>
            <div class="page-content fadeout">
                <table class="table table-items">
                    <tbody>` +
                        groups.map((group) => `
                            <tr class="expiry-heading">
                                <td colspan="3">${group.expires}</td>
                            <tr>` +
                            group.items.map((item) => `
                                <tr>
                                    <td>${item[0]} <span class="quantity">${item[1]}</span></td>
                                    <td class="action"><a class="icon icon-pencil"></a></td>
                                    <td class="action"><a class="icon icon-close"></a></td>
                                </tr>
                            `).join('')
                        ).join('') +
                    `</tbody>
                </table>
            </div>
            <div class="menu-bottom">
                <a class="icon icon-help">Suggestions</a>
                <a class="icon icon-chart">History</a>
                <a class="icon icon-food">Recipies</a>
            </div>
        `);

        this.bindHtml($el);
    }

    slideClass() {
        return 'default';
    }

    static step($step) {
        $step.html(`
            <h4>after a few days...</h4>
            <p>You managed to scan your receipt and import the food you bought! It's been a few days and, after another trip to the store, you've got more groceries in your pantry.
            <p>But, it looks like you've got food that's going to go bad soon if you don't use it! Fortunately, FoodSmart can provide just the right recommendations to help you use that up in a delicious way. It uses an algorithm based on the steady state of stochastic matrices to find well-rated recipes that optimally make use of your soon-to-expire food.</p>
            <h2>Click the <span class="icon icon-food"></span> bottom corner for recipes!</h2>
        `);
    }
}
