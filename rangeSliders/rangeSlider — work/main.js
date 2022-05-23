const rangeSlider = document.querySelector('#range-slider');
const filterText = document.getElementsByClassName('filter__text');

noUiSlider.create(rangeSlider, {
   start: [0, 30000],
   connect: true,
   step: 1,
   range: {
         'min': [0],
         'max': [30000]
   } 
});

const input0 = document.getElementById('input-0');
const input1 = document.getElementById('input-1');

const span0 = document.getElementById('span-0');
const span1 = document.getElementById('span-1');

const inputs = [input0, input1];
const spanAll = [span0, span1]

rangeSlider.noUiSlider.on('update', function(values, handle) {
   inputs[handle].value = parseInt(accounting.formatNumber(values[handle], 0, " "));
   spanAll[handle].textContent = accounting.formatNumber(values[handle], 0, " ") + " ₽";
});
// accounting.formatNumber(formaterNumber, 0, " ");
inputs.forEach(item => {
   item.addEventListener('focus', (e) => {
      e.target.nextElementSibling.classList.remove('m-active');
   })
}) 

inputs.forEach(item => {
   item.addEventListener('focusout', (e) => {
      e.target.nextElementSibling.classList.add('m-active');
   })
})

const setRangeSlider = (i, value) => {
   let arr = [null, null];
   arr[i] = value;
   rangeSlider.noUiSlider.set(arr);
}

inputs.forEach((el, index) => {
   el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
   });
});

const formater = document.querySelector('.formatter');
const formaterNumber = parseInt(formater.textContent);

formater.textContent = accounting.formatNumber(formaterNumber, 0, " ");

