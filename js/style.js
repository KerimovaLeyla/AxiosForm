const myForm = document.getElementById('myForm');
const inpOne = document.getElementById('inpone');
const inpTwo = document.getElementById('inptwo');
const inpThree = document.getElementById('inpthree');
const inpFour = document.getElementById('inpfourth');
const inpFives = document.getElementById('inpfives');
myForm.addEventListener('submit', function (event) {
    event.preventDefault();

  axios.post("https://northwind.vercel.app/api/customers", {
    Username: inpOne.value,
    Email: inpTwo.value,
    Password: inpThree.value,
    Adress: inpFour.value,
    Country: inpFives.value,

  })
    .then(response => {
      console.log(response.data);
    })
})