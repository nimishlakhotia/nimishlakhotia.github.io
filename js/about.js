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

// $('#read-more').on('hidden.bs.collapse', function () {
//       $('#read-more').text('Read More');
//     });
//     $('#read-more').on('shown.bs.collapse', function () {
//       $('#read-more').text('Read less');
// });

$(function() {
    $("#footer").load("./footer.html");
    $("#nav").load("./nav.html");
});