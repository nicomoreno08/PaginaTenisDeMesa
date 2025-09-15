import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-primary/10 to-secondary/10 py-20 lg:py-32">
      <div className="absolute inset-0 bg-[url('/table-tennis-action-shot-dynamic-sports.jpg')] bg-cover bg-center opacity-20"></div>
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl lg:text-6xl font-bold text-balance mb-6">
          Aprende Tenis de Mesa con un
          <span className="text-primary block">Profesional</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
          Clases personalizadas de tenis de mesa para todos los niveles. Desarrolla tu técnica, estrategia y pasión por
          este deporte fascinante.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8">
            Solicitar Información
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 bg-transparent">
            Ver Mis Logros
          </Button>
        </div>
      </div>
    </section>
  )
}
