# 🚀 Micrologic Web Application

A high-performance, SEO-optimized web application built using **Next.js**, designed for scalability, fast rendering, and modern user experience.

---

## 🌐 Live Demo

👉 https://micrologicglobal.com

---

## 📌 Features

* ⚡ Server-Side Rendering (SSR) & Static Site Generation (SSG)
* 🔍 SEO Optimized (Meta tags, structured data, sitemap)
* 🛡️ Security enhancements (Cloudflare protection, CAPTCHA)
* 📩 Contact form with backend API integration
* 📊 Analytics integration (Google Analytics / custom tracking)
* 🖼️ Image protection & tracking system
* 📱 Fully responsive UI
* 🚀 Optimized performance (Core Web Vitals friendly)

---

## 🛠️ Tech Stack

**Frontend:**

* Next.js
* React
* Tailwind CSS

**Backend:**

* Node.js
* Express.js

**Database:**

* PostgreSQL

**Deployment:**

* IIS (Windows Server)
* Azure VM

---

## 📂 Project Structure

```
micrologic/
├── components/        # Reusable UI components
├── pages/             # Next.js pages (routes)
├── public/            # Static assets
├── styles/            # Global styles
├── api/               # Backend API routes
├── utils/             # Helper functions
└── server.js          # Custom backend server
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/micrologic.git
cd micrologic
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Setup environment variables

Create a `.env` file:

```env
PORT=5001
DATABASE_URL=your_database_url
EMAIL_SERVICE=your_email_config
CAPTCHA_SECRET=your_secret_key
```

---

## ▶️ Running the Application

### Development

```bash
npm run dev
```

### Production

```bash
npm run build
npm start
```

---

## 🔐 Security Features

* Cloudflare CAPTCHA integration
* Rate limiting for APIs
* IP tracking for suspicious activities
* Protected image downloads

---

## 📈 SEO Optimization

* Dynamic meta tags
* Open Graph & Twitter cards
* Sitemap & robots.txt
* Fast loading (Lighthouse optimized)

---

## 🧪 API Endpoints

| Method | Endpoint     | Description             |
| ------ | ------------ | ----------------------- |
| POST   | /api/contact | Send contact form email |
| POST   | /api/log     | Track user activity     |

---

## 🚀 Deployment

Deployed on:

* Azure Virtual Machine
* IIS with Node.js (via iisnode or reverse proxy)

---

## 🐞 Known Issues

* Ensure CAPTCHA is properly configured in production
* Email service may fail without valid SMTP setup

---

## 🤝 Contributing

Contributions are welcome! Please fork the repo and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed by **SREERAG P K**

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---