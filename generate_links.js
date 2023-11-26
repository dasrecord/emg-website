const fs = require('fs');
const roster = require('./src/stores/roster.json');


const generateInternalLinks = (roster) => {
    const internal_domain = 'https://evolvedmusicgroup.web.app/internal/';
    let links = '';

    roster.forEach(artist => {
        const encodedAlias = encodeURIComponent(artist.artist_alias);
        const url = `${internal_domain}${encodedAlias}`;
        links += `${url}\n`;
    });

    return links;
}
const generateExternalLinks = (paths) => {
    const external_domain = 'https://evolvedmusicgroup.web.app/';
    let links = '';
    paths.forEach(paths => {
        links += `${external_domain}${paths}\n`;
    });
    return links;
}


const header_text = "EVOLVED MUSIC GROUP\n\n"
const internal_description = "INTERNAL MANAGEMENT TIMELINE LINKS\n\n";
const final_internal_text = header_text + internal_description + generateInternalLinks(roster);
fs.writeFileSync('EMG_INTERNAL_MANAGEMENT_LINKS.txt', final_internal_text);


const paths = [
    'slack',
    'discord',
    'twitch-assets',
    'contact',
    'bookings',
    'publishing-contract',
    'management-contract',
    'q&a',
    'a&r-meeting',
    'scouting-form',
    'internal-timelines'
]
const external_description = "IMPORTANT LINKS\n\n";
const final_external_text = header_text + external_description + generateExternalLinks(paths);
fs.writeFileSync('EMG_IMPORTANT_EXTERNAL_LINKS.txt', final_external_text);

