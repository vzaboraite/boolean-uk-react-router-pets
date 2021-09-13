import { useParams, useHistory } from "react-router-dom";

export default function PetView({ pets }) {
  const { petId } = useParams();
  console.log({ petId });

  const history = useHistory();

  const pet = pets.find((pet) => pet.id === parseInt(petId, 10));

  return (
    <main>
      <button onClick={() => history.push("/pets")}>Back</button>
      <h2>Name: {pet.name}</h2>
      <p>Age: {pet.age} years</p>
    </main>
  );
}
