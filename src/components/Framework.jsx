import Pro from "./Pro"

function Framework(props) {
  return (
  <div>
    <h1>{props.framework.name}</h1>
    {props.framework.pros.map(pro => <Pro pro={pro} />)}
  </div>
  )
}

export default Framework