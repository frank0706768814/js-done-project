//accessing the id
const myForm = document.querySelector("#form");
const fName = document.querySelector(".fName");
const lName = document.querySelector(".lName");
const password = document.querySelector(".pwd");
const confirmPwd = document.querySelector(".pwdConfirm");
const email = document.querySelector(".email");
const contact = document.querySelector(".contact");
const msg = document.querySelector(".error_messages");
const conTent = document.querySelector(".content");
const delet = document.querySelector(".delet");
const show = document.querySelector(".showpass");

// show even
show.onclick = () => {
  if (password) {
    password.type = "text";
  } else {
    password.type = "password";
  }
};

myForm.onsubmit = (event) => {
  event.preventDefault();
  //conditional statements for the form submit
  if (
    fName.value === "" &&
    lName.value === "" &&
    password.value === "" &&
    confirmPwd.value === "" &&
    email.value === "" &&
    contact.value === ""
  ) {
    setTimeout(() => {
      msg.textContent = "enter all data feilds";
      msg.style.color = "#ffffff";
      msg.style.backgroundColor = "rgb(53, 146, 204)";
      msg.style.display = "block";
      msg.style.margin = "1rem auto";
      msg.style.textAlign = "center";
      msg.style.padding = "1rem";
      msg.style.width = "90%";
      msg.style.borderRadius = "5px";
    }, 1000);
  } else {
    conTent.innerHTML = `<ul>
        <li>First Name: ${fName.value}</li>
        <li>LastName: ${lName.value}</li>
        <li>Email: ${email.value}</li>
        <li>Contact Number: ${contact.value}</li>
    </ul>`;

    fName.value = "";
    lName.value = "";
    email.value = "";
    password.value = "";
    confirmPwd.value = "";
    contact.value = "";
  }
};
