// DOM Elements
const time = document.querySelector('.time'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus'),
  date = document.querySelector('.date');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';

  // 12hr Format
  hour = hour % 24 || 24;

  // Output Time
  if (hour === 24) {
  time.innerHTML = `${0}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;    
  } else {
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
      sec
    )} ${showAmPm ? amPm : ''}`;    
  }

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function defineCurrentImg(hour) {
  let counter = 0;
  switch (hour) {
    case 24, 6, 12, 18: counter = 0;
    break;
    case 1, 7, 13, 19: counter = 1;
    break;
    case 2, 8, 14, 20: counter = 2;
    break;
    case 3, 9, 15, 21: counter = 3;
    break;
    case 4, 10, 16, 22: counter = 4;
    break;
    case 5, 11, 17, 23: counter = 5;
    break;
    default: counter = 0;
    break;
  }
  return counter;
}

// Set Background and Greeting
function setBgGreet() {

const nightImg = ['assets/images/night/01.jpg', 'assets/images/night/02.jpg', 'assets/images/night/03.jpg', 'assets/images/night/04.jpg', 'assets/images/night/05.jpg', 'assets/images/night/06.jpg', 'assets/images/night/07.jpg', 'assets/images/night/08.jpg', 'assets/images/night/09.jpg', 'assets/images/night/10.jpg', 'assets/images/night/11.jpg', 'assets/images/night/12.jpg', 'assets/images/night/13.jpg', 'assets/images/night/14.jpg', 'assets/images/night/15.jpg', 'assets/images/night/16.jpg', 'assets/images/night/17.jpg', 'assets/images/night/18.jpg', 'assets/images/night/19.jpg', 'assets/images/night/20.jpg'];
const morningImg = ['assets/images/morning/01.jpg', 'assets/images/morning/02.jpg', 'assets/images/morning/03.jpg', 'assets/images/morning/04.jpg', 'assets/images/morning/05.jpg', 'assets/images/morning/06.jpg', 'assets/images/morning/07.jpg', 'assets/images/morning/08.jpg', 'assets/images/morning/09.jpg', 'assets/images/morning/10.jpg', 'assets/images/morning/11.jpg', 'assets/images/morning/12.jpg', 'assets/images/morning/13.jpg', 'assets/images/morning/14.jpg', 'assets/images/morning/15.jpg', 'assets/images/morning/16.jpg', 'assets/images/morning/17.jpg', 'assets/images/morning/18.jpg', 'assets/images/morning/19.jpg', 'assets/images/morning/20.jpg'];
const dayImg = ['assets/images/day/01.jpg', 'assets/images/day/02.jpg', 'assets/images/day/03.jpg', 'assets/images/day/04.jpg', 'assets/images/day/05.jpg', 'assets/images/day/06.jpg', 'assets/images/day/07.jpg', 'assets/images/day/08.jpg', 'assets/images/day/09.jpg', 'assets/images/day/10.jpg', 'assets/images/day/11.jpg', 'assets/images/day/12.jpg', 'assets/images/day/13.jpg', 'assets/images/day/14.jpg', 'assets/images/day/15.jpg', 'assets/images/day/16.jpg', 'assets/images/day/17.jpg', 'assets/images/day/18.jpg', 'assets/images/day/19.jpg', 'assets/images/day/20.jpg'];
const eveningImg = ['assets/images/evening/01.jpg', 'assets/images/evening/02.jpg', 'assets/images/evening/03.jpg', 'assets/images/evening/04.jpg', 'assets/images/evening/05.jpg', 'assets/images/evening/06.jpg', 'assets/images/evening/07.jpg', 'assets/images/evening/08.jpg', 'assets/images/evening/09.jpg', 'assets/images/evening/10.jpg', 'assets/images/evening/11.jpg', 'assets/images/evening/12.jpg', 'assets/images/evening/13.jpg', 'assets/images/evening/14.jpg', 'assets/images/evening/15.jpg', 'assets/images/evening/16.jpg', 'assets/images/evening/17.jpg', 'assets/images/evening/18.jpg', 'assets/images/evening/19.jpg', 'assets/images/evening/20.jpg'];

  let today = new Date(),
    hour = today.getHours(),
    counter = defineCurrentImg(hour);

  if (hour === 24 || hour < 6) {
    // Night
    document.body.style.backgroundImage = `url(${nightImg[counter]})`;
    greeting.textContent = 'Good Night, ';
  } else if (hour < 12) {
    // Morning
    document.body.style.backgroundImage = `url(${morningImg[counter]})`;
    greeting.textContent = 'Good Morning, ';
  } else if (hour < 18) {
    // Afternoon
    document.body.style.backgroundImage = `url(${dayImg[counter]})`;
    greeting.textContent = 'Good Afternoon, ';
  } else if (hour < 24) {
    // Evening
    document.body.style.backgroundImage = `url(${eveningImg[counter]})`;
    greeting.textContent = 'Good Evening, ';
  }
  
}

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


// Show Date
function showDate() {
  let today = new Date(),
    months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    day = days[today.getDay()],
    dateToday = today.getDate(),
    month = months[today.getMonth()];

  // Output Date
    date.textContent = day + ', ' + dateToday + ' ' + month;
    setTimeout(showDate, 1000);
}


// Run
showTime();
showDate();
setBgGreet();
getName();
getFocus();