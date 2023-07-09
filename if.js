let age = 29;
if (age >= 25 && age <= 30) {
  console.log("your age is mach to AmirHossien Khateri");
} else {
  console.log("your not AmirHossien Khateri");
}
let kabara = "whats up?";
let koja = "where are you from?";
let sen = "how old are you?";
let rang = "whats your faverit color?";
let film = "whats your faverit movie?";
let food = "what your faverit food?";
function salamAhvalPorse(name, lastName) {
  let esm = "salam" + " " + name + " " + lastName;
  console.log(esm);
  if (kabara === "whats up?") {
    console.log("whats up?  all good");
  } else {
    console.log("undifine question");
  }
  if (koja === "where are you from?") {
    console.log("where are you from?  bushehr");
  } else {
    console.log("undifine question");
  }
  if (sen === "how old are you?") {
    console.log("how old are you?  24");
  } else {
    console.log("undifine question");
  }

  if (rang === "whats your faverit color?") {
    console.log("red");
  } else {
    console.log("undifine question");
  }

  if (film === "whats your faverit movie?") {
    console.log("whats your faverit movie?  Interstellar");
  } else {
    console.log("undifine question");
  }
  if (food === "what your faverit food?") {
    console.log("kabak");
  } else {
    console.log("undifine question");
  }
}