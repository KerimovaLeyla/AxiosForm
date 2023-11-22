const myForm = document.getElementById('myForm');
const inpOne = document.getElementById('inpone');
const inpTwo = document.getElementById('inptwo');
const inpThree = document.getElementById('inpthree');
const inpFour = document.getElementById('inpfourth');
myForm.addEventListener('submit', function (event) {
    event.preventDefault();

  axios.post("https://northwind.vercel.app/api/customers", {
    name: inpOne.value,
    surname: inpTwo.value,
    age: inpThree.value,
    email: inpFour.value
  })
    .then(response => {
      console.log(response.data);
    })
})