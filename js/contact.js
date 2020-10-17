import '../style.css';

// PageTransitionAnimation ****************************************
import {  pageSlideTransitionAnimationWithArguments } from './pageTransition/pageTransitionAnimation.js';

pageSlideTransitionAnimationWithArguments("#go_to_works", "#contact_main", "./works.html", "slide_out_right");

// glovalNav ****************************************
import { globalNav } from './globalNav/globalNav.js';

globalNav("contact");
