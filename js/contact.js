// PageTransitionAnimation ****************************************
import { pageTransitionAnimationWithArguments, pageSlideTransitionAnimationWithArguments } from './pageTransition/pageTransitionAnimation.js';

// pageTransitionAnimationWithArguments("#go_to_portfolio", "#contact_body", "./portfolio.html");

pageSlideTransitionAnimationWithArguments("#go_to_portfolio", "#contact_main", "./portfolio.html", "slide_out_right");
// pageSlideTransitionAnimationWithArguments("#go_to_skill", "#profile_body", "./profile.html");


// glovalNav ****************************************
import { globalNav } from './globalNav/globalNav.js';

globalNav("contact");
