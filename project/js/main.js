$(function() {
    $( "#date-picker" ).datepicker();
});

$(".clickables li").click(function(){
    window.location=$(this).find("a").attr("href");
    return false;
});