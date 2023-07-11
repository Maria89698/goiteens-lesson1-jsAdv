import { nanoid } from 'nanoid';
import {succes, error} from '@pnotify/core';
import Chart from Chart.js;

// nanoid
const id = nanoid();
const idl = nanoid();
console.log(id);
console.log(idl);

// pnotify


const { error } = require("console");

const button = document.querySelector(button);
const input = document.querySelector(input);

button.addEventListener ('click', () => {
    if (input.value.length > 0) {
        success({
            text: `${input.value}`  
        })
    } else {
        error({
            text: "Введіть щось в поле вводу"
        })
    }
});

// chart.js
const ctx = document.getElementById('myChart');
const data = {
  labels: [
    'Red',
    'Blue',
    'Yellow'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
};
const config = {
  type: 'doughnut',
  data: data,
};