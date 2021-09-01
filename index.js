// Write your code here!
document.getElementById('main').remove();
let newHeader = document.createElement('h1');
newHeader.setAttribute('id','victory');
newHeader.innerHTML = 'Eskew is the champion';
document.body.appendChild(newHeader)