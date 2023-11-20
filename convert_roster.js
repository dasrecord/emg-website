const fs = require('fs');
const csv = require('csv-parser');

const results = [];
let id = 1;

fs.createReadStream('./src/stores/roster.csv')
    .pipe(csv())
    .on('data', (data) => {
        const existingArtist = results.find(artist => artist.artist_alias === data["What is your Official Artist Alias?"]);
        if (!existingArtist) {
            results.push({
                "id": id++,
                "email": data["What is your email?"],
                "artist_alias": data["What is your Official Artist Alias?"],
                "country": data["Which country are you based in?"],
                "age": data["How old are you?"],
                "act": data["What is your act?"],
                "other": data["Other"],
                "genre": data["What genre of music best describes your act?"],
                "unique_selling_points": data["What do you feel are your unique selling points?"],
                "long_bio": data["Long Bio:"],
                "short_bio": data["Short Bio:"],
                "additional_talents": data["Do your have any additional creative talents we should be aware of?"],
                "talents_details": data["Please provide details of these talents:"],
                "logo": data["Please Upload Your Logo:"],
                "headshot": data["Please Upload Your Headshot:"],
                "artist_rider": data["Please Upload Your Artist Rider:"],
                "facebook_link": data["Facebook link:"],
                "instagram_link": data["Instagram link:"],
                "twitter_link": data["Twitter link:"],
                "youtube_link": data["YouTube link:"],
                "spotify_link": data["Spotify link:"],
                "bandcamp_link": data["Bandcamp link:"],
                "beatport_link": data["Beatport link:"],
                "soundcloud_link": data["Soundcloud link:"],
                "twitch_link": data["Twitch link:"],
                "sound_better_link": data["Sound Better link:"],
                "website_link": data["Artist Website link:"],
                "other_link": data["Any Other Important link:"],
                "start_date": data["Start Date (UTC)"],
                "submit_date": data["Submit Date (UTC)"],
                "network_id": data["Network ID"],
                "tags": data["Tags"]
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