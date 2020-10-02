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

// Skills nav

$("#skills-nav li").click(function(){
    $("#skills-nav li span").addClass('visibility_hidden');
    console.log($(this).text());
    let selectedSkill = $(this).text();
    // console.log(selectedSkill);
    // console.log(selectedSkill.indexOf(" "));
    // console.log(selectedSkill.lastIndexOf(" ") === 1 ? undefined : selectedSkill.lastIndexOf(" "));
    selectedSkill = selectedSkill.slice(
        selectedSkill.indexOf(" ") + 1, 
        selectedSkill.lastIndexOf(" ") === 1 ? undefined : selectedSkill.lastIndexOf(" ")
        );
    console.log("#skills-nav-" + selectedSkill.toLowerCase() + " span");

    // selectedSkill.slice(0, )
    $("#skills-nav-" + selectedSkill.toLowerCase() + " span").removeClass('visibility_hidden');

    let skillsDivIdName;

    selectedSkill.toLowerCase() === "hard" || selectedSkill.toLowerCase() === "soft" ? 
        skillsDivIdName = "#" + selectedSkill.toLowerCase() + "_skills_div":
        skillsDivIdName = "#" + selectedSkill.toLowerCase() + "_div";

    $("#hard_skills_div, #tools_div, #soft_skills_div").addClass('display_none');
    $(skillsDivIdName).removeClass('display_none');
});

