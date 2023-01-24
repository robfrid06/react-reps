import Moon from "./Moon"

function Planet(props) {
  return (
    <div>
      <h1>{props.planet.name}</h1>
      {props.planet.moons.map(moon => <Moon moon={moon} />)}
    </div>
  )
}

export default Planet