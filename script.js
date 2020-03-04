var dataInput = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById("menu-list");
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var strike = document.getElementsByTagName('p')

//addEventListener -  обработчик события с вывовом возвращающей значени функции

function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopPropagation();     // перехват события
        })
    }
}

function loadTodo(){
    if(localStorage.getItem('TodoApp')){
        ulSpisok.innerHTML = localStorage.getItem('TodoApp');
    }
    deleteTodo();
    strikeThrough();
}


dataInput.addEventListener('keypress', function(keyPressed){
    
    //проверка: 
    if(keyPressed.which === 13){
        let empt = dataInput.value.trim();
        if (empt == ""){
            alert("Введите текст");
        }
        else if(empt =" "){
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        newSpan.innerHTML = "Удалить";
        var newP = document.createElement('p');

        //добавление даты:
        var today = new Date();
        var year = today.getFullYear();
        var month = today.getDay();
        var date = today.getDate();
        var hours = today.getHours();
        var min = today.getMinutes();

        
        var newDat = " " + "(" + hours +":"+ min +";" + " " + date + "." + month + "." + year + " " + "г." + ")";
        newP.innerHTML = this.value; // получение данных из поля input
        this.value = " ";

        ulSpisok.appendChild(newLi).append(newSpan, newP, newDat);
    }
    }
    deleteTodo();
    strikeThrough();
})

//зачеркивание li:
function strikeThrough(){
    for(let i of strike){
        i.addEventListener('click', function(){
            if(i.style.textDecoration == "line-through"){
                i.style.textDecoration = "none";
            }else{
                i.style.textDecoration = "line-through";
            }
        })
    }
}

saveBtn.addEventListener('click', function(){
    localStorage.setItem('TodoApp', ulSpisok.innerHTML);
   
})

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = ' ';
    localStorage.setItem('TodoApp', ulSpisok.innerHTML);
})
deleteTodo();
loadTodo();
strikeThrough();

//мадальное окно:
var mad = document.getElementById("madal");
var btn = document.getElementById("mybtn");
var spn = document.getElementById("close");
var content = document.getElementById("madalcontent");

btn.onclick = function(){
    mad.style.display = "block";
    content.style.display = "block";
}

spn.onclick = function(){
    mad.style.display = "none";
    content.style.display = "block";
}
window.onclick = function(event){
    if(event.target == mad){
        mad.style.display = "none";
        content.style.display = "none";
    }
}
