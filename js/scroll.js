var $square = $("#receptionRight"),
    $circle = $("#circle"),
    $img = $("#img"),    
    section1_width = $(".section1").width(),
    section1_height = $(".section1").height(),    
    section2_width = $(".section-two").width(),
    section2_height = $(".section-two").height(),
    section3_width = $(".section-three").width(),
    section3_height = $(".section-three").height(),
    tl = new TimelineMax({paused: true}),
    tl2 = new TimelineMax({paused: true});
    tl3 = new TimelineMax({paused: true});

tl.to($square, 1, {width: section1_width/4, height: section1_width/4, x:100,y:0,rotation: 90});
// etc...
    
tl2.to($circle, 1, {x: -section2_width, y:-section2_height/2, width: section2_width*2, height: section2_width*2, backgroundColor: "red"});

tl3.to($img, 1, {width: section3_width/4, height: section3_width/4, x:100,y:0});


$(window).scroll(function () {
    var section1_height = $(".section1").height();
    var section2_height = $(".section-two").height();
    var section3_height = $(".section-three").height();
    var section1and2_height = section1_height * 2 + section2_height * 2;
    var section1and2and3_height = section1_height + section2_height + section3_height;
    
    var window_scroll_pos = $(window).scrollTop();
    var window_scroll_pos2 = $(window).scrollTop();
    
    var percentage_value = window_scroll_pos * 100 / (section1_height - $(window).height());
    var percentage_value2 = window_scroll_pos2 * 100 / (section1and2_height * 2 - $(window).height());
    
    
    // console.log(window_scroll_pos);
    
    if(percentage_value >= 0 && percentage_value <= 100) {
        tl.tweenTo( tl.duration() * (percentage_value/100) );
        // console.log(percentage_value/100);
    }
    
    else if(percentage_value2 >= 0 && percentage_value2 <= 100) {
        tl2.tweenTo( tl.duration() * (percentage_value2/100) );
    }
});


// $(window).scroll(function () {
//     var content_height = $(document).height();
//     var content_scroll_pos = $(window).scrollTop();
//     var percentage_value = content_scroll_pos * 100 / (content_height - $(window).height());
    
//     if(percentage_value >= 0 && percentage_value <= 100) {
//         tl.tweenTo( tl.duration() * (percentage_value/100) );
//         console.log(percentage_value/100);
//     }
// });