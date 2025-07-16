var bookmarkName = document.getElementById('bookmarkName');
var bookmarkURL = document.getElementById('bookmarkURL');
var table = document.getElementById('tableContent')
var urls = [];

if(localStorage.getItem('urlDB')){
  urls = JSON.parse(localStorage.getItem('urlDB'))
  displayBookMark();
}

function getUrl() {
if(validateInputs(bookmarkName) & validateInputs(bookmarkURL)){
    var url = {
    uName: bookmarkName.value,
    link: bookmarkURL.value
  }
  urls.push(url);
  localStorage.setItem('urlDB',JSON.stringify(urls))
  clearCode();
  displayBookMark();
}
}

function clearCode() {
  bookmarkName.value = '';
  bookmarkURL.value = '';
}

function displayBookMark() {
  var cartona = '';
  for (var i = 0; i < urls.length; i++) {
    cartona += `<tr>
                <td>${i + 1}</td>
                <td>${urls[i].uName}</td>              
                <td>
                  <button class="btn btn-visit" data-index="0" fdprocessedid="epw3ht">
                    <a class="text-decoration-none text-white" target="_blank" href="${urls[i].link}"> <i class="fa-solid fa-eye pe-2"> </i>Visit</a>
                  </button>
                </td>
                <td>
                  <button onclick="deleteUrl(${i})" class="btn btn-delete pe-2" data-index="0" fdprocessedid="o808l">
                    <i class="fa-solid fa-trash-can"></i>
                    Delete
                  </button>
                </td>
            </tr>`
  }
  table.innerHTML = cartona;
}

function deleteUrl(elementIndex) {
  urls.splice(elementIndex, 1)
   localStorage.setItem('urlDB',JSON.stringify(urls));
  displayBookMark();
}

function validateInputs(element){

  var valiob ={
    bookmarkName :/^(\w{3,50})$/gm,
    bookmarkURL :/^(https:\/\/)?(www\.)?[A-Za-z0-9_\.]{1,}\.[a-z]{3,4}(\/)?$/gm
  }
 
 if(valiob[element.id].test(element.value)){
  element.classList.remove('is-invalid')
  element.classList.add('is-valid')
  return true;
 }
 else{
   element.classList.remove('is-valid')
  element.classList.add('is-invalid')
  return false;
 }
 
}