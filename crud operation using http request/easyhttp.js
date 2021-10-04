function easyHTTP() {
    this.http = new XMLHttpRequest();
  }
  
  
  // Make an HTTP GET Request
  // in easy http class am defining a method called get in prototypes
  easyHTTP.prototype.get = function(url, callback) {
     // as this is a method in easyhttp we have acess to its properties in this function "http"
    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function() {
       // checking the staus of http request status
      if(self.http.status === 200) {
        callback(null, self.http.responseText);
      } else {
        callback('Error: ' + self.http.status);
      }
    }
  
    this.http.send();
  }
  
  
  // Make an HTTP POST Request
  // function takes url,data we want to post,callback function
  easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    // we have to set request header inorder to post the data and convert data into json format
    this.http.setRequestHeader('Content-type', 'application/json');
    let self = this;
    this.http.onload = function() {
      callback(null, self.http.responseText);
    }
    // we are sending data to the webbrowser so we have to stringify the data
    this.http.send(JSON.stringify(data));
  }
  
  
  // Make an HTTP PUT Request
  easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
   // we have to set request header inorder to post the data and convert data into json format
    this.http.setRequestHeader('Content-type', 'application/json');
    let self = this;
    this.http.onload = function() {
      callback(null, self.http.responseText);
    }
    // we are sending data to the webbrowser so we have to stringify the data
    this.http.send(JSON.stringify(data));
  }
  
  // Make an HTTP DELETE Request
  easyHTTP.prototype.delete = function(url, callback) {
    // making a delete request
    this.http.open('DELETE', url, true);
    let self = this;
    this.http.onload = function() {
      if(self.http.status === 200) {
        callback(null, 'Post Deleted');
      } else {
        callback('Error: ' + self.http.status);
      }
    }
    this.http.send();
  }
  