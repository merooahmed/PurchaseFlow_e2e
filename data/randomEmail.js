function generateRandomEmail() {
    return `marwa${Math.floor(Date.now() / 1000)}@example.com`;
}

module.exports = { generateRandomEmail };