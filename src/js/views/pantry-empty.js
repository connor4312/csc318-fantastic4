import View from '../view';

export default class Intro extends View {

    render($el) {
        $el.html(`
            <div class="menu" >
                <h1>My Pantry</h1>
                <a click-to="3" class="menu-action icon icon-plus"></a>
            </div>
            <div class="empty-pantry">Your pantry is currently empty!</div>
        `);

        this.bindHtml($el);
    }

    slideClass() {
        return 'default';
    }

    static step($step) {
        $step.html(`
            <p>On this screen, you'll be able to track what food you currently have at home. We've not bought anything yet, though, so head over to the recipt scanner to capture your first purchase.
            <h2>Click the <span class="icon icon-plus"></span> in the upper right-hand corner!</h2>
        `);
    }
}
