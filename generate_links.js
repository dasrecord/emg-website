const fs = require('fs');
const roster = require('./src/stores/roster.json');


const generateInternalLinks = (roster) => {
    const internal_domain = 'https://evolvedmusicgroup.com/internal/';
    let links = '';

    roster.forEach(artist => {
        const encodedAlias = encodeURIComponent(artist.artist_alias);
        const url = `${internal_domain}${encodedAlias}`;
        links += `${url}\n`;
    });

    return links;
}
const generateExternalLinks = (paths) => {
    const external_domain = 'https://evolvedmusicgroup.com/';
    let links = '';
    paths.forEach(paths => {
        links += `${external_domain}${paths}\n`;
    });
    return links;
}


const header_text = "EVOLVED MUSIC GROUP\n\n"
const internal_description_a = "INTERNAL MANAGEMENT TIMELINE FOLDER\n";
const internal_folder = "https://evolvedmusicgroup.com/internal-timelines\n\n";
const internal_description_b = "INTERNAL MANAGEMENT ACCOUNTABILITY LINKS\n"
const final_internal_text = header_text + internal_description_a + internal_folder + internal_description_b + generateInternalLinks(roster);
fs.writeFileSync('EMG_INTERNAL_MANAGEMENT_LINKS.txt', final_internal_text);


const paths = [
    'about',
    'consultacny',
    'intake',
    'demos',
    'team',
    'roster',
    'placements',
    'contact',
    'bookings',
    'publishing-contract',
    'management-contract',
    'q&a',
    'a&r-meeting',
    'scouting-form',
    'facebook',
    'instagram',
    'linkedin',
    'youtube',
    'slack',
    'discord',
    'twitch-assets',
]
const external_description = "IMPORTANT LINKS\n";
const final_external_text = header_text + external_description + generateExternalLinks(paths);
fs.writeFileSync('EMG_IMPORTANT_EXTERNAL_LINKS.txt', final_external_text);

