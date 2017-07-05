var windowState = {
  nav: ""
};

$.get("/api/scrape", function(err, res) {
  if(err)
  {
    console.log(err);
  }
  else
  {
    console.log(res);
  }
})
