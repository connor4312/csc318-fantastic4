import $ from 'jquery';

import View from '../view';

export default class Intro extends View {

    render($el, $container) {
        $el.html(`
            <div class="menu" >
                <h1>Receipt Scanner</h1>
                <a click-to="2" class="menu-action icon icon-close"></a>
            </div>
            <div class="aligner"></div>
            <div class="controls">
                <div class="col-xs-4">
                    <a class="icon control icon-photos">Photos</a>
                </div>
                <div class="col-xs-4">
                    <a class="icon control icon-camera primary-action"></a>
                </div>
                <div class="col-xs-4">
                    <a class="icon control icon-light-bulb">Light Off</a>
                </div>
            </div>
        `);

        const video = this.$video = $(`
            <video muted="true" preload="auto" autoplay loop>
                <source src="img/receipt.mp4" type="video/mp4"
            </video>
        `).appendTo($container.find('.background'));

        $el.find('.primary-action').on('click', () => {
            $el.addClass('flash');
            video[0].pause();

            setTimeout(() => {
                $el.removeClass('flash');
                this.emit('goto', 3);
            }, 1500);
        });

        this.bindHtml($el);
    }

    remove() {
        this.$video.remove();
    }

    slideClass() {
        return 'scanner';
    }

    static step($step) {
        $step.html(`
            <p>You've just gotten back from the store with your receipt. Now, you can take a picture of it to easily enter all the items in the app.</p>
            <p>If you already took a picture of it earlier, you could also browse your photos and select it from there, but we've not done so here.</p>
            <h2>Click the <span class="icon icon-camera"></span> icon to scan your receipt!</h2>
        `);
    }
}
