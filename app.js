document.addEventListener('DOMContentLoaded', function () {
  const booksEndpoint = 'https://raw.githubusercontent.com/prof-lucassilva/api-books/main/livros.json';
  const bookList = document.getElementById('book-list');

  fetch(booksEndpoint)
    .then(response => response.json())
    .then(books => {
      books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add(
          'bg-white',
          'rounded-lg',
          'shadow-md',
          'p-4',
          'hover:shadow-xl',
          'transition',
          'transform',
          'hover:scale-105'
        );

        bookElement.innerHTML = `
          <h3 class="text-xl font-semibold mb-2">${book.titulo}</h3>
          <img src="${book.imagem}" alt="${book.titulo}" class="w-full h-auto rounded mb-3">
          <p class="text-sm text-gray-700">${book.resumo}</p>
        `;

        bookList.appendChild(bookElement);
      });
    })
    .catch(error => {
      console.error('Erro ao carregar os livros:', error);
      bookList.innerHTML = `<p class="text-red-500">Erro ao carregar os livros. Tente novamente mais tarde.</p>`;
    });
});
