const fs = require('fs');
const filePath = 'C:/Users/SURFACE/Asia Group/asia-aspiar-catalogue/Asia Group Product Catalogue.html';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(/<th>SKU ID<\/th>/g, '');
content = content.replace(/<th>ID<\/th>/g, '');

const parts = content.split('<table class="sku-table"');
for (let i = 1; i < parts.length; i++) {
    const endTableIndex = parts[i].indexOf('</table>');
    let tableContent = parts[i].substring(0, endTableIndex);
    
    tableContent = tableContent.replace(/(<tr>\s*<td>.*?<\/td>\s*)<td>.*?<\/td>(\s*<td>.*?<\/td>\s*<td>.*?<\/td>\s*<\/tr>)/g, '$1$2');
    
    parts[i] = tableContent + parts[i].substring(endTableIndex);
}
content = parts.join('<table class="sku-table"');

fs.writeFileSync(filePath, content);
console.log('Removed SKU IDs');
