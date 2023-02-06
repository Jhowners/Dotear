var Button1 = document.querySelector('button');
var Button2 = document.getElementById('button2');

Button1.addEventListener('click', function () {
    alert('SIMBORA!!');
});



Button2.addEventListener('mouseover', function () {
    place = Math.floor(Math.random() * 75);
    
    this.style.right = place + '%';
});
