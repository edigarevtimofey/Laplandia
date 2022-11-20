$(function(){
    let navToggle = $("#navtoggle");
    let nav__mobile = $("#nav__mobile");

    console.log("Working!");

    $("#navtoggle").on("click", function(event){
        event.preventDefault();
        nav__mobile.toggleClass("show");
    });
});

