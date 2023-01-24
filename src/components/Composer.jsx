import Composition from "./Composition"

function Composer(props) {
  return (
    <div>
      <h2>{props.composer.name}</h2>
      {props.composer.compositions.map(composition => <Composition composition={composition} />)}
    </div>
  )
}

export default Composer