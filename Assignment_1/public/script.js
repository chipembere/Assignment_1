$(document).ready(() => {
  console.log("HI!");
  $("form").submit(event => {
    event.preventDefault();
    console.log("Submitted!")
    axios.post('/random_quote').then(response => {
      quote = response.data;
      console.log(quote);
      $("#text").css({
        "text-align": "center",
        "min-height": "150px",
        display: "flex",
        "justify-content": "center",
        "align-items": "center"
      });
      $("#text").html(quote);
    });
  });
});
