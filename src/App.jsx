import { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import PetsList from "./components/PetsList";
import PetView from "./components/PetView";
import ContactUs from "./pages/ContactUs";
import NotFound from "./components/NotFound";
import "./styles.css";

const initialPetsData = [
  {
    id: 1,
    name: "Bug the cat",
    age: 10,
  },
  {
    id: 2,
    name: "Hunter the dog",
    age: 3,
  },
];

export default function App() {
  const [pets, setPets] = useState(initialPetsData);

  console.log({ pets });

  return (
    <>
      <h1>Welcome! Meet your new friends!</h1>
      <Header />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/pets">
          <PetsList pets={pets} />
        </Route>
        <Route exact path="/pets/:petId">
          <PetView pets={pets} />
        </Route>
        <Route exact path="/contact-us">
          <ContactUs />
        </Route>

        {/* 
          If the path doesn't exist, it takes to the `NotFound` component.
         Resource: https://ultimatecourses.com/blog/react-router-not-found-component 
      */}
        {/* 
      <Route>
        <NotFound />
      </Route>      
      */}

        <Redirect to="/">
          <Route>
            <NotFound />
          </Route>
        </Redirect>
      </Switch>
    </>
  );
}
