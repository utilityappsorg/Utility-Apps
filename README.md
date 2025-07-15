# 🧰 Utility Apps Dashboard

Welcome to the **Utility Apps Dashboard**, a mobile-responsive web interface that acts as a central hub to access and display multiple utility apps in one place. Built with **HTML, CSS, and JavaScript**, this dashboard loads external web apps directly into the main content area via an iframe.

---

## 📸 Demo

![Dashboard Screenshot](screenshot.png) <!-- Optional: Add a screenshot of your dashboard -->

---

## 🚀 Features

- 📱 **Mobile-Responsive Layout**
- 🧭 **Sidebar Navigation**
- 🌐 **External App Integration**
- 🧩 **Modular Design** – Easily add or remove app links
- 💡 **Simple Tech Stack** – No frameworks required

---


---

## 🔧 How It Works

- The sidebar contains links (`<a>`) with a `data-url` attribute pointing to external apps.
- When a user clicks a link, JavaScript dynamically sets the `<iframe>`'s `src` to load that app.

---

## 🌐 Add Your Own Apps

To add a new utility app:

1. Edit the `index.html` file.
2. Add a new `<li>` with an external URL:
   ```html
   <li><a href="#" data-url="https://yourapp.com">My New App</a></li>


📦 Technologies Used
HTML5

CSS3 (Flexbox, Media Queries)

JavaScript (Vanilla)

🧪 To Run Locally
Clone this repo:
git clone https://github.com/yourusername/Utility-Apps.git
cd Utility-Apps

📜 License
This project is open source and available under the MIT License.

✨ A Project by Choicest Fruit®
Knowledge and Technology Serving the Welfare of Humanity.

