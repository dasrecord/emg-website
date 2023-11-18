const fs = require('fs');
const csv = require('csv-parser');

let dataObj = {};

fs.createReadStream('src/stores/placements.csv')
    .pipe(csv())
    .on('data', (row) => {
        let artist_name = row['\ufeffartist_name'] || row['artist_name'];
        if (dataObj[artist_name]) {
            dataObj[artist_name].push({track_name: row.track_name, url: row.track_url});
        } else {
            dataObj[artist_name] = [{track_name: row.track_name, url: row.track_url}];
        }
    })
    .on('end', () => {
        let dataArray = Object.keys(dataObj).map(artist_name => ({ artist_name, tracks: dataObj[artist_name] }));
        fs.writeFileSync('src/stores/placements.json', JSON.stringify(dataArray, null, 2));
        console.log('CSV file successfully processed');
    });