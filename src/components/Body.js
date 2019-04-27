import React from "react";

export const Body = props => (
  <div>
    <p className="App-intro">{props.text}</p>
    <p className="App-intro">{props.text2}</p>
    <p className="App-intro">{props.myFunc(1, 3)}</p>
  </div>
);

export const Body2 = () => (
    <div>
        <div>hi</div>
    </div>
)

// const Body = () => {
//   return <p className="App-intro">To get started, edit</p>;
// };

// function Body() {
//   return (
//     <p className="App-intro">
//       To get started, edit
//     </p>
//   );
// }
