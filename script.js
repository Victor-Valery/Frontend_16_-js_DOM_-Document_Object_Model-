// JS DOM

// document.getElementBy...

//******************** */

/* const myDom = document.getElementById('dom');

console.log(myDom); */

//******************** */

/* const instructor = document.getElementById('info');

console.log(instructor);  */

//******************** */

/* const ins = document.getElementById('instructor');

console.log(ins); 
 */
//******************** */

/* ClassName */

/* const withClassName = document.getElementsByClassName("clas-info");

console.log(withClassName); */

//******************** */

// TagName

/* const cw = document.getElementsByTagName('h3');
console.log(cw); */

//******************** */

/* document.querySelector */

/* const inst = document.querySelector(".class-info");
console.log(inst); */

/* const inst = document.querySelectorAll(".class-info");
console.log(inst); */

/* const ins = document.querySelectorAll("#instructor");
console.log(ins); */

/* console.log(document.querySelectorAll('h3')[1]); */

/* console.log(document.querySelector('#info h1')); */



//*********************************** */

// Manipulation

/* const brands = document.querySelector('#brands'); */
/* 
console.log(brands); */

/* brands.innerHTML += `<li>NioyaTech</li>`; */
/* brands.innerHTML = brands.innerHTML + `<li>NioyaTech</li>`;

const classBrands = document.querySelectorAll('.brand');
console.log(classBrands[3].innerText); */

//*********************************** */

// const copyRight = document.querySelector('footer p');
// console.log(copyRight);

// /* copyRight.innerText = '<h1>&copy; 2020 clarusway.com</h1>'; */
// copyRight.innerHTML = '<h1>&copy; 2020 clarusway.com</h1>';
// copyRight.innerHTML = '&copy; 2020 clarusway.com';

//*********************************** */

/* const lessonList = [
    { id: 1, name: 'HTML' },
    { id: 1, name: 'CSS' },
    { id: 1, name: 'JS' },
    { id: 1, name: 'REACT' },
  ];

  const lessonElm = document.ElementById('lessons');
  lessonList.forEach((element) => {
      lessonElm.innerHTML += `<li class = "lesson-item"> ${element.name}</li>`;
  });  */

  //*********************************** */

  /* setAttribute getAttribute */

//   const cw = document.querySelector('#cw');

//  /*  console.log(cw); */

//  const cwHrefAttr = cw.getAttribute('href');
//  console.log(cwHrefAttr);

// cw.setAttribute('href', 'https://www.w3schools.com/');
// cw.innerHTML = 'W3Schools';

  //*********************************** */
  //*********************************** */

  /* const insElm = document.querySelectorAll('#instructors li');
// console.log(insElm);

insElm.forEach((item) => {
  console.log(item.innerText.includes('FrontEnd'));
  if (item.innerText.includes('FrontEnd')) {
    item.setAttribute('class', 'front-end');
  } else if (item.innerText.includes('BackEnd')) {
    item.setAttribute('class', 'back-end');
  }
}); */

//*********************************** */

// Add style manually js

/* const jsPrg = document.querySelector('#js-prg');

console.log(jsPrg);

jsPrg.style.color = 'green';
jsPrg.style.backgroundColor = 'red';
jsPrg.style.fontSize = '1rem';
jsPrg.style.margin = '10px' */

//*********************************** */

// const cwBanner = document.getElementById('cw-banner');
// /* console.log(cwBanner); */

// console.log(cwBanner.classList);
// cwBanner.classList.add('imp');
// cwBanner.classList.remove('banner');

//*********************************** */

/* const cwQuote = document.querySelector('#quote-div');

console.log(cwQuote);

cwElm = document.createElement('h2');
console.log(cwElm);
cwElm.innerText = 'Clarusway';
cwQuote.appendChild(cwElm); */

