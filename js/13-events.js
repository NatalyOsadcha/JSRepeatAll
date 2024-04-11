///////////// Events

// addEventListener()​
const button = document.querySelector(".btn");

button.addEventListener("click", () => console.log("Button was clicked!"));

// removeEventListener()​

const addListenerBtn = document.querySelector(".js-add");
const removeListenerBtn = document.querySelector(".js-remove");
const targetBtn = document.querySelector(".target-btn");

const handleClick = () => {
  console.log("click event listener callback");
};

addListenerBtn.addEventListener("click", () => {
  targetBtn.addEventListener("click", handleClick);
  console.log("event listener was added to btn");
});

removeListenerBtn.addEventListener("click", () => {
  targetBtn.removeEventListener("click", handleClick);
  console.log("event listener was removed from btn");
});

///////  this   - Don't forget to bind the context of the object's methods

const mango = {
  username: "Mango",
  showUsername() {
    console.log(this);
    console.log(`My username is: ${this.username}`);
  },
};

// mango.showUsername();

button.addEventListener("click", mango.showUsername.bind(mango));

//////////////////////// Event object

const eventBtn = document.querySelector(".eventBtn");
const handleEventClick = (event) => {
  console.log("event: ", event);
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
};
eventBtn.addEventListener("click", handleEventClick);

//////////////  Default browser actions

const form = document.querySelector(".register-form");
const handleSubmit = (e) => {
  e.preventDefault();
  const {
    elements: { username, password },
  } = e.currentTarget;
  console.log(username.value, password.value);
};
form.addEventListener("submit", handleSubmit);

/////////////   Keyboard events

// document.addEventListener('keydown', e => {
//     console.log("key: ", e.key) ///ж
//     console.log("code: ", e.code) /// Semicolon
// });

////////////   Form element events / submit

const registerForm = document.querySelector(".form");
registerForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const login = form.elements.login.value;
  const password = form.elements.password.value;
  if (login === "" || password === "") {
    return console.log("Please fill in all the fields!");
  }

  console.log(`Login: ${login}, Password: ${password}`);
  form.reset();
}

//////////  change

const select = document.querySelector(".pizza-select");
const textOutput = document.querySelector(".text-output");
const valueOutput = document.querySelector(".value-output");

select.addEventListener("change", setOutput);

function setOutput(event) {
  const selectedOptionValue = event.currentTarget.value;
  const selectedOptionIndex = event.currentTarget.selectedIndex;
  const selectedOptionText =
    event.currentTarget.options[selectedOptionIndex].text;

  textOutput.textContent = selectedOptionText;
  valueOutput.textContent = selectedOptionValue;
}


////////////  input​

const textInput = document.querySelector(".text-input");
const output = document.querySelector(".output");

textInput.addEventListener("input", (e) => {
  output.textContent = e.currentTarget.value;
});

//////////  focus and blur​ / focus() and blur()

const textInputOnFocus = document.querySelector(".text-input-on-focus");
const setFocusBtn = document.querySelector('[data-action="set"]');
const removeFocusBtn = document.querySelector('[data-action="remove"]');

setFocusBtn.addEventListener("click", () => {
  textInputOnFocus.focus();
});

removeFocusBtn.addEventListener("click", () => {
  textInputOnFocus.blur();
});
textInputOnFocus.addEventListener("focus", () => {
    textInputOnFocus.value = "This input has focus";
});

textInputOnFocus.addEventListener("blur", () => {
    textInputOnFocus.value = "";
});

// console.log( document.activeElement)
