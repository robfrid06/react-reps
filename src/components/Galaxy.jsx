import Planet from "./Planet"

function Galaxy(props) {
  return (
    <div>
      <h1>{props.galaxy.name}</h1>
      {props.galaxy.planets.map(planet => <Planet planet={planet} />)}
    </div>
  )
}

export default Galaxy