const time = document.getElementById('time'),
      greeting = document.getElementById('greeting'),
      name = document.getElementById('name'),
      plan = document.getElementById('plan');

 const showAmPm = true;
      
function showTime() {
  let today = new Date(),
      hour = today.getHours(),
      min = today.getMinutes(),
      sec = today.getSeconds();

  const amPm = hour >= 12 ? 'PM' : 'AM';
  
  hour = hour % 12 || 12;

  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}  

function addZero(num){
  return (parseInt(num, 10) < 10 ? '0' : '') + num;
}

function changBgGreeting() {
  let today = new Date(),
      hour = today.getHours();
  if(hour < 12) {
    document.body.style.backgroundImage = 'url("https://i.ibb.co/7vDLJFb/morning.jpg")';
    greeting.textContent = 'Good Morning';
  } else if(hour < 18) {
    document.body.style.backgroundImage = 'url("https://i.ibb.co/3mThcXc/afternoon.jpg")';
    greeting.textContent = 'Good Afternoon';
  } else {
    document.body.style.backgroundImage = 'url("https://i.ibb.co/924T2Wv/night.jpg")';
    greeting.textContent = 'Good Evening';
    document.body.style.color = 'white';
  }
}

function getName() {
  if(localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  } 
}

function setName(e) {
  if(e.type = 'keypress') {
    if(e.witch === 13 || e.keyCode ===13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

function getPlan() {
  if(localStorage.getItem('plan') === null) {
    plan.textContent = '[Enter Plans]';
  } else {
    plan.textContent = localStorage.getItem('plan');
  } 
}

function setPlan(e) {
  if(e.type = 'keypress') {
    if(e.witch === 13 || e.keyCode ===13) {
      localStorage.setItem('plan', e.target.innerText);
      plan.blur();
    }
  } else {
    localStorage.setItem('plan', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
plan.addEventListener('keypress', setPlan);
plan.addEventListener('blur', setPlan);


showTime();
changBgGreeting();
getName();
getPlan();