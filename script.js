document.getElementById('articleForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Перешкоджає стандартній відправці форми

    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const text = document.getElementById('text').value.trim();
    
    // Перевірка на наявність усіх полів
    if (!title || !author || !text) {
        alert('Будь ласка, заповніть усі поля.');
        return;
    }

    // Зчитування статей з localStorage
    let articles = JSON.parse(localStorage.getItem('articles')) || [];
    
    // Перевірка на дублювання заголовка
    if (articles.some(article => article.title === title)) {
        alert('Стаття з такою назвою вже існує');
        return;
    }

    // Генерація нового ID для статті
    const id = articles.length + 1;

    // Створення нової статті
    const newArticle = {
        id: id,
        title: title,
        author: author,
        text: text,
      
    };

    // Додавання статті до localStorage
    articles.push(newArticle);
    localStorage.setItem('articles', JSON.stringify(articles));

    // Перенаправлення на нову статтю
    window.location.href = `article.html?id=${id}`;
});
