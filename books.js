$(document).ready(function(){
  //console.log('working!')
  $.get(baseURL, allBooks)

})

baseURL = 'https://rocky-harbor-92850.herokuapp.com/books/'

function newBook(event){
  let newBookForm = `
  <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <input id="id" type="text" class="validate">
          <label for="first_name">Title</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
          <input id="id" type="text" class="validate">
          <label for="first_name">Genre</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input type="text" class="validate">
          <label for="disabled">Description</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="password" type="password" class="validate">
          <label for="password">book cover url</label>
        </div>
      </div>
      </div>
    </form>
  </div>
  `

  let allBooksButton = `
  <div class="allBook">
    <button class="waves-effect waves-light btn-large allBooksButton" type="button" name="button"><i class="material-icons left">book</i></button>
    <h4>see all books</h4>
  </div>`

  $('.newBookForm').html(newBookForm)

  $('.newBook').html(allBooksButton)

  $('.allBooksButton').click((event) => {
    // $('.newBookForm').empty()
    // $.get(baseURL, allBooks)
    window.relocation.reload()
  })
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
