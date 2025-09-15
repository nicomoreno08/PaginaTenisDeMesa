import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Award, Users, Target } from "lucide-react"

export function AchievementsSection() {
  const achievements = [
    {
      icon: Trophy,
      title: "Campeonatos Regionales",
      description: "3 títulos como entrenador en competiciones regionales juveniles",
      year: "2019-2023",
    },
    {
      icon: Award,
      title: "Certificación Internacional",
      description: "Certificado por la Federación Internacional de Tenis de Mesa (ITTF)",
      year: "2020",
    },
    {
      icon: Users,
      title: "Formación de Campeones",
      description: "15 estudiantes clasificados a competiciones nacionales",
      year: "2018-2024",
    },
    {
      icon: Target,
      title: "Metodología Innovadora",
      description: "Desarrollo de técnicas de entrenamiento adaptadas a cada edad",
      year: "2021",
    },
  ]

  return (
    <section id="logros" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Logros y Reconocimientos</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Una trayectoria dedicada a la excelencia en la enseñanza del tenis de mesa
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-3 text-pretty">{achievement.description}</p>
                  <div className="text-sm font-medium text-primary">{achievement.year}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 bg-card rounded-lg p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Trabajos Destacados</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-4">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/table-tennis-training-session-students.jpg"
                    alt="Sesión de entrenamiento"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="font-semibold mb-2">Programa Juvenil 2023</h4>
                <p className="text-sm text-muted-foreground">
                  Desarrollo de un programa integral para jóvenes de 8-16 años
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/table-tennis-competition-tournament.jpg"
                    alt="Torneo organizado"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="font-semibold mb-2">Torneo Escolar</h4>
                <p className="text-sm text-muted-foreground">
                  Organización del primer torneo inter-escolar de la región
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/table-tennis-coaching-technique-demonstration.jpg"
                    alt="Demostración técnica"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <h4 className="font-semibold mb-2">Manual de Técnicas</h4>
                <p className="text-sm text-muted-foreground">
                  Creación de material didáctico para estudiantes principiantes
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
