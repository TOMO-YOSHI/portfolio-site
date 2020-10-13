// import $ from "jquery";

export function hamburgerMenuEffect() {
    $(document).ready(function () {
        $('#nav-icon').click(function () {
            $(this).toggleClass('open');
        });
    });
}