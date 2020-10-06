// PageTransitionAnimation ****************************************
import { pageSlideTransitionAnimationWithArguments } from './pageTransition/pageTransitionAnimation.js';

pageSlideTransitionAnimationWithArguments("#go_to_skills", "#works_main", "./skills.html", "slide_out_right");

pageSlideTransitionAnimationWithArguments("#go_to_contact", "#works_main", "./contact.html", "slide_out_left");

// glovalNav ****************************************
import { globalNav } from './globalNav/globalNav.js';

globalNav("works");
