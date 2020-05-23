
const countAddSpanLines = 20; //сколько будем добавлять строк до ленивой подгрузки
const minRnd = 0;
const maxRnd = 9;

const input = document.getElementById('input-number');
const output = document.getElementById('output-span');
const loadedSpan = document.getElementById('loaded-span-val');
let countSpan;

input.onchange = changeInput = (e) => {
  
  const count = +e.target.value;

  if (count < 0 || !((count ^ 0) === count) ) return;
  
  while (output.firstChild) {
    output.removeChild(output.lastChild);
  }
  addSpanEl(count);
}

const addSpanEl = (count) => {

  for (let i = 1; i < count + 1; i++) {
    const elem = document.createElement('span');
    
    
    output.appendChild(elem);
    elem.innerHTML = getRandom(minRnd, maxRnd);
    output.appendChild(document.createElement('br'));

    if ( i === count || (i > 1 && (i % countAddSpanLines) === 0 && getScroll('Height'))) {
      countSpan = count - i;
      loadedSpan.innerText = document.getElementsByTagName('span').length;
    
      //console.log(countSpan, i, count);
      return;
    }
  }
}

window.addEventListener('scroll' || 'resize', function() {
  if (visibleLastSpan(output.lastChild)) addSpanEl(countSpan);
});

const visibleLastSpan = (target) => {
  const targetPosition = window.pageYOffset + target.getBoundingClientRect().top;
  const windowPosition = window.pageYOffset + document.documentElement.clientHeight;

  if (targetPosition < windowPosition && countSpan > 0) { 
      return true;
  };
};

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getScroll = (a) => {
  var d = document,
      b = d.body,
      e = d.documentElement,
      c = "client" + a;
      a = "scroll" + a;
  return /CSS/.test(d.compatMode)? (e[c]< e[a]) : (b[c]< b[a])
};