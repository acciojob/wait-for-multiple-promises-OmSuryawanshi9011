let tableBody = document.getElementById('output');

let row = document.createElement('tr');
let cell1 = document.createElement('td');
let cell2 = document.createElement('td');

cell1.textContent = 'Loading...';
cell1.colSpan = 2;  // This makes the cell span two columns


row.appendChild(cell1);
row.appendChild(cell2);

tableBody.appendChild(row);



function createPromise() {
	return new Promise((resolve) => {
		let randomTime = Math.floor(Math.random() * 3) + 1;
		setTimeout(() => {
			resolve(randomTime);
		}, randomTime * 1000);
	});
	
}

let promise1 = createPromise();
let promise2 = createPromise();
let promise3 = createPromise(); 


Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // This will log an array of the resolved values of promise1, promise2, and promise3
});
var row1 = table.insertRow(-1);

// Insert new cells in the row
var cell1 = row1.insertCell(0);
var cell2 = row1.insertCell(1);

// Add some text to the new cells
cell1.innerHTML = 'Promise 1';
cell2.innerHTML = '2';

// Repeat the same steps for the other rows
var row2 = table.insertRow(-1);
var cell1 = row2.insertCell(0);
var cell2 = row2.insertCell(1);
cell1.innerHTML = 'Promise 2';
cell2.innerHTML = '1';

var row3 = table.insertRow(-1);
var cell1 = row3.insertCell(0);
var cell2 = row3.insertCell(1);
cell1.innerHTML = 'Promise 3';
cell2.innerHTML = '3';

var row4 = table.insertRow(-1);
var cell1 = row4.insertCell(0);
var cell2 = row4.insertCell(1);
cell1.innerHTML = 'Total';
cell2.innerHTML = '3.006';