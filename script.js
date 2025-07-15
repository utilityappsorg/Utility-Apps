document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const externalUrl = this.getAttribute('data-url');
    document.getElementById('app-frame').src = externalUrl;
  });

});

const sidebarLinks = document.querySelectorAll('.sidebar a');
const iframe = document.getElementById('app-frame');
const homepage = document.getElementById('homepage');

sidebarLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const url = this.getAttribute('data-url');
    if (url) {
      iframe.src = url;
      iframe.style.display = 'block';
      if (homepage) homepage.style.display = 'none';
    }
  });
});


