const rangeSlider = document.querySelector('#range-slider');
 
noUiSlider.create(rangeSlider, {
   start: [0, 100],
   connect: true,
   step: 1,
   range: {
         'min': [0],
         'max': [100]
   } 
});

const input0 = document.getElementById('input-0');
const input1 = document.getElementById('input-1');
const inputs = [input0, input1];

rangeSlider.noUiSlider.on('update', function(values, handle) {
   console.log('values : ' + values)
   inputs[handle].value = Math.round(values[handle]);
});

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