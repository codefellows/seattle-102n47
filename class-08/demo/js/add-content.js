function getName() {
  var userName = prompt('What is your name?');
  return document.write('<h3>Hello ' + userName + '!</h3>'); 
}

function getGreeting() {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  
  if (hourNow > 18) {
    greeting = 'Good evening!';
  } else if (hourNow > 12) {
    greeting = 'Good afternoon!';
  } else if (hourNow > 0) {
    greeting = 'Good morning!';
  } else {
    greeting = 'Welcome!';
  }
  
  return document.write('<h3>' + greeting + '</h3>');
}

// helper function
function getPreference() {
  var response = prompt('Would you like a house or a hotel?');
  var item;

  // true && true
  while(response != 'house' && response != 'hotel') {
    response = prompt('PLEASE answer correctly! Would you like a house or hotel?');
  }
  
  if (response === 'house') {
    item = '<img src ="images/house.png">';
  } else if (response === 'hotel') {
    item = '<img src ="images/hotel.png">';
  } 
  
  return item;
  // return document.write('<p>' + item + '</p>');
}

// Helper function
function getCount() {
  var count = prompt('Great! How many would you like?');
  // true/false
  while(isNaN(count) || count === '') {
    count = prompt('PLEASE enter a number! How many would you like?');
  }
  return count;
}

function showOrder() {
  var result = '';
  var itemType = getPreference();
  var total = getCount();

  for(var i = 0; i < total; i++) {
    result = result + '<p>' + itemType + '</p>';
  }

  return document.write(result);
}

getName();
getGreeting();
// getPreference();
showOrder();


