const myForm = document.getElementById('myForm');
const inpOne = document.getElementById('inpone');
const inpTwo = document.getElementById('inptwo');
const inpThree = document.getElementById('inpthree');
const inpFour = document.getElementById('inpfourth');
const inpFives = document.getElementById('inpfives');
const inpSixth = document.getElementById('inpsixth');
const inpseventh = document.getElementById('inpseventh');
const inpeights = document.getElementById('inpeights');
const inpnines = document.getElementById('inpnines');
const inptens = document.getElementById('inptens');
myForm.addEventListener('submit', function (event) {
    event.preventDefault();

  axios.post("https://northwind.vercel.app/api/customers", {
    Title: inpOne.value,
    Price: inpTwo.value,
    Description: inpThree.value,
    Discount: inpFour.value,
    Stock: inpFives.value,
    Quality: inpSixth.value,
    Country: inpseventh.value,
    CustomersCount: inpeights.value,
    Category: inpnines.value,
    City: inptens.value

  })
    .then(response => {
      console.log(response.data);
    })
})