const axios = require('axios');

// Function to fetch JSON data from the URL
async function fetchData(url) {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Function to calculate average discount per brand
function averageDiscountPerBrand(products) {
    let brandDiscounts = {};
    let brandCounts = {};
    
    products.forEach(product => {
        const brand = product.brand;
        const discount = product.discount;
        
        if (!brandDiscounts[brand]) {
            brandDiscounts[brand] = 0;
            brandCounts[brand] = 0;
        }
        
        brandDiscounts[brand] += discount;
        brandCounts[brand]++;
    });
    
    let averageDiscounts = {};
    for (const brand in brandDiscounts) {
        averageDiscounts[brand] = brandDiscounts[brand] / brandCounts[brand];
    }
    
    return averageDiscounts;
}

// Function to find the oldest phone model with Android OS
function oldestAndroidPhoneModel(products) {
    let oldestModel = null;
    let oldestYear = Infinity;
    
    products.forEach(product => {
        if (product.os === 'Android' && product.release_data < oldestYear) {
            oldestModel = product.model;
            oldestYear = product.release_data;
        }
    });
    
    return oldestModel;
}

// Function to calculate price after discount
function priceAfterDiscount(products) {
    return products.map(product => {
        return {
            model: product.model,
            discountedPrice: product.price * (1 - product.discount / 100)
        };
    });
}

// Function to calculate total price of phones released after a certain year
function totalPriceAfterYear(products, year) {
    let totalPrice = 0;
    products.forEach(product => {
        if (product.release_data > year) {
            totalPrice += product.price;
        }
    });
    return totalPrice;
}

// Function to determine the brand with the highest average price
function mostExpensiveBrand(products) {
    let brandTotalPrices = {};
    let brandCounts = {};
    
    products.forEach(product => {
        const brand = product.brand;
        const price = product.price;
        
        if (!brandTotalPrices[brand]) {
            brandTotalPrices[brand] = 0;
            brandCounts[brand] = 0;
        }
        
        brandTotalPrices[brand] += price;
        brandCounts[brand]++;
    });
    
    let maxAveragePrice = 0;
    let mostExpensiveBrand = null;
    for (const brand in brandTotalPrices) {
        const averagePrice = brandTotalPrices[brand] / brandCounts[brand];
        if (averagePrice > maxAveragePrice) {
            maxAveragePrice = averagePrice;
            mostExpensiveBrand = brand;
        }
    }
    
    return mostExpensiveBrand;
}

// URL of the JSON file
const jsonUrl = 'https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2024-05-03/MOCK_DATA%20%281%29_534760.json';

// Call the fetchData function to fetch the JSON data
fetchData(jsonUrl)
    .then(productsData => {
        if (productsData) {
            // Call your functions here with productsData
            console.log("Average Discount per Brand:", averageDiscountPerBrand(productsData));
            console.log("Oldest Phone Model with Android OS:", oldestAndroidPhoneModel(productsData));
            console.log("Price After Discount:", priceAfterDiscount(productsData));
            console.log("Total Price of Phones Released After 2018:", totalPriceAfterYear(productsData, 2018));
            console.log("Most Expensive Brand:", mostExpensiveBrand(productsData));
        }
    });
