function renderTemp(data) {
    var el = document.getElementById('temperature');
    el.innerHTML = data.temperature + " °C";
  }
  
  // replace with the endpoint created in your deployment.
  var endpoint = 'https://hikaydu19g.execute-api.ap-southeast-2.amazonaws.com/dev/weather';
  
  fetch(endpoint, {mode: 'cors'})
    .then(function(resp){
      return resp.json();
    })
    .then(renderTemp);