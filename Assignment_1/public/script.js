$(document).ready(() => {
  // well done for spotting this and logging to make sure it is working.
  console.log("HI!");
  $("form").submit(event => {
    event.preventDefault();
    console.log("Submitted!")
    // just needed to make this a get rather than a post
    axios.get('/random_quote').then(response => { // Posting bug.
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
