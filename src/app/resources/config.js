const baseURL = 'demo.magic-portfolio.com'

const routes = {
  '/': true,
  '/about': true,
  '/work': true
}

// Enable password protection on selected routes
// Set password in the .env file, refer to .env.example
const protectedRoutes = {
  '/work/automate-design-handovers-with-a-figma-to-code-pipeline': true
}

const style = {
  theme: 'dark', // dark | light
  neutral: 'gray', // sand | gray | slate
  brand: 'emerald', // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: 'orange', // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: 'contrast', // color | contrast
  solidStyle: 'flat', // flat | plastic
  border: 'playful', // rounded | playful | conservative
  surface: 'translucent', // filled | translucent
  transition: 'all' // all | micro | macro
}

const effects = {
  mask: {
    cursor: true,
    x: 0,
    y: 0,
    radius: 75
  },
  gradient: {
    display: true,
    x: 50,
    y: 0,
    width: 100,
    height: 100,
    tilt: 0,
    colorStart: 'brand-background-strong',
    colorEnd: 'static-transparent',
    opacity: 50
  },
  dots: {
    display: true,
    size: 2,
    color: 'brand-on-background-weak',
    opacity: 20
  },
  lines: {
    display: false,
    color: 'neutral-alpha-weak',
    opacity: 100
  },
  grid: {
    display: false,
    color: 'neutral-alpha-weak',
    opacity: 100
  }
}

const display = {
  location: true,
  time: true
}

export { baseURL, display, effects, protectedRoutes, routes, style }
