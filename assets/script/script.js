// function to highlight genre modifier
// let activeGM = 'container-active'; // define a css class 'constant'

// let el = document.getElementById('useGM');
// el.addEventListener('click', function () {
//     let classes,
//         idx;

//     // simplest case: class name is empty
//     if (this.className === '') {
//         this.className = activeGM;
//         return;
//     }

//     // next: class name matches active
//     if (this.className === activeGM) {
//         this.className = '';
//         return;
//     }

//     // otherwise, if more complex, parse and modify classes
//     classes = this.className.split(' ');
//     idx = classes.indexOf(activeGM);
//     if (idx === -1) {
//         classes.push(activeGM);
//     } else {
//         classes.splice(idx, 1);
//     }
//     this.className = classes.join(' ');
// });

let activeGMOD = document.getElementById("gmTray").children().attr("button");
console.log(activeGMOD);