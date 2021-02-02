import $ from "jquery";
import "../style.css";

// PageTransitionAnimation ****************************************
import { pageSlideTransitionAnimationWithArguments } from "./pageTransition/pageTransitionAnimation.js";

pageSlideTransitionAnimationWithArguments(
    "#go_to_profile",
    "#skills_main",
    "./profile.html",
    "slide_out_right"
);

pageSlideTransitionAnimationWithArguments(
    "#go_to_works",
    "#skills_main",
    "./works.html",
    "slide_out_left"
);

// glovalNav ****************************************
import { globalNav } from "./globalNav/globalNav.js";

globalNav("skills");

// Skills nav

$("#skills-nav li").click(function () {
    $("#skills-nav li span").addClass("visibility_hidden");

    console.log($(this).text());
    let selectedSkill = $(this).text();
    selectedSkill = selectedSkill.slice(
        selectedSkill.indexOf(" ") + 1,
        selectedSkill.lastIndexOf(" ") === 1
            ? undefined
            : selectedSkill.lastIndexOf(" ")
    );
    console.log("#skills-nav-" + selectedSkill.toLowerCase() + " span");

    // selectedSkill.slice(0, )
    $("#skills-nav-" + selectedSkill.toLowerCase() + " span").removeClass(
        "visibility_hidden"
    );
    // $("#skills-nav-" + selectedSkill.toLowerCase()).addClass('orange');

    let skillsDivIdName;

    selectedSkill.toLowerCase() === "hard" ||
    selectedSkill.toLowerCase() === "soft"
        ? (skillsDivIdName = "#" + selectedSkill.toLowerCase() + "_skills_div")
        : (skillsDivIdName = "#" + selectedSkill.toLowerCase() + "_div");

    $("#hard_skills_div, #tools_div, #soft_skills_div").addClass(
        "display_none"
    );
    $("#skills-nav li").removeClass("orange");
    $(skillsDivIdName).removeClass("display_none");
    $("#skills-nav-" + selectedSkill.toLowerCase()).addClass("orange");
});
