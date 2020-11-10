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
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (evt) => {
    const { name, value } = evt.target;
    setFormValues({ ...formValues, [name]: value });
    // we don't know ahead of time if the name will be petName or petValue
    // [name] is not an array literal:
    // it will override whatever the value of name was in formValues
  };

  const submit = (evt) => {
    const newPet = {
      petName: formValues.petName.trim(),
      petType: formValues.petType.trim(),
    };
    setPets(pets.concat(newPet));
    // setPets([...pets, newPet]);
  };

  return (
    <div className="container">
      <h1>Simple Form</h1>
      {pets.map((pet, idx) => {
        return (
          <div key={idx}>
            {pet.petName} is a {pet.petType}
          </div>
        );
      })}
      <form onSubmit={submit}>
        <input
          name="petName"
          type="text"
          value={formValues.petName}
          onChange={change}
        ></input>
        <input
          name="petType"
          type="text"
          value={formValues.petType}
          onChange={change}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
}

render(
  <>
    <SimpleForm />
    {/* <App /> */}
  </>,
  document.querySelector("#root")
);
