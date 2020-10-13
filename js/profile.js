// import '../style.css';

// PageTransitionAnimation ****************************************
import { pageTransitionAnimationWithArguments, pageSlideTransitionAnimationWithArguments } from './pageTransition/pageTransitionAnimation.js';

pageTransitionAnimationWithArguments("#go_to_welcom", "#profile_body", "./index.html");

pageSlideTransitionAnimationWithArguments("#go_to_skills", "#profile_main", "./skills.html", "slide_out_left");
// pageSlideTransitionAnimationWithArguments("#go_to_skill", "#profile_body", "./profile.html");


// glovalNav ****************************************
import { globalNav } from './globalNav/globalNav.js';

globalNav("profile");
