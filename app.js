const day = document.querySelector('#day');
const days = document.querySelector('#days');
const month = document.querySelector('#month');
const months = document.querySelector('#months');
const year = document.querySelector('#year');
const years = document.querySelector('#years');
const submit = document.querySelector('#submit');
const errorYear = document.querySelector('#error-year');
const errorMonth = document.querySelector('#error-month');
const errorDay = document.querySelector('#error-day');
const labelYear = document.querySelector('#label-year');
const labelMonth = document.querySelector('#label-month');
const labelDay = document.querySelector('#label-day');

const age = (y,m,d) => {
  let ys, ms, ds;
  const date = new Date();

  const currentYear = date.getFullYear() 
  const currentMonth = date.getMonth() 
  const currentDay = date.getDate()

  ys = currentYear - y;
  ms = currentMonth+1 - m;
  ds = currentDay - d;
  if(m > currentMonth){
    ys--;
    ms = 12+ms;
  }
  if(d > currentDay)
    ms--;
  return [ys, ms, ds];
}

const checkEmpty = (y,m,d) =>{
  if(y === '' || m === '' || d === ''){
    if(y === ''){
      errorYear.classList.remove('hidden')
      labelYear.classList.add('error-label')
      year.style.border = "1px solid var(--Light-red)";
    }else{
      errorYear.classList.add('hidden')
      labelYear.classList.remove('error-label')
      year.style.border = "1px solid var(--Off-black)";
    }
    if(m === ''){
      errorMonth.classList.remove('hidden')
      labelMonth.classList.add('error-label')
      month.style.border = "1px solid var(--Light-red)";
    }else{
      errorMonth.classList.add('hidden')
      labelMonth.classList.remove('error-label')
      month.style.border = "1px solid var(--Off-black)";
    }
    if(d === ''){
      errorDay.classList.remove('hidden')
      labelDay.classList.add('error-label')
      day.style.border = "1px solid var(--Light-red)";
    }else{
      errorDay.classList.add('hidden')
      labelDay.classList.remove('error-label')
      day.style.border = "1px solid var(--Off-black)";
    }
    return false;
  }
  else{
    if(y !== ''){
      errorYear.classList.add('hidden')
      labelYear.classList.remove('error-label')
      year.style.border = "1px solid var(--Off-black)";
    }
    if(m !== ''){
      errorMonth.classList.add('hidden')
      labelMonth.classList.remove('error-label')
      month.style.border = "1px solid var(--Off-black)";
    }
    if(d !== ''){
      errorDay.classList.add('hidden')
      labelDay.classList.remove('error-label')
      day.style.border = "1px solid var(--Off-black)";
    }
    return true
  }
}
const checkValid = () =>{
  if(y === '' || m === '' || d === ''){
    if(y === ''){
      errorYear.classList.remove('hidden')
      labelYear.classList.add('error-label')
      year.style.border = "1px solid var(--Light-red)";
    }
    if(m === ''){
      errorMonth.classList.remove('hidden')
      labelMonth.classList.add('error-label')
      month.style.border = "1px solid var(--Light-red)";
    }
    if(d === ''){
      errorDay.classList.remove('hidden')
      labelDay.classList.add('error-label')
      day.style.border = "1px solid var(--Light-red)";
    }
    return false;
  }
  else{
    return true
  }
}

submit.addEventListener('click', () => {
  let userAge = [1,2,3];
  if(checkEmpty(year.value, month.value, day.value) == false) return;
  userAge = age(year.value, month.value, day.value);
  years.innerText = userAge[0];
  months.innerText = userAge[1];
  days.innerText = userAge[2];
})

