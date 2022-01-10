
import {JSBlock} from "./js-block";
import {TimerBlock} from "./timer-block";
import {JS_CREATION_DATE} from "../core/constans/settings";


export class App {
    #jsBlock
    #timerBlock

    constructor() {
        this.#jsBlock = new JSBlock();
        this.#timerBlock = new TimerBlock(JS_CREATION_DATE)
    }

    run() {
        const jsBlockHTML = this.#jsBlock.render();
        const timerBlock = this.#timerBlock.render()
        document.body.append(jsBlockHTML,timerBlock);
    }
}



