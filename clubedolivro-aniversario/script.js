const buttons = document.querySelectorAll('.select-book');

buttons.forEach(button => {
    const book = button.closest('.book');
    const bookId = book.dataset.id;

    // Verfica se o livro já foi escolhido
    if (localStorage.getItem(bookId) === 'chosen') {
        button.textContent = 'Livro Escolhido';
        button.disabled = true;
    }

    button.addEventListener('click', () => {
        localStorage.setItem(bookId, 'chosen');
        button.textContent = 'Livro Escolhido';
        button.disabled = true;
    });
});

//querySelectorAll: seleciona todos os botões com a classe 'select-book' e adiciona um evento de clique a cada um deles. Quando clicado, o texto do botão muda para 'Livro Escolhido' e o botão é desativado para evitar múltiplos cliques.
//forEach: itera sobre cada botão selecionado.
//addEventListener: adiciona um ouvinte de evento para o clique do botão.
//disabled = true: desativa o botão após a escolha do livro.

//localStorage: armazena a escolha do livro no armazenamento local do navegador, permitindo que a escolha persista mesmo após a página ser recarregada.
//closest: encontra o elemento pai mais próximo com a classe 'book' para obter o ID do livro.
//dataset.id: acessa o atributo de dados personalizado 'data-id' do elemento do livro para identificar qual livro foi escolhido.
//textContent: altera o texto exibido no botão para indicar que o livro foi escolhido.
//if (localStorage.getItem(bookId) === 'chosen'): verifica se o livro já foi escolhido anteriormente, alterando o estado do botão conforme necessário.
//if (localStorage.setItem(bookId, 'chosen')): armazena a escolha do livro no armazenamento local quando o botão é clicado.

// Essas funcionalidades juntas criam uma experiência interativa para os usuários escolherem livros em uma lista, com persistência de estado usando o armazenamento local do navegador.