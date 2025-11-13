// utils/generators.js
function randomEmail() {
  const timestamp = Date.now()
  return `test${timestamp}@example.com`
}

module.exports = { randomEmail }
