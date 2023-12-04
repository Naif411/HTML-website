
// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Function to update the list with shuffled names
function updateNames() {
  const names = ["John", "Alice", "Mark", "Emily", "David"]; // Array of names
  const shuffledNames = shuffleArray(names); // Shuffle the array

  const listElement = document.getElementById("names-list"); // Get the list element

  // Clear the existing list content
  listElement.innerHTML = "";

  // Add shuffled names as list items
  shuffledNames.forEach(function(name) {
    const listItem = document.createElement("li");
    listItem.textContent = name;
    listElement.appendChild(listItem);
  });
}
