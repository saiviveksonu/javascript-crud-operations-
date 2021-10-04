
// initating the easyhttp class and the methods such as get,post,put,delete
class EasyHTTP {
    // Make an HTTP GET Request 
    get(url) {
      //as we are fetching a url it rturns a promise  
      return new Promise((resolve, reject) => {
        fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
      });
    }
    // Make an HTTP POST Request
    post(url, data) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
      });
    }
  
     // Make an HTTP PUT Request
     put(url, data) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: 'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
      });
    }
  
    // Make an HTTP DELETE Request
    delete(url) {
      return new Promise((resolve, reject) => {
        fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          }
        })
        .then(res => res.json())
        .then(() => resolve('Resource Deleted...'))
        .catch(err => reject(err));
      });
    }
   }
  
   