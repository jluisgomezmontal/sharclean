import { useState, useEffect } from 'react'
import { Button } from './components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card'
import { 
  Sparkles, 
  Building2, 
  Droplets, 
  Sofa, 
  Paintbrush, 
  Leaf, 
  Zap, 
  Wrench, 
  Hammer, 
  Bug,
  Phone,
  Mail,
  Menu,
  X,
  CheckCircle2,
  Target,
  Award,
  Factory,
  ShoppingBag,
  GraduationCap,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  MapPin,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Moon,
  Sun
} from 'lucide-react'

// Import hero images
import slider1 from './assets/hero/slider-1.jpg'
import slider3 from './assets/hero/slider-3.jpg'
import slider4 from './assets/hero/slider-4.jpg'
import slider5 from './assets/hero/slider-5.jpg'
import slider6 from './assets/hero/slider-6.jpg'
import Mapa from './assets/mapa.png'

// Import logo and about image
import logo from './assets/logo.png'
import quienesImage from './assets/quienes3.png'
import beneficiosImage from './assets/beneficios.png'

// Import client logos
import clienteAiss from './assets/clientes/aiss.jpg'
import clienteAmyntor from './assets/clientes/amyntor.jpg'
import clienteAvante from './assets/clientes/avante.jpg'
import clienteDanhos from './assets/clientes/danhos.jpg'
import clienteDanhosFibra from './assets/clientes/danhos_fibra.jpg'
import clienteDormakaba from './assets/clientes/dormakaba.jpg'
import clienteEspacioVirreyes from './assets/clientes/espacio_virreyes.jpg'
import clienteMContadores from './assets/clientes/m_contadores_asesores.jpg'
import clienteParqueAlameda from './assets/clientes/parque_alameda.jpg'
import clientePromecap from './assets/clientes/promecap.jpg'
import clienteTamex from './assets/clientes/tamex.jpg'
import clienteUnicco from './assets/clientes/unicco.jpg'

// Import service images
import servicio2 from './assets/servicios/servicio2_pulido.jpg'
import servicio3 from './assets/servicios/servicio3_ventana.jpg'
import servicio4 from './assets/servicios/servicio4_alfombra.jpg'
import servicio5 from './assets/servicios/servicio5_superficies.jpg'
import servicio6 from './assets/servicios/servicio6_desechos.jpg'
import servicio7 from './assets/servicios/servicios7-jardineria.jpg'
import servicio8 from './assets/servicios/servicio8_electrico.jpg'
import servicio9 from './assets/servicios/servicio9_plomeria.jpg'
import servicio10 from './assets/servicios/servicio10_pintura.jpg'
import servicio11 from './assets/servicios/servicio11_tablaroca.jpg'
import servicio12 from './assets/servicios/servicio12_tablaroca.jpg'
import servicio7prueba from './assets/servicios/servicio7_prueba.jpg'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showNavAndButtons, setShowNavAndButtons] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage, default to light mode
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      return JSON.parse(saved)
    }
    return false // Default to light mode
  })

  const heroSlides = [
    {
      image: slider1,
      title: "Limpieza Profesional",
      subtitle: "Servicios especializados para su empresa"
    },
    {
      image: slider3,
      title: "Mantenimiento Integral",
      subtitle: "Cuidamos cada detalle de sus instalaciones"
    },
    {
      image: slider4,
      title: "Equipos Especializados",
      subtitle: "Tecnología de punta para mejores resultados"
    },
    {
      image: slider5,
      title: "Personal Capacitado",
      subtitle: "Profesionales comprometidos con la excelencia"
    },
    {
      image: slider6,
      title: "Calidad Garantizada",
      subtitle: "Más de 10 años de experiencia"
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [heroSlides.length])

  // Show/hide navbar and buttons on scroll
  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section (approximately viewport height)
      if (window.scrollY > window.innerHeight * 0.8) {
        setShowNavAndButtons(true)
      } else {
        setShowNavAndButtons(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Apply dark mode and save to localStorage
  useEffect(() => {
    console.log('Dark mode state:', darkMode) // Debug
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  // Initial cleanup - ensure light mode on first load
  useEffect(() => {
    if (!darkMode) {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    console.log('Toggling from', darkMode, 'to', !darkMode) // Debug
    setDarkMode(prevMode => !prevMode)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const services = [
    { icon: Sparkles, title: 'Limpieza Profesional e Industrial', description: 'Servicios especializados de limpieza para espacios comerciales e industriales.', image: servicio7prueba },
    { icon: Droplets, title: 'Limpieza en Alturas', description: 'Especialistas en limpieza de fachadas y espacios de difícil acceso.', image: servicio3 },
    { icon: Sofa, title: 'Lavado de Alfombra o Tapicería', description: 'Limpieza profunda de alfombras y muebles tapizados.', image: servicio4 },
    { icon: Paintbrush, title: 'Lavado Correctivo de Pisos', description: 'Restauración y mantenimiento especializado de todo tipo de pisos.', image: servicio2 },
    { icon: Leaf, title: 'Jardinería', description: 'Diseño, mantenimiento y cuidado de áreas verdes.', image: servicio7 },
    { icon: Bug, title: 'Fumigación', description: 'Control de plagas con productos certificados.', image: servicio12 },
  ]

  const benefits = [
    'Reducimos el riesgo empresarial y absorbemos la responsabilidad total laboral',
    'Aportamos la experiencia y mejores técnicas',
    'Adaptamos nuestros servicios a sus necesidades',
    'Aumente su rentabilidad reduciendo costos'
  ]

  const scope = [
    'Contratación de personal calificado',
    'Responsabilidad laboral',
    'Personal uniformado',
    'Insumos de calidad',
    'Equipo profesional',
    'Productos químicos biodegradables',
    'Supervisión constante',
    'Garantía de servicio'
  ]

  const clients = [
    { name: 'AISS', logo: clienteAiss },
    { name: 'Amyntor', logo: clienteAmyntor },
    { name: 'Avante', logo: clienteAvante },
    { name: 'Danhos', logo: clienteDanhos },
    { name: 'Danhos Fibra', logo: clienteDanhosFibra },
    { name: 'Dormakaba', logo: clienteDormakaba },
    { name: 'Espacio Virreyes', logo: clienteEspacioVirreyes },
    { name: 'M Contadores', logo: clienteMContadores },
    { name: 'Parque Alameda', logo: clienteParqueAlameda },
    { name: 'Promecap', logo: clientePromecap },
    { name: 'Tamex', logo: clienteTamex },
    { name: 'Unicco', logo: clienteUnicco },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Static Navigation - Always visible at top */}
      <nav className="relative w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm border-b-4 border-blue-600 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logo} alt="Sharclean Logo" className="h-12 w-auto" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('quienes-somos')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                Quiénes somos
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                Servicios
              </button>
              <button onClick={() => scrollToSection('beneficios')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                Beneficios y Alcances
              </button>
              <button onClick={() => scrollToSection('clientes')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                Clientes
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                Contacto
              </button>
              <button onClick={() => scrollToSection('aviso-privacidad')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                Aviso de Privacidad
              </button>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-700" />}
              </button>
            </div>

            {/* Mobile Menu Button and Dark Mode Toggle */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-700 dark:text-gray-200" />}
              </button>
              <button 
                className="text-gray-700 dark:text-gray-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('quienes-somos')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded transition">
                Quiénes somos
              </button>
              <button onClick={() => scrollToSection('servicios')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded transition">
                Servicios
              </button>
              <button onClick={() => scrollToSection('beneficios')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded transition">
                Beneficios y Alcances
              </button>
              <button onClick={() => scrollToSection('clientes')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded transition">
                Clientes
              </button>
              <button onClick={() => scrollToSection('contacto')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded transition">
                Contacto
              </button>
              <button onClick={() => scrollToSection('aviso-privacidad')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded transition">
                Aviso de Privacidad
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Fixed Navigation - Appears on scroll */}
      <nav className={`fixed w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm border-b-4 border-blue-600 z-50 transition-all duration-500 ${
        showNavAndButtons ? 'top-0 opacity-100' : '-top-20 opacity-0'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src={logo} alt="Sharclean Logo" className="h-12 w-auto" />
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('quienes-somos')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                Quiénes somos
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                Servicios
              </button>
              <button onClick={() => scrollToSection('beneficios')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                Beneficios y Alcances
              </button>
              <button onClick={() => scrollToSection('clientes')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                Clientes
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                Contacto
              </button>
              <button onClick={() => scrollToSection('aviso-privacidad')} className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium">
                Aviso de Privacidad
              </button>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-700" />}
              </button>
            </div>

            {/* Mobile Menu Button and Dark Mode Toggle */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="h-5 w-5 text-yellow-500" /> : <Moon className="h-5 w-5 text-gray-700 dark:text-gray-200" />}
              </button>
              <button 
                className="text-gray-700 dark:text-gray-200"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('quienes-somos')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded transition">
                Quiénes somos
              </button>
              <button onClick={() => scrollToSection('servicios')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded transition">
                Servicios
              </button>
              <button onClick={() => scrollToSection('beneficios')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded transition">
                Beneficios y Alcances
              </button>
              <button onClick={() => scrollToSection('clientes')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded transition">
                Clientes
              </button>
              <button onClick={() => scrollToSection('contacto')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded transition">
                Contacto
              </button>
              <button onClick={() => scrollToSection('aviso-privacidad')} className="block w-full text-left px-3 py-2 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 rounded transition">
                Aviso de Privacidad
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section with Carousel */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Carousel Images */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Dark overlay for better text readability */}
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
          ))}
        </div>

        {/* Carousel Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 rounded-full transition"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
          {/* Animated slide title */}
          <div className="mb-8">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentSlide 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4 absolute inset-x-0'
                }`}
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-white/90 drop-shadow-lg">
                  {slide.subtitle}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Servicios Profesionales de<br />
              <span className="text-blue-300">Mantenimiento y Limpieza</span>
            </h2>
          </div>
          
          {/* Contact Info Cards */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 max-w-4xl mx-auto my-12">
            <Card className="bg-white/80 backdrop-blur-sm ">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Llámenos</h3>
                  <p className="text-sm text-gray-600 mb-2">Resuelva sus dudas ahora</p>
                  <a href="tel:5529729014" className="text-lg font-bold text-blue-600 hover:text-blue-700">
                    55 2972 9014
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Contáctenos</h3>
                  <p className="text-sm text-gray-600 mb-2">Pida un presupuesto</p>
                  <a href="mailto:informes@sharclean.com.mx" className="text-sm font-bold text-blue-600 hover:text-blue-700 break-all">
                    informes@sharclean.com.mx
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Horario</h3>
                  <p className="text-sm text-gray-600 mb-2">Lunes a viernes</p>
                  <p className="text-lg font-bold text-blue-600">
                    10:00 am - 06:00 pm
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Button 
            size="lg" 
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            onClick={() => scrollToSection('contacto')}
          >
            Solicita tu presupuesto
          </Button>
        </div>
      </section>

      {/* Quiénes Somos Section */}
      <section id="quienes-somos" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Quiénes Somos
          </h2>
          
          {/* Image and Text Layout */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="order-2 md:order-1">
              <img 
                src={quienesImage} 
                alt="Equipo Sharclean" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                <span className="font-bold text-blue-600 dark:text-blue-400">Sharclean</span> comienza operaciones en el año 2012, 
                especializada en el servicio de mantenimiento a inmuebles así como el servicio de limpieza profesional.
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Nos basamos en la fusión de técnicas, maquinaria especializada y desarrollo del recurso humano, 
                en las áreas de servicio y mantenimiento a todo tipo de inmuebles, cumpliendo con los requerimientos 
                y expectativas de nuestros clientes.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-2 hover:shadow-lg transition dark:bg-gray-700 dark:border-gray-600">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="dark:text-white">Misión</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Brindar las mejores soluciones en condiciones óptimas de calidad, servicio y valor.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition dark:bg-gray-700 dark:border-gray-600">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  <CardTitle className="dark:text-white">Política de Calidad</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 dark:text-gray-300">
                  Cumplir con todos los requisitos solicitados en trabajos de mantenimiento y limpieza especializada, 
                  logrando la satisfacción total de nuestros clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
                  {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto my-12 lg:hidden">
            <Card className="bg-white/80 backdrop-blur-sm ">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Llámenos</h3>
                  <p className="text-sm text-gray-600 mb-2">Resuelva sus dudas ahora</p>
                  <a href="tel:5529729014" className="text-lg font-bold text-blue-600 hover:text-blue-700">
                    55 2972 9014
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Contáctenos</h3>
                  <p className="text-sm text-gray-600 mb-2">Pida un presupuesto</p>
                  <a href="mailto:informes@sharclean.com.mx" className="text-sm font-bold text-blue-600 hover:text-blue-700 break-all">
                    informes@sharclean.com.mx
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
                    <CheckCircle2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-1">Horario</h3>
                  <p className="text-sm text-gray-600 mb-2">Lunes a viernes</p>
                  <p className="text-lg font-bold text-blue-600">
                    10:00 am - 06:00 pm
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Servicios
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
            Contamos con una amplia variedad de servicios
          </p>

          {/* Service Sectors */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:shadow-xl transition">
              <CardContent className="pt-6 text-center">
                <Factory className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg">INDUSTRIA, FÁBRICAS, LOGÍSTICA</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-xl transition">
              <CardContent className="pt-6 text-center">
                <Briefcase className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg">CORPORATIVOS Y OFICINAS</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white hover:shadow-xl transition">
              <CardContent className="pt-6 text-center">
                <ShoppingBag className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg">CENTROS COMERCIALES</h3>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white hover:shadow-xl transition">
              <CardContent className="pt-6 text-center">
                <GraduationCap className="h-12 w-12 mx-auto mb-4" />
                <h3 className="font-bold text-lg">ESCUELAS Y HOSPITALES</h3>
              </CardContent>
            </Card>
          </div>

          {/* Detailed Services Gallery */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div 
                  key={index} 
                  className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer h-80"
                >
                  {/* Service Image */}
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Icon - Always Visible */}
                  <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  {/* Title - Always Visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
                  </div>
                  
                  {/* Description - Visible on Hover */}
                  <div className="absolute inset-0 bg-blue-600/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                    <div className="text-center">
                      <Icon className="h-12 w-12 text-white mx-auto mb-4" />
                      <h3 className="text-white font-bold text-xl mb-3">{service.title}</h3>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

{/* Cobertura de Servicios Section */}

<section id="cobertura" className="py-20 bg-white dark:bg-gray-800">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<section id="mapa-cobertura" className="py-20 bg-white dark:bg-gray-900">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
      Cobertura en México
    </h2>

    <img
      src={Mapa}
      alt="Mapa de México con ciudades destacadas"
      className="w-full h-auto rounded-xl shadow-lg"
    />
  </div>
</section>

    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {[
        "Ciudad de México",
        "Estado de México",
        "Toluca",
        "Puebla",
        "Veracruz",
        "Morelos",
        "Querétaro",
        "Tlaxcala",
        "San Luis Potosí",
        "Guanajuato",
        "Pachuca, Hidalgo",
      ].map((lugar, index) => (
        <div key={index} className="text-center">
          <div className="bg-blue-100 dark:bg-blue-900 rounded-lg p-6 mb-4">
            <MapPin className="h-8 w-8 mx-auto mb-2 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="font-bold text-gray-900 dark:text-white">{lugar}</h3>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Beneficios y Alcances Section */}
      <section id="beneficios" className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Beneficios y Alcances
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Beneficios Card */}
            <Card className="border-2 border-blue-200 dark:border-blue-800 dark:bg-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600 dark:text-blue-400">Beneficios</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Image in the middle */}
            <div className="flex items-center justify-center">
              <img 
                src={beneficiosImage} 
                alt="Beneficios Sharclean" 
                className="w-full h-full rounded-lg shadow-xl object-cover"
              />
            </div>

            {/* Alcances Card */}
            <Card className="border-2 border-green-200 dark:border-green-800 dark:bg-gray-700">
              <CardHeader>
                <CardTitle className="text-2xl text-green-600 dark:text-green-400">Alcances</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {scope.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Clientes Section */}
      <section id="clientes" className="py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Nuestros Clientes
          </h2>
          <p className="text-center text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Confiamos en brindar servicios de calidad a empresas líderes en diversos sectores: 
            oficinas corporativas, hospitales, instituciones educativas, centros comerciales y más.
          </p>
        </div>

        {/* Infinite Scrolling Banner */}
<div className="relative overflow-hidden">
  <div className="flex animate-scroll">
    {/* Duplicamos exactamente 2 veces */}
    {[...Array(2)].map((_, setIndex) => (
      <>
        {clients.map((client, index) => (
          <div 
            key={`client-${setIndex}-${index}`} 
            className="flex-shrink-0 mx-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            style={{ width: '200px', height: '120px' }}
          >
            <img 
              src={client.logo} 
              alt={client.name}
              className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </>
    ))}
  </div>
</div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Póngase en Contacto con Nosotros
          </h2>
          <p className="text-xl mb-12">
            Estamos listos para atender sus necesidades de limpieza y mantenimiento
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-8 w-8" />
                  <CardTitle className="text-white">Solicita una Cotización</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="tel:5529729014" className="text-2xl font-bold hover:text-blue-200 transition">
                  55 2972 9014
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center justify-center gap-3">
                  <MessageCircle className="h-8 w-8" />
                  <CardTitle className="text-white">Reclutamiento o Buscas empleo</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="https://wa.me/5215531398129" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold hover:text-blue-200 transition">
                  WhatsApp: 55 3139 8129
                </a>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center justify-center gap-3">
                  <Phone className="h-8 w-8" />
                  <CardTitle className="text-white">Teléfono</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="tel:5529729014" className="text-2xl font-bold hover:text-blue-200 transition">
                  55 2972 9014
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center justify-center gap-3">
                  <Mail className="h-8 w-8" />
                  <CardTitle className="text-white">Correo Electrónico</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <a href="mailto:informes@sharclean.com.mx" className="text-lg font-bold hover:text-blue-200 transition break-all">
                  informes@sharclean.com.mx
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <CardHeader>
                <div className="flex items-center justify-center gap-3">
                  <MapPin className="h-8 w-8" />
                  <CardTitle className="text-white">Dirección</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-bold">
                  Villa de Guerrero 5,<br />
                  Nezahualcóyotl,<br />
                  Edo. Mex. C.P. 57720
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Encuéntranos
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
            Visítanos en nuestra ubicación. Estamos listos para atenderte y resolver todas tus necesidades de limpieza y mantenimiento.
          </p>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.0!2d-99.0!3d19.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDI0JzAwLjAiTiA5OcKwMDAnMDAuMCJX!5e0!3m2!1ses!2smx!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Sharclean"
            ></iframe>
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Villa+de+Guerrero+5,+Nezahualcóyotl,+Estado+de+México+57720"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MapPin className="h-5 w-5" />
              Abrir en Google Maps
            </a>
          </div>
        </div>
      </section>

      {/* Aviso de Privacidad Section */}
      <section id="aviso-privacidad" className="py-16 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Aviso de Privacidad
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              <strong>SHARCLEAN SA DE CV</strong> es responsable del tratamiento de sus datos personales, los cuales serán utilizados exclusivamente para proporcionar servicios de limpieza, gestionar solicitudes, elaborar cotizaciones, contratos y facturación. Sus datos podrán compartirse con proveedores necesarios para la operación o con autoridades competentes.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Puede ejercer sus derechos ARCO (Acceso, Rectificación, Cancelación u Oposición) o solicitar más información sobre nuestro Aviso de Privacidad Integral enviando un correo a: 
              <a href="mailto:sharifmtz@sharclean.com.mx" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                sharifmtz@sharclean.com.mx
              </a>
            </p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <img src={logo} alt="Sharclean Logo" className="h-16 w-auto mb-4 mx-auto md:mx-0" />
              <p className="text-gray-400 mb-4">
                Servicios profesionales de limpieza y mantenimiento desde 2012
              </p>
              <p className="text-gray-500 text-sm">
                Especialistas en mantenimiento a inmuebles y limpieza profesional
              </p>
            </div>

            {/* Contact Info */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-white">Contacto</h3>
              <div className="space-y-3 text-gray-400">
                <p className="flex items-center justify-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:5529729014" className="hover:text-blue-400 transition">
                    55 2972 9014
                  </a>
                </p>
                <p className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href="mailto:informes@sharclean.com.mx" className="hover:text-blue-400 transition">
                    informes@sharclean.com.mx
                  </a>
                </p>
                <p className="flex items-start justify-center gap-2 text-sm">
                  <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                  <span>Villa de Guerrero 5, Nezahualcóyotl, Edo. Mex. C.P. 57720</span>
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center md:text-right">
              <h3 className="text-xl font-bold mb-4 text-white">Síguenos</h3>
              <div className="flex justify-center md:justify-end gap-4 mb-6">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-pink-600 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-blue-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-sky-500 p-3 rounded-full transition-all duration-300 hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Sharclean. Todos los derechos reservados.
              </p>
              <p className="text-gray-500 text-sm">
                Página web creada por{' '}
                <a 
                  href="https://luminadigitalstudio.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition font-medium"
                >
                  Luminá Digital Studio
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>


      {/* Floating Action Buttons */}
      {/* WhatsApp Button - Visible after scrolling past hero */}
      <a
        href="https://wa.me/5215529729014"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 z-50 flex items-center justify-center group ${
          showNavAndButtons ? 'right-6 opacity-100 scale-100' : '-right-20 opacity-0 scale-0'
        }`}
        aria-label="Contactar por WhatsApp"
      >
        <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Escríbenos por WhatsApp
        </span>
      </a>

      {/* Call Button - Only visible on mobile after scrolling past hero */}
      <a
        href="tel:5529729014"
        className={`md:hidden fixed bottom-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl transition-all duration-500 hover:scale-110 z-50 flex items-center justify-center group ${
          showNavAndButtons ? 'left-6 opacity-100 scale-100' : '-left-20 opacity-0 scale-0'
        }`}
        aria-label="Llamar ahora"
      >
        <Phone className="h-7 w-7" />
        <span className="absolute left-full ml-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Llamar ahora
        </span>
      </a>
    </div>
  )
}

export default App
