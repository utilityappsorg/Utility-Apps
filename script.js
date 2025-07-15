document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const externalUrl = this.getAttribute('data-url');
    document.getElementById('app-frame').src = externalUrl;
  });
});
