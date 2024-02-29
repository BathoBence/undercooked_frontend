import "./Pantry.css"

const Pantry = ({ pantryItems }) => {


  return <>
    <div className="title">
      My Pantry
    </div>
    <div className="Pantry">
      {pantryItems.map(item => {
        console.log(item)
        return (
          <li key={item.name + item.unit}>
            {item.amount} {item.unit} {item.material.name}
          </li>
        )
      })}
    </div >
  </>
}

export default Pantry;