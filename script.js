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


