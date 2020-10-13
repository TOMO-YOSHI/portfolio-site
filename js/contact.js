// import '../style.css';

// PageTransitionAnimation ****************************************
import { pageTransitionAnimationWithArguments, pageSlideTransitionAnimationWithArguments } from './pageTransition/pageTransitionAnimation.js';

// pageTransitionAnimationWithArguments("#go_to_works", "#contact_body", "./works.html");

pageSlideTransitionAnimationWithArguments("#go_to_works", "#contact_main", "./works.html", "slide_out_right");
// pageSlideTransitionAnimationWithArguments("#go_to_skill", "#profile_body", "./profile.html");


// glovalNav ****************************************
import { globalNav } from './globalNav/globalNav.js';

globalNav("contact");
