let boy, girl;
let selectedSex = "";

function highlightSelection(selected) {
  boy.classList.remove("selected");
  girl.classList.remove("selected");
  selected.classList.add("selected");
  selectedSex = selected.id;
}

function saveData() {
  const data = {
    sex: selectedSex,
    name: document.getElementById("name").value,
    nickname: document.getElementById("nickname").value,
    age: document.getElementById("age").value,
    favoriteColor: document.getElementById("favoriteColor").value,
    supportLevel: document.getElementById("supportLevel").value,
    grade: document.getElementById("grade").value,
  };
  localStorage.setItem("iepSettings", JSON.stringify(data));
  alert("Dados salvos com sucesso!");
}

function loadData() {
  boy = document.getElementById("boy");
  girl = document.getElementById("girl");

  boy.onclick = () => highlightSelection(boy);
  girl.onclick = () => highlightSelection(girl);

  const saved = JSON.parse(localStorage.getItem("iepSettings"));
  if (saved) {
    document.getElementById("name").value = saved.name;
    document.getElementById("nickname").value = saved.nickname;
    document.getElementById("age").value = saved.age;
    document.getElementById("favoriteColor").value = saved.favoriteColor;
    document.getElementById("supportLevel").value = saved.supportLevel;
    document.getElementById("grade").value = saved.grade;
    if (saved.sex === "boy") highlightSelection(boy);
    if (saved.sex === "girl") highlightSelection(girl);
  }
}

if (window.cordova) {
  document.addEventListener("deviceready", loadData, false);
} else {
  window.onload = loadData;
}

window.saveData = saveData;
