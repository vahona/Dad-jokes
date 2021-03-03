const jokeList = document.querySelector('.joke p');
const nextButton = document.querySelector('.getJoke');


// Creat an object to be a content of the button

const buttonContext = [
	'Ugh.',
	'🤦🏻‍♂️',
	'omg dad.',
	'you are the worst',
	'seriously',
	'stop it.',
	'please stop',
	'that was the worst one',
]


// Fetch the joke

async function fetchJoke () {
	const response = await fetch('https://icanhazdadjoke.com', {	
		headers: {
		Accept: 'application/json',
		}
	});
	console.log(response);
	const data =  await response.json();
	console.log(data);
	return data

}

// To display the button content

function randomItemFromArray(arr, not) {
	const item = arr[Math.floor(Math.random() * arr.length)];
	if(item === not) {
		return randomItemFromArray(arr, not)
	}

	return item
}

// Function listen to the button joke 

async function handleClick() {
	const {joke} = await fetchJoke();
	jokeList.textContent = joke;
	console.log(joke);
	nextButton.textContent = randomItemFromArray(buttonContext, nextButton.textContent)

}

// Add event listener fot the button

nextButton.addEventListener('click', handleClick)

fetchJoke();