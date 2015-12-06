import View from '../view';

export default class PantryEmpty extends View {

    render($el) {
        $el.html(`
            <div class="menu" >
                <h1>My Pantry</h1>
                <a click-to="2" class="menu-action icon icon-plus"></a>
            </div>
            <div class="empty-pantry page-content">
                Oh no, your pantry is currently empty!
                <small>Click <a click-to="2">here</a> to scan a recipt.</small>
            </div>
        `);

        this.bindHtml($el);
    }

    slideClass() {
        return 'default';
    }

    static step($step) {
        $step.html(`
            <p>On this screen, you'll be able to track what food you currently have at home. We've not bought anything yet, though, so head over to the recipt scanner to capture your first purchase.</p>
            <h2>Click the <span class="icon icon-plus"></span> in the upper right-hand corner!</h2>
        `);
    }
}
