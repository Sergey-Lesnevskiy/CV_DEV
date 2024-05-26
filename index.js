const select = document.querySelector("select");
const allLang = ["en", "ru"];
select.addEventListener("change", changeURLLanguage);

function changeURLLanguage() {
  let lang = select.value;
  location.href = ` ${window.location.pathname}#${lang}`;
  location.reload();
}

function changeLanguage() {
  let hash = window.location.hash;
  hash = hash.substring(1);
  if (!allLang.includes(hash)) {
    location.href = ` ${window.location.pathname}#en`;
    select.value = "en";
    hash = "en";
    location.reload();
  }
  select.value = hash;
  for (let key in langArr) {
    for (let key2 in langArr[key]) {
      document.querySelector(`.lng-${key}__${key2}`).innerHTML =
        langArr[key][key2][hash];
      // console.log(document.querySelector(`.lng-${key}__${key2}`));
    }
  }
}

changeLanguage();
