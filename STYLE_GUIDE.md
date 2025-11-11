# Aurora Brand & Style Guide

## Brand Identity

**Brand Name**: Aurora
**Tagline**: Illuminate Your Ideas
**Positioning**: Creative-focused MVP development platform for designers and creative agencies

---

## Color Palette

### Primary Colors
```css
Purple 600:  #a855f7
Violet 600:  #9333ea
Purple 700:  #7e22ce
```

### Accent Colors
```css
Pink 500:    #ec4899
Fuchsia 500: #d946ef
Purple 500:  #a855f7
```

### Background Gradients
```css
/* Hero Background */
background: linear-gradient(135deg, #a855f7 0%, #9333ea 50%, #7e22ce 100%);

/* Card Backgrounds */
background: rgba(255, 255, 255, 0.4);
backdrop-filter: blur(12px);

/* Footer Background */
background: rgb(59, 7, 100); /* purple-950 */
```

### Text Colors
```css
Primary Text:   #111827 (gray-900)
Secondary Text: #374151 (gray-700)
Muted Text:     #6b7280 (gray-500)
On Dark:        #ffffff (white)
```

---

## Typography

### Font Families
```css
Headings: system-ui, -apple-system, sans-serif
Body:     system-ui, -apple-system, sans-serif
Code:     'Geist Mono', monospace
```

### Font Sizes
```css
Hero H1:       text-6xl sm:text-7xl lg:text-8xl (60px-96px)
Section H2:    text-5xl md:text-6xl (48px-60px)
Card Title:    text-2xl (24px)
Body Large:    text-xl md:text-2xl (20px-24px)
Body:          text-base (16px)
Small:         text-sm (14px)
```

### Font Weights
```css
Black:      font-black (900)
Bold:       font-bold (700)
Semibold:   font-semibold (600)
Medium:     font-medium (500)
Regular:    font-normal (400)
```

---

## Component Styles

### Buttons

#### Primary CTA
```tsx
<Button className="bg-gradient-to-r from-purple-500 via-violet-600 to-purple-700
  hover:from-purple-600 hover:via-violet-700 hover:to-purple-800
  text-white font-black text-xl px-14 py-8 rounded-xl
  shadow-[0_20px_50px_rgba(168,85,247,0.5)]
  border border-pink-400/50">
  Get Started Free
</Button>
```

#### Secondary Button
```tsx
<Button className="bg-white/10 backdrop-blur-md hover:bg-white/20
  text-gray-900 font-bold text-xl px-14 py-8 rounded-xl
  border-2 border-white/30 hover:border-white/50">
  VIEW PRICING
</Button>
```

#### Accent Button
```tsx
<Button className="bg-gradient-to-r from-pink-500 to-purple-600
  hover:from-pink-600 hover:to-purple-700
  text-white font-semibold px-6 py-3 rounded-lg">
  Learn More
</Button>
```

### Cards

#### Feature Card
```tsx
<div className="p-8 bg-white/5 backdrop-blur-md rounded-2xl
  border border-white/10 hover:border-pink-400/50
  hover:bg-white/10 transition-all duration-300">
  {/* Content */}
</div>
```

#### Pricing Card (Recommended)
```tsx
<div className="rounded-2xl border border-purple-600
  shadow-2xl scale-105 bg-white/40 backdrop-blur-md p-8">
  {/* Recommended badge: from-purple-600 to-violet-700 */}
</div>
```

### Icons

#### Icon Container
```tsx
<div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-violet-600
  rounded-2xl flex items-center justify-center">
  <Icon className="w-8 h-8 text-white" />
</div>
```

#### Logo
```tsx
<div className="w-9 h-9 bg-gradient-to-br from-purple-600 to-violet-700
  rounded-lg flex items-center justify-center">
  <svg className="w-5 h-5 text-white">
    {/* Aurora icon */}
  </svg>
</div>
```

---

## Layout Guidelines

### Spacing
```css
Section Padding:    py-24 md:py-32 (96px-128px vertical)
Container Padding:  px-4 (16px horizontal)
Card Padding:       p-8 md:p-12 (32px-48px)
Button Padding:     px-14 py-8 (56px x 32px)
```

### Border Radius
```css
Small:   rounded-lg (8px)
Medium:  rounded-xl (12px)
Large:   rounded-2xl (16px)
Hero:    rounded-3xl (24px)
```

### Shadows
```css
Card:    shadow-2xl
Hover:   shadow-[0_20px_60px_rgba(168,85,247,0.7)]
Button:  shadow-[0_20px_50px_rgba(168,85,247,0.5)]
Glow:    shadow-[0_0_50px_rgba(236,72,153,0.5)]
```

---

## Interactive States

### Hover Effects
```css
Button Hover:      scale-105 -translate-y-1
Card Hover:        border-pink-400/50 bg-white/10
Icon Hover:        scale-110 rotate-3
Text Hover:        text-purple-700
Glow Effect:       shadow-[0_0_30px_rgba(168,85,247,0.6)]
```

### Transitions
```css
Standard:     transition-all duration-300
Fast:         transition duration-200
Smooth:       transition-all duration-500 ease-in-out
Magical:      transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)
```

### Animations
```css
Shimmer Effect:
.group-hover:translate-x-[100%]
from-purple/0 via-pink/20 to-purple/0

Glow Pulse:
animate-pulse from-purple-500/50 to-pink-500/50

Float Up:
hover:-translate-y-2 transition-transform
```

---

## Navigation

### Navbar
```tsx
<nav className="py-5 border-b border-white border-opacity-10">
  {/* Logo: purple-600 to violet-700 gradient */}
  {/* Links: text-white hover:text-purple-300 */}
  {/* Mobile menu: bg-white/10 backdrop-blur */}
</nav>
```

### Footer
```tsx
<footer className="bg-purple-950 border-t border-white border-opacity-10">
  {/* Logo: purple-600 to violet-700 gradient */}
  {/* Text: text-white/70 hover:text-white */}
  {/* Links: hover:text-pink-400 */}
</footer>
```

---

## Content Guidelines

### Tone of Voice
- **Creative**: Inspire and illuminate
- **Magical**: Use words like "transform", "illuminate", "envision"
- **Empowering**: "Bring your vision to life"
- **Premium**: Quality over speed

### Key Messages
- Turn ideas into beautiful reality
- Design-first development
- Pixel-perfect execution
- Creative freedom, technical power
- Where imagination meets innovation

### Example Copy
```
Hero: "Illuminate Your Ideas Into Beautiful Reality"
CTA: "Start Creating" / "Begin Your Journey"
Features: "Everything you need to create beautifully"
Stats: "Beautiful by Default"
```

---

## Iconography

### Preferred Icons
- **Creativity**: Sparkles, Wand, Palette
- **Innovation**: Lightbulb, Zap, Star
- **Magic**: Stars, Sparkles, Moon
- **Design**: Brush, Pen, Layers

### Icon Style
- Lucide React icons
- Stroke width: 2
- Size: w-8 h-8 (large), w-5 h-5 (medium)
- Color: Purple/pink gradients
- Add subtle glow effects

---

## Imagery Guidelines

### Photography
- Artistic, creative scenes
- Design studios, creative spaces
- Colorful, vibrant imagery
- Soft lighting, atmospheric

### Illustrations
- Flowing, organic shapes
- Purple/pink color palette
- Gradient-heavy
- Dreamy, ethereal aesthetic
- Northern lights inspiration

---

## Responsive Breakpoints

```css
Mobile:     < 640px (sm)
Tablet:     640px - 1024px (md-lg)
Desktop:    > 1024px (lg)
Wide:       > 1280px (xl)
```

### Mobile Considerations
- Maintain magical feel
- Larger touch targets
- Reduce animations for performance
- Stack creatively, not just vertically

---

## Accessibility

### Color Contrast
- White on purple: ✅ AAA compliant
- Gray-900 on white: ✅ AAA compliant
- Purple-600 on white: ✅ AA compliant
- Pink accents: ✅ AA compliant

### Interactive Elements
- All buttons have focus rings (ring-purple-500)
- Hover states clearly visible
- Forms properly labeled
- Images have descriptive alt text

---

## Code Examples

### Page Header
```tsx
<h1 className="font-heading tracking-tighter text-6xl sm:text-7xl lg:text-8xl
  font-black mb-8 leading-tight">
  <span className="block text-gray-900">Illuminate</span>
  <span className="block bg-gradient-to-r from-purple-600 via-violet-700
    to-purple-800 bg-clip-text text-transparent">
    Your Ideas
  </span>
</h1>
```

### Magical Glow Effect
```tsx
<div className="relative group">
  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500
    opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500"></div>
  <div className="relative">{/* Content */}</div>
</div>
```

### Creative CTA
```tsx
<Link href="/login">
  <Button className="group relative bg-gradient-to-r from-purple-500
    via-violet-600 to-purple-700 text-white font-black px-16 py-10
    shadow-[0_0_50px_rgba(168,85,247,0.5)]
    hover:shadow-[0_0_80px_rgba(236,72,153,0.7)]">
    <Sparkles className="inline-block mr-2" />
    Start Creating
  </Button>
</Link>
```

---

## Brand Voice Examples

### Do's ✅
- "Illuminate your ideas"
- "Transform concepts into reality"
- "Where creativity meets technology"
- "Beautiful by design"
- "Inspire, create, innovate"

### Don'ts ❌
- "Fast and efficient" (that's Velocity)
- "Enterprise-grade" (that's Zenith)
- "Quick and easy"
- Generic tech jargon
- Overly corporate language

---

## Special Effects

### Aurora Glow
```css
box-shadow: 0 0 50px rgba(168, 85, 247, 0.5),
            0 0 100px rgba(236, 72, 153, 0.3);
```

### Shimmer Animation
```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}

background: linear-gradient(90deg,
  transparent 0%,
  rgba(168, 85, 247, 0.5) 50%,
  transparent 100%);
```

---

## Quality Standards

### Design
- Pixel-perfect alignment
- Consistent spacing (8px grid)
- Smooth animations
- Delightful micro-interactions
- Visual hierarchy clear

### Code
- TypeScript strict mode
- ESLint compliant
- Component-driven
- Reusable patterns
- Well-documented

### Performance
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3s
- Core Web Vitals: Good

---

**Version**: 1.0.0
**Last Updated**: November 11, 2025
**Status**: ✅ Active - Production Ready
**Inspiration**: Northern lights, magic, creativity
