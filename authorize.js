const Http = new XMLHttpRequest();
const url='https://accounts.spotify.com/authorize?client_id=6484b8d0c92b492dbb82ee07222e4002&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&state=34fFs29kd09';
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText)
}