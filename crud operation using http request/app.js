const http = new easyHTTP;
// Get Posts 
// in easyhttp get method passing the url and the function as arguments
http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts) {
  if(err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});

// Get Single Post
http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Create Data to post
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post request
http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Update Post request
http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post) {
  if(err) {
    console.log(err);
  } else {
    console.log(post);
  }
});

// Delete Post request
http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response) {
  if(err) {
    console.log(err);
  } else {
    console.log(response);
  }
});