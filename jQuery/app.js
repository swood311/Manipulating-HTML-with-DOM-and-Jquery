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
        alert(textValue)

    });
    //objective 3
    let $colorDiv = $('#div')
    $colorDiv.mouseenter(
        function () {
            $colorDiv.css({
                "background-color": 'red'
            })
        })
    $colorDiv.mouseleave(
        function () {
            $colorDiv.css({
                "background-color": 'white'
            })
        });

    //objective 4 
    $('#p').click(function () {
        /*$('#p').css({
        "color": 'red'
    })*/
        let randomNumber1 = Math.floor(Math.random() * 255);
        let randomNumber2 = Math.floor(Math.random() * 255);
        let randomNumber3 = Math.floor(Math.random() * 255);

        $('#p').css("color", `rgb(${randomNumber1}, ${randomNumber2}, ${randomNumber3})`)
    });

    //objective 5
    let div2 = $("<div></div>");
    let btn2 = $("<button>Click for my name</button>")
    div2.append(btn2);
    $('body').append(div2);

    btn2.click(function () {
        let span = $('<span>Spencer Wood</span>');
        div2.append(span);

    });

    //objective 6
    let friends = ['Dale', 'Brennan', 'NightHawk', 'Dragon', 'Rick', 'Morty', 'Petit Hewey', 'Mother\'s Milk', 'Billy Butcher', 'Female', 'Frenchie'];
    let counter = 0
    let list = $('#ul');
    $('body').append(list)
    $('#btn3').click(function () {
        if (counter < friends.length) {
            let item = $('<li></li>')
            let listItem = (friends[counter])
            counter++
            item.append(listItem)
            list.append(item)
        } else {
            alert('no more firends')

        }
    })

})