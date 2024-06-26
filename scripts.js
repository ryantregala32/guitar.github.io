/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */


// const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
// const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
// const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// // This is an array of strings (TV show titles)
// let titles = [
//     "Fresh Prince of Bel Air",
//     "Curb Your Enthusiasm",
//     "East Los High"
// ];
// // Your final submission should have much more data than this, and 
// // you should use more than just an array of strings to store it all.


// // This function adds cards the page to display the data in the array
// function showCards() {
//     const cardContainer = document.getElementById("card-container");
//     cardContainer.innerHTML = "";
//     const templateCard = document.querySelector(".card");
    
//     for (let i = 0; i < titles.length; i++) {
//         let title = titles[i];

//         // This part of the code doesn't scale very well! After you add your
//         // own data, you'll need to do something totally different here.
//         let imageURL = "";
//         if (i == 0) {
//             imageURL = FRESH_PRINCE_URL;
//         } else if (i == 1) {
//             imageURL = CURB_POSTER_URL;
//         } else if (i == 2) {
//             imageURL = EAST_LOS_HIGH_POSTER_URL;
//         }

//         const nextCard = templateCard.cloneNode(true); // Copy the template card
//         editCardContent(nextCard, title, imageURL); // Edit title and image
//         cardContainer.appendChild(nextCard); // Add new card to the container
//     }
// }

// function editCardContent(card, newTitle, newImageURL) {
//     card.style.display = "block";

//     const cardHeader = card.querySelector("h2");
//     cardHeader.textContent = newTitle;

//     const cardImage = card.querySelector("img");
//     cardImage.src = newImageURL;
//     cardImage.alt = newTitle + " Poster";

//     // You can use console.log to help you debug!
//     // View the output by right clicking on your website,
//     // select "Inspect", then click on the "Console" tab
//     console.log("new card:", newTitle, "- html: ", card);
// }

// // This calls the addCards() function when the page is first loaded
// document.addEventListener("DOMContentLoaded", showCards);

// function quoteAlert() {
//     console.log("Button Clicked!")
//     alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
// }

// function removeLastCard() {
//     titles.pop(); // Remove last item in titles array
//     showCards(); // Call showCards again to refresh
// }
const instruments = [
    { 
        name: "Yamaha F325D Dreadnought Acoustic Guitar",
        category: "guitar",
        price: 199.99,
        imageURL: "https://m.media-amazon.com/images/I/61RLzFHpZNL._AC_SL1500_.jpg" 
    },
    { 
        name: "Fender Stratocaster Electric Guitar",
        category: "guitar",
        price: 799.99,
        imageURL: "https://media.guitarcenter.com/is/image/MMGS7/M08143000001000-02-600x600.jpg" 
    },
    { 
        name: "Epiphone 60's Standard Les Paul Guitar - Iced Tea",
        category: "guitar",
        price: 699.00,
        imageURL: "https://i.imgur.com/nJHz9qv_d.webp?maxwidth=1520&fidelity=grand" 
    },
    { 
        name: "Squier 40th Anniversary Precision Bass Guitar Vintage Edition Satin Dakota Red",
        category: "bass",
        price: 399.99,
        imageURL: "https://media.guitarcenter.com/is/image/MMGS7/L92325000002000-02-600x600.jpg" 
    },
    { 
        name: "Fender American Ultra Jazz Electric Bass",
        category: "bass",
        price: 2299.99,
        imageURL: "https://cf1.zzounds.com/media/productmedia/fit,600by800/quality,85/1_Full_Straight_Front_NA-97f4566378d0b62870350aeaaee0b0a5.jpg"
    },
    {
        name: "Gibson Hummingbird Standard Acoustic-Electric Guitar Vintage Sunburst",
        category : "acoustic electric",
        price: 3999.00,
        imageURL: "https://media.guitarcenter.com/is/image/MMGS7/L28130000002000-02-600x600.jpg"
    },
    {
        name: "Gibson SG Standard '61 Electric Guitar Vintage Cherry",
        category : "electric",
        price: 1999.00,
        imageURL: "https://media.guitarcenter.com/is/image/MMGS7/L54585000001000-02-600x600.jpg"
    },
    {
        name: "EVH Striped Series 5150 - Red, Black and White",
        category : "electric",
        price : 1749.99,
        imageURL: "https://waltgracevintage.com/cdn/shop/products/IMG_1222.jpg?v=1653768810"
    },
    {
        name: "Hofner Ignition Series Short-Scale Violin Bass Guitar Sunburst",
        category : "bass",
        price: 449.99,
        imageURL: "https://media.guitarcenter.com/is/image/MMGS7/L81864000001000-02-600x600.jpg"

    },
    {
        name : "Gretsch G5422TG Electromatic Classic Hollowbody Double-Cut with Bigsby - Snowcrest White",
        category : "electric",
        price: 899.99,
        imageURL: "https://media.guitarcenter.com/is/image/MMGS7/L88824000003000-02-600x600.jpg"
    },
    {
        name: "Fender California Kingman Acoustic-Electric Bass Guitar Shaded Edge Burst",
        category : "acoustic bass",
        price: 599.99,
        imageURL: "https://media.guitarcenter.com/is/image/MMGS7/M01775000001000-02-600x600.jpg"
    }
];

// Function to create a card for an instrument
function createInstrumentCard(instrument) {
    const card = document.createElement("div");
    card.classList.add("card");

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const title = document.createElement("h2");
    title.textContent = instrument.name;

    const image = document.createElement("img");
    image.src = instrument.imageURL;
    image.alt = instrument.name + " Image";

    const price = document.createElement("p");
    price.textContent = "Price: $" + instrument.price.toFixed(2);

    const category = document.createElement("p");
    category.textContent = "Category: " + instrument.category;

    cardContent.appendChild(title);
    cardContent.appendChild(image);
    cardContent.appendChild(price);
    cardContent.appendChild(category);

    card.appendChild(cardContent);

    

    return card;
}
function shuffleInstruments() {
    for (let i = instruments.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [instruments[i], instruments[j]] = [instruments[j], instruments[i]];
    }
    showCatalog();
}
// Function to display instruments
function displayInstruments() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
 shuffleInstruments(instruments);

    // Loop through each instrument in the instruments array
    for (let i = 0; i < instruments.length; i++) {
        const instrument = instruments[i];

        // Create HTML elements for the instrument card
        const card = document.createElement("div");
        card.classList.add("card");

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        const title = document.createElement("h2");
        title.textContent = instrument.name;

        const image = document.createElement("img");
        image.src = instrument.imageURL;
        image.alt = instrument.name + " Image";

        const price = document.createElement("p");
        price.textContent = "Price: $" + instrument.price.toFixed(2);

        const category = document.createElement("p");
        category.textContent = "Category: " + instrument.category;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        
        // Add an event listener to the remove button
        removeButton.addEventListener("click", function() {
            removeInstrument(i);
        });

        cardContent.appendChild(title);
        cardContent.appendChild(image);
        cardContent.appendChild(price);
        cardContent.appendChild(category);
        cardContent.appendChild(removeButton);

        card.appendChild(cardContent);

        cardContainer.appendChild(card);
    }
}

// Call the displayInstruments function when the page is first loaded
document.addEventListener("DOMContentLoaded", displayInstruments);
