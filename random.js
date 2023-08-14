const array = [
  {
    "id": 1,
    "name": "test"
  },
  {
    "id": 2,
    "name": "test"
  }
]

const element = document.getElementById("random-output");

generateRandomString();

const generateRandomString = () => {
    const index = Math.floor(Math.random() * array.length);
    const output = array[index];
  
    element.textContent = output;
};
