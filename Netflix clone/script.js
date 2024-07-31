const crossEmail = document.querySelector(".errormsg");
const userInput = document.querySelector(".formInput");
const form = document.getElementById("emailForm");
const getsatretdbtn = document.querySelector(".formBtn");


getsatretdbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    validateInput();  
})
const validateInput = () => {
    const emailValue = userInput.value.trim();
    const emailReq = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(emailValue == "")
    {
       
        crossEmail.style.display = "flex";
        getsatretdbtn.style.background = "red"
    }
    else if(!emailReq.test(emailValue))
    {
        alert("Reuried a correct format i.e @ , .com");
        crossEmail.style.display = "flex";
        getsatretdbtn.style.background = "red"
    }
    else{
        console.log(emailValue);
        crossEmail.style.display = "none";
        getsatretdbtn.style.background = "green"
    }
  };

// last questions 

const toggler = document.querySelectorAll(".toggler");
const xcross = document.querySelectorAll(".corssIcoon");
const plus = document.querySelectorAll('.plusicon');
const hiddenpara = document.querySelectorAll(".paraisnodespan");

toggler.forEach((tog,index) =>{
    tog.addEventListener("click", ()=>{
        if (xcross[index].style.display === "none") {
            xcross[index].style.display = "flex";
            plus[index].style.display = "none";
            hiddenpara[index].style.display = "flex";
            
        } else {
            xcross[index].style.display = "none";
            plus[index].style.display = "flex";
            hiddenpara[index].style.display = "none";
            
        }
    })
})

