

/*---------------*/
var mycarousel = $(".mycarousel"),
    currdeg  = 0,
    items = 0;

// var currentDrag = undefined;

$(".c_next").on("click", { d: "n" }, rotate);
$(".c_prev").on("click", { d: "p" }, rotate);
// $('.item').on('drag', function(e) {
//   console.log(e);
//  })
// $('.item').on('mauseup', function(e) {
//     currentDrag = undefined;
//   comsole.log('end drag')
//  })

function init() {
  items = mycarousel.find('.item').length;
  current = mycarousel.find('.item:first').addClass('current');
  prev = mycarousel.find('.item:last').addClass('prev');
  next = mycarousel.find('.item.current').next().addClass('next');
  $(".current a").removeClass("hidden");
    
  
}

function rotate(e){
  items = 3;
  
  $('.item.prev').removeClass('prev')/*.css({'transform': ''})*/;
  $('.item.next').removeClass('next')/*.css({'transform': ''})*/;
  if(e.data.d=="n"){
    if ($(".item.current").next().length) {
      $(".item.current")
      .removeClass('current')
      .next()
      .addClass('current'); 

     
  } else {
      $(".item.current")
      .removeClass('current')
      .addClass('prev')
      .parent()
      .find('.item:first')
      .addClass('current');
     
    }
     
    
    mycarousel.removeClass('prev-move').addClass('next-move');
    currdeg = (currdeg - 60) /*% 360*/;

  }
  
  if(e.data.d=="p"){
    if ($(".item.current").prev().length) {
      $(".item.current")
      .removeClass('current')
      .prev()
      .addClass('current');
      
      $(".dot.active")
      .removeClass('active')
      .prev()
      .addClass('active');
    } else {
      $(".item.current")
      .removeClass('current')
      .addClass('next')
      .parent()
      .find('.item:last')
      .addClass('current');
      
      $(".dot.active")
      .removeClass('active')
      .parent()
      .find('.dot:last')
      .addClass('active');
    }
    

    mycarousel.removeClass('next-move').addClass('prev-move');
    currdeg = (currdeg + 60) /*% 360*/;
  }
  if ($(".item.current").prev().length) {
  $(".item.current").prev().addClass('prev');
  } else {
    $(".item.current")
      .parent()
      .find('.item:last')
      .addClass('prev');  
  }
  
  if ($(".item.current").next().length) {
    $(".item.current").next().addClass('next');  
  } else {
    $(".item.current")
      .parent()
      .find('.item:first')
      .addClass('next');  
  }
  
  
  var current = document.querySelector(".current a");
  var prev = document.querySelector(".prev a");
  var next = document.querySelector(".next a");
  current.classList.remove("hidden");
  prev.classList.add("hidden");
  next.classList.add("hidden");
}

init();

var hammertime = new Hammer($(".container")[0]);
  hammertime.on('swipeleft', function(ev) {
    console.log(ev);
    $('.c_next').trigger('click')
  });
hammertime.on('swiperight', function(ev) {
    console.log(ev);
    $('.c_prev').trigger('click')
  });