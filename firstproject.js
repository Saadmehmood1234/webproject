const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value===''){
alert("you must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.append(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
    saveData();
}
listContainer.addEventListener("click",function(p){
    if(p.target.tagName==="LI"){
       // inputBox.value = p.target.innerText;
        p.target.classList.toggle("checked");

        saveData();
    }
    else if(p.target.tagName==="SPAN"){
        p.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showtask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showtask();

/*


        function addTask() {
            if (inputBox.value === '') {
                alert("You must write something!");
            } else {
                let li = document.createElement("li");
                li.innerHTML = inputBox.value;
                listContainer.append(li);
                let span = document.createElement("span");
                span.innerHTML = "\u00d7";
                li.appendChild(span);
            }
            inputBox.value = "";
            saveData();
        }
        /*

        listContainer.addEventListener("click", function (p) {
            if (p.target.tagName === "LI") {
                inputBox.value = p.target.innerText;
                p.target.classList.toggle("checked");
                saveData();
            } else if (p.target.tagName === "SPAN") {
                p.target.parentElement.remove();
                saveData();
            }
        }, false);
        
        listContainer.addEventListener("click", function (p) {
            if (p.target.tagName === "LI") {
                // Set input box value to the clicked task's text content
                inputBox.value = p.target.innerText;
            } else if (p.target.tagName === "SPAN") {
                // Remove the parent <li> element
                p.target.parentElement.remove();
            }
            saveData();
        }, false);

        function saveData() {
            localStorage.setItem("data", listContainer.innerHTML);
        }

        function showTask() {
            listContainer.innerHTML = localStorage.getItem("data");
        }

        showTask();

*/