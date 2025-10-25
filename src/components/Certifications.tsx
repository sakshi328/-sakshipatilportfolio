import React from 'react';
import { Award, BadgeCheck, ShieldCheck } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      icon: Award,
      title: "Introduction to Generative AI Studio",
      issuer: "Google Cloud (Simplilearn SkillUp)",
      year: "2025",
      date: "August 22nd",
      code: "8837843",
      image: "/sakshi-uploads/baf0ef99-f136-4f97-8498-40e63bcd1eb7.png"
    },
    {
      icon: BadgeCheck,
      title: "5-Days of Python Workshop",
      issuer: "CodingWise",
      year: "2025",
      trainer: "Sagar Chouksey",
      image: "/sakshi-uploads/8b7a71f0-0279-4ec4-a24c-56ee98f66c28.png"
    },
    {
      icon: ShieldCheck,
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      year: "2025",
      date: "August 20th",
      image: "/sakshi-uploads/9f1ccd2d-b95e-4a6a-b3cb-52cee5707bd1.png"
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Certifications</h2>
          <div className="w-24 h-1 bg-primary/50 mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            A selection of certifications showcasing continuous learning and commitment to best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((c, i) => (
            <article
              key={c.title}
              className="group rounded-xl border border-border bg-card shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in overflow-hidden"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={c.image} 
                  alt={`${c.title} Certificate`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <c.icon size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">{c.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">
                      {c.issuer}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {c.date || c.trainer || c.year}
                      {c.code && ` • Code: ${c.code}`}
                    </p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
