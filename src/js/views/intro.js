import View from '../view';

export default class Intro extends View {

    render($el) {
        $el.html("<div style='width:380px; overflow:hidden;'><img src='img/background.jpg' style='height:650px;'></div>");
    }

    static step($step) {
        $step.html(`This is the first step!`);
    }
}
