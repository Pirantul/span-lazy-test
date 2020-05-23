
const input = document.getElementById('input-number');
const output = document.getElementById('output-span');
let countSpan = 0;

const countAddSpanLines = 20; //сколько будем добавлять строк до ленивой подгрузки
const minRnd = 0;
const maxRnd = 9;

input.onchange = function changeInput(e) {
  
  const count = +e.target.value;

  if (count < 1 || !((count ^ 0) === count) ) return;
  
  while (output.firstChild) {
    output.removeChild(output.lastChild);
  }
  addSpanEl(count);
}

const addSpanEl = function (count) {

  for (let i = 1; i < count + 1; i++) {
    const elem = document.createElement('span');
    
    output.appendChild(elem);
    elem.innerHTML = getRandom(minRnd, maxRnd);
    output.appendChild(document.createElement('br'));

    if ( i === count || (i > 1 && (i % countAddSpanLines) === 0 && getScroll('Height'))) {
      countSpan = count - i;
      //console.log(countSpan, i, count);
      return;
    }
  }
}

window.addEventListener('scroll' || 'resize', function() {
  if (visibleLastSpan(output.lastChild)) addSpanEl(countSpan);
});

const visibleLastSpan = function (target) {
  const targetPosition = window.pageYOffset + target.getBoundingClientRect().top;
  const windowPosition = window.pageYOffset + document.documentElement.clientHeight;

  if (targetPosition < windowPosition && countSpan > 0) { 
      return true;
  };
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getScroll(a) {
  var d = document,
      b = d.body,
      e = d.documentElement,
      c = "client" + a;
      a = "scroll" + a;
  return /CSS/.test(d.compatMode)? (e[c]< e[a]) : (b[c]< b[a])
};