// select the elements
let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");

// add the elements
btn.addEventListener("click", function(){
    if(inp.value){
    let item=document.createElement("li");
    item.classList.add('list-group-item','list-group-item-info','flexli');
    item.innerText=inp.value;
    let item2=document.createElement("button");
    item2.classList.add('btn','btn-outline-info','delete');
    item2.innerText="delete";
    ul.appendChild(item);
    item.appendChild(item2);
    inp.value="";

    }


});

// delete elements
ul.addEventListener("click",function(event){
    if(event.target.nodeName=='BUTTON'){
        let listItem=event.target.parentElement;
        listItem.remove();
    }
}); 