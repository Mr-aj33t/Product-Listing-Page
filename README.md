# E-Commerce Product Listing Page

A pixel-perfect, responsive e-commerce product listing page built with Next.js, TypeScript, and Tailwind CSS. This project recreates a modern product catalog with advanced filtering, sorting, and pagination features.

## 🚀 Features

### Core Functionality
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Product Grid**: Clean, card-based layout with hover effects
- **Advanced Filtering**: Filter by categories, price range, colors, and brands
- **Sorting Options**: Sort by name, price, and popularity (ascending/descending)
- **Pagination**: Navigate through products with page numbers
- **Color Selection**: Visual color picker with product preview updates

### Components
- **Navbar**: Responsive navigation with cart indicator
- **Hero Banner**: Eye-catching promotional section
- **Sidebar**: Collapsible filter panel with expandable sections
- **Product Cards**: Rich product display with ratings, pricing, and quick actions
- **Pagination**: Smart pagination with ellipsis for large page counts
- **Footer**: Comprehensive footer with links and contact information

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: ARIA labels, keyboard navigation, focus management
- **Performance**: Optimized images, lazy loading, and efficient state management
- **Mobile-First**: Responsive design with mobile drawer navigation

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useMemo, useEffect)

## 📦 Installation

1. **Clone or download the project**
   ```bash
   cd frontend-assignment
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏃‍♂️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px and above

## 🎨 Design Features

### Product Cards
- High-quality product images with hover effects
- HOT badges for trending items
- Star ratings with review counts
- Original and discounted pricing
- Color selection with visual feedback
- Wishlist functionality

### Filtering System
- **Categories**: Nike, Adidas, Vans, etc.
- **Price Range**: Slider-based price filtering
- **Colors**: Visual color swatches
- **Brands**: Checkbox-based brand selection
- **Clear Filters**: One-click filter reset

### Sorting Options
- Name (A-Z / Z-A)
- Price (Low to High / High to Low)
- Popularity (Low to High / High to Low)

## 📊 Mock Data

The application includes 26 mock products with:
- Unique IDs and names
- Realistic pricing with discounts
- Star ratings and review counts
- Multiple color variants
- Category and brand classifications
- High-quality placeholder images

## ♿ Accessibility Features

- **Keyboard Navigation**: Full keyboard support
- **ARIA Labels**: Proper labeling for screen readers
- **Focus Management**: Visible focus indicators
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **Color Contrast**: WCAG compliant color schemes

## 📱 Mobile Experience

- **Collapsible Sidebar**: Drawer-style navigation on mobile
- **Touch-Friendly**: Optimized button sizes and spacing
- **Responsive Grid**: Adapts from 1 to 4 columns based on screen size
- **Mobile Menu**: Hamburger menu for navigation

## 🔧 Customization

### Adding New Products
Edit `/src/data/products.ts` to add new products:

```typescript
{
  id: 'unique-id',
  name: 'Product Name',
  price: 99.99,
  discountPrice: 79.99,
  discountPercent: 20,
  ratingValue: 4.5,
  ratingCount: 123,
  isHot: true,
  colors: ['#color1', '#color2'],
  category: 'Category',
  imageUrl: 'image-url',
  brand: 'Brand'
}
```

### Styling
- Modify Tailwind configuration in `tailwind.config.ts`
- Update global styles in `/src/app/globals.css`
- Customize component styles using Tailwind classes

## 🌟 Key Implementation Details

### State Management
- Centralized filter state with TypeScript interfaces
- Efficient product filtering and sorting with useMemo
- Pagination state synchronized with filters

### Performance Optimizations
- Image optimization with Next.js Image component
- Lazy loading for better initial page load
- Efficient re-renders with React hooks

### Code Organization
- Modular component architecture
- TypeScript interfaces for type safety
- Reusable utility functions
- Clean separation of concerns

## 🚀 Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

The application is optimized for deployment on platforms like Vercel, Netlify, or any Node.js hosting service.

## 📄 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

This is a frontend assignment project. For any improvements or suggestions, please follow standard Git workflow practices.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
