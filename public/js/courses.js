const coursesDiv = document.querySelector('#courseDiv');
const data = {};


//search bar (using is-hidden class)
function liveSearch() {
  //locate the card elements (from "courses")
  let cards = document.querySelectorAll('.searchable')
  //locate search input
  let search_query = document.getElementbyId("searchbox").value;
  //loop through the cards
  for (var i = 0; i< cards.length; i++) {
//if the text is within the card..
  if(cards[i].innerText.toLowerCase()
//and the text matches the search query
.includes(search_query.toLowerCase())) {
//remove the 'is-hidden' class.
cards[i].classList.remove('is-hidden');
  } else {
cards[i].classList.add('is-hidden');
    
    //need to create function that 


var displayAllCourses = function (data) {
  //create elements that make up the course item
  console.log(data);
  let count = 0;

  //create elements and display data to each course item
  data.forEach((event) => {
    let currentCourse = data[count];
    //create dynamic elements
    let courseDiv = document.createElement('div');
    let title = document.createElement('h4');
    //need to remove characters to get rid of the brackets
    let category = document.createElement('p');
    let age = document.createElement('p');
    let location = document.createElement('p');
    let description = document.createElement('p');
    let websiteBtn = document.createElement('button');
    let url = document.createElement('p');

    //append elements
    title.append(currentCourse.title);
    category.append(currentCourse.category);
    age.append(currentCourse.age);
    location.append(currentCourse.location);
    description.append(currentCourse.description);
    websiteBtn.innerHTML += `<button class='btn'><a target = 'blank' href = '${currentCourse.url}'><p>View Website</p></a></button>`;

    //append parent elements
    courseDiv.appendChild(title);
    courseDiv.appendChild(category);
    courseDiv.appendChild(age);
    courseDiv.appendChild(location);
    courseDiv.appendChild(description);
    courseDiv.appendChild(websiteBtn);
    coursesDiv.append(courseDiv);

    //add classes to DOM elements
    courseDiv.setAttribute(
      'style',
      'border-radius: 40px; padding: 1%; margin 1%; align-items: center;'
    );
    courseDiv.setAttribute('class', 'card searchable');
    title.setAttribute('class', 'card-header searchable');
    category.setAttribute('class', 'card-text searchable');
    age.setAttribute('class', 'card-text searchable');
    location.setAttribute('class', 'card-text searchable');
    description.setAttribute('class', 'card-text searchable');
    url.setAttribute('class', 'card-footer searchable');

    //go to the next course
    count++;
  });
};

var getCourses = function () {
  fetch('http://localhost:3001/api/courses')
    .then((res) => res.json())
    .then((data) => {
      displayAllCourses(data);
    });
};
   
window.addEventListener('load', getCourses);
liveSearchBtn.addEventLister ('submit', liveSearch);
