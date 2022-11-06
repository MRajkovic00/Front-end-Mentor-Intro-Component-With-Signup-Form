const firstName=document.querySelector("#firstName");
const lastName=document.querySelector("#lastName");
const email=document.querySelector("#email");
const password=document.querySelector("#password");
const form=document.querySelector("#loginForm");

form.addEventListener("submit", (e) => {

if(firstName.value===""){
    e.preventDefault();
    firstName.nextSibling.remove();
    firstName.classList.add("err");
    let text = document.createElement("p");
    text.innerText = "First Name cannot be empty";
    text.style.color="var(--red)";
    text.classList.add("error");
    firstName.parentNode.insertBefore(text, firstName.nextSibling);
}

if(lastName.value===""){
    e.preventDefault();
    lastName.nextSibling.remove();
    lastName.classList.add("err");
    let text = document.createElement("p");
    text.innerText = "Last Name cannot be empty";
    text.style.color="var(--red)";
    text.classList.add("error");
    lastName.parentNode.insertBefore(text, lastName.nextSibling);
}

if(email.value==="" || !email.value.includes("@")|| !email.value.includes(".com")){
    e.preventDefault();
    email.nextSibling.remove();
    email.classList.add("err");
    let text = document.createElement("p");
    text.innerText = "Looks like this is not an email";
    text.style.color="var(--red)";
    text.classList.add("error");
    email.parentNode.insertBefore(text, email.nextSibling);
}


if(password.value===""){
    e.preventDefault();
    password.nextSibling.remove();
    password.classList.add("err");
    let text = document.createElement("p");
    text.innerText = "Password cannot be empty";
    text.style.color="var(--red)";
    text.classList.add("error");
    password.parentNode.insertBefore(text, password.nextSibling);
}

});


form.addEventListener("click", () => {
    firstName.value === "" ? null : firstName.classList.remove("err");
    lastName.value === "" ? null : lastName.classList.remove("err");
    email.value === "" ? null : email.classList.remove("err");
    password.value === "" ? null : password.classList.remove("err");
  });