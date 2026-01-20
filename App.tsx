import React, { useState, useEffect } from 'react';
import { Play, Check, ChevronDown, ChevronUp, AlertCircle, ShieldCheck, TrendingUp, Clock, Scale, ArrowRight, Menu, X, Instagram, Linkedin, Mail, MapPin, Phone, CreditCard, FileText, Utensils, FileSearch, Percent } from 'lucide-react';
import { Button, GlassCard, Badge, SectionTitle, CheckItem, FormInput } from './components/UI';

const App: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    installments: [] as string[],
    monthlyValue: ''
  });

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const scrollToForm = () => {
    const element = document.getElementById('contact-form');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInstallmentChange = (type: string) => {
    const current = formState.installments;
    if (current.includes(type)) {
      setFormState({ ...formState, installments: current.filter(i => i !== type) });
    } else {
      setFormState({ ...formState, installments: [...current, type] });
    }
  };

  return (
    <div className="font-sans bg-deep-carbon min-h-screen text-neutral-400 selection:bg-brand-gold selection:text-black">
      
      {/* Background Ambient Glows */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-[128px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[128px] pointer-events-none -z-10" />

      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
        <Badge icon={AlertCircle}>ATENÇÃO EMPRESÁRIOS COM +1 MILHÃO EM DÍVIDAS FEDERAIS</Badge>
        
        <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight">
          Se sua empresa paga parcelamentos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-[#fff]">dívidas tributárias federais…</span>
        </h1>
        
        <p className="mt-6 text-lg md:text-xl max-w-3xl text-neutral-300 font-light leading-relaxed">
          Você pode estar pagando muito mais do que deveria por um erro <strong className="text-white font-semibold">CRASSO</strong> da Receita. Veja neste vídeo como reduzir em 30% ou mais o valor das suas parcelas e saldo devedor total através da correção desse erro de cálculo.
        </p>

        {/* Video Placeholder */}
        <div className="mt-12 w-full max-w-4xl aspect-video rounded-2xl overflow-hidden relative group cursor-pointer shadow-[0_0_50px_-15px_rgba(197,160,101,0.2)] border border-white/10">
           {/* Placeholder Image */}
           <img 
            src="https://picsum.photos/1280/720?grayscale&blur=2" 
            alt="Video Thumbnail" 
            className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-sm group-hover:bg-black/40 transition-all">
            <div className="w-20 h-20 rounded-full bg-brand-gold/20 flex items-center justify-center border border-brand-gold/50 text-brand-gold group-hover:scale-110 transition-transform">
              <Play fill="currentColor" size={32} className="ml-1" />
            </div>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs font-mono text-neutral-400">
            <span>REVISÃO TRIBUTÁRIA</span>
            <span>07:00</span>
          </div>
        </div>

        <div className="mt-10 w-full max-w-md">
          {/* CTA Hero - Scrolls to Form */}
          <Button onClick={scrollToForm} fullWidth>
            DESCUBRA QUANTO PODE SER REDUZIDO
          </Button>
        </div>
      </section>

      {/* 2. BELIEVABILITY STRIP */}
      <section className="border-y border-white/5 bg-off-black/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto py-10 px-6">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-neutral-500 mb-8">
            Empresas que reduziram milhões em seus parcelamentos com nosso método
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Text Logos for visual consistency if real assets aren't provided */}
             <span className="text-lg font-bold text-white">Frango Americano</span>
             <span className="text-lg font-bold text-white">Y Watanabe</span>
             <span className="text-lg font-bold text-white">Vale do Rio Doce</span>
             <span className="text-lg font-bold text-white">Município de Parnaíba</span>
             <span className="text-lg font-bold text-white">Hospital Evangélico Goiano</span>
          </div>
          <div className="flex justify-center mt-8">
            <Badge icon={ShieldCheck}>
              Dias Advocacia — 15+ anos | Resultados comprovados em PA, MT, SP, PE
            </Badge>
          </div>
        </div>
      </section>

      {/* 3. PROBLEMA SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <GlassCard fullHeight className="relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-[80px] -z-10 pointer-events-none" />
              
              <h3 className="text-lg md:text-xl font-bold text-white mb-8 uppercase tracking-wider flex items-center gap-4">
                 <span className="w-1 h-8 bg-brand-gold rounded-full block shadow-[0_0_15px_rgba(197,160,101,0.6)]"></span>
                 <span>Se você responder <span className="text-brand-gold text-glow">SIM</span> a estas perguntas, continue lendo</span>
              </h3>
              
              <div className="space-y-3">
                {[
                  'Sua empresa/município paga parcelamentos federais (REFIS, PERT, PAES, PAEX e/ou outros)?',
                  'Você fez esses parcelamentos até 2026.',
                  'A parcela mensal está sangrando o seu caixa todo mês.',
                  'Você quer ter mais caixa para investir em outras áreas da empresa.'
                ].map((item, i) => (
                  <div key={i} className="group flex items-start gap-4 p-5 rounded-xl bg-gradient-to-r from-white/[0.03] to-transparent border border-white/5 hover:from-white/[0.07] hover:border-brand-gold/30 transition-all duration-300 cursor-default">
                    <div className="mt-0.5 relative flex items-center justify-center w-6 h-6 rounded-md border border-brand-gold/30 bg-black/20 shrink-0 group-hover:border-brand-gold/80 group-hover:shadow-[0_0_15px_-3px_rgba(197,160,101,0.4)] transition-all duration-300">
                        <Check size={14} className="text-brand-gold group-hover:scale-110 transition-transform duration-300" strokeWidth={3} />
                    </div>
                    <p className="text-neutral-300 group-hover:text-white transition-colors leading-relaxed font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Então aqui está o que a Receita nunca vai te contar:
            </h2>
            <p className="text-xl text-neutral-300 mb-6">
              Esses parcelamentos podem ter sido calculados de forma <span className="text-red-500 font-bold bg-red-500/10 px-2 rounded">ERRADA</span>.
              <br/>E você está pagando mais do que deveria.
            </p>
            
            <div className="space-y-4 border-l-2 border-red-500/30 pl-6 my-8">
              <h4 className="text-white font-semibold">Como isso acontece?</h4>
              <p>Quando sua empresa aderiu ao parcelamento, um sistema automatizado da Receita Federal calculou tudo. Esse sistema:</p>
              <ul className="space-y-2">
                <li className="flex gap-2"><span className="text-red-500">❌</span> Aplicou regras genéricas</li>
                <li className="flex gap-2"><span className="text-red-500">❌</span> Usa interpretações administrativas desatualizadas</li>
                <li className="flex gap-2"><span className="text-red-500">❌</span> Ignora decisões recentes do CARF</li>
                <li className="flex gap-2"><span className="text-red-500">❌</span> Desconsidera novos entendimentos dos tribunais</li>
              </ul>
            </div>

            <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-xl">
              <p className="font-bold text-white mb-2">O resultado?</p>
              <p>Sua empresa paga MUITO MAIS do que deveria. Mês após mês. Ano após ano.</p>
              <p className="mt-4 text-sm text-neutral-400">É uma falha sistêmica que atinge mais de <span className="text-white font-mono font-bold">92%</span> dos parcelamentos ativos no Brasil.</p>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
            {/* CTA Problem - Scrolls to Form */}
            <Button onClick={scrollToForm} className="px-10">QUERO PARAR DE PAGAR O QUE NÃO DEVO</Button>
        </div>
      </section>

      {/* 4. SOLUÇÃO */}
      <section className="py-20 bg-off-black relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle 
            title="A boa notícia: Existe uma forma de REDUZIR 30% ou mais da sua parcela e saldo devedor." 
            subtitle="Apenas corrigindo esse erro de cálculo nos seus parcelamentos através de uma Revisão Administrativa junto à Receita."
          />

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <GlassCard fullHeight className="text-center hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center text-green-400 mb-6 border border-green-500/20">
                <TrendingUp size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Redução da Parcela e Saldo Devedor</h3>
              <p>Identificamos valores indevidos e solicitamos a correção co cálculo, aliviando seu fluxo mensal imediatamente.</p>
            </GlassCard>
            <GlassCard fullHeight className="text-center hover:-translate-y-2 transition-transform duration-500" glow>
              <div className="w-16 h-16 mx-auto bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mb-6 border border-brand-gold/20">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Sem Risco Judicial</h3>
              <p>Tudo é feito por via 100% administrativa. Sem precisar de ação judicial e sem gastos iniciais.</p>
            </GlassCard>
            <GlassCard fullHeight className="text-center hover:-translate-y-2 transition-transform duration-500">
              <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Resultados em 3 meses</h3>
              <p>Liberação imediata de fluxo de caixa em cerca de 3 meses após o início da revisão.</p>
            </GlassCard>
          </div>

          <div className="bg-gradient-to-r from-[#0a0a0a] to-[#111] border border-white/10 rounded-2xl p-8 md:p-12 relative mb-12">
            <div className="absolute top-0 left-0 bg-brand-gold text-black text-xs font-bold px-4 py-1 rounded-br-lg uppercase tracking-widest">
              Na Prática
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center mt-6">
              <div className="space-y-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Cenário Atual</p>
                  <p className="text-2xl text-white font-light">Você paga uma parcela de <span className="font-mono text-red-400">R$ 100.000/mês</span></p>
                </div>
                <div className="h-px bg-white/10 w-full" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-neutral-500 mb-1">Nossa Ação</p>
                  <p className="text-xl text-neutral-300">Nós efetuamos uma revisão que reduz 30% da parcela e saldo devedor.</p>
                </div>
              </div>
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6">
                <h4 className="text-green-400 font-bold text-lg mb-4 flex items-center gap-2">
                  <Check size={20} /> Resultado
                </h4>
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-green-500/10 pb-2">
                    <span>Saldo Devedor</span>
                    <span className="text-white font-mono">Redução Milionária</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-green-500/10 pb-2">
                    <span>Fluxo de Caixa Livre</span>
                    <span className="text-green-400 font-mono font-bold">+ R$ 30.000/mês</span>
                  </li>
                  <li className="text-sm text-neutral-400 pt-2">
                    Sem ação judicial. Sem custos iniciais.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center">
             {/* CTA Solution - Scrolls to Form */}
             <Button onClick={scrollToForm} className="px-10" primary>QUERO ESSA ECONOMIA NA MINHA EMPRESA</Button>
          </div>
        </div>
      </section>

      {/* 5. PROVA SOCIAL */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <SectionTitle title="Resultados Comprovados" subtitle="Nossos clientes comprovam publicamente nossos resultados." />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
           {[1, 2, 3, 4, 5, 6].map((i) => (
             <GlassCard key={i} fullHeight className="group cursor-pointer min-h-[300px] flex flex-col items-center justify-center bg-black/40">
               <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                 <ShieldCheck className="text-brand-gold opacity-50" />
               </div>
               <p className="text-center text-xs uppercase tracking-widest text-neutral-500">Atestado de Capacidade Técnica</p>
               <p className="text-center text-white mt-2 font-bold">Cliente Confidencial #{i}</p>
               <div className="mt-4 px-3 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20 font-mono">
                 CNPJ Verificado
               </div>
               {/* Note: Using placeholders as requested logic implies space for photos */}
             </GlassCard>
           ))}
        </div>
        
        <div className="flex justify-center">
            {/* CTA Proof - Scrolls to Form */}
            <Button onClick={scrollToForm} className="px-10">QUERO SER O PRÓXIMO CASE DE SUCESSO</Button>
        </div>
      </section>

      {/* 6 & 7. OBJEÇÕES */}
      <section className="py-20 bg-off-black-light border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 space-y-20">
          
          {/* Objeção 1 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Texto movido para a primeira posição visual */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">"Isso é recuperação de créditos tributários?"</h2>
              <p className="text-4xl font-bold text-brand-gold mb-6">Não.</p>
              <p className="mb-4">Aqui é importante deixar algo absolutamente claro: <strong className="text-white">Não se trata de recuperação de créditos tributários.</strong></p>
              <ul className="space-y-2 mb-6">
                <li className="text-neutral-400"><span className="text-red-500 mr-2">❌</span> Não há compensação</li>
                <li className="text-neutral-400"><span className="text-red-500 mr-2">❌</span> Não há ação judicial</li>
                <li className="text-neutral-400"><span className="text-red-500 mr-2">❌</span> Não há pedido de restituição</li>
              </ul>
              <p>O que fazemos é o <strong>RECÁLCULO e REVISÃO</strong> do valor do parcelamento. Você não está usando crédito algum. Está apenas pagando o valor correto.</p>
            </div>
            
            {/* Cartão do Restaurante movido para a segunda posição visual */}
            <div>
              <div className="relative group">
                {/* Glow effect behind the card */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-brand-gold/5 rounded-2xl blur-xl -z-10" />
                
                <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl overflow-hidden relative">
                    <div className="bg-white/5 border-b border-white/5 px-6 py-4 flex items-center justify-center md:justify-start gap-3">
                      <div className="p-2 bg-brand-gold/10 rounded-lg text-brand-gold shrink-0 border border-brand-gold/20">
                        <Utensils size={16} />
                      </div>
                      <h3 className="text-sm font-bold text-white uppercase tracking-wider text-center md:text-left">
                        Para entender melhor, imagine que estamos em um restaurante
                      </h3>
                    </div>

                    <div className="p-8 space-y-8 relative">
                      {/* Connecting Line */}
                      <div className="absolute left-[3.25rem] top-20 bottom-20 w-px border-l border-dashed border-white/20 z-0" />

                      {/* Item 1: Recuperação */}
                      <div className="relative z-10 flex gap-6 group/item1 transition-all duration-300 hover:translate-x-1">
                          <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 shadow-[0_0_15px_-5px_rgba(59,130,246,0.3)] backdrop-blur-sm">
                            <CreditCard size={24} />
                          </div>
                          <div>
                            <h4 className="text-blue-400 font-bold text-sm uppercase tracking-wider mb-1">Recuperação de Créditos</h4>
                            <p className="text-sm text-neutral-400 leading-relaxed">É como usar um <strong className="text-white">voucher de desconto</strong> para abater o valor final da conta.</p>
                          </div>
                      </div>

                      {/* Item 2: Nossa Revisão */}
                      <div className="relative z-10 flex gap-6 group/item2 transition-all duration-300 hover:translate-x-1">
                          <div className="w-12 h-12 rounded-xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0 shadow-[0_0_20px_-5px_rgba(197,160,101,0.5)] backdrop-blur-sm">
                            <FileText size={24} />
                          </div>
                          <div>
                            <h4 className="text-brand-gold font-bold text-sm uppercase tracking-wider mb-1">Nossa Revisão</h4>
                            <p className="text-sm text-white leading-relaxed">É retirar da comanda os <strong className="text-brand-gold">pratos que você nunca pediu</strong>, mas que foram cobrados.</p>
                          </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
          </div>

          {/* Objeção 2 */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">"Mas eu já tenho advogado e acho que ele já faz isso"</h2>
              <p className="mb-4">Ótimo que você tenha um advogado. Mas provavelmente ele atua apenas na recuperação de créditos tributários — um trabalho importante, mas diferente.</p>
              <div className="bg-brand-gold/5 border-l-4 border-brand-gold p-6 rounded-r-lg">
                <p className="text-white italic">"Grande parte dos nossos clientes já faziam recuperação de créditos com seus advogados. E ainda assim tinham parcelamentos mal calculados."</p>
              </div>
              <p className="mt-4 text-sm text-neutral-400">Recuperação de créditos e Revisão de Parcelamentos são complementares, não excludentes.</p>
            </div>
            <div>
               <GlassCard>
                  <h3 className="text-white font-bold mb-4 border-b border-white/10 pb-4">Por que seu advogado não faz isso?</h3>
                  <div className="space-y-6">
                    <div>
                      <Badge>01</Badge>
                      <h4 className="text-white font-bold mt-2">Combinação Rara de Expertise</h4>
                      <p className="text-sm mt-1">Exige uma equipe de contadores e advogados tributaristas especialistas em parcelamentos federais + tecnologia própria de análise, que custou 15 anos e milhares de reais para desenvolvermos.</p>
                    </div>
                    <div>
                      <Badge>02</Badge>
                      <h4 className="text-white font-bold mt-2">Engenharia Reversa de Parcelamentos</h4>
                      <p className="text-sm mt-1">Exige nossa tecnologia específica e própria para recalcular multas/juros em massa e combinar com a legislação vigente</p>
                    </div>
                    <div>
                      <Badge>03</Badge>
                      <h4 className="text-white font-bold mt-2">Foco Diferente</h4>
                      <p className="text-sm mt-1">Seu advogado foca em processos e teses. Nós focamos em uma análise 360° do parcelamento impossível de ser feita por qualquer profissional.</p>
                    </div>
                  </div>
               </GlassCard>
            </div>
          </div>
          
          <div className="flex justify-center mt-12">
            {/* CTA Objections - Scrolls to Form */}
            <Button onClick={scrollToForm} className="px-10 text-lg">AGENDAR CONVERSA COM NOSSO ESPECIALISTA EM PARCELAMENTOS</Button>
          </div>
        </div>
      </section>

      {/* 9. MOMENTUM FINAL */}
      <section className="py-16 bg-deep-carbon border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Badge icon={TrendingUp}>Status em Tempo Real</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-6 mb-4">
            Histórico de Análises da Última Semana
          </h2>
          <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
            Veja quanto as empresas que se cadastraram nessa página descobriram que podiam reduzir em seus parcelamentos
          </p>
          
          <div className="space-y-3 text-left">
            {[
              { type: "Empresa de logística (SP)", old: "87 mil", save: "26 mil" },
              { type: "Indústria alimentícia (MT)", old: "143 mil", save: "43 mil" },
              { type: "Construtora (PE)", old: "52 mil", save: "15 mil" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/5 animate-pulse-slow">
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                   <span className="text-white font-medium">{item.type}</span>
                </div>
                <div className="text-sm text-right">
                   <span className="block text-neutral-500 text-xs">Parcela de R$ {item.old}</span>
                   <span className="text-green-400 font-mono font-bold">Potencial de R$ {item.save}/mês livre</span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-neutral-600 mt-4 uppercase tracking-widest">Números estimados em análise inicial, no decorrer do processo podem aumentar ou diminuir com base na análise aprofundada.</p>
          
          <div className="mt-8 flex justify-center">
             {/* CTA Momentum - Scrolls to Form */}
             <Button onClick={scrollToForm} className="w-full md:w-auto">FAZER MINHA ANÁLISE AGORA</Button>
          </div>
        </div>
      </section>

      {/* NEW: COMO FUNCIONA (Before Form) */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5 relative z-10">
        <SectionTitle 
          title="Como funciona nosso trabalho e quanto vai custar?" 
          subtitle="O processo é muito simples:"
        />
        
        <div className="grid md:grid-cols-3 gap-8 relative mb-12">
           {/* Connector Line (Desktop Only) */}
           <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent -z-10" />

           {/* Step 1 */}
           <div className="relative">
             <GlassCard fullHeight className="hover:border-brand-gold/30 transition-colors">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#050505] border border-brand-gold rounded-full flex items-center justify-center text-brand-gold font-bold z-10">
                    1
                </div>
                <div className="mt-6 text-center">
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-4 text-neutral-300">
                        <FileSearch size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Análise Inicial</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                        Você deve nos autorizar a fazer uma <strong>Análise Técnica sem custo</strong> dos Parcelamentos para que possamos identificar erros de cálculo e determinar o quanto pode ser reduzido.
                    </p>
                    <div className="text-left space-y-3 bg-white/5 p-4 rounded-lg text-sm border border-white/5">
                        <p className="flex items-start gap-2"><Check size={16} className="text-brand-gold shrink-0 mt-0.5" /> Assinamos um NDA (sigilo).</p>
                        <p className="flex items-start gap-2"><Check size={16} className="text-brand-gold shrink-0 mt-0.5" /> Procuração só de consulta.</p>
                        <p className="flex items-start gap-2"><Check size={16} className="text-brand-gold shrink-0 mt-0.5" /> Você recebe a proposta e decide se quer nos contratar.</p>
                    </div>
                </div>
             </GlassCard>
           </div>

           {/* Step 2 */}
           <div className="relative">
             <GlassCard fullHeight className="hover:border-brand-gold/30 transition-colors">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#050505] border border-brand-gold rounded-full flex items-center justify-center text-brand-gold font-bold z-10">
                    2
                </div>
                <div className="mt-6 text-center">
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-4 text-neutral-300">
                        <FileText size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Revisão Administrativa</h3>
                    <p className="text-neutral-400 leading-relaxed">
                        Após o aceite da proposta, iniciamos a Revisão Administrativa para:
                    </p>
                    <div className="mt-6 space-y-2">
                        <Badge>Corrigir valores indevidos</Badge>
                        <Badge>Reduzir valor da parcela</Badge>
                        <Badge>Reduzir saldo devedor</Badge>
                    </div>
                </div>
             </GlassCard>
           </div>

           {/* Step 3 */}
           <div className="relative">
             <GlassCard fullHeight className="hover:border-brand-gold/30 transition-colors" glow>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-gold border border-brand-gold rounded-full flex items-center justify-center text-black font-bold z-10 shadow-[0_0_15px_rgba(197,160,101,0.5)]">
                    3
                </div>
                <div className="mt-6 text-center">
                    <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mx-auto mb-4 text-brand-gold">
                        <Percent size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">Redução Efetiva e Honorários</h3>
                    <p className="text-neutral-400 leading-relaxed mb-6">
                        Sua redução é efetivada diretamente pela Receita Federal.
                    </p>
                    <div className="bg-brand-gold/10 border border-brand-gold/30 p-5 rounded-xl">
                        <p className="text-sm text-brand-gold font-bold uppercase tracking-widest mb-2">Somente no Sucesso</p>
                        <p className="text-white text-sm leading-relaxed">Você só paga nossos honorários, que são <strong className="text-brand-gold">20% do valor reduzido</strong>, após a homologação.</p>
                    </div>
                </div>
             </GlassCard>
           </div>
        </div>
        
        <div className="flex justify-center">
           {/* CTA How it works - Scrolls to Form */}
           <Button onClick={scrollToForm} className="px-12 text-lg">INICIAR ANÁLISE SEM CUSTO</Button>
        </div>
      </section>

      {/* 10. FORMULÁRIO */}
      <section id="contact-form" className="py-20 px-6 max-w-3xl mx-auto relative z-10">
        <GlassCard glow className="p-8 md:p-12">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-bold text-white mb-2">Descubra quanto você pode reduzir</h2>
             <p>Preencha o formulário abaixo. Em até 24h úteis, nossa equipe técnica entra em contato.</p>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <FormInput 
              label="Nome Completo" 
              value={formState.name} 
              onChange={(e) => setFormState({...formState, name: e.target.value})}
              required
            />
            <FormInput 
              label="E-mail Corporativo" 
              type="email"
              value={formState.email} 
              onChange={(e) => setFormState({...formState, email: e.target.value})}
              required
            />
            <FormInput 
              label="Telefone/WhatsApp" 
              type="tel"
              value={formState.phone} 
              onChange={(e) => setFormState({...formState, phone: e.target.value})}
              required
            />
            <FormInput 
              label="Nome da Empresa/Município" 
              value={formState.company} 
              onChange={(e) => setFormState({...formState, company: e.target.value})}
              required
            />

            <div className="mb-4">
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
                Tipo de Parcelamento
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['REFIS', 'PERT', 'PAES', 'PAEX', 'Outro', 'Não sei'].map(opt => (
                  <label key={opt} className={`flex items-center gap-2 p-3 rounded cursor-pointer border transition-colors ${formState.installments.includes(opt) ? 'bg-brand-gold/20 border-brand-gold text-white' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                    <input 
                      type="checkbox" 
                      checked={formState.installments.includes(opt)}
                      onChange={() => handleInstallmentChange(opt)}
                      className="accent-brand-gold"
                    />
                    <span className="text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-bold uppercase tracking-widest text-neutral-500 mb-2">
                Valor aproximado da parcela mensal
              </label>
              <div className="space-y-2">
                {['Até R$ 10 mil', 'R$ 10 mil a R$ 50 mil', 'R$ 50 mil a R$ 100 mil', 'Acima de R$ 100 mil', 'Prefiro não informar agora'].map(opt => (
                  <label key={opt} className={`flex items-center gap-3 p-3 rounded cursor-pointer border transition-colors ${formState.monthlyValue === opt ? 'bg-brand-gold/20 border-brand-gold text-white' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                    <input 
                      type="radio" 
                      name="monthlyValue"
                      value={opt}
                      checked={formState.monthlyValue === opt}
                      onChange={(e) => setFormState({...formState, monthlyValue: e.target.value})}
                      className="accent-brand-gold"
                    />
                    <span className="text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Form Submit Button - DOES NOT scroll */}
            <Button fullWidth className="text-lg">SOLICITAR ANÁLISE GRATUITA <ArrowRight size={20} /></Button>
            
            <div className="pt-6 border-t border-white/10 space-y-2 text-center md:text-left text-sm text-neutral-500">
               <p className="flex items-center justify-center md:justify-start gap-2"><ShieldCheck size={14} className="text-brand-gold" /> Seus dados protegidos por NDA</p>
               <p className="flex items-center justify-center md:justify-start gap-2"><Check size={14} className="text-brand-gold" /> Análise 100% gratuita e sem compromisso</p>
               <p className="flex items-center justify-center md:justify-start gap-2"><span className="text-brand-gold font-bold">SÓ PAGA SE REDUZIR</span> (20% da redução obtida)</p>
            </div>
          </form>
        </GlassCard>
      </section>

      {/* 11. FAQ */}
      <section className="py-20 px-6 max-w-4xl mx-auto relative z-0">
        <SectionTitle title="Perguntas Frequentes" />
        <div className="space-y-4 mb-12">
          {[
            { q: "Quanto tempo demora a análise técnica?", a: "Entre 7 a 15 dias úteis após você nos enviar a documentação do parcelamento (extrato de consolidação, termo de adesão)." },
            { q: "Funciona para qualquer tipo de parcelamento federal?", a: "Sim. Funciona para REFIS, PERT, PAES, PAEX e outros programas de parcelamento federal — inclusive para parcelamentos já quitados nos últimos 5 anos." },
            { q: "Preciso pagar algo antecipado?", a: "Não. A análise é 100% gratuita. Você só paga 20% da redução obtida — e apenas DEPOIS da Receita homologar. Se não houver redução possível, nada é cobrado." },
            { q: "Isso afeta meu parcelamento atual?", a: "Não. A revisão apenas corrige os valores. Seu parcelamento continua ativo, só que com parcelas menores e saldo devedor reduzido." },
            { q: "E se não houver redução possível?", a: "Você recebe o relatório técnico explicando por que não foi possível reduzir — sem custo algum. Nem fechamos contrato se não identificarmos oportunidade de redução." }
          ].map((item, index) => (
            <div key={index} className="border border-white/10 rounded-lg bg-white/5 overflow-hidden">
              <button 
                className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-bold text-white pr-4">{item.q}</span>
                {activeFaq === index ? <ChevronUp className="text-brand-gold" /> : <ChevronDown className="text-neutral-500" />}
              </button>
              {activeFaq === index && (
                <div className="p-6 pt-0 text-neutral-300 border-t border-white/5 mt-2">
                   <p className="mt-4">{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="flex justify-center">
            {/* CTA FAQ - Scrolls to Form */}
            <Button onClick={scrollToForm} primary={false}>AINDA TENHO DÚVIDAS - FALAR COM EQUIPE DIAS ADVOGADOS</Button>
        </div>
      </section>

      {/* 12. FOOTER - SIMPLIFIED */}
      <footer className="bg-black py-16 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          {/* Logo */}
          <img 
            src="https://i.postimg.cc/fTbT27SV/DA-LOGO-2-(2).png" 
            alt="Dias Advocacia" 
            className="h-20 mb-10 opacity-90"
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