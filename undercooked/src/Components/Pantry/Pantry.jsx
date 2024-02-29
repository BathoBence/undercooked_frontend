const Pantry = ({pantryItems}) => {

  return (
    <div className="Pantry">
      {pantryItems.map(item => {
        return (
          <li key={item.name + item.unit}>
            {item.amount} {item.unit} {item.material.name}
          </li>
        )
      })}
    </div>
  )

}

export default Pantry;