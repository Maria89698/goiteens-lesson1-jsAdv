const coordsOutputRef = document.querySelector('.js-coords');
let mouseMoveCbInvocationCounter = 0;

window.addEventListener('mousemove', onMouseMove);
function onMouseMove(event) {
  mouseMoveCbInvocationCounter += 1;

  coordsOutputRef.textContent = `
    Кількість викликів onMouseMove: ${mouseMoveCbInvocationCounter},
    X: ${event.clientX},
    Y:${event.clientY}
  `;
}
const inputRef = document.querySelector('.js-input');
const outputRef = document.querySelector('.js-output');
let inputCbInvocationCounter = 0;

inputRef.addEventListener('input', onInputChange);
function onInputChange(event) {
  inputCbInvocationCounter += 1;

  outputRef.textContent = `
    Кількість викликів onInputChange: ${inputCbInvocationCounter},
    Значення: ${event.target.value}
  `;
}

const images = document.querySelectorAll('img');

const io = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            const image = entry.target;
            const imgUrl = entry.target.dataset.lazy;

            entry.target.src = imgUrl;
            image.classList.add('appear');

            observer.unobserve(image);
        }
    })
});

// Для одного елемента
// io.observe(image)

// Для колекції елементів
images.forEach(image => io.observe(image));
