const { validate } = require('../dist')

// Since this tool is generic, you must provide the prefixes for the coin
// in the format [ regular, integrated, subaddress ]

const prefixes = [18, 19, 42]

const addresses = [
  '42ZsDR9epg1bGqCXdWGPYC5zuBmn6WGTc15nSc9sUDP8267NDTwkgk1Vn4XueSiBSjRZqaYH4PqkaLEBkGwWxrse17KHALo',
  '4CGYEDy9RwXbGqCXdWGPYC5zuBmn6WGTc15nSc9sUDP8267NDTwkgk1Vn4XueSiBSjRZqaYH4PqkaLEBkGwWxrse113DUyZY2dc1yWxsbj',
  '85CH9LW9QMXfcJTWU6hvioHC3xkLSYUFdHD7npAkoikAZDR4yKQ6wb1DA76NripyVTDm8gZSeMdKXie2BhdU95p77GKGjPZ',
]

for(const address of addresses) {
  const result = validate(address, prefixes)
  console.log(result)
}
