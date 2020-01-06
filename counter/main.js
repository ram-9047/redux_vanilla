let h1 = document.querySelector("h1");
let Increment = document.querySelector(".inc");
let Decrement = document.querySelector(".dec");
let Reset = document.querySelector(".reset");

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
        return (store = store + 1);
      }
    case "dec":
      if (store <= -1) {
        alert("you cannot go further");
        alert("press increment");
        return store;
      } else {
        return (store = store - 1);
      }
    case "reset":
      return (store = 0);
    default:
      return store;
  }
}

Increment.addEventListener("click", () => {
  store.dispatch({ type: "inc" });
  h1.innerText = store.getState();
});
Decrement.addEventListener("click", () => {
  store.dispatch({ type: "dec" });
  h1.innerText = store.getState();
});
Reset.addEventListener("click", () => {
  store.dispatch({ type: "reset" });
  h1.innerText = store.getState();
});

h1.innerText = store.getState();
