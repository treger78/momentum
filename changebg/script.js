const nightImg = ['assets/images/night/01.jpg', 'assets/images/night/02.jpg', 'assets/images/night/03.jpg', 'assets/images/night/04.jpg', 'assets/images/night/05.jpg', 'assets/images/night/06.jpg', 'assets/images/night/07.jpg', 'assets/images/night/08.jpg', 'assets/images/night/09.jpg', 'assets/images/night/10.jpg', 'assets/images/night/11.jpg', 'assets/images/night/12.jpg', 'assets/images/night/13.jpg', 'assets/images/night/14.jpg', 'assets/images/night/15.jpg', 'assets/images/night/16.jpg', 'assets/images/night/17.jpg', 'assets/images/night/18.jpg', 'assets/images/night/19.jpg', 'assets/images/night/20.jpg'];
const morningImg = ['assets/images/morning/01.jpg', 'assets/images/morning/02.jpg', 'assets/images/morning/03.jpg', 'assets/images/morning/04.jpg', 'assets/images/morning/05.jpg', 'assets/images/morning/06.jpg', 'assets/images/morning/07.jpg', 'assets/images/morning/08.jpg', 'assets/images/morning/09.jpg', 'assets/images/morning/10.jpg', 'assets/images/morning/11.jpg', 'assets/images/morning/12.jpg', 'assets/images/morning/13.jpg', 'assets/images/morning/14.jpg', 'assets/images/morning/15.jpg', 'assets/images/morning/16.jpg', 'assets/images/morning/17.jpg', 'assets/images/morning/18.jpg', 'assets/images/morning/19.jpg', 'assets/images/morning/20.jpg'];
const dayImg = ['assets/images/day/01.jpg', 'assets/images/day/02.jpg', 'assets/images/day/03.jpg', 'assets/images/day/04.jpg', 'assets/images/day/05.jpg', 'assets/images/day/06.jpg', 'assets/images/day/07.jpg', 'assets/images/day/08.jpg', 'assets/images/day/09.jpg', 'assets/images/day/10.jpg', 'assets/images/day/11.jpg', 'assets/images/day/12.jpg', 'assets/images/day/13.jpg', 'assets/images/day/14.jpg', 'assets/images/day/15.jpg', 'assets/images/day/16.jpg', 'assets/images/day/17.jpg', 'assets/images/day/18.jpg', 'assets/images/day/19.jpg', 'assets/images/day/20.jpg'];
const eveningImg = ['assets/images/evening/01.jpg', 'assets/images/evening/02.jpg', 'assets/images/evening/03.jpg', 'assets/images/evening/04.jpg', 'assets/images/evening/05.jpg', 'assets/images/evening/06.jpg', 'assets/images/evening/07.jpg', 'assets/images/evening/08.jpg', 'assets/images/evening/09.jpg', 'assets/images/evening/10.jpg', 'assets/images/evening/11.jpg', 'assets/images/evening/12.jpg', 'assets/images/evening/13.jpg', 'assets/images/evening/14.jpg', 'assets/images/evening/15.jpg', 'assets/images/evening/16.jpg', 'assets/images/evening/17.jpg', 'assets/images/evening/18.jpg', 'assets/images/evening/19.jpg', 'assets/images/evening/20.jpg'];
const images = [nightImg, morningImg, dayImg, eveningImg];
let i = 0, j = 0;

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

let memoryTime = new Date(),
    memoryHour = memoryTime.getHours(),
    counter = defineCurrentImg(memoryHour);

function checkHour() {
  let today = new Date(),
      hour = today.getHours();

  if (memoryHour !== hour) {
    if (counter === 5) {
      counter = 0;
    } else {
      counter++;    
    }    
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
  memoryHour = hour;
  setTimeout(checkHour, 1000); 
}

function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {      
    body.style.backgroundImage = `url(${src})`;
  }; 
}

function getTimesOfDay(hour) {
  let timesOfDay = 0;
  switch (hour) {
    case 24, 1, 2, 3, 4, 5: timesOfDay = 0;
    break;
    case 6, 7, 8, 9, 10, 11: timesOfDay = 1;
    break;
    case 12, 13, 14, 15, 16, 17: timesOfDay = 2;
    break;
    case 18, 19, 20, 21, 22, 23: timesOfDay = 3;
    break;
    default: timesOfDay = 0;
    break;
  }
  return timesOfDay;
}

counter = defineCurrentImg(memoryHour);
let timesOfDay = getTimesOfDay(memoryHour);

function setTimesOfDay() {
  timesOfDay = getTimesOfDay(memoryHour);
  return timesOfDay;
  setTimeout(setTimesOfDay, 1000);
}

function getImage() {

  let today = new Date(),
      hour = today.getHours();

  if (counter === 5) {
    counter = 0;
    if (timesOfDay === 3) {
      timesOfDay = 0;
    } else {
      timesOfDay++;
    }
  } else {
    counter++;    
  }

  if (timesOfDay === 0) {
    // Night    
    const imageSrc = images[timesOfDay][counter];
    /*greeting.textContent = 'Good Night, ';*/
    viewBgImage(imageSrc);    
  } else if (timesOfDay === 1) {
    // Morning
    const imageSrc = images[timesOfDay][counter];
    /*greeting.textContent = 'Good Morning, ';*/
    viewBgImage(imageSrc);
  } else if (timesOfDay === 2) {
    // Afternoon
    const imageSrc = images[timesOfDay][counter];
    /*greeting.textContent = 'Good Afternoon, ';*/
    viewBgImage(imageSrc);    
  } else if (timesOfDay === 3) {
    // Evening
    const imageSrc = images[timesOfDay][counter];
    /*greeting.textContent = 'Good Evening, ';*/
    viewBgImage(imageSrc);    
  }

} 

const bgbtn = document.querySelector('.bgbtn');
bgbtn.addEventListener('click', getImage);

checkHour();
setTimesOfDay();
