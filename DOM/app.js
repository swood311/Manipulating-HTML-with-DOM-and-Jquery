document.addEventListener("DOMContentLoaded", function () {
    //objective 1
    let btn = document.createElement('button');
    btn.innerText = "Click me!";
    document.body.appendChild(btn);

    btn.addEventListener('click', function () {
        window.alert('You clicked me!');
    });
    //objective 2
    let submitBtn = document.getElementById('submitBtn')
    submitBtn.addEventListener('click', function () {
        let btnAlert = document.getElementById('textBox').value;
        window.alert(btnAlert);
    });
    //objective 3
    let div = document.getElementById("div");
    div.addEventListener('mouseenter', function () {
        div.style.backgroundColor = 'red';
    });
    div.addEventListener('mouseleave', function () {
        div.style.backgroundColor = 'white';
    })
   //objective 4
    let paragraph = document.querySelector('#p');
    paragraph.addEventListener('click', getRandomColor);

    function getRandomColor() {
        //paragraph.style.color = "red";
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        
        paragraph.style.color = color;
    }
//objective 5
    let divBtn = document.createElement('button')
    let divBtnText = document.createTextNode('Say my name.')
    divBtn.appendChild(divBtnText);
    document.body.appendChild(divBtn)
    let btnDiv = document.createElement('div');

    divBtn.addEventListener('click', function () {
        let span = document.createElement('span');
        let spanText = document.createTextNode('Spencer');
        span.appendChild(spanText);
        document.body.appendChild(span);


    })
    //objective 6
    let listBtn = document.createElement('button');
    let listBtnText = document.createTextNode('List Button');
    listBtn.appendChild(listBtnText)
    document.body.appendChild(listBtn)
   
   
    let friends = ['Dale', 'Brennan', 'NightHawk', 'Dragon', 'Rick', 'Morty', 'Petit Hewey', 'Mother\'s Milk', 'Billy Butcher', 'Female', 'Frenchie']
    let counter = 0;
    let list = document.createElement('ul');
    document.body.appendChild(list);
    listBtn.addEventListener('click', function () {
            if(counter < friends.length){
            let item = document.createElement('li');
            let itemText = document.createTextNode(friends[counter]);
            counter++;
            item.appendChild(itemText);
            list.appendChild(item);
            }else{
                alert("no friends left!")
            }
            
        
        
    })
    ;
 

    


})

















