import "./Pantry.css"

const Pantry = ({ pantryItems }) => {


  return <>
    <div className="Pantry">
      {pantryItems.map(item => {
        return (
          <p key={item.material.name + item.unit + item.amount}>
            {item.amount} {item.unit} {item.material.name}
          </p>
        )
      })}
    </div >
  </>
}

export default Pantry;