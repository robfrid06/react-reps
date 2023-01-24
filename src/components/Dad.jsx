import Offspring from "./Offspring"

function Dad(props) {
  const kids = ["Scooby", "Dooby", "Doo"]
  return (
    <div className="dad">
      <h2>{props.name}</h2>
      {kids.map(kid => <Offspring name={kid} />)}
    </div>
  )
}

export default Dad