document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const toggleBtn = document.getElementById('toggleSidebar');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('show');
        });
    }
    // Attach the weatherApp function to the window object here
    window.weatherApp = function() {
        document.getElementById('app-content').innerHTML = `
            <iframe src="https://utilityapps.org/weatherapp" width="100%" height="500" style="border:none;"></iframe>
        `;
    };
    window.imageResizerApp = function() {
        document.getElementById('app-content').innerHTML = `
            <iframe src="https://utilityappsorg.github.io/Image-Resizer/" width="100%" height="500" style="border:none;"></iframe>
        `;
    };
    window.temperatureConverterApp = function() {
        document.getElementById('app-content').innerHTML = `
            <iframe src="https://utilityappsorg.github.io/temperature-converter/" width="100%" height="500" style="border:none;"></iframe>
        `;
    };
    window.resumeBuilderApp = function() {
        document.getElementById('app-content').innerHTML = `
            <iframe src="https://utilityappsorg.github.io/resume-builder/" width="100%" height="500" style="border:none;"></iframe>
        `;
    };
});

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


