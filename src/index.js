import React, { useState } from "react";
import { render } from "react-dom";
// 👉 App contains a more sophisticated form we'll flesh out later
import App from "./components/App";

// 👉 First let's build a SimpleForm to add more pets:
const petsList = [
  { petName: "Fido", petType: "dog" },
  { petName: "Tweetie", petType: "canary" },
  { petName: "Goldie", petType: "fish" },
];

const initialFormValues = { petName: "", petType: "" };

function SimpleForm() {
  const [pets, setPets] = useState(petsList);
  const [formValues, setFormValues] = useState(initialFormValues)
  
  return (
    <div>
      <h1></h1>
    </div>
  )
}

render(
  <>
    <SimpleForm />
    {/* <App /> */}
  </>,
  document.querySelector("#root")
);
