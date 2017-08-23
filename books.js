$(document).ready(function(){
  //console.log('working!')
  $.get(baseURL, allBooks)

})

baseURL = 'https://rocky-harbor-92850.herokuapp.com/books/'

function allBooks(data){
  //console.log(data)
  for(let i = 0; i < data.length; i++){
    let $id = data[i].id
    let $title = data[i].title
    let $genre = data[i].genre
    let $description = data[i].description
    let $coverURL = data[i].coverURL

    //console.log($title)
    let bookTable = `
    <div class="row">
        <div class="col s12 m7">
          <div class="card">
            <div class="card-image">
              <img src="${$coverURL}">
            </div>
            <div class="card-content">
              <h5 class="${$title}">${$title}</h5>
              <p><em>${$genre}</em></p>
              <p>${$description}</p>
            </div>
          </div>
        </div>
      </div>`

    $('.appendAllBooks').append(bookTable)
  }
}
