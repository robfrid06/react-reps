import Dad from "./Dad"

function Granddad(props) {
  const dads = ["Ricky", "Bobby", "Wobby"]
  return (
    <div className="granddad">
      <h1>{props.name}</h1>
      {dads.map(dad => <Dad name={dad} />)}
    </div>
  )
}

export default Granddad