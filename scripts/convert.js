const fs = require('fs');
const path = require('path');
const m2j = require('markdown-to-json');

const outputroot = path.join(__dirname, "output", "profiles");
const inputroot = path.join(__dirname, "content", "profiles");

const options = {
    minify: false,
    width: 70,
    outfile: 'output.json',
    content: true,
};

const sources = fs.readdirSync(inputroot);
sources.forEach((curr) => {
    mdlist = []
    if (curr.includes('.md')) {
        mdlist.push(path.join(inputroot, curr));
        const extension = path.extname(curr);
        var slug = path.basename(curr, extension);
        const outfile = path.join(outputroot, slug + '.json');
        options.outfile = outfile;
        const output = m2j.parse(mdlist, options);
        if (output) {
            process.stdout.write(output);
        }
    }

}, {});


