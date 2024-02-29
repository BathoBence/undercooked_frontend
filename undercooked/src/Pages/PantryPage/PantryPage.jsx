import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Pantry from "../../Components/Pantry/Pantry"

const fetchPantry = async () => {
  const response = await fetch("/api/user/pantry");
  return await response.json();
}

const PantryPage = () => {

  const [pantry, setPantry] = useState(null);

  useEffect(() => {
    fetchPantry().then(pantry => {
      setPantry(pantry);
    })
  }, [])


  return <>
      {pantry ? 
          <Pantry pantryItems={pantry} /> :
          <Loading />
      }
  </>;
}

export default PantryPage;