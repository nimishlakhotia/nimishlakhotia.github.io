// import AOS from 'aos';
// import 'aos/dist/aos.css';

// AOS.init();
// AOS.init();
jQuery(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
    });
});

$(function() {
    $("#footer").load("./footer.html");
    $("#nav").load("./nav.html");
});