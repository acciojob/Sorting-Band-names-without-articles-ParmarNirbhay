//your code here

let bandNames = ['The Beatles', 'Arctic Monkeys', 'Led Zeppelin', 'The Rolling Stones', 'Nirvana'];

// Function to remove articles from the band names
function removeArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

// Sort the band names without articles
bandNames.sort(function(a, b) {
  return removeArticles(a).localeCompare(removeArticles(b));
});

// Create the list of band names inside <ul id='band'> tag
let list = document.createElement('ul');
list.id = 'band';

bandNames.forEach(function(name) {
  let listItem = document.createElement('li');
  listItem.textContent = name;
  list.appendChild(listItem);
});

// Append the list to the document body
document.body.appendChild(list);
