"use strict"
console.log("You lucky duck")

const productContainer = document.querySelector("section");
const image1 = document.querySelector("section img:first-child");
const image2 = document.querySelector("section img:nth-child(2)");
const image3 = document.querySelector("section img:last-child");
const resultsButton = document.querySelector("section + div");

let clicks = 0;
const maxClicksAllowed = 5;

let allProducts = [];
let removeProducts = [];

// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

function getRandomProduct() {
    return Math.floor(Math.random() * allProducts.length);
}

// create a constructor function to create an object associated with each project.
// Properties: 1. Name of the product 2. File path of image 3. Times the image has been shown

//For each of the three images, increment its property of times it has been shown by one.

const Product = function(name, src){

    this.name = name;
    this.src = src;
    this.clicks = 0;
    this.views = 0;
    allProducts.push(this);
    removeProducts.push(this);
}

// Create an algorithm that will randomly generate three unique product images from the images directory and display them side-by-side-by-side in the browser window.

function renderProducts() {

 //create new array of all products

    let product1 = getRandomProduct();
    let product2 = getRandomProduct();
    let product3 = getRandomProduct();


    // use while loop to stop images repeating

    while (product1 === product2 || product1 === product3 || product2 === product3) {
        if (product1 === product2 ){
            product2 = getRandomProduct();
        } else if (product1 === product3) {
          product3 = getRandomProduct();
        } else if (product2 === product3) {
          product3 = getRandomProduct();  
        }
    }


    // SECOND ATTEMPT
    // for (let i = 0; i < removeProducts.length; i++){
    //     if (product1 === removeProducts[i]){
    //         removeProducts.splice(removeProducts[i], product1);
    //     } else if (product2 === removeProducts[i]){
    //         removeProducts.splice(removeProducts[i], product2);
    //     } else if (product3 === removeProducts[i]){
    //         removeProducts.splice(removeProducts[i], product3);
    //     }
    // }


    // FIRST ATTEMPTT
//     let shownProducts = [];
//     shownProducts.push(product1);
//     shownProducts.push(product2);
//     shownProducts.push(product3);

//     for (let i = 0; i < shownProducts.length; i++) {
//         if (product1 === shownProducts[i]){
//             product1 = getRandomProduct();
//         } else if (product2 === shownProducts[i]){
//             product2 = getRandomProduct();
//     } else if (product3 === shownProducts[i]) {
//         product3 = getRandomProduct();
//     };
// }


    image1.src= allProducts[product1].src;
    image2.src= allProducts[product2].src;
    image3.src= allProducts[product3].src;
    image1.alt= allProducts[product1].name;
    image2.alt= allProducts[product2].name;
    image3.alt= allProducts[product3].name;

    allProducts[product1].views++
    allProducts[product2].views++
    allProducts[product3].views++
}

function handleProductClick(event) {
   // console.log("You have been clicked")

    if (event.target === productContainer) {
        alert("Please click on an image!")
    } else {
        clicks++
        // console.log(clicks);
        let clickedProduct = event.target.alt;
        for (let i = 0; i < allProducts.length; i++) {
            if (clickedProduct === allProducts[i].name) {
                allProducts[i].clicks++;
                break;
            // } else {
            //     renderProducts();
            }
        }
        if (clicks === maxClicksAllowed) {
            productContainer.removeEventListener("click", handleProductClick);
            productContainer.className= "no-voting";
            resultsButton.addEventListener("click", renderChart);
            resultsButton.className = "clicks-allowed";
        } 
        else {
            renderProducts();
        }
        }
    }

    function renderResults() {
        // console.log("Here are your results");
        let ul = document.querySelector("ul");
        for (let i = 0; i < allProducts.length; i++) {
            let li = document.createElement("li");
            li.textContent = `${allProducts[i].name} had ${allProducts[i].views} views and was clicked ${allProducts[i].clicks} times.`;
            ul.appendChild(li);
        }
    }


// console.log(allProducts)

const bag = new Product("bag", "assets/bag.jpg");
const banana = new Product("banana", "assets/banana.jpg");
const bathroom = new Product("bathroom", "assets/bathroom.jpg");
const boots = new Product("boots", "assets/boots.jpg");
const breakfast = new Product("breakfast", "assets/breakfast.jpg")
const bubblegum = new Product("bubblegum", "assets/bubblegum.jpg");
const chair = new Product("chair", "assets/chair.jpg");
const cthulhu = new Product("cthulhu", "assets/cthulhu.jpg");
const dogDuck = new Product("dog-duck", "assets/dog-duck.jpg");
const dragon = new Product("dragon", "assets/dragon.jpg");
const pen = new Product("pen", "assets/pen.jpg");
const petSweep = new Product("pet-sweep", "assets/pet-sweep.jpg");
const scissors = new Product("scissors", "assets/scissors.jpg");
const shark = new Product("shark", "assets/shark.jpg");
const sweep = new Product("sweep", "assets/sweep.png");
const tauntaun = new Product("tauntaun", "assets/tauntaun.jpg");
const unicorn = new Product("unicorn", "assets/unicorn.jpg");
const waterCan = new Product("water-can", "assets/water-can.jpg");
const wineGlass = new Product("wine-glass", "assets/wine-glass.jpg");
// console.log(bag);


// ALTERNATE OPTION TO SAVE WRITING OUT NAMES AND URLS:
// for (let i = 0; i < productNames.length; i++) {
//     new Product(productNames[i], `imgs/${productNames[i]}.jpg`);
// }


renderProducts();

// Attach an event listener to the section of the HTML page where the images are going to be displayed.

productContainer.addEventListener("click", handleProductClick);

// create render chart function

function renderChart() {
// decalre names and data (views and clicks) and put in an array

const productNames = [];
const productViews = [];
const productClicks = [];

// make a for loop to push product names, views and clicks into the arrays.

for (let i = 0; i < allProducts.length; i++) {
    productNames.push (allProducts[i].name);
    productViews.push (allProducts[i].views);
    productClicks.push (allProducts[i].clicks);

}

//check code is working in console.log
// console.log(productNames);
// console.log(productViews);
// console.log(productClicks);

// declare data variable for chart

const data = {
    labels: productNames,
    // can do multiple data sets inside {}, {} seperated with a comma
    datasets: [ 
        {
        label: "Views",
        data: productViews,
        // colors are stored in an array (do not forget to use camel casing)
        backgroundColor: ["#B15E6C"],
        borderColor: ["#4E878C"],
        borderWidth: 1,

    }, 
    {
        label: "Clicks",
        data: productClicks,
        backgroundColor: ["#4E878C"],
        borderColor: ["#B15E6C"],
        borderWidth: 1,
    }

    ]
};

// declare config variable

const config = {
    type: "bar",
    data: data, /*Using data variable as declared above*/
};

// use getElementbyId to select the canvas element
const productChart = document.getElementById("chart");

//create new instance of chart - pass in variable for getting canvas element and config of chart
const myChart = new Chart(productChart, config);
}

// renderChart()
console.log(removeProducts)