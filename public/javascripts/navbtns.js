function navMe()
{
  if(this.id == "scrape")
  {

  }
  else
  {
    windowState.nav = this.id;
    
  }
}

document.querySelector("#home").onclick = navMe;
document.querySelector("#scrape").onclick = navMe;
document.querySelector("#articles").onclick = navMe;
