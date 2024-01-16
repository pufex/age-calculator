const day = document.querySelector('#day');
const days = document.querySelector('#days');
const month = document.querySelector('#month');
const months = document.querySelector('#months');
const year = document.querySelector('#year');
const years = document.querySelector('#years');
const submit = document.querySelector('#submit');
const emptyYear = document.querySelector('#empty-year');
const emptyMonth = document.querySelector('#empty-month');
const emptyDay = document.querySelector('#empty-day');
const invalidYear = document.querySelector('#invalid-year');
const invalidMonth = document.querySelector('#invalid-month');
const invalidDay = document.querySelector('#invalid-day');
const labelYear = document.querySelector('#label-year');
const labelMonth = document.querySelector('#label-month');
const labelDay = document.querySelector('#label-day');

let monthDays = [31,28, 31,30,31,30,31,31,30,31,30,31];

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
  if(d > currentDay){
    ms--;
    ds = monthDays[ms] + ds;
  }

  return [ys, ms, ds];
}

year.addEventListener('change', () =>{
  emptyYear.classList.add('hidden')
  invalidYear.classList.add('hidden')
  labelYear.classList.remove('error-label')
  year.style.border = "1px solid var(--Off-black)";
  if(year.value === ''){
    emptyYear.classList.remove('hidden')
    labelYear.classList.add('error-label')
    year.style.border = "1px solid var(--Light-red)";
    return
  }else if(year.value > 2024 || year.value <= 0){
    invalidYear.classList.remove('hidden')
    labelYear.classList.add('error-label')
    year.style.border = "1px solid var(--Light-red)";
    return
  }
  
})

month.addEventListener('change', () =>{
  emptyMonth.classList.add('hidden')
  invalidMonth.classList.add('hidden')
  labelMonth.classList.remove('error-label')
  month.style.border = "1px solid var(--Off-black)";
  if(month.value === ''){
    emptyMonth.classList.remove('hidden')
    labelMonth.classList.add('error-label')
    month.style.border = "1px solid var(--Light-red)";
    return
  }else if(month.value > 12 || month.value <= 0){
    invalidMonth.classList.remove('hidden')
    labelMonth.classList.add('error-label')
    month.style.border = "1px solid var(--Light-red)";
    return
  }
  
})

day.addEventListener('change', () =>{
  emptyDay.classList.add('hidden')
  invalidDay.classList.add('hidden')
  labelDay.classList.remove('error-label')
  day.style.border = "1px solid var(--Off-black)";
  if(Day.value === ''){
    emptyDay.classList.remove('hidden')
    labelDay.classList.add('error-label')
    day.style.border = "1px solid var(--Light-red)";
    return
  }else if(Day.value < 0){
    invalidDay.classList.remove('hidden')
    labelDay.classList.add('error-label')
    day.style.border = "1px solid var(--Light-red)";
    return
  }
})

submit.addEventListener('click', () => {
  let userAge = ['','',''];

  if(labelYear.classList.contains('error-label') == true || labelMonth.classList.contains('error-label') == true || labelDay.classList.contains('error-label') == true) return
  
  userAge = age(year.value, month.value, day.value);
  years.innerText = userAge[0];
  months.innerText = userAge[1];
  days.innerText = userAge[2];
})

