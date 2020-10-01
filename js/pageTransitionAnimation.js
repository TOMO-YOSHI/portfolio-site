// PageTransitionAnimation ****************************************

export function pageTransitionAnimation () {

    $('#go_home').click(function () {
        // animate content
        $('#index_main').addClass('shut_down');

        setTimeout(function() {
            window.location = "./home.html";
        }, 1450)

        // $('.page__description').fadeOut(100).delay(2800).fadeIn();

        setTimeout(function () {
            $('.page__style').removeClass('animate_content');
        }, 3200);

        //remove fadeIn class after 1500ms
        // setTimeout(function () {
        //     $('.page__style').removeClass('fadeIn');
        // }, 1500);

    });

    // on click show page after 1500ms
    $('.home_link').click(function () {
        setTimeout(function () {
            $('.home').addClass('fadeIn');
        }, 1500);
    });

}