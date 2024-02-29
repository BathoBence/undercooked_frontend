import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";
import Pantry from "../../Components/Pantry/Pantry"

const fetchPantry = async () => {
  const response = await fetch("/api/user/pantry");
  console.log(await response.json());
  return response;
}

const PantryPage = () => {

  const [pantry, setPantry] = useState(null);

  useEffect(() => {
    fetchPantry().then(pantry => {
      setPantry(pantry);
    })
  }, [])


  return <>
    <div>
      {pantry ? 
          <Pantry pantryItems={pantry} /> :
          <Loading />
      }
    </div>
  </>;
}

export default PantryPage;