$(document).ready(function(){
  //console.log('working!')
  $.get(baseURL, allBooks)

})

const baseURL = 'https://rocky-harbor-92850.herokuapp.com/books/'
// const baseURL = 'http://localhost:5000/books/'

function newBook(event){
  let newBookForm = `
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="id" type="text" class="title">
          <label for="title">Title</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="id" type="text" class="genre">
          <label for="genre">Genre</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" class="description">
          <label for="description">Description</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="text" class="coverURL">
          <label for="coverURL">book cover url</label>
        </div>
      </div>
      </div>
    </form>
  </div>
  `

  let allBooksButton = `
  <div class="allBook">
    <button class="waves-effect waves-light btn-large saveBookButton" type="button" name="button"><i class="material-icons left">book</i></button>
    <h4>save book</h4>
  </div>`

  $('.appendAllBooks').html(newBookForm)

  $('.newBook').html(allBooksButton)

  $('.saveBookButton').click(function(){
    var postBody = {
      title: $('.title').val(),
      genre: $('.genre').val(),
      description: $('.description').val(),
      coverURL: $('.coverURL').val()
    }
    $.post(baseURL, postBody).then(data => {
      window.location.reload()
    })
  })

  // $('.saveBookButton').click((event) => {
  //   window.relocation.reload()
  // })

  // $('.allBooksButton').click((event) => {
    // $('.newBookForm').empty()
    // $.get(baseURL, allBooks)
    //window.relocation.reload()
  // })
  ///delete all this and do a window reload duhhhhh
}

function allBooks(data){

  for(let i = 0; i < data.length; i++){
    let $id = data[i].id
    let $title = data[i].title
    let $genre = data[i].genre
    let $description = data[i].description
    let $coverURL = data[i].coverURL

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
            <button id="${$id}"class="waves-effect waves-light btn-large editOrRemoveBookButton" type="button" name="button">edit</button>
            <button id="${$id}" class="waves-effect waves-light btn-large removeButton" type="button" name="button">remove</button>
          </div>
        </div>
      </div>`

    $('.appendAllBooks').append(bookTable)

    // $('.editOrRemoveBookButton').click((event) => {
    //   editOrRemoveBook(event, data)
    // })

    $('.newbookButton').click(newBook)
    //
    // $('.removeButton').click(removeBook)
  }
}
