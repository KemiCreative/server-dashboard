export const getServers = new Promise(result => {
  fetch('https://api.digitalocean.com/v2/droplets', {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      Authorization:
        'Bearer 18962c4acde000f9c872d219e0de62caaa23433ed87b05e744ed320c52927512'
    })
  })
    .then(response => response.json())
    .then(data => {
      console.log('data is', data);
      result(data.droplets);
    })
    .catch(error => console.log('error is', error));
});
