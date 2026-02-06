import React, { useState } from 'react';
import { Play, AlertCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { Button, Badge, FormInput, Modal } from './components/UI';

const App: React.FC = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    role: '',
    email: '',
    phone: ''
  });

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic to handle form submission would go here
    alert("Dados recebidos! Nossa equipe entrará em contato.");
    closeModal();
  };

  return (
    <div className="font-sans bg-deep-carbon min-h-screen text-neutral-400 selection:bg-brand-gold selection:text-black">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[128px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[128px] pointer-events-none -z-10" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <Badge icon={AlertCircle}>ATENÇÃO EMPRESÁRIOS!</Badge>
        
        <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          Se sua empresa paga parcelamentos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-[#fff]">dívidas tributárias federais…</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl max-w-3xl text-neutral-300 font-light leading-relaxed">
          Você pode estar pagando <strong className="text-white font-semibold">MUITO MAIS</strong> do que deveria por um <strong className="text-white font-semibold">ERRO DE CÁLCULO</strong>. É possível <strong className="text-white font-semibold">REDUZIR 30% do SALDO DEVEDOR, PARCELA MENSAL e DEVOLVER MILHÕES ao seu caixa</strong>, através de um método pouco conhecido que revelamos nesse vídeo.
        </p>

        {/* Video Embed with Performance Facade */}
        <div className="mt-12 w-full max-w-4xl aspect-video rounded-2xl overflow-hidden relative shadow-[0_0_50px_-15px_rgba(197,160,101,0.2)] border border-white/10 group">
          {!isVideoLoaded ? (
            <button 
              onClick={() => setIsVideoLoaded(true)}
              className="absolute inset-0 w-full h-full block cursor-pointer"
              aria-label="Reproduzir vídeo"
            >
              {/* Custom Thumbnail */}
              <img 
                src="https://i.postimg.cc/VN52qS1W/thumb-vsl.png" 
                alt="Thumbnail do vídeo sobre redução de parcelamentos" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                width="1280"
                height="720"
                loading="eager" 
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all">
                <div className="w-20 h-20 rounded-full bg-brand-gold/90 flex items-center justify-center shadow-[0_0_30px_rgba(197,160,101,0.6)] group-hover:scale-110 transition-transform">
                  <Play fill="black" size={32} className="ml-1 text-black" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-black/80 px-2 py-1 rounded text-xs font-mono text-white">
                REVISÃO TRIBUTÁRIA
              </div>
            </button>
          ) : (
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/Ry14yL7-a3E?si=4nm_N2MoWUMuI56j&autoplay=1" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          )}
        </div>

        <div className="mt-10 w-full max-w-md">
          {/* CTA Hero - Opens Modal */}
          <Button onClick={openModal} fullWidth>
            DESCUBRA QUANTO PODE SER REDUZIDO
          </Button>
        </div>
      </section>

      {/* 2. DIRECT CONTENT SECTION (Updated for Maximum Impact) */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Card Container with Gold Border Effect */}
          <div className="relative rounded-3xl p-[1px] bg-gradient-to-b from-brand-gold/50 via-brand-gold/10 to-transparent shadow-[0_0_60px_-15px_rgba(197,160,101,0.25)]">
            
            <div className="bg-[#0A0A0A] rounded-[23px] p-8 md:p-14 relative overflow-hidden">
              
              {/* Stronger Glow Effects for "Chamativa" look */}
              <div className="absolute -top-32 -right-32 w-80 h-80 bg-brand-gold/10 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(197,160,101,0.08),transparent_70%)] pointer-events-none" />

              <div className="relative z-10">
                
                <div className="flex flex-col md:flex-row gap-6 md:items-start mb-10">
                  <div className="shrink-0">
                     <div className="w-16 h-16 rounded-2xl bg-brand-gold/10 flex items-center justify-center border border-brand-gold/20 text-brand-gold shadow-[0_0_20px_rgba(197,160,101,0.15)]">
                        <AlertCircle size={36} />
                     </div>
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-[1.1] tracking-tight">
                      Você já achou <span className="text-brand-gold">absurdo</span> o valor do parcelamento que paga todo mês?
                    </h2>
                  </div>
                </div>

                <div className="space-y-6 text-lg md:text-xl text-neutral-300 font-light leading-relaxed border-l-2 border-white/5 pl-6 ml-2 md:ml-6">
                  <p>
                    Um erro grave de cálculo, presente em <strong className="text-white font-semibold underline decoration-brand-gold/40 underline-offset-4 decoration-2">92% dos parcelamentos federais</strong>, está fazendo empresas pagarem muito mais do que a lei permite.
                  </p>

                  <p className="text-white font-medium italic text-xl">
                    E ninguém está falando sobre isso.
                  </p>

                  <p>
                    A boa notícia é que esse erro pode ser corrigido <span className="text-brand-gold font-semibold">agora</span>.
                  </p>

                  <p>
                    No vídeo acima, eu, Felipe Dias, mostro como 3 empresas clientes conseguiram <span className="bg-brand-gold/10 text-brand-gold px-1 py-0.5 rounded font-semibold">+30% de redução no saldo devedor e na parcela mensal</span>, além da devolução imediata de milhões de reais ao caixa.
                  </p>
                </div>

                <div className="mt-14">
                  <Button onClick={openModal} fullWidth className="md:text-lg py-5 shadow-[0_0_30px_rgba(197,160,101,0.3)] hover:shadow-[0_0_50px_rgba(197,160,101,0.5)]">
                    DESCUBRA QUANTO PODE SER REDUZIDO
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* MODAL FORM */}
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="p-8 md:p-10 bg-off-black relative">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">Solicitar Análise</h3>
            <p className="text-neutral-400 text-sm">Preencha seus dados para que nossa equipe entre em contato.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <FormInput 
              label="Nome Completo" 
              value={formState.name}
              onChange={(e) => setFormState({...formState, name: e.target.value})}
              required
            />
            <FormInput 
              label="Nome da Empresa" 
              value={formState.company}
              onChange={(e) => setFormState({...formState, company: e.target.value})}
              required
            />
            <FormInput 
              label="Cargo" 
              value={formState.role}
              onChange={(e) => setFormState({...formState, role: e.target.value})}
              required
            />
            <FormInput 
              label="E-mail" 
              type="email"
              value={formState.email}
              onChange={(e) => setFormState({...formState, email: e.target.value})}
              required
            />
            <FormInput 
              label="WhatsApp (com DDD)" 
              type="tel"
              value={formState.phone}
              onChange={(e) => setFormState({...formState, phone: e.target.value})}
              placeholder="(00) 00000-0000"
              required
            />
            
            <div className="pt-4">
              <Button fullWidth className="w-full justify-center">
                ENVIAR SOLICITAÇÃO <ArrowRight size={18} />
              </Button>
            </div>
            
            <div className="text-center mt-4">
              <p className="flex items-center justify-center gap-2 text-xs text-neutral-500">
                <ShieldCheck size={12} className="text-brand-gold" /> Seus dados estão seguros
              </p>
            </div>
          </form>
        </div>
      </Modal>

      {/* FOOTER */}
      <footer className="bg-black py-16 px-6 border-t border-white/10 mt-auto">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Logo */}
          <img 
            src="https://i.postimg.cc/fTbT27SV/DA-LOGO-2-(2).png" 
            alt="Dias Advocacia" 
            className="h-20 mb-10 opacity-90"
            loading="lazy"
            width="250"
            height="80"
          />
          
          {/* Address & CNPJ */}
          <div className="space-y-2 text-sm text-neutral-500 font-light mb-10">
            <p>CNPJ: 24.824.741/0001-55</p>
            <p>Tv. Dom Romualdo de Seixas, 1476 - Sala 1906 - Umarizal, Belém - PA, 66055-050</p>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-white/5 w-full">
            <p className="text-xs text-neutral-700">© {new Date().getFullYear()} Dias Advocacia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;