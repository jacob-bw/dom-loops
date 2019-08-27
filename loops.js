// loop through the rainbow and print out the colors to the page

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
const ew = ['darkolivegreen', 'greenyellow', 'ivory', 'deeppink']

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML += toPrint;
   }

   const printRainbow = (colorArr) => {
    for (let i = 0; i < colorArr.length; i++) {
        const color = `<p style= 'color: ${colorArr[i]}'> ${colorArr[i]}</p>`;
        printToDom(color, 'rainbow');
    }
}

printRainbow(colors);
printRainbow(ew);


const instructors = [
    {first: "Zoeee", last: "Ameeeese"},
    {first: "Callane", last: "Morreeeson"},
    {first: "Greeeg", last: "Korteeee"},
    {first: "Michaeeeel", last: "Clarkeeeee"},
  ];

const printNames =(namesArray) => {
    for (let i = 0; i < namesArray.length; i++) {
        const person = namesArray[i];
        const element = `<p>${person.first} ${person.last}</p>`;
        printToDom(element, 'people');
    }
}

printNames(instructors);
