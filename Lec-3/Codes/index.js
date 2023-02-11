import React from "react";
import ReactDOM from "react-dom/client";

// //React.createElement => Object => HTML(DOM)
// const container = React.createElement(
//     "h1",
//     {
//       id: "title",
//       key:"h1"
//     },
//     "Hello React"
// );

// JSX => React.createElement => Object => HTML(DOM)

// React Components
// - Functional - NEW
// Name of component starts with capital letter - it's not mandatory

// const HeaderComponent = function() {
//   return (
//     <div>
//       <h1> Hello React functional Component</h1>
//       <h2>This is h2 tag</h2>
//     </div>
//   );
// };

const heading = (
  <h1 id="title" key="h2">
    from heading
  </h1>
);

// Composing Components
const Title = ()=> (
    <h1 id="title" key="h2">
      From Title
    </h1>
  );
const HeaderComponent2 = () => {
  return(
    <div>
        <Title/>
      <h1> Hello React functional Component</h1>
      <h2>This is h2 tag</h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

// Passing a react element inside the root
root.render(<HeaderComponent2 />);
