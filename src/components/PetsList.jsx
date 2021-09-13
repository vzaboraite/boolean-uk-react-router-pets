import { useHistory } from "react-router-dom";

export default function PetsList({ pets }) {
  const history = useHistory();

  return (
    <>
      <button onClick={() => history.push("/")}>Back</button>
      <ul>
        {pets.map((pet, index) => {
          return (
            <li key={index}>
              <h3>{pet.name}</h3>
              <button onClick={() => history.push(`/pets/${pet.id}`)}>
                View
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
