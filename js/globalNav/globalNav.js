import $ from "jquery";

// hamburgerMenuEffect ****************************************
import { hamburgerMenuEffect } from './hamburgerMenu.js';
import { globalMenuOpen } from './globalMenuOpen.js';
import { pageTransitionAnimationWithArguments } from '../pageTransition/pageTransitionAnimation.js';

// export function globalNav() {
//     hamburgerMenuEffect();
//     globalMenuOpen();
// }

export function globalNav(pageName) {
    hamburgerMenuEffect();
    globalMenuOpen();

    $("#global_nav li").each(function(index){
        pageTransitionAnimationWithArguments(this,
        "#" + pageName + "_body",
            $(this).text().toLowerCase() === "welcome" ? 
            "./index.html":
            "./" + $(this).text().toLowerCase() + ".html");
    })
}
