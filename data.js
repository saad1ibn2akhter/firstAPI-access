const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://jgentes-crime-data-v1.p.rapidapi.com/crime',
  params: {
    startdate: '9/19/2015',
    enddate: '9/25/2015',
    long: '-122.5076392',
    lat: '37.757815'
  },
  headers: {
    'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    'X-RapidAPI-Host': 'jgentes-Crime-Data-v1.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}