import React from "react";

const FunctionalGreeting = (props) => {
    return <h1>Hello, {props.greeting} 
    I'm {props.name} and I'm {props.age}</h1>
};

export default FunctionalGreeting;

// export default function FunctionalGreeting(props) {
//   return (
//     <div className="greeting">
//       <h1>Hello, {props.name}!</h1>
//     </div>
//   );
// }