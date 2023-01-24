import Framework from "./Framework"

function SPA(props) {
  return (
  <div>
    <h1>{props.spas.name}</h1>
    <ul>
    {props.spas.frameworks.map(framework => <Framework framework={framework} />)}
    </ul>
  </div>
  )
}

export default SPA