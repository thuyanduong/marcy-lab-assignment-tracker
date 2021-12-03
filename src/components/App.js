import '../App.css';
import React, { useState, useEffect } from 'react';
import { fetchCourse, fetchProblemSet2_1 } from '../util/fetch';
import CourseName from './CourseName'
// import AssignmentList from './AssignmentList'

function App() {
  // const [studentList, setStudentList] = useState([])
  // const [instructorList, setInstructorList] = useState([])
  // const [assignmentList, setAssignmentList] = useState([])
  const [course, setCourse] = useState(null)
  const [submissions, setSubmissions] = useState([])

  useEffect(() => {
    fetchCourse().then(setCourse)
    fetchProblemSet2_1().then(setSubmissions)
  }, [])
  
  console.log(course)
  console.log(submissions)
  // debugger
  return (
    <div className="App">
      <CourseName course={course}/>
    </div>
  );
}



export default App;
