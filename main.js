// Navbar Underline 애니메이션
let cycle = document.querySelector('.cycle');
let supplies = document.querySelector('.supplies');
let forum = document.querySelector('.forum');

function cycleSuppliesRemove() {
  cycle.classList.remove('underline');
  supplies.classList.remove('underline');
};
function suppliesForumRemove() {
  supplies.classList.remove('underline');
  forum.classList.remove('underline');
};
function forumCycleRemove() {
  forum.classList.remove('underline');
  cycle.classList.remove('underline');
};
document.querySelector('.cycle').addEventListener('mousemove', function () {
  cycle.classList.add('underline');
  suppliesForumRemove();
});

document.querySelector('.supplies').addEventListener('mousemove', function () {
  supplies.classList.add('underline');
  forumCycleRemove();
});

document.querySelector('.forum').addEventListener('mousemove', function () {
  forum.classList.add('underline');
  cycleSuppliesRemove();
});

// scrolltop 클릭 시 스크롤 최상단 좌표 이동
document.querySelector('.scrolltop').addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
});

// Cycle Navbar menu 클릭 시 스크롤 좌표 이동
document.querySelector('.cycle').addEventListener('click', function () {
  window.scrollTo({
    top: 600,
    left: 0,
    behavior: "smooth"
  })
});

// document.querySelectorAll('.load-form')[0].addEventListener('mouseover', function () {
//   document.querySelectorAll('.load-form')[1].
// });



