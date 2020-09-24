$(document).ready(function () {
//objective 1
    let btn = $('<button>Click me!</button>')
    $('body').append(btn);
    $(btn).click(function () {
        alert('You clicked me!')
    });
    //objective 2 
    $('form').submit(function () {
        let textValue = $("input[type= 'text']").val()
        alert (textValue)
        
    });
    //objective 3
    $('#div').mouseenter(
        function () {
        css({
            "background-color": 'red'
        })
    }).mouseleave(
        function () {
        css({
            "background-color": 'white'
        })
    })
  
    












})