//Task 1: Creating a Product Class


// Product Class
class Product {
    constructor(name, id, price, stock) {
      this.name = name;
      this.id = id;
      this.price = price;
      this.stock = stock;
    }
  
    // Method to return product details
    getDetails() {
      return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
  
    // Method to update stock after purchase
    updateStock(quantity) {
      if (quantity > this.stock) {
        console.log("Not enough stock available!");
      } else {
        this.stock -= quantity;
        console.log(`${quantity} item(s) sold! New stock: ${this.stock}`);
      }
    }
  }
  
  // Test Cases
  const prod1 = new Product("Laptop", 101, 1200, 10); // Creating a new product
  
  console.log(prod1.getDetails()); 
  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"
  
  prod1.updateStock(3); // Reduce stock by 3
  console.log(prod1.getDetails()); 
  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"



  //Task 2: Creating an Order Class


  // Product Class (Ensure this is included before the Order class)
class Product {
    constructor(name, id, price, stock) {
      this.name = name;
      this.id = id;
      this.price = price;
      this.stock = stock;
    }
  
    // Method to return product details
    getDetails() {
      return `Product: ${this.name}, ID: ${this.id}, Price: $${this.price}, Stock: ${this.stock}`;
    }
  
    // Method to update stock after purchase
    updateStock(quantity) {
      if (quantity > this.stock) {
        console.log("Not enough stock available!");
      } else {
        this.stock -= quantity;
        console.log(`${quantity} item(s) sold! New stock: ${this.stock}`);
      }
    }
  }
  
  // Order Class
  class Order {
    constructor(orderId, product, quantity) {
      this.orderId = orderId;
      this.product = product;
      this.quantity = quantity;
  
      // Reduce stock when order is created
      this.product.updateStock(quantity);
    }
  
    // Method to return order details
    getOrderDetails() {
      const totalPrice = this.quantity * this.product.price;
      return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${totalPrice}`;
    }
  }
  
  // Test Cases
  const prod1 = new Product("Laptop", 101, 1200, 10); // Create a new product
  console.log(prod1.getDetails()); 
  // Expected: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"
  
  const order1 = new Order(501, prod1, 2); // Create an order for 2 laptops
  console.log(order1.getOrderDetails()); 
  // Expected: "Order ID: 501, Product: Laptop, Quantity: 2, Total Price: $2400"
  
  console.log(prod1.getDetails()); 
  // Expected: "Product: Laptop, ID: 101, Price: $1200, Stock: 8" (Stock reduced)
