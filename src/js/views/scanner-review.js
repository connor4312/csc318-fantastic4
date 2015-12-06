import $ from 'jquery';

import View from '../view';

export default class Intro extends View {

    render($el, $container) {
        const items = [
            ['Milk Pouch', '3 Liters'],
            ['Large Eggs', '1 Dozen'],
            ['Peanut Butter', '400g'],
            ['Active Dry Yeast', '1 Jar'],
            ['Bananas', '1.2kg'],
            ['Kale', '1 Bunch'],
        ];

        $el.html(`
            <div class="menu" >
                <h1>Receipt Scanner: Review</h1>
                <a click-to="2" class="menu-action icon icon-close"></a>
            </div>
            <div class="page-content">
                <p class="helper-head">Here's what we scanned from your receipt. Make corrects if needed, then press <span class="text-primary">Confirm</span>.</p>
                <table class="table table-items">
                    <tbody>` + items.map((item) => `
                        <tr>
                            <td>${item[0]} <span class="quantity">${item[1]}</span></td>
                            <td class="action"><a class="icon icon-pencil"></a></td>
                            <td class="action"><a class="icon icon-close"></a></td>
                        </tr>
                    `).join('') + `
                    </tbody>
                </table>
            </div>
            <div class="row">
                <div class="col-xs-5">
                    <button class="btn btn-lg btn-styled btn-block btn-default">Cancel</button>
                </div>
                <div class="col-xs-7">
                    <button class="btn btn-lg btn-styled btn-block btn-primary" click-to="4">Confirm</button>
                </div>
            </div>
        `);

        this.bindHtml($el);
    }

    remove() {
        this.$video.remove();
    }

    slideClass() {
        return 'default';
    }

    static step($step) {
        $step.html(`
            <p>The FoodSmart app used optical character recognition to read the receipt, and matched the items' barcode numbers against its extensive internal database.</p>
            <p>On this screen, you can correct any entries that we got wrong. But, it looks like the app got everything right here, go ahead and confirm the list!</p>
            <h2>Click the <span class="text-primary">Confirm</span> button to add the items to your pantry!</h2>
        `);
    }
}
