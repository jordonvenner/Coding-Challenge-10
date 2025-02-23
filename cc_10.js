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



  //Task 3: Creating an Inventory Class

  // Product Class (Make sure this is included before the Inventory class)
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
  }
  
  // Inventory Class
  class Inventory {
    constructor() {
      this.products = []; // Initialize an empty array to store products
    }
  
    // Method to add a product to inventory
    addProduct(product) {
      this.products.push(product);
      console.log(`Added ${product.name} to inventory.`);
    }
  
    // Method to list all products
    listProducts() {
      console.log("Inventory List:");
      this.products.forEach(product => console.log(product.getDetails()));
    }
  }
  
  // Test Cases
  const prod1 = new Product("Laptop", 101, 1200, 5); // Create a new product
  const inventory = new Inventory(); // Create inventory instance
  
  inventory.addProduct(prod1); // Add product to inventory
  inventory.listProducts(); 
  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 5"




//Task 4: Implementing Order Management

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
        return false;
      } else {
        this.stock -= quantity;
        return true;
      }
    }
  }
  
  // Order Class
  class Order {
    constructor(orderId, product, quantity) {
      this.orderId = orderId;
      this.product = product;
      this.quantity = quantity;
      this.totalPrice = this.quantity * this.product.price;
    }
  
    // Method to return order details
    getOrderDetails() {
      return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
    }
  }
  
  // Inventory Class
  class Inventory {
    constructor() {
      this.products = []; // Array to store products
      this.orders = [];   // Array to store orders
    }
  
    // Method to add a product to inventory
    addProduct(product) {
      this.products.push(product);
      console.log(`Added ${product.name} to inventory.`);
    }
  
    // Method to list all products
    listProducts() {
      console.log("Inventory List:");
      this.products.forEach(product => console.log(product.getDetails()));
    }
  
    // Method to place an order
    placeOrder(orderId, product, quantity) {
      if (product.updateStock(quantity)) {
        const order = new Order(orderId, product, quantity);
        this.orders.push(order);
        console.log(`Order placed: ${order.getOrderDetails()}`);
      }
    }
  
    // Method to list all orders
    listOrders() {
      console.log("Orders List:");
      this.orders.forEach(order => console.log(order.getOrderDetails()));
    }
  }
  
  // Test Cases
  const prod1 = new Product("Laptop", 101, 1200, 5); // Create a product
  const inventory = new Inventory(); // Create inventory instance
  
  inventory.addProduct(prod1); // Add product to inventory
  inventory.listProducts(); 
  
  inventory.placeOrder(601, prod1, 2); // Place an order for 2 laptops
  inventory.listOrders(); 
  // Expected output: "Order ID: 601, Product: Laptop, Quantity: 2, Total Price: $2400"
  
  console.log(prod1.getDetails()); 
  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 3"



  //Task 5: Implementing Product Restocking

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
  
    // Method to increase stock when restocked
    restock(quantity) {
      this.stock += quantity;
    }
  }
  
  // Order Class
  class Order {
    constructor(orderId, product, quantity) {
      this.orderId = orderId;
      this.product = product;
      this.quantity = quantity;
      this.totalPrice = this.quantity * this.product.price;
    }
  
    // Method to return order details
    getOrderDetails() {
      return `Order ID: ${this.orderId}, Product: ${this.product.name}, Quantity: ${this.quantity}, Total Price: $${this.totalPrice}`;
    }
  }
  
  // Inventory Class
  class Inventory {
    constructor() {
      this.products = []; // Array to store products
      this.orders = [];   // Array to store orders
    }
  
    // Method to add a product to inventory
    addProduct(product) {
      this.products.push(product);
      console.log(`Added ${product.name} to inventory.`);
    }
  
    // Method to list all products
    listProducts() {
      console.log("Inventory List:");
      this.products.forEach(product => console.log(product.getDetails()));
    }
  
    // Method to place an order
    placeOrder(orderId, product, quantity) {
      if (product.stock >= quantity) {
        product.stock -= quantity;
        const order = new Order(orderId, product, quantity);
        this.orders.push(order);
        console.log(`Order placed: ${order.getOrderDetails()}`);
      } else {
        console.log("Not enough stock available!");
      }
    }
  
    // Method to list all orders
    listOrders() {
      console.log("Orders List:");
      this.orders.forEach(order => console.log(order.getOrderDetails()));
    }
  
    // Method to restock a product by ID
    restockProduct(productId, quantity) {
      const product = this.products.find(prod => prod.id === productId);
      if (product) {
        product.restock(quantity);
        console.log(`Restocked ${product.name}. New stock: ${product.stock}`);
      } else {
        console.log("Product not found!");
      }
    }
  }
  
  // Test Cases
  const prod1 = new Product("Laptop", 101, 1200, 3); // Create a product
  const inventory = new Inventory(); // Create inventory instance
  
  inventory.addProduct(prod1); // Add product to inventory
  inventory.listProducts(); 
  
  inventory.restockProduct(101, 5); // Restock the product
  console.log(prod1.getDetails()); 
  // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 8"