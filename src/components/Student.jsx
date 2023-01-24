import Grade from "./Grade"

function Student(props) {
  return (
    <div>
      <h2>{props.student.name}</h2>
      {props.student.grades.map(grade => <Grade grade={grade} />)} 
    </div>
  )
}

export default Student