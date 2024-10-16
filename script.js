function processOrder(event) {
    event.preventDefault(); // Prevent default form submission

    // Validation for phone number
    const phone = document.getElementById('phone').value;
    if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
        alert("Please enter a valid phone number in the format 123-456-7890.");
        return false;
    }

    // Generate receipt
    const tagline = document.getElementById('tagline').value;
    const color = document.getElementById('color').value;
    const size = document.getElementById('size').value;
    const quantity = document.getElementById('quantity').value;
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const deliveryDate = document.getElementById('delivery-date').value;

    // Format the receipt details
    const receiptDetails = `
        <strong>Receipt Date:</strong> ${new Date().toLocaleString()}<br>
        <strong>Tagline:</strong> ${tagline}<br>
        <strong>Color:</strong> ${color}<br>
        <strong>Size:</strong> ${size}<br>
        <strong>Quantity:</strong> ${quantity}<br>
        <strong>Recipient's Name:</strong> ${name}<br>
        <strong>Address:</strong> ${address}<br>
        <strong>Email:</strong> ${email}<br>
        <strong>Delivery Date:</strong> ${deliveryDate}<br>
        <strong>Phone Number:</strong> ${phone}<br>
    `;

    // Display the receipt
    document.getElementById('receiptDetails').innerHTML = receiptDetails;
    document.getElementById('receipt').style.display = 'block';

    return false; // Prevent default form submission
}

function resetForm() {
    document.getElementById('receipt').style.display = 'none'; // Hide the receipt
    document.getElementById('receiptDetails').innerHTML = ''; // Clear receipt details
}

// Attach the resetForm function to the reset button
document.querySelector('form').addEventListener('reset', resetForm);


// Person class to handle basic customer details
class Person {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    // Arrow function to get basic details
    getDetails = () => {
        return `Name: ${this.name}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}

// Customer class extending Person to include T-shirt order details
class Customer extends Person {
    constructor(name, email, phone, tagline, color, size, quantity, deliveryDate) {
        super(name, email, phone); // Call parent class constructor

        // Additional attributes related to T-shirt order
        this.tagline = tagline;
        this.color = color;
        this.size = size;
        this.quantity = quantity;
        this.deliveryDate = deliveryDate;

        // Validate quantity
        if (this.quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
    }

    // Overriding the getDetails method to include T-shirt order details
    getDetails = () => {
        return `
            ${super.getDetails()}<br>
            Tagline: ${this.tagline}<br>
            Color: ${this.color}<br>
            Size: ${this.size}<br>
            Quantity: ${this.quantity}<br>
            Delivery Date: ${this.deliveryDate}
        `;
    }
}

// Example usage with data from the form
try {
    let customer = new Customer(
        "sonam c", 
        "sonam2004@example.com", 
        "123-456-7890", 
        "Stay Positive!", 
        "Black", 
        "Large", 
        3, 
        "2024-10-20"
    );
    
    // Displaying the customer and order details
    console.log(customer.getDetails());
} catch (error) {
    console.error(error.message); // Handle any invalid data error (e.g., invalid quantity)
}

