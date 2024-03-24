// const h1 = React.createElement("h1", { id: "Heading" }, "Hello World");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "hey"),
    React.createElement("h1", { id: "heading" }, "hi"),
  ]),
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", { id: "heading" }, "hey"),
    React.createElement("h1", { id: "heading" }, "hi"),
  ]),
]);
const root = ReactDOM.createRoot(document.body);
root.render(parent);
