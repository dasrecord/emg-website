const fs = require('fs');
const csv = require('csv-parser');

const results = [];
let id = 1;

fs.createReadStream('./src/stores/roster.csv')
    .pipe(csv())
    .on('data', (data) => {
        results.push({
            "id": id++,
            "first_name": data["First Name"],
            "last_name": data["Last Name"],
            "email": data["Email"],
            "url": data["Website URL"],
            "sector": data["Sector"],
            "artist_alias": data["Artist Name"],
            "job_title": data["Job Title"],
        });
    })
    .on('end', () => {
        fs.writeFile('./src/stores/roster.json', JSON.stringify(results, null, 2), 'utf8', function(err){
            if(err) {
                console.log('Error writing file', err);
            } else {
                console.log('Successfully converted roster');
            }
        });
    });