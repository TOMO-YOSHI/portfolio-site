// PageTransitionAnimation ****************************************
import { pageTransitionAnimationWithArguments, pageSlideTransitionAnimationWithArguments } from './pageTransition/pageTransitionAnimation.js';

// pageTransitionAnimationWithArguments("#go_to_welcom", "#profile_body", "./index.html");

pageSlideTransitionAnimationWithArguments("#go_to_profile", "#skills_main", "./profile.html", "slide_out_right");

pageSlideTransitionAnimationWithArguments("#go_to_portfolio", "#skills_main", "./portfolio.html", "slide_out_left");

// glovalNav ****************************************
import { globalNav } from './globalNav/globalNav.js';

globalNav("skills");

//  Open Skills List

$('#hard_skills_div .skills_open_close').click(function () {
    $("#hard_skills_logo").toggleClass('height_zero');
    $("#hard_skills_logo").toggleClass('fade_in');

    $(this).text().toLowerCase() === "open" ? $(this).text("Close") : $(this).text("Open");
});


