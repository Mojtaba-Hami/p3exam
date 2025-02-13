let $ = document;
let inputs = $.querySelectorAll(".input");
let submitBtn = $.querySelector("button");
let erorsP = $.querySelectorAll("p");
let finalMessage = $.querySelector(".finalMessage");

submitBtn.addEventListener("click", checkInputs);

function checkInputs() {
    inputs.forEach(isEmpty);
    emailVaidate();
    checkpasswordrepeat();
    passwordslength()
  let condition1 = true;

  inputs.forEach(function (input) {
    if (!isEmpty(input)) {
      condition1 = false;
    }
  });

  const condition2 = emailVaidate();
  const condition3 = checkpasswordrepeat();
  const condition4 = passwordslength()

  if (condition1 && condition2 && condition3 && condition4 == true) {
        finalMessage.innerHTML = "ورود با موفقیت انجام شد";
  } else {
        finalMessage.innerHTML = "ورود با موفقیت انجام نشد";
  }
}

// تابعی برای چک کردن اینکه کاربر ورودی را خالی نگذاشته باشه
function isEmpty(input) {
  let erorP = input.nextElementSibling;

  if (input.value == "") {
        erorP.textContent = "پر کردن فیلد ضروری است";
        return false;
  } else {
        return true;
  }
}

function emailVaidate() {
  const emailFormat = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let checkResult = emailFormat.test(inputs[1].value);
     if (!checkResult) {
        inputs[1].nextElementSibling.textContent =
         "فرمت ایمیل وارد شده صحیح نمیباشد";
         return false;
  } else {
         return true;
  }
}
//چک کردن یکسان بودن پسورد و تکرار پسورد
function checkpasswordrepeat() {
  if (inputs[2].value !== inputs[3].value) {
        inputs[3].nextElementSibling.textContent =
        "مقدار وارد شده با پسورد بالایی مطابقت ندارد";
        return false;
  } else {
         return true;
  }
}

function passwordslength() {
  if ((inputs[2].value && inputs[3].value).length < 8) {
        inputs[3].nextElementSibling.textContent = "حداقل 8 کاراکتر ضروری است";
        inputs[2].nextElementSibling.textContent = "حداقل 8 کاراکتر ضروری است";

          return false;
  } else {
        return true;
  }
}
