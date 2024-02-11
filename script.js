const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

/* function search(str) {
	let results = [];

	// TODO
} */


/*
Removed results[] as it is unnesecssary if I return the value from the destructered fruit.filter method.
This uses the input from the input box and searches the fruit list, regardless of upper or lowercase.
*/
function search(str) {
	//Leaving this outside the filter method as this is not needed to be remade over and over
	const lowerCaseSearch = str.toLowerCase();

	return fruit.filter(val => {
	  const lowerCaseFruit = val.toLowerCase();
	  return lowerCaseFruit.includes(lowerCaseSearch);
	});
}


function searchHandler(e) {
	//This clears the dropdown list so it doesn't just keep adding suggestions
	suggestions.innerHTML = '';
	//If empty, then we return so we don't add the results so we can keep the dropdown empty.
	if (input.value === '') return;
	let results = search(input.value);
	showSuggestions(results, input.value);
}

function showSuggestions(results, inputVal) {
	//Cut out all but the first 5 results
	results = results.slice(0,5);

	//Adds a <li> to the suggestions <div> for each search result
	results.forEach(val => {
		const newSuggestion = document.createElement("li");
		newSuggestion.innerText = val;
		suggestions.appendChild(newSuggestion);
	})
}

function useSuggestion(e) {
	// Replaces text and clears out the suggestions
	input.value = e.target.innerText;
	suggestions.innerHTML = '';
}

/*
Turns out these might not even be needed due to the way CSS styling works
function highlightSuggestion(e) {
	console.log(e.target.innerText + " Highlighted");
}

function removeHighlight(e) {
	console.log(e.target.innerText + " Unhighlighted");
} */

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
/* 
Turns out these might not even be needed due to the way CSS styling works
suggestions.addEventListener('mouseover', highlightSuggestion);
suggestions.addEventListener('mouseout', removeHighlight); */