
$('document').ready(function () {


    // $(".button").click(function() {
    //     $("p").slideToggle(); // Toggles the visibility of the paragraph element
    // });


    // $(".button").click(function() {
    //     $("p").animate({
    //         height: "toggle",
    //         opacity: 0.4,
    //     }); // Toggles the visibility of the paragraph element
    // });


    // // using html to get value, then using event
    // var paragraphContent = $("#xyz").html();

    // $(".button").click(function() {
    //     $("#xyz").html(paragraphContent);
    // })

    // $(".button").dblclick(function() {
    //     $("#xyz").html("I double clicked that");
    // })

    // $("button").click(function() {
    //     $("#abc").toggle(this)
    // })



    // // Get the CSS content of the paragraph with ID "abc"
    // var color = $("#abc").css("color");

    // console.log(color);




    // $('input').focus(function() { $(this).css('background', '#ff0') } )
    // $('#first').focus()
    // $('input') .blur(function() { $(this).css('background', '#aaa') } )
    // $('#second').focus(function() { $("h2").slideUp() })


    // $('.button').click( function() { $(this).slideUp() })
    //  $('.button').dblclick( function() { $(this).hide() })


    // $(document).keypress(function (event) {
    //     key = String.fromCharCode(event.which)
    //     if (key >= 'a' && key <= 'z' ||
    //         key >= 'A' && key <= 'Z' ||
    //         key >= '0' && key <= '9') {
    //         $('#result').html('You pressed: ' + key)
    //         event.preventDefault()
    //     }
    // })


    // $('#test').mouseover(function() { $(this).html('Hey, stop tickling!') } )
    // $('#test').mouseout(function() { $(this).html('Where did you go?') } )


    $('#test').hover(function() { $(this).html('Cut it out!') },
    function() { $(this).html('Try it this time...') } )












})