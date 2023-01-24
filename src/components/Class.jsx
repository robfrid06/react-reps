import Student from "./Student"

function Class(props) {
  return (
    <div>
      <h1>{props.school.className}</h1>
      {props.school.students.map(student => <Student student={student} />)}
    </div>
  )
}

export default Class