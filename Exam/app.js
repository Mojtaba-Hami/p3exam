let $ = document;
let inputs = $.querySelectorAll(".input")
let submitBtn =$.querySelector("button")
let erorsP = $.querySelectorAll("p")

submitBtn.addEventListener("click" , checkInputs)

function checkInputs(){

    inputs.forEach(isEmpty)
    emailVaidate()

}

// تابعی برای چک کردن اینکه کاربر ورودی را خالی نگذاشته باشه
function isEmpty(input){
    let erorP  = input.nextElementSibling;

    if(input.value == ""){
        erorP.textContent = "پر کردن فیلد ضروری است"
    }
}

function emailVaidate(){
        
        const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        let checkResult = emailFormat.test(inputs[1].value)
    if (!checkResult){
        inputs[1].nextElementSibling.textContent = 'فرمت ایمیل وارد شده صحیح نمیباشد'
    }
}