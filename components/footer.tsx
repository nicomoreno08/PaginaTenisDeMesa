export function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">TM</span>
              </div>
              <h3 className="text-lg font-bold">Prof. Tenis de Mesa</h3>
            </div>
            <p className="text-muted-foreground text-pretty">
              Formando campeones y desarrollando el amor por el tenis de mesa desde hace más de 15 años.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#inicio" className="hover:text-foreground transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#sobre-mi" className="hover:text-foreground transition-colors">
                  Sobre Mí
                </a>
              </li>
              <li>
                <a href="#logros" className="hover:text-foreground transition-colors">
                  Logros
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-foreground transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Clases Individuales</li>
              <li>Entrenamiento Grupal</li>
              <li>Preparación Competitiva</li>
              <li>Clínicas de Técnica</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Prof. Tenis de Mesa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
