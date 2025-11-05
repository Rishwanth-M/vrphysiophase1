# VR Physio & Rehab Website

## Overview
A professional physiotherapy and rehabilitation clinic website built with HTML, CSS (Bootstrap 5), and JavaScript. The website showcases VR Physio & Rehab's services, team, and contact information with a modern, engaging design.

## Project Structure
- **index.html** - Modern homepage with hero carousel, Why Choose Us, statistics/data viz, testimonials, FAQ, services, and contact
- **About.html** - Detailed information about the clinic, team, and core values with glassmorphism design
- **Services.html** - Comprehensive service cards with hover effects and modern layout
- **Treatments.html** - Treatment options and specializations (original design)
- **Pilates.html** - Pilates studio information (original design)
- **book.html** - Modern appointment booking page with multiple contact methods
- **/css/modern-redesign.css** - Custom modern styles with lime blue theme, glassmorphism, animations
- **/js/modern-animations.js** - Scroll animations, Chart.js data visualizations, FAQ accordion, interactive components
- **/css/** - Bootstrap and original custom stylesheets
- **/js/** - Bootstrap, jQuery, and custom JavaScript
- **/images/** - Website images and assets
- **server.py** - Python HTTP server with reusable TCP socket configuration

## Technology Stack
- HTML5
- CSS3 with Bootstrap 5
- JavaScript with jQuery and Chart.js 4.4.0
- Python 3.11 (for serving the static site)
- Poppins font family (Google Fonts)

## Running the Project
The website is served using a Python HTTP server on port 5000. The server includes:
- Cache-control headers (no-cache) to ensure changes are immediately visible
- Reusable TCP server configuration for seamless restarts
- Serves all static files from the project root

Start the server: `python3 server.py`

## Recent Changes
- **October 29, 2025**: Complete modern redesign implementation
  - Created modern-redesign.css with lime blue theme (#00D9FF, #20c997, #48bdc5)
  - Implemented glassmorphism effects throughout
  - Added Chart.js data visualizations for recovery statistics
  - Created Why Choose Us section with icon cards
  - Implemented enhanced testimonials carousel
  - Added FAQ accordion section
  - Redesigned navbar with sticky behavior
  - Fixed navigation links to use correct capitalized filenames
  - Updated server.py for better port reusability
  - Architect-approved final implementation

## Design System
**Color Palette:**
- Primary Blue: #00D9FF (bright cyan blue)
- Accent Teal: #20c997
- Secondary Blue: #48bdc5
- White: #FFFFFF
- Light Gray: #F8FAFB
- Text Primary: #2C3E50
- Text Secondary: #6C757D

**Features:**
- Glassmorphism cards with backdrop blur
- Smooth scroll animations and fade-in effects
- Gradient backgrounds and modern typography (Poppins)
- Interactive Chart.js visualizations for patient metrics
- Responsive design with mobile-first approach
- Professional medical brand identity maintained
- All original content preserved

## Key Sections Implemented
1. **Hero Section**: Modern carousel with gradient overlay and CTAs
2. **Why Choose Us**: 6 icon cards highlighting clinic strengths
3. **Statistics & Data Visualization**: Animated counters, Chart.js charts, progress bars
4. **Testimonials**: Carousel with patient reviews and avatars
5. **FAQ**: Accordion-style frequently asked questions
6. **Services**: Glassmorphism cards with hover effects
7. **Contact**: Modern form with glass card design
8. **About**: Core values, team information, clinic overview
9. **Booking**: Multiple booking methods with modern forms
