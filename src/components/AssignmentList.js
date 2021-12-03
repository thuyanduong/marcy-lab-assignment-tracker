
function AssignmentList({assignmentList}){
  return (
    !assignmentList.length ? <div>...</div> : (
      <ul>
        {assignmentList.map(assignment => <li>Assignment</li>)}
      </ul>
    )
  )
}

export default AssignmentList