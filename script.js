const apiKey = '/hound/list'; // Replace with your Dog API key
const dogListElement = document.getElementById('dogList');
const dogInfoElement = document.getElementById('dogInfo');

// Fetch all dog breeds
async function fetchDogBreeds() {
  try {
    const response = await fetch(`https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching dog breeds:', error);
    return [];
  }
}

// Display dog breeds
function displayDogBreeds(breeds) {
  breeds.forEach((breed) => {
    const dogCard = document.createElement('div');
    dogCard.className = 'dogCard';

    const img = document.createElement('img');
    img.src = breed.image.url;
    img.alt = breed.name;

    // Show sub-breeds on hover
    img.addEventListener('mouseenter', () => showSubBreeds(breed));

    // Hide sub-breeds on mouse leave
    img.addEventListener('mouseleave', hideSubBreeds);

    const name = document.createElement('div');
    name.textContent = breed.name;

    dogCard.appendChild(img);
    dogCard.appendChild(name);
    dogListElement.appendChild(dogCard);
  });
}

// Show first three sub-breeds on hover
function showSubBreeds(breed) {
    if (Array.isArray(breed.subBreeds) && breed.subBreeds.length > 0) {
      const subBreeds = breed.subBreeds.slice(0, 3).join(', ');
      dogInfoElement.textContent = `Sub-breeds: ${subBreeds}`;
    } else {
      dogInfoElement.textContent = 'No sub-breeds available.';
    }
  }

// Hide sub-breeds on mouse leave
function hideSubBreeds() {
  dogInfoElement.textContent = '';
}

// Main function
async function main() {
  const dogBreeds = await fetchDogBreeds();
  displayDogBreeds(dogBreeds);
}

main();

