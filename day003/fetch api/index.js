if (!('fetch' in window)) {
  console.log('Fetch API not found, try including the polyfill');
}

var headers = new Headers({
  "Content-Type": "application/json; charset=UTF-8",
});

headers.set("Content-Type", "text/html");
headers.append("X-Custom-Header", "AnotherValue");
headers.delete("X-Custom-Header");
headers.get("Content-Length")

var req = new Request('http://api.tvmaze.com/shows/2246', {
  method: 'get', 
  //headers: headers,
});

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    console.log(response);
    console.log(response.headers.get('Content-Type'));  
    console.log(response.headers.get('Date'));

    console.log(response.status);  
    console.log(response.statusText);  
    console.log(response.type);  
    console.log(response.url);  
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

function parseJson(response) {
  return response.json() // response.json() also is a promise
}

let request = fetch(req)
  .then(checkStatus)
  .then(parseJson)
  .then((data) => {
    console.log(data);
  }).catch((err) => {
    console.log("Opps, Something went wrong!", err);
  });

