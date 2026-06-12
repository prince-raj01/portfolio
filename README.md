# Prince Raj · Portfolio 🚀

Dynamic personal portfolio of **Prince Raj**, B.E Computer Science student at SKIT Bangalore.

## ✏️ How to update content

All skills, projects, and typing phrases live in `js/main.js` as simple arrays. Edit them to update the site — no HTML changes needed.

## 🚀 How to Run Locally

### Prerequisites
- Git installed
- A web browser
- Optional: Python 3, Node.js (for advanced features)

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/prince-raj01/prince-project.git
   cd prince-project
   ```

2. **Run a local server** (choose one):

   **Option A: Python**
   ```bash
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your browser

   **Option B: Node.js with http-server**
   ```bash
   npx http-server
   ```
   Then open the URL shown in terminal

   **Option C: VS Code Live Server**
   - Right-click on `index.html` → "Open with Live Server"

3. **Edit content**:
   - Update `js/main.js` to change skills, projects, or typing phrases
   - Modify `css/style.css` for styling changes
   - Edit HTML files directly for structure changes

4. **Preview changes**:
   - Your browser will auto-refresh with Live Server
   - Manual refresh (F5) if running basic HTTP server

## 🌐 Deployment

The site auto-deploys to **GitLab Pages** on every push to `main` via `.gitlab-ci.yml`.
Find your live URL under **Deploy → Pages** in the project sidebar.

_Last deployed: 2026-06-12_

## 💻 GitHub Codespaces Setup

Quick start your development environment in the cloud:

1. **Open in Codespace**:
   - Go to your GitHub repository
   - Click `Code` → `Codespaces` → `Create codespace on main`
   - Wait for initialization (~2 min)

2. **Features included**:
   - ✅ Git & GitHub CLI pre-installed
   - ✅ Live Server for local preview
   - ✅ Code formatter (Prettier) with auto-save
   - ✅ Tailwind CSS intellisense

3. **Preview your site**:
   - Right-click on `index.html` → "Open with Live Server"
   - Or press `Ctrl+K, Ctrl+V` to open port forwarding

4. **Make changes & push**:
   ```bash
   git add .
   git commit -m "Your changes"
   git push origin main
   ```
   → GitLab Pages auto-deploys instantly!
