
document.querySelector('.scroll-top').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
});

document.querySelector('.set-input1').addEventListener('click', function () {
  document.querySelector('.set-input1').style.width = "300px";
});

document.querySelector('.set-input2').addEventListener('click', function () {
  document.querySelector('.set-input2').style.width = "300px";
});

document.querySelector('.set-button').addEventListener('click', function () {
  let inputOneValue = document.querySelector('.set-input1').value;
  let inputTwoValue = document.querySelector('.set-input2').value;
  let temp = `<div class="contents-box">
                <p class="box-name" > ${inputOneValue}</p>
                <p class="box-contents">${inputTwoValue}</p>
              </div>`
  document.querySelector('.guest-contents').insertAdjacentHTML('beforeend', temp);
});