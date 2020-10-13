// import $ from "jquery";

export function globalMenuOpen() {
    $(document).ready(function () {
        $('#nav-icon').click(function () {

            if ($("#global_nav_div").hasClass("slide_in_from_top")) {
                $("#global_nav_div").toggleClass('slide_up_to_top');
                $("#global_nav_div").toggleClass('slide_in_from_top');
                setTimeout(function(){
                    $("#global_nav_div").toggleClass('display_none');
                }, 750)
                $("#global_nav li").toggleClass('fade_in');
                $("#global_nav li").toggleClass('opacity_zero');


            } else {
                $("#global_nav_div").removeClass('slide_up_to_top');
                $("#global_nav_div").toggleClass('display_none');
                $("#global_nav_div").toggleClass('slide_in_from_top');

                for (let i = 0; i < 6; i++) {
                    setTimeout(function () {
                        $("#global_nav li:nth-child(" + i + ")").toggleClass('opacity_zero');
                        $("#global_nav li:nth-child(" + i + ")").toggleClass('fade_in');
                    }, i * 150)
                }
                // $("#global_nav").toggleClass('fade_in');
            }
        });
    });
}