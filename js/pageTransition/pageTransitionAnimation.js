import $ from 'jquery';

// PageTransitionAnimation ****************************************

export function pageTransitionAnimation () {

    $('#go_home').click(function () {
        // animate content
        $('#index_main').addClass('shut_down');

        setTimeout(function() {
            window.location = "./profile.html";
        }, 1450)

    });
}

export function pageTransitionAnimationWithArguments(buttonId, closeContensId, nextPage) {

    $(buttonId).click(function () {
        $(closeContensId).addClass('shut_down');

        setTimeout(function () {
            window.location = nextPage;
        }, 1450)
    });
}

export function pageSlideTransitionAnimationWithArguments(buttonId, closeContentsId, nextPage, addedClass) {

    $(buttonId).click(function () {
        $(closeContentsId).addClass(addedClass);

        setTimeout(function () {
            window.location = nextPage;
        }, 400)
    });
}

// export function pageSlideTransitionAnimationWithArguments(buttonId, closeContensId, nextPage) {

//     $(buttonId).click(function () {
//         $(closeContensId).addClass('slide_out');

//         setTimeout(function () {
//             window.location = nextPage;
//         }, 400)
//     });
// }
