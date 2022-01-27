let firstName = document.querySelector('#first-name').value.trim();
let lastName = document.querySelector('#last-name').value.trim();
let email = document.querySelector('#email').value.trim();
let title = document.querySelector('#course-title').value.trim();
let description = document.querySelector('#description').value.trim();
let url = document.querySelector('#url').value.trim();
let categoryInput = document.querySelector('.category');
let checkedCategories = categoryInput.ariaChecked(true);
let locationInput = document.querySelector('.location');
let checkedLocations = locationInput.ariaChecked(true);
let ageInput = document.querySelector('.age');
let checkedAges = ageInput.ariaChecked(true);

async function createCourse(event) {
  event.preventDefault();
  let location = JSON.stringify([checkedLocations]);
  let age = JSON.stringify([checkedAges]);
  let category = JSON.stringify([checkedCategories]);
  if (title && email && firstName && lastName) {
    const response = await fetch('api/courses/new', {
      method: 'POST',
      body: JSON.stringify({
        title,
        category,
        location,
        age,
        description,
        url,
        firstName,
        lastName,
        email,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    // check the response status
    if (response.ok) {
      console.log('success');
      document.location.replace('/confirm');
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector('#newEventForm')
  .addEventListener('submit', createCourse);
