let h1 = document.querySelector("h1");
let p = document.querySelector("p");
let Inc = document.querySelector(".inc");
let Dec = document.querySelector(".dec");
let Reset = document.querySelector(".reset");
let IncBy5 = document.querySelector(".btn5");
let IncBy8 = document.querySelector(".btn8");
let IncBy10 = document.querySelector(".btn10");
let IncBy12 = document.querySelector(".btn12");
let IncBy14 = document.querySelector(".btn14");
let IncBy16 = document.querySelector(".btn16");

//creating a store using redux
let store = Redux.createStore(reducer);

//creating reducer function
function reducer(store = 0, action) {
  switch (action.type) {
    case "inc":
      //   return (store = store + 1);
      if (store > 99) {
        alert("you are not allowed to do this");
        return store;
      } else {
        return store + action.payload;
      }
    case "dec":
      if (store < 1) {
        alert("you cannot go further");
        alert("press increment");
        return store;
      } else {
        return store - action.payload;
      }
    case "reset":
      return (store = 0);
    default:
      return store;
  }
}
var val = 1;
function Increment(val) {
  return store.dispatch({ type: "inc", payload: val });
}

Inc.addEventListener("click", () => Increment(val));

function Decrement(val) {
  return store.dispatch({ type: "dec", payload: val });
}

Dec.addEventListener("click", () => Decrement(val));

IncBy5.addEventListener("click", () => (val = 5));
IncBy8.addEventListener("click", () => (val = 8));
IncBy10.addEventListener("click", () => (val = 10));
IncBy12.addEventListener("click", () => (val = 12));
IncBy14.addEventListener("click", () => (val = 14));
IncBy16.addEventListener("click", () => (val = 16));

Reset.addEventListener("click", () => {
  store.dispatch({ type: "reset" });
});

h1.innerText = store.getState();
store.subscribe(() => {
  h1.innerText = store.getState();
  p.innerText = `value change by ${val}`;
});
