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

const randomFunction = () => {
    const index = Math.floor(Math.random() * array.length);
    const output = array[index];
  
    console.log(`Operation successful:\n${output}`);

    element.textContent = output;
};

randomFunction();
