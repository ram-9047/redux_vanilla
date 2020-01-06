let h1 = document.querySelector("h1");
let Inc = document.querySelector(".inc");
let Dec = document.querySelector(".dec");
let Reset = document.querySelector(".reset");
let btn5 = document.querySelector(".btn5");

//creating a store using redux
let store = Redux.createStore(reducer);

//creating reducer function
function reducer(store = 0, action) {
  switch (action.type) {
    case "inc":
      //   return (store = store + 1);
      if (store >= 100) {
        alert("you are not allowed to do this");
        return store;
      } else {
        return store + action.payload;
      }
    case "dec":
      if (store <= -1) {
        alert("you cannot go further");
        alert("press increment");
        return store;
      } else {
        return store - 1;
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

// Decrement.addEventListener("click", () => {
//   store.dispatch({ type: "dec" });
// });

Reset.addEventListener("click", () => {
  store.dispatch({ type: "reset" });
});

h1.innerText = store.getState();
store.subscribe(() => {
  h1.innerText = store.getState();
});
