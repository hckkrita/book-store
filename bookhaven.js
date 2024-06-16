function addBook() {
    const bookTitle = document.getElementById('add-book').value.trim();
    bookTitle && appendBook(bookTitle);
    document.getElementById('add-book').value = ''; 
}
function appendBook(title) {
    const ul = document.getElementById('book-list-ul');
    const li = document.createElement('li');
    li.innerHTML = `${title} 
        <i class="ri-star-line" onclick="toggleFavorite(event)"></i> 
        <i class="ri-delete-bin-line" onclick="removeBook(event)"></i>`;
    ul.appendChild(li);
}

function searchBook() {
    const searchTerm = document.getElementById('book-search').value.trim().toLowerCase();
    document.querySelectorAll('#book-list-ul li').forEach(book => {
        book.style.backgroundColor = book.textContent.toLowerCase().includes(searchTerm) ? 'yellow' : '';
    });
}

function toggleFavorite(event) {
    const starIcon = event.target;
    starIcon.classList.toggle('ri-star-line');
    starIcon.classList.toggle('ri-star-fill');
    starIcon.classList.toggle('favorite');
}

function removeBook(event) {
    event.target.parentElement.remove();
}


document.getElementById('book-search').addEventListener('input', function() {
    !this.value.trim() && document.querySelectorAll('#book-list-ul li').forEach(book => {
        book.style.backgroundColor = '';
    });
});
