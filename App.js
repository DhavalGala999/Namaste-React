{
  /* <div id="parent">
  <div id="child">
    <h1></h1>
    <h2></h2>
  </div>
</div>; */
}

{
  /* <div id="parent">
  <div id="child1">
    <h1></h1>
    <h2></h2>
  </div>
  <div id="child2">
    <h1></h1>
    <h2></h2>
  </div>
</div>; */
}

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "Ts a h1 tag"),
//     React.createElement("h2", {}, "Ts a h2 tag"),
//   ])
// );

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1", class: "claa1" }, [
    React.createElement("h1", {}, "Ts a h1 tag"),
    React.createElement("h2", {}, "Ts a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Ts a h1 tag"),
    React.createElement("h2", {}, "Ts a h2 tag"),
  ]),
]);

// const heading = React.createElement(
//   "h1",
//   { id: "head", xyz: "abc" },
//   "Hello World from React!"
// );

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
