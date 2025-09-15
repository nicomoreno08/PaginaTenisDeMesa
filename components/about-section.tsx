import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Sobre Mí</h2>
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Soy profesor de Educación Física especializado en tenis de mesa con más de 15 años de experiencia en la
                enseñanza y entrenamiento de este apasionante deporte.
              </p>
              <p>
                Mi filosofía se basa en el desarrollo integral del estudiante, combinando técnica, estrategia y valores
                deportivos para formar no solo mejores jugadores, sino mejores personas.
              </p>
              <p>
                He trabajado con estudiantes de todas las edades, desde principiantes hasta competidores avanzados,
                adaptando mi metodología a las necesidades específicas de cada alumno.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Especialidades</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Técnica Básica</Badge>
                <Badge variant="secondary">Estrategia Avanzada</Badge>
                <Badge variant="secondary">Preparación Física</Badge>
                <Badge variant="secondary">Competición</Badge>
                <Badge variant="secondary">Entrenamiento Juvenil</Badge>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Card className="w-full max-w-md">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/professional-table-tennis-coach-portrait.jpg"
                    alt="Profesor de Tenis de Mesa"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2">Prof. [Nombre]</h3>
                  <p className="text-muted-foreground mb-4">
                    Licenciado en Educación Física
                    <br />
                    Especialista en Tenis de Mesa
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Experiencia:</span>
                      <span className="font-medium">15+ años</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estudiantes:</span>
                      <span className="font-medium">200+ formados</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Certificaciones:</span>
                      <span className="font-medium">5 oficiales</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
