const array = [
  {
    "id": 1,
    "name": "John"
  },
  {
    "id": 2,
    "name": "Maria"
  },
  {
    "id": 3,
    "name": "Chris"
  },
  {
    "id": 4,
    "name": "Mohammed"
  },
  {
    "id": 5,
    "name": "Monsieur"
  }
]

const element = document.getElementById("random-output");

generateRandomString();

const generateRandomString = () => {
    const index = Math.floor(Math.random() * array.length);
    const output = array[index];
  
    element.textContent = output;
};
