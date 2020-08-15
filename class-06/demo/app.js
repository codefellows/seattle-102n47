var hourNow = prompt('what time is it? in the format of 0-23');
var greeting;

if (hourNow > 18 && hourNow < 24) {
  greeting = 'Good evening!';
} else if (hourNow > 12 && hourNow < 24) {
  greeting = 'Good afternoon';
} else if (hourNow >=0 && hourNow < 24) {
  greeting = 'Good morning';
} else {
  greeting = 'you put in something incorrectly'
}

console.log('evaluation:', greeting);
document.write('your greeting:', greeting);