const fs = require('fs');
const path = require('path');
const m2j = require('markdown-to-json');

const outputroot = path.join(__dirname, "../.", "output");
const inputroot = path.join(__dirname, "../.", "content");

const content_types = ["articles", "categories", "pages", "profiles", "sites"]

const options = {
    minify: false,
    width: 70,
    outfile: 'output.json', // overwritten below
    content: true,
};
content_types.forEach((ct) => {
    const typeDir = path.join(inputroot, ct);
    const sources = fs.readdirSync(typeDir);
    sources.forEach((curr) => {
        mdlist = []
        // handle .md or .mdx
        if (curr.includes('.md')) {
            mdlist.push(path.join(typeDir, curr));
            // get the extension so we can strip it to find the slug
            const extension = path.extname(curr);
            // brian.md becomes 'brian'
            var slug = path.basename(curr, extension);

            //fs.mkdirSync(path.join(__dirname, "../.", "output", typeDir), { recursive: true })
            target_dir = path.join("output", ct);
            target_dir.split('/').reduce(
                (directories, directory) => {
                    directories += `${directory}/`;

                    if (!fs.existsSync(directories)) {
                        console.log("creating ", directories);
                        fs.mkdirSync(directories);
                    }

                    return directories;
                },
                '',
            );
            const outfile = path.join(target_dir, slug + '.json');
            options.outfile = outfile;
            const output = m2j.parse(mdlist, options);
            if (output) {
                process.stdout.write(output);
            }
        }

    }, {});
}, {})


