import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Mail, 
  MapPin, 
  ChevronRight,
  Phone
} from 'lucide-react';
import { EXPERIENCES, EDUCATION, SKILLS } from './constants';

const App: React.FC = () => {
  const EMAIL_ADDRESS = "angelicapatricia16@yahoo.com";

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Hero Section */}
      <section id="perfil" className="pt-16 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-8 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
                Angélica Patricia <br />
                <span className="text-blue-900">Velásquez Parra</span>
              </h1>
              
              <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Profesional con más de 11 años de trayectoria en los sectores público y privado, experta en gestión de procesos de acceso a la justicia, convivencia y resolución de conflictos. Comprometida con la transformación social y la pedagogía ciudadana.
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-slate-500 font-medium">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-5 h-5 text-blue-900" />
                  <span>Bogotá D.C., Colombia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-blue-900" />
                  <span>+11 Años de Experiencia</span>
                </div>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 mx-auto">
                <div className="absolute inset-0 bg-blue-100 rounded-full scale-105 blur-2xl opacity-50 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full border-[12px] border-white shadow-2xl overflow-hidden bg-slate-100">
                  <img 
                    src="https://i.ibb.co/93cjMqmj/Screenshot-2026-01-22-122843.png" 
                    alt="Angélica Velásquez" 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://ui-avatars.com/api/?name=Angelica+Velasquez&background=0f172a&color=fff&size=512";
                    }}
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-lg border border-slate-100 hidden sm:block">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-900 p-2 rounded-lg text-white">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest leading-none mb-1">Especialista</p>
                      <p className="text-sm font-bold text-slate-900">Acceso a la Justicia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experiencia" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Trayectoria Profesional</h2>
            <p className="text-slate-500 max-w-lg mx-auto italic">Compromiso demostrado en la gestión pública y la mediación social.</p>
          </div>

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="group relative pl-8 border-l-2 border-slate-200 pb-4 last:pb-0">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-900 rounded-full border-4 border-white group-hover:scale-125 transition-transform"></div>
                
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start justify-between mb-6 gap-2">
                    <div>
                      <span className="text-xs font-bold text-blue-700 uppercase tracking-tighter">{exp.period}</span>
                      <h3 className="text-xl font-extrabold text-slate-900 mt-1">{exp.role}</h3>
                      <div className="flex items-center text-slate-500 mt-1 text-sm font-medium">
                        <span className="text-slate-700">{exp.company}</span>
                        <span className="mx-2 text-slate-300">|</span>
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <ul className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start text-slate-600 text-sm leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-blue-900 mt-0.5 mr-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="habilidades" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-extrabold text-slate-900">Habilidades & <br />Competencias Técnicas</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Mi enfoque integra la justicia restaurativa con metodologías pedagógicas modernas para impactar positivamente en la resolución de conflictos ciudadanos.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-8">
                {SKILLS.slice(0, 2).map((group, i) => (
                  <div key={i} className="space-y-4">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em]">{group.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((skill, j) => (
                        <span key={j} className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-slate-700 text-[11px] font-bold rounded-lg uppercase tracking-tight">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-blue-900 rounded-[3rem] p-10 text-white shadow-2xl relative z-10">
                <Award className="w-12 h-12 text-blue-300 mb-6" />
                <h3 className="text-2xl font-bold mb-6 italic">"Profesional orientada a resultados con alta capacidad pedagógica."</h3>
                <div className="space-y-6">
                  <p className="text-blue-100 font-medium">Formación Complementaria Destacada:</p>
                  <div className="grid gap-4">
                    {SKILLS[2].items.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-3 bg-white/10 p-4 rounded-2xl hover:bg-white/20 transition-colors">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span className="text-sm font-semibold">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full -z-10 blur-3xl opacity-60"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl font-extrabold text-white">Formación Académica</h2>
              <p className="text-slate-400 max-w-md">Excelencia académica en instituciones de alto prestigio en Colombia.</p>
            </div>
            <GraduationCap className="w-16 h-16 text-slate-800" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {EDUCATION.map((edu, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-10 rounded-[2.5rem] hover:bg-white/[0.08] transition-all group">
                <span className="text-blue-400 text-sm font-bold">{edu.date}</span>
                <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-blue-300 transition-colors">{edu.title}</h3>
                <p className="text-slate-400 mt-2 font-medium">{edu.institution}</p>
                {edu.extra && (
                  <div className="mt-6 inline-block px-4 py-2 bg-blue-900/40 text-blue-300 rounded-xl text-xs font-bold border border-blue-900">
                    {edu.extra}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contacto" className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-900">Contacto</h2>
            <p className="text-xl text-slate-500">Disponible para coordinar proyectos de impacto social y justicia.</p>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md flex items-center justify-center space-x-3 p-6 bg-slate-100 text-slate-900 rounded-[2rem] border border-slate-200">
              <Mail className="w-6 h-6 shrink-0 text-blue-900" />
              <span className="font-bold text-lg break-all">{EMAIL_ADDRESS}</span>
            </div>
          </div>

          <div className="pt-20 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400 text-sm">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+57 300 626 9156</span>
            </div>
            <p>© 2026 Angélica Patricia Velásquez Parra. Todos los derechos reservados.</p>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="font-semibold text-slate-600">Activa para consulta</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;