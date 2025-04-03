// Conversion rates (for demo purposes)
const conversionRates = {
    "USD_EUR": 0.85,   // 1 USD = 0.85 EUR
    "EUR_USD": 1.18,   // 1 EUR = 1.18 USD
    "USD_INR": 82.50,  // 1 USD = 82.50 INR
    "INR_USD": 1 / 82.50, // 1 INR = 1/82.50 USD
    "EUR_INR": 82.50 * 0.85, // 1 EUR = 82.50 INR * 0.85
    "INR_EUR": 1 / (82.50 * 0.85), // 1 INR = 1/(82.50 * 0.85) EUR
};

// Event listener for the convert button
document.getElementById('convertBtn').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    
    if (!amount || isNaN(amount) || amount <= 0) {
        alert('Please enter a valid amount!');
        return;
    }

    let conversionKey = `${fromCurrency}_${toCurrency}`;
    let convertedAmount = 0;

    if (fromCurrency === toCurrency) {
        convertedAmount = amount; // No conversion needed if both currencies are the same
    } else if (conversionRates[conversionKey]) {
        convertedAmount = amount * conversionRates[conversionKey];
    } else {
        alert('Conversion rate not available!');
        return;
    }

    // Display the result
    document.getElementById('result').textContent = convertedAmount.toFixed(2);
});
