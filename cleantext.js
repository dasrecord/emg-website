const fs = require('fs');

fs.readFile('src/stores/about_us.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log(err);
    }
    let result = data.replace(/\[.*?\]/g, '');

    fs.writeFile('public/about_us.txt', result, 'utf8', function(err) {
        if (err) return console.log(err);
    });
});