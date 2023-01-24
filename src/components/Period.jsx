import Composer from "./Composer"

function Period(props) {
  return (
    <div>
      <h1>{props.period.name}</h1>
      {props.period.composers.map(composer => <Composer composer={composer} />)}
    </div>
  )
}

export default Period