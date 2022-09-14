let aboutOffSet = $("#about").offset().top;
$(window).scroll(()=> {
    let WindowScroll=$(window).scrollTop();
    if(WindowScroll > aboutOffSet)
    {
        $("#main-nav").css("backgroundColor","rgba(0,0,0,0.5)");
        $("#btnUp").fadeIn(500);
    }
    else{
        $("#main-nav").css("backgroundColor","transparent");
        $("#btnUp").fadeOut(500);
    }
});

$("#btnUp").click(()=>{
    $("html,body").animate({scrollTop:'0'},2000);
});

$("a[href^='#']").click(function(){
    let aHref= $(this).attr("href");
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffset} , 2000 )
})
let colorItems=$(".color-item");
colorItems.eq(0).css("backgroundColor","orange");
colorItems.eq(1).css("backgroundColor","#09c");
colorItems.eq(2).css("backgroundColor","teal");
colorItems.eq(3).css("backgroundColor","red");
colorItems.eq(4).css("backgroundColor","#333");



colorItems.click(function(){
    let myColor= $(this).css("backgroundColor");
    $("p,h1,h2").css("color", myColor);
})


$("#sideBarToggle").click(function() {

    let colorBoxWidth = $(".color-box").outerWidth(true);


    if($(".sidebar").css("left")=="0px")
    {
    $(".sidebar").animate({left:`-${colorBoxWidth}`},1500);
      }
    else
    {
        $(".sidebar").animate({left:`0px`},1500);
    }
   
});

$(document).ready(function(){
    $(".spinner").fadeOut(1000,function(){
        $("#loading").fadeOut(1000,function(){
            $("body").css("overflow","auto");
            $("loading").remove();
        })
    })
});


