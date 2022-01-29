async function createCourse(event) {
  event.preventDefault();

  const title = document.querySelector('#course-title');
  const course_category = document.querySelectorAll('.category');
  const course_location = document.querySelectorAll('.location');
  const course_age = document.querySelectorAll('.age');
  const url = document.querySelector('#url');
  const description = document.querySelector('#description');

  const response = await fetch('http://localhost:3001/api/course/new', {
    method: 'POST',
    body: JSON.stringify({
      title,
      course_category,
      course_location,
      course_age,
      url,
      description,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
  console.log(response);
  // check the response status
  if (response.ok) {
    console.log('success');
    return;
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector('#newEventForm')
  .addEventListener('submit', createCourse);

