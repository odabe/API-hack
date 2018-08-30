//Function for api getData//
function getDataFromApi(){
}

//Render the searchbar and form with responsive button
const userPage = [
	{
	 page: `
    <u>Pick</u>
    <form action="#" class="js-search-form">
      <label for="query">
      <input id="input" class="controls" type="text" placeholder="What to chews...">
      <div id="map"></div>
      </label>
      <button type="submit" id="searchMap">Search</button>
    </form> 
      <br>
      <i><u>Chews</u></i>
      <br>
      <button type="button" class="favs-button"> Chews'n Ones!🍴</b></button>
        `
	},
  {
	 page: `
      <u>Chews'n Ones<u>
      <br>
      <button type="button" class="final"> Pick a bite!</button>
        `
	},
    {
	 page: `
      <u>WooHoo!<u>
      Go grab a bite!
      <br>
      <button type="button" class="home"><a href="index.html">Home 🏡!</b></a></button>
        `
	}
];
let pageIndex = 0;
//

// function and event listeners to switch between pages: search page and favorites page//
function startSearch() {
  //click on the taco button, takes you to search page
  $('#start-button').click(function() {
    const search = userPage [pageIndex];
    console.log('currentPageIndex = ' + pageIndex);
    $('#start-page').html(search['page']);
    // the Chews'n ones button takes you to a favorites page
    $('.favs-button').click(function(){
      const nextPageIndex = pageIndex + 1;
      nextPage(nextPageIndex);
    })
  });
}

//output of the favorites page
function nextPage(index){
  const search = userPage [index];
  console.log('currentPageIndex = ' + pageIndex);
  $('#start-page').html(search['page']);
      $('.final').click(function(){
      const nextPageIndex = pageIndex + 1;
      nextPage(nextPageIndex);
});
}
//Another page to show final results
function nextPage(index){
  const search = userPage [index];
  $('#start-page').html(search['page']);
      $('.final').click(function(){
      const nextPageIndex = index + 1;
      nextPage(nextPageIndex);
      });

 
}
// Render Results function//
function renderResults(result){
}
// function for dislike/"no,thanks" and favorites button//

//button that takes user to favorites //

//button that takes you back to search page//

//runs the buttons
startSearch();
