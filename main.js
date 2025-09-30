const inputWeight = document.getElementById("weight");
const inputHeight = document.getElementById("height");
const displayBMI = document.getElementById("disabledRange");
const displayText = document.getElementById("displayText");
const changeButtonTheme = document.getElementById("changeTheme");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

changeButtonTheme.addEventListener("click", () => {
  const bodyCurrentTheme = document.body.getAttribute("data-bs-theme");

  if (bodyCurrentTheme === "dark") {
    document.body.setAttribute("data-bs-theme", "light");
    themeIcon.textContent = "🌞";
    themeText.textContent = "Светлая тема";
  } else {
    document.body.setAttribute("data-bs-theme", "dark");
    themeIcon.textContent = "🌙";
    themeText.textContent = "Темная тема";
  }
});

function getValue(BMI) {
  if (BMI < 18.5) {
    displayBMI.value = 5;
    return "Недостаточный вес";
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    displayBMI.value = 50;
    return "Здоровый вес";
  } else if (BMI >= 25 && BMI <= 29.9) {
    displayBMI.value = 85;
    return "Избыточный вес";
  } else if (BMI >= 30) {
    displayBMI.value = 100;
    return "Ожирение";
  }
}

function calculationBMI() {
  const weight = inputWeight.value;
  const height = inputHeight.value / 100;

  if (weight > 0 && height > 0) {
    const BMI = weight / (height * height);
    displayText.innerHTML = getValue(BMI);
    console.log(weight, height);
    console.log(BMI);
  }
}
