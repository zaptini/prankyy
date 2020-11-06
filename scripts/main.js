const myHeading = document.querySelector('h1')
myHeading.textContent = 'My Dear friend!'

const myParagraph = document.querySelector('p')
myParagraph.textContent = 'This is SERIOUS question!'

const myH4 = document.querySelector('h4')
myH4.textContent='Where are you? '

const mySpum = document.querySelector('h2')
mySpum.textContent = myH4.textContent.repeat(31820)

const mySpam = document.querySelector('h6')
mySpam.textContent = myH4.textContent.repeat(31920)


  document.querySelector('h1').onclick = function() {
    alert('Ouch! Stop poking me!');
}

document.querySelector('h4').onclick = function() {
    alert('WHERE ARE YOUU???');
}

document.querySelector('h2').onclick = function() {
    alert('This text is repeated 31920 times');
}

document.querySelector('h2').onclick = function() {
    alert('This text is repeated 31820 times');
}



// alert('fjuk')