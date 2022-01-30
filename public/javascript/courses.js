const router = require("../../controllers");

const buttons = document.querySelector('button');
const arts = buttons.querySelector('#arts');
const dance = buttons.querySelector('#dance');
const music = buttons.querySelector('#music');
const sports = buttons.querySelector('#sports');
const stem = buttons.querySelector('#stem');
const tutoring = buttons.querySelector('#tutoring');
const camps = buttons.querySelector('#camps');
const childCare = buttons.querySelector('#childCare');

router.get('/courses/:cat')
let cat = buttons.this


