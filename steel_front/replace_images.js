const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
let content = fs.readFileSync(filePath, 'utf8');

let imageCounter = 1;

// 替换所有trae-api链接
content = content.replace(/https:\/\/trae-api-cn\.mchost\.guru\/api\/ide\/v1\/text_to_image\?[^"]+/g, () => {
    return `https://picsum.photos/seed/card-${imageCounter++}/400/400`;
});

// 替换所有doubao-search链接
content = content.replace(/https:\/\/p\d+-doubao-search-sign\.byteimg\.com\/[^"]+/g, () => {
    return `https://picsum.photos/seed/card-${imageCounter++}/400/400`;
});

fs.writeFileSync(filePath, content, 'utf8');
console.log(`Successfully replaced ${imageCounter - 1} image links!`);
