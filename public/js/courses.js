const { Course } = require("../../controllers");
const router = require('express').Router();


async function getCourses() {
    const response = await fetch('/api/courses')
        .then (function (response) {
            response.json();
        })
        .then((courses) => {
            response.render('courses', courses);
        })
};


                

window.addEventListener('load', getCourses)

