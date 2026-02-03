const buttons = document.querySelectorAll('.select-book');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        button.textContent = 'Livro Escolhido';
        button.disabled = true;
    });
});

//querySelectorAll: seleciona todos os botões com a classe 'select-book' e adiciona um evento de clique a cada um deles. Quando clicado, o texto do botão muda para 'Livro Escolhido' e o botão é desativado para evitar múltiplos cliques.
//forEach: itera sobre cada botão selecionado.
//addEventListener: adiciona um ouvinte de evento para o clique do botão.
//disabled = true: desativa o botão após a escolha do livro.