function CourseName({course}){
  return (
    <div>
      {course ? course.name : "..."}
    </div>
  )
}

export default CourseName