const fs = require('fs');
const path = require('path');

const outputroot = 'output/profiles/';


const files = fs.readdirSync(path.join(outputroot, "profiles"));
const acc = [];
files.forEach((curr) => {
    if (curr.includes('.json')) {
        const file = JSON.parse(fs.readFileSync(path.join(outputroot, curr), 'utf8'));
        const extension = path.extname(curr);
        const slug = path.basename(curr, extension);
        // remove wrapping key
        var stripped = file[slug];
        // add id property
        stripped.id = stripped.basename;
        acc.push(stripped);
    }

}, {});

module.exports = {
    profiles: acc
}
