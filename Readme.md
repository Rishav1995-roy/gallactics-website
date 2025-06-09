# Fia Website

A modern, responsive landing page for Fia - an AI-powered financial research platform that provides Wall Street-grade research at zero cost for the Indian market.

## 🌟 Features

- **Wall Street Grade Research**: Institutional-quality reports delivered instantly
- **AI-Powered Analysis**: Deep fundamental & technical analysis
- **Sentiment Analysis**: Comprehensive market sentiment insights
- **Zero Cost**: Free access to premium research tools
- **Indian Market Focus**: Specialized for Indian investment decisions

## 🚀 Quick Start

### Prerequisites
- A modern web browser
- A local web server (optional, for development)

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd fia-website
   ```

2. **Serve the files**
   
   **Option A: Using Python (recommended)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option B: Using Node.js**
   ```bash
   npx serve .
   ```
   
   **Option C: Using Live Server (VS Code)**
   - Install the Live Server extension
   - Right-click on `index.html` and select "Open with Live Server"

3. **Open in browser**
   Navigate to `http://localhost:8000` (or the port shown in your terminal)

## 📁 Project Structure

```
fia-website/
├── index.html              # Main landing page
├── menifest.json           # PWA manifest file
├── service_worker.js       # Service worker for PWA functionality
├── styles/
│   ├── main.css           # Primary stylesheet
│   └── style.css          # Alternative/unused stylesheet
├── scripts/
│   └── app.js             # JavaScript functionality
└── assets/
    └── icons/
        ├── first_icon.svg     # Deep fundamental analysis icon
        ├── second_icon.svg    # Sentiment analysis icon
        ├── third_icon.svg     # Clear reports icon
        ├── app_logo.svg # Company logo
        └── send_button_icon.svg # Search button icon
```

## 🎨 Design Features

### Responsive Design
- **Mobile-first approach** with breakpoints at:
  - Mobile: < 600px
  - Tablet: 600px - 899px  
  - Desktop: 900px+
  - Large screens: 1134px+

### Visual Elements
- **Hero Section**: Full-screen background with overlay and search functionality
- **Insights Grid**: Three-column layout showcasing key features
- **Use Cases**: Video gallery with YouTube embeds
- **Clean Typography**: Using Segoe UI and Inter fonts

### Progressive Web App (PWA)
- Service worker for offline functionality
- Web app manifest for installability
- Optimized for mobile and desktop experiences

## 🛠 Technology Stack

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with Flexbox and Grid
- **Vanilla JavaScript**: Core functionality without frameworks
- **PWA**: Service worker and manifest for app-like experience
- **SVG Icons**: Scalable vector graphics for crisp visuals

## ⚙️ Functionality

### Search Bar
- Interactive search input in hero section
- Enter key support for message submission
- Alert-based feedback system (placeholder functionality)

### Video Integration
- Embedded YouTube videos showcasing use cases
- Lazy loading for performance optimization
- Responsive iframe scaling

### PWA Features
- Installable on mobile devices
- Offline caching capability
- App-like user experience

## 🎯 Key Sections

### 1. Hero Section
- Compelling headline: "Wall Street Grade Research at Zero Cost"
- Interactive search bar for user queries
- Professional background with overlay

### 2. Insights Section
- **Deep Fundamental & Technical Analysis**: Comprehensive market analysis
- **Deep Sentiment Analysis**: Market sentiment insights
- **Clear, Actionable Reports**: Easy-to-understand findings

### 3. Use Cases
- Six embedded YouTube videos demonstrating platform capabilities
- Responsive grid layout adapting to screen sizes

## 🔧 Customization

### Colors
- Primary background: `#000000` (Black)
- Text: `#ffffff` (White)
- Secondary text: `#cccccc` (Light gray)
- Input background: `#252525` (Dark gray)

### Fonts
- Headlines: "Instrument" sans-serif
- Body text: "Inter" sans-serif
- Fallback: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif

### Breakpoints
```css
/* Mobile */
@media (max-width: 599px)

/* Tablet */
@media (min-width: 600px) and (max-width: 899px)

/* Desktop */
@media (min-width: 900px)

/* Large Desktop */
@media (min-width: 1134px)
```

## 🚀 Deployment

### Static Hosting
Deploy to any static hosting service:
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Enable in repository settings
- **Firebase Hosting**: Use Firebase CLI

### PWA Deployment
The site includes PWA functionality:
- Users can install it as an app on mobile devices
- Offline functionality through service worker
- Fast loading with cached resources

## 📱 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta viewport for mobile responsiveness
- Descriptive alt texts for images
- Clean URL structure
- Fast loading times

## 📝 Notes

- The current JavaScript functionality shows alert messages (placeholder)
- YouTube videos are embedded with `loading="lazy"` for performance
- Service worker caches main resources for offline use
- The manifest.json enables PWA installation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

**Fia**  
CIN no. 12345676890

For support or inquiries, please use the search functionality on the website.

---

*Built with ❤️ for smarter investment decisions in the Indian market.*