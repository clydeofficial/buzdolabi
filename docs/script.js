document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    const content = document.getElementById('content');

    const loadContent = (lang) => {
        fetch(`language/${lang}.md`)
            .then(response => response.text())
            .then(text => {
                content.innerHTML = marked.parse(text);
            })
            .catch(() => content.innerHTML = '<p>Error loading content.</p>');
    };

    languageSelect.addEventListener('change', (e) => {
        loadContent(e.target.value);
    });

    loadContent(languageSelect.value);
});