const COURSE_ID = process.env.REACT_APP_COURSE_ID
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN
const BACK_END_URL = process.env.REACT_APP_BACK_END_URL
const API_ENDPOINT = 'https://canvas.instructure.com/api/v1/'

const optionsGenerator = (url) => {
  return {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "url": url
    })
  }
}

const fetchCourse = async () => {
  const GET_COURSE_ENDPOINT = `${API_ENDPOINT}courses/${COURSE_ID}?access_token=${ACCESS_TOKEN}`
  try {
    const response = await fetch(BACK_END_URL, optionsGenerator(GET_COURSE_ENDPOINT))
    const course = await response.json()
    return course
  } catch {
    console.warn('Could not fetch Course Information')
  }
}

const fetchProblemSet2_1 = async () => {
  const CANVAS_URL = 
    "https://canvas.instructure.com/api/v1/courses/3248566/assignments/25891664/submissions?access_token=7~OBa8YRrkW0S7uUfgcMUNfz8IYFoFfoaeQ307DnKsetnQvUmrgbH6EqXIJicIDgGl&per_page=100&include[]=user&include[]=submission_history"
  try {
    const response = await fetch(BACK_END_URL, optionsGenerator(CANVAS_URL))
    const submissions = await response.json()
    return submissions
  } catch {
    console.warn('Could not fetch Submissions')
  }
}

module.exports = {
  fetchCourse,
  fetchProblemSet2_1
}