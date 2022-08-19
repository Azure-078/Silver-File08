// navItem () color change
$('.navItem').css('color', 'white');

// nav (ID) color change
$('#nav').css('background-color', '#145');

// Even Numbered List Items ---> Color Change
$('li:even').css('background-color', '#ccc')

// Odd Numbered List Items ---> Color Change
$('li:odd').css('background-color', '#aaa')

//Selecting input tag to change value for first name
let myname = 'Jacob';
$('#myInput:text').val(myname) //Used W3 for shorthanded methods using val