import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
            <span className="text-primary font-bold text-sm">TM</span>
          </div>
          <h1 className="text-xl font-bold">Prof. Tenis de Mesa</h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#inicio" className="hover:text-primary-foreground/80 transition-colors">
            Inicio
          </a>
          <a href="#sobre-mi" className="hover:text-primary-foreground/80 transition-colors">
            Sobre Mí
          </a>
          <a href="#logros" className="hover:text-primary-foreground/80 transition-colors">
            Logros
          </a>
          <a href="#contacto" className="hover:text-primary-foreground/80 transition-colors">
            Contacto
          </a>
        </nav>

        <Button variant="secondary" size="sm" className="md:hidden">
          Menú
        </Button>
      </div>
    </header>
  )
}
