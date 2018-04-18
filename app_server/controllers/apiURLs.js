const apiURL = {
    server : 'http://localhost:3000/api/menu'
};

if (process.env.NODE_ENV === 'production') {
    apiURL.server = 'https://nguyentrang.azurewebsites.net/api/menu';
}

module.exports = apiURL;