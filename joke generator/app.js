document.querySelector(".get-jokes").addEventListener("click", getjokes);
function getjokes(e) {
    const number = document.querySelector('input[type="Number"]');

// iniating the xhr object
    const xhr = new XMLHttpRequest();
    // here in open we specify the type of request we gonna make ex:- "get","post"
    xhr.open("GET", `http://api.icndb.com/jokes/random/${number.value}`, true)
    e.preventDefault();

    //onload function we goona do whatever we want to do with the data we get from the request
    xhr.onload = function () {
        if (this.status === 200) {
            // const response=this.responseText;
            // console.log(response);
            // by this we receive a string
            // using the below method will turn that into a object
            const response = JSON.parse(this.responseText);
            console.log(response);
            let output = " ";
            if (response.type === "success") {
                response.value.forEach(function (joke) {
                    output += `<li>${joke.joke}</li>`
                })
            }
            else {
                output += `<li>something went wrong</li>`
            }
            document.querySelector('.jokes').innerHTML = output;

        }
    }
    xhr.send();
}