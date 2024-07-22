document.addEventListener("DOMContentLoaded", function () {
  let url = window.location.href;
  let findid = url.indexOf("id=");
  let id = url.substring(findid + 3);

  if (id) {
    fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
      .then((res) => {
        if (res.status == 200) {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    window.location.assign("http://127.0.0.1:5500/index.html");
  }
});
