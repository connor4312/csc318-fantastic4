import View from '../view';

export default class Intro extends View {

    render($el) {
        $el.html(`<h1>Hello world!`);
    }

    static step($step) {
        $step.html(`This is the first step!`);
    }
}
