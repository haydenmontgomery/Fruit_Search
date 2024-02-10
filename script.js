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
	let results = search(input.value);
	showSuggestions(results, input.value);
}

function showSuggestions(results, inputVal) {

	//This clears the dropdown list so it doesn't just keep adding suggestions
	suggestions.innerHTML = '';

	//Adds a <li> to the suggestions <div> for each search result
	results.forEach(val => {
		const newSuggestion = document.createElement("li");
		newSuggestion.innerText = val;
		suggestions.appendChild(newSuggestion);
	})
}

function useSuggestion(e) {
	// TODO
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);