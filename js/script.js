
const rangeMin = document.getElementById('rangeMin');
const rangeMax = document.getElementById('rangeMax');
const sliderTrack = document.querySelector('.slider-track');
const minValueLabel = document.getElementById('minValueLabel');
const maxValueLabel = document.getElementById('maxValueLabel');

function updateSlider() {
  let minVal = parseInt(rangeMin.value);
  let maxVal = parseInt(rangeMax.value);

  if (minVal > maxVal) {
    [minVal, maxVal] = [maxVal, minVal];
  }
  rangeMin.value = minVal;
  rangeMax.value = maxVal;

  minValueLabel.textContent = minVal;
  maxValueLabel.textContent = maxVal;

  const range  = rangeMin.max - rangeMin.min;
  const leftPos = ((minVal - rangeMin.min) / range) * 100;
  const rightPos = ((maxVal - rangeMin.min) / range) * 100;

  sliderTrack.style.background = `linear-gradient(to right,
    #1d36532b ${leftPos}%,
    #0265dc ${leftPos}%,
    #0265dc ${rightPos}%,
    #1d36532b ${rightPos}%
  )`;
}

updateSlider();