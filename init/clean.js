const fs = require('fs');
const { data } = require('./data'); // your current data.js file

const cleanedData = data.map(listing => ({
  ...listing,
  image: listing.image.url, // extract just the URL
}));

fs.writeFileSync('cleanedData.js', `module.exports = { data: ${JSON.stringify(cleanedData, null, 2)} };`);
