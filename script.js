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
});
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const appUrl = this.getAttribute('data-app');
    document.getElementById('app-frame').src = appUrl;
  });
});
