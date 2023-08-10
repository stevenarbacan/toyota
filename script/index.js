let asideBar = document.querySelector("#asideBar");
const toggle = document.querySelector(".toggle");
const date = document.getElementById("date");

var setToggle = true;

toggle.addEventListener("click" , () =>{

    if(setToggle === true){
        asideBar.classList.add("aside-bar");
       setToggle = false;
    }else if(setToggle === false){
        asideBar.classList.remove("aside-bar");
        setToggle = true;
    }
}
);

const year = new Date().getFullYear();
date.innerHTML = "&copy"+ year + ", Arbacan";
