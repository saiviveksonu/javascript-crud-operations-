// we initiated a easyhttp class and inside that class methods as get,post,put,delete
class EasyHTTP {
    // Make an HTTP GET Request 
    async get(url) {
      // this function returns a promise so awit until it return the promise 
      // here we are fetching a url so its return the response or promise whether anything found or not
      const response = await fetch(url);
      const resData = await response.json();
      return resData;
    }
  
  
    // Make an HTTP POST Request
    async post(url, data) {
      const response = await fetch(url,
        // giving the headers and the body
         {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      // await for the response and then send the response
      const resData = await response.json();
      return resData;
    }
  
     // Make an HTTP PUT Request
     async put(url, data) {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      const resData = await response.json();
      return resData;
    }
  
    // Make an HTTP DELETE Request
    async delete(url) {
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
        }
      });
      const resData = await 'Resource Deleted...';
      return resData;
    }
   }
  
   