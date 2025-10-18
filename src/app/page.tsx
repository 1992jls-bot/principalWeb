import Image from "next/image";
import Link from "next/link";
import {
  Code,
  Database,
  GitBranch,
  Linkedin,
  Mail,
  MoveRight,
  Server,
  Globe,
  PanelTop,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ContactForm } from "@/components/contact-form";
import { Header } from "@/components/header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const heroImage = PlaceHolderImages.find((img) => img.id === "hero-background");
const profilePicture = PlaceHolderImages.find(
  (img) => img.id === "profile-picture"
);

const projects = [
  {
    id: "project-1",
    title: "Proyecto 1: Landing Page Corporativa Dinámica",
    description:
      "Maquetación de una página web estática para una empresa ficticia, enfocada en una estructura semántica con HTML5 y estilos con CSS3",
    liveLink: "https://jesuslopezweb.com/web1/",
  },
  {
    id: "project-2",
    title: "Proyecto 2: Aplicación Web Interactiva",
    description:
      "Desarrollo de una landing page con diseño responsive, asegurando una correcta visualización en dispositivos móviles, tablets y escritorio usando Flexbox y Media Queries",
    liveLink: "https://jesuslopezweb.com/web2/",
  },
  {
    id: "project-3",
    title: "Proyecto 3: Dashboard de Administración",
    description:
      "Creación de un layout complejo para un portafolio personal utilizando CSS Grid, optimizando la organización del contenido",
    liveLink: "https://jesuslopezweb.com/web3/",
  },
];

const skills = [
  {
    icon: PanelTop,
    title: "Front-End",
    description:
      "Construyo interfaces de usuario dinámicas, escalables y responsives, centradas en ofrecer una experiencia de usuario excepcional.",
    technologies: ["HTML5", "CSS3", "JavaScript", "TypeScript", "Angular", "React"],
  },
  {
    icon: Server,
    title: "Back-End",
    description:
      "Diseño y desarrollo de APIs RESTful seguras y eficientes que forman el núcleo de la lógica de negocio de cualquier aplicación.",
    technologies: [".NET", "C#", "ASP.NET Core", "Entity Framework", "Node.js"],
  },
  {
    icon: Database,
    title: "Bases de Datos",
    description:
      "Gestiono la capa de acceso a datos de forma segura y optimizada, conectando la lógica de negocio con bases de datos relacionales.",
    technologies: ["SQL Server", "MySQL"],
  },
  {
    icon: GitBranch,
    title: "Herramientas",
    description: "Uso de herramientas para control de versiones y gestión de proyectos.",
    technologies: ["Git", "GitHub"],
  },
];

function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover"
          data-ai-hint={heroImage.imageHint}
          priority
        />
      )}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl text-primary">
            Jesús López
          </h1>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl text-foreground/90">
            Desarrollador Web Full-Stack
          </p>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-lg text-foreground/80">
            Transformo ideas en código y soluciones digitales robustas. Mi pasión es construir aplicaciones web eficientes y escalables, cubriendo el ciclo completo desde el Back-End con .NET hasta el Front-End con Angular.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#projects">
                Ver mis proyectos
                <MoveRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="#contact">Contactar</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="w-full py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16 items-center">
          <div className="lg:col-span-2 flex justify-center">
            {profilePicture && (
              <Avatar className="h-48 w-48 border-4 border-primary/50 shadow-lg">
                <AvatarImage src={profilePicture.imageUrl} alt={profilePicture.description} data-ai-hint={profilePicture.imageHint} />
                <AvatarFallback>JL</AvatarFallback>
              </Avatar>
            )}
          </div>
          <div className="space-y-6 lg:col-span-3">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Hola, soy Jesús
              </h2>
              <div className="w-24 h-1.5 bg-primary rounded-full"></div>
            </div>
            <p className="text-lg text-foreground/80">
              Soy un desarrollador web con un objetivo claro: crear y mantener aplicaciones web de alto rendimiento. Mi rol como Desarrollador Full-Stack me permite tener una visión completa del producto, garantizando que cada pieza, desde la base de datos hasta la interfaz de usuario, funcione en perfecta armonía.
            </p>
            <p className="text-lg text-foreground/80">
              Me considero un aprendiz constante, siempre buscando nuevos retos que me permitan evolucionar y aplicar las mejores prácticas en cada proyecto. Disfruto colaborando en equipos donde puedo aportar mi experiencia y aprender de los demás para construir soluciones tecnológicas que realmente aporten valor.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Portafolio de Proyectos
            </h2>
            <div className="w-24 h-1.5 bg-primary rounded-full mx-auto"></div>
            <p className="mx-auto max-w-[700px] text-foreground/80 md:text-xl">
              Aquí puedes encontrar una selección de mis trabajos recientes. Cada proyecto es un reflejo de mi habilidad para adaptarme a diferentes estilos y requisitos técnicos, siempre con un enfoque en el diseño responsive y la experiencia de usuario.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-8 py-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const image = PlaceHolderImages.find((img) => img.id === project.id);
            return (
              <Card key={project.id} className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-1">
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={400}
                    className="w-full h-48 object-contain"
                    data-ai-hint={image.imageHint}
                  />
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-foreground/80 mb-4">{project.description}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full" variant="outline">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <Globe className="mr-2 h-4 w-4" />
                      Ver Proyecto en Vivo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Habilidades y Tecnologías
            </h2>
             <div className="w-24 h-1.5 bg-primary rounded-full mx-auto"></div>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 sm:grid-cols-2">
          {skills.map((skill) => (
            <Card key={skill.title} className="p-6 flex flex-col items-start gap-4 transition-all duration-300 hover:border-primary/50">
              <div className="flex items-center gap-4">
                 <div className="bg-primary/10 p-3 rounded-full">
                    <skill.icon className="h-6 w-6 text-primary" />
                 </div>
                <h3 className="text-2xl font-bold">{skill.title}</h3>
              </div>
              <p className="text-sm text-foreground/80">{skill.description}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                {skill.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="border-primary/50 text-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}


function ContactSection() {
  return (
    <section id="contact" className="w-full py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                ¿Hablamos?
              </h2>
              <div className="w-24 h-1.5 bg-primary rounded-full"></div>
            </div>
            <p className="text-lg text-foreground/80">
              Estoy buscando activamente nuevos desafíos y oportunidades para aportar mi experiencia. Si tienes un proyecto en mente, una vacante en tu equipo o simplemente quieres conectar, no dudes en contactarme.
            </p>
            <div className="space-y-4">
              <a href="mailto:contacto@jesuslopezweb.com" className="flex items-center gap-4 group">
                <Mail className="h-6 w-6 text-primary" />
                <span className="text-lg group-hover:underline">contacto@jesuslopezweb.com</span>
              </a>
              <a href="https://www.linkedin.com/in/jesús-lópez-serrano" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <Linkedin className="h-6 w-6 text-primary" />
                <span className="text-lg group-hover:underline">LinkedIn</span>
              </a>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Envíame un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="w-full py-6 bg-background border-t border-border/40">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/60">
        <p>&copy; {new Date().getFullYear()} Jesús López. Todos los derechos reservados.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="https://www.linkedin.com/in/jesús-lópez-serrano" target="_blank" rel="noopener noreferrer" className="hover:text-primary"><Linkedin className="h-5 w-5"/></Link>
          <Link href="mailto:contacto@jesuslopezweb.com" className="hover:text-primary"><Mail className="h-5 w-5"/></Link>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
