// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle


const rectangle = {
    length: 0,
    width: 0,
    setDimensions: function(length, width) {
        this.length = length;
        this.width = width;
    },
    area: function() {
        return this.length * this.width;
    },
    perimeter: function() {
        return 2 * (this.length + this.width);
    }
};

rectangle.setDimensions(5, 4);
console.log("Area:", rectangle.area()); // Output: 20
console.log("Perimeter:", rectangle.perimeter()); // Output: 18