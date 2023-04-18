// Get the user's age
const age = parseInt(prompt("Please enter your age:"));

// Display a dialog box to confirm if the user is 25 years old and up and less than 100  if age >100 will say sorry you must be less than 100 to use this website
if (age >= 25 && age < 100) 
{
  const confirmation = confirm("You are 25 years old or older and less than 100. Is this correct?");
  // Check if the user confirmed their age
  if (confirmation) 
  {
    alert("Age is " + age + " Thank you, You may now proceed.");
  } 
  else 
  {
    alert("Pardon, you must be at least 25 years old above and less than 100 to proceed.");
  }
} 
else 
{
  alert("Sorry, you must be 25 years old or older and less than 100 to use this website.");
}

// a) print the numbers 0-30, one number per line:
for (let i = 0; i <= 30; i++) {
  console.log(i);
}
// b) To print only the even values from 0-40, one number per line, we can use the following for loop:
for (let i = 0; i <= 40; i += 2) {
  console.log(i);
}
// To print the numbers 40 to 10 in descending order, but only if the numbers are multiples of 3
for (let i = 40; i >= 10; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}