import React from "react";
import HeadBlock from "../components/HeadBlock";
import Card from "../components/Card";
import Clients from "../components/Clients";
import TeamSection from "../components/TeamSection";
import Seguros from "../components/Seguros";
import Contacto from "../components/Contacto";



const Home: React.FC = () => {
  const topics = [
    {
      title: "Autos",
      description:
        "Nuestro seguro de autos ofrece cobertura completa para cualquier eventualidad, incluyendo accidentes, robos y daños a terceros.",
      link: "#",
    },
    {
      title: "ART (Aseguradora de Riesgos del Trabajo)",
      description:
        "Protege a tus empleados con nuestra ART, que garantiza la cobertura en caso de accidentes laborales y enfermedades profesionales, asegurando el bienestar de tu equipo.",
      link: "#",
    },
    {
      title: "ART (Aseguradora de Riesgos del Trabajo)",
      description:
        "Protege a tus empleados con nuestra ART, que garantiza la cobertura en caso de accidentes laborales y enfermedades profesionales, asegurando el bienestar de tu equipo.",
      link: "#",
    },
    {
      title: "Mala Praxis",
      description:
        "El seguro de mala praxis está diseñado para proteger a los profesionales de la salud contra reclamaciones y demandas por presuntos errores o negligencias en el ejercicio de su profesión.",
      link: "#",
    },
    {
      title: "Int. Comercio (Interrupción de Comercio)",
      description:
        "Este seguro te protege contra las pérdidas financieras derivadas de la interrupción de tu actividad comercial por causas imprevistas, como incendios, desastres naturales o fallos en la cadena de suministro.",
      link: "#",
    },
    {
      title: "Acc. Personales (Accidentes Personales)",
      description:
        "El seguro de accidentes personales cubre a los asegurados en caso de lesiones, incapacidad o fallecimiento como resultado de un accidente. ",
      link: "#",
    },
  ];

  return (
    <>
      <main className="bg-white">
        <HeadBlock />
        
        <section className="grid gap-8 p-8 md:grid-cols-2 lg:grid-cols-3 pl-52">
          {topics.map((topic, index) => (
            <Card
              key={index}
              title={topic.title}
              description={topic.description}
              link={topic.link}
            />
          ))}
          {/* Agrega más <Card /> si es necesario */}
        </section>
        <section className="m-32">
          <Seguros />
        </section>
        <section className="m-32">
          <Clients />
        </section>
        <section className="m-32">
          <TeamSection />
        </section>

        <section className="m-32">
          <Contacto />
        </section>

      </main>
    </>
  );
};

export default Home;
