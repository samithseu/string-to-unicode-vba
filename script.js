const inputBox = document.querySelector("#kh_word");
const submitBtn = document.querySelector("#submitBtn");
const mainForm = document.querySelector("form");
const outputBox = document.querySelector("#converted");

function convertToUnicodeCode(variable) {
  let result = "";
  for (let i = 0; i < variable.length; i++) {
    let code = variable.charCodeAt(i).toString(16).toUpperCase();
    while (code.length < 4) {
      code = "0" + code;
    }
    result += `ChrW(&H${code}) & `;
  }
  result = result.slice(0, -3);
  return result;
}

mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let convertingWord = inputBox.value;
  if (convertingWord.length > 0) {
    outputBox.innerText = convertToUnicodeCode(convertingWord);
  } else {
    outputBox.innerText = "You don't input something!";
  }
});
