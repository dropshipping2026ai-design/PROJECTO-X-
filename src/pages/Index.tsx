import { useState } from "react";
import {
  Shield, Lock, MessageCircle, ChevronDown, Check, AlertTriangle,
  Clock, Heart, Eye, Star, Sparkles
} from "lucide-react";

const questions = [
  { q: "O seu parceiro(a) começou a proteger excessivamente o telemóvel?", options: ["Sim", "Não", "Às vezes"] },
  { q: "Ele(a) demora mais tempo do que o habitual para responder às mensagens?", options: ["Sim", "Não", "Frequentemente"] },
  { q: "Notou mudanças repentinas de comportamento ou aparência?", options: ["Sim", "Não", "Talvez"] },
  { q: "Evita falar sobre determinados assuntos?", options: ["Sim", "Não", "Algumas vezes"] },
  { q: "Tem uma sensação constante de que algo não está certo?", options: ["Sim", "Não"] },
];

type Stage = "hero" | "quiz" | "loading" | "result";

export default function Index() {
  const [stage, setStage] = useState<Stage>("hero");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const startQuiz = () => {
    setStage("quiz");
    setCurrent(0);
    setAnswers([]);
    setTimeout(() => document.getElementById("quiz")?.scrollIntoView({ behavior: "smooth" }), 50);
  };

  const answer = (opt: string) => {
    const next = [...answers, opt];
    setAnswers(next);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setStage("loading");
      setProgress(0);
      const interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(interval);
            setStage("result");
            setTimeout(() => document.getElementById("result")?.scrollIntoView({ behavior: "smooth" }), 100);
            return 100;
          }
          return p + 2;
        });
      }, 60);
    }
  };

  const scrollToOffer = () => document.getElementById("offer")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      <div className="w-full bg-red-brand text-white text-center py-2 text-xs md:text-sm font-medium tracking-wide px-4">
        ⚡ Oferta por tempo limitado — apenas hoje a 397 MZN
      </div>

      <nav className="bg-navy-deep text-white">
        <div className="max-w-6xl mx-auto px-5 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="text-red-brand" size={22} />
            <span className="font-serif text-xl font-bold">Verdade Revelada</span>
          </div>
          <button onClick={scrollToOffer} className="hidden md:inline-block bg-red-brand hover:bg-red-deep transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded-full">
            Aceder ao Guia
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 gradient-glow pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-5 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-6 text-xs md:text-sm">
            <AlertTriangle size={14} className="text-red-brand-soft" />
            <span>Avaliação confidencial e gratuita</span>
          </div>
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6">
            Será Que Estão a <span className="display-italic text-red-brand-soft">Esconder</span><br />Algo de Si?
          </h1>
          <p className="text-base md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Responda a algumas perguntas rápidas e descubra se existem sinais de alerta na sua relação. <strong className="text-white">Leva menos de 1 minuto.</strong>
          </p>
          <button onClick={startQuiz} className="group inline-flex items-center gap-2 bg-red-brand hover:bg-red-brand-deep transition-all text-white text-base md:text-lg font-semibold px-8 py-4 md:px-10 md:py-5 rounded-full shadow-red hover:scale-105 duration-300">
            Começar Avaliação
            <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
          </button>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs md:text-sm text-white/60">
            <span className="flex items-center gap-1.5"><Lock size={14} /> 100% Confidencial</span>
            <span className="flex items-center gap-1.5"><Clock size={14} /> Resultado Imediato</span>
            <span className="flex items-center gap-1.5"><Shield size={14} /> Sem Julgamentos</span>
          </div>
        </div>
      </section>

      {/* QUIZ */}
      {(stage === "quiz" || stage === "loading" || stage === "result") && (
        <section id="quiz" className="py-16 md:py-24 bg-secondary">
          <div className="max-w-2xl mx-auto px-5">
            {stage === "quiz" && (
              <div className="bg-white rounded-2xl shadow-medium p-6 md:p-10 animate-fade-in">
                <div className="flex items-center justify-between mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  <span>Pergunta {current + 1} de {questions.length}</span>
                  <span className="text-red-brand">{Math.round((current / questions.length) * 100)}%</span>
                </div>
                <div className="h-1.5 bg-secondary rounded-full overflow-hidden mb-8">
                  <div className="h-full bg-red-brand transition-all duration-500" style={{ width: `${(current / questions.length) * 100}%` }} />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-8 leading-tight">{questions[current].q}</h2>
                <div className="space-y-3">
                  {questions[current].options.map((opt) => (
                    <button key={opt} onClick={() => answer(opt)} className="w-full text-left px-5 py-4 rounded-xl border-2 border-border hover:border-red-brand hover:bg-red-brand/5 transition-all font-medium text-navy group flex items-center justify-between">
                      <span>{opt}</span>
                      <span className="text-muted-foreground group-hover:text-red-brand group-hover:translate-x-1 transition-all">→</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {stage === "loading" && (
              <div className="bg-white rounded-2xl shadow-medium p-8 md:p-12 text-center animate-fade-in">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full gradient-red flex items-center justify-center animate-pulse">
                  <Eye className="text-white" size={28} />
                </div>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-3">A analisar as suas respostas...</h2>
                <p className="text-muted-foreground mb-8">A nossa avaliação está a processar os sinais identificados.</p>
                <div className="h-3 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full gradient-red transition-all duration-200" style={{ width: `${progress}%` }} />
                </div>
                <p className="mt-4 text-sm font-semibold text-red-brand">{progress}%</p>
              </div>
            )}

            {stage === "result" && (
              <div id="result" className="bg-white rounded-2xl shadow-strong border-t-4 border-red-brand p-6 md:p-10 animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-red-brand/10 text-red-brand px-3 py-1 rounded-full text-xs font-semibold mb-4">
                  <AlertTriangle size={14} /> Atenção Necessária
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">Análise Concluída</h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                  Com base nas suas respostas, existem <strong className="text-navy">alguns comportamentos que podem merecer atenção</strong>. Muitas pessoas ignoram estes sinais e descobrem a verdade tarde demais.
                </p>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
                  Preparámos um guia exclusivo que vai ajudá-lo(a) a compreender o que pode realmente estar a acontecer — sem suposições, sem confrontos.
                </p>
                <button onClick={scrollToOffer} className="w-full md:w-auto bg-red-brand hover:bg-red-brand-deep text-white font-semibold px-8 py-4 rounded-full shadow-red transition-all hover:scale-[1.02]">
                  Ver o Guia Recomendado →
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* OFFER PRESENTATION */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-14">
            <p className="text-xs md:text-sm uppercase tracking-widest text-red-brand font-bold mb-3">Guia Digital Exclusivo</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy leading-tight max-w-3xl mx-auto">
              Descubra os Sinais Que Revelam uma <span className="display-italic text-red-brand">Traição</span> Antes Que Seja Tarde
            </h2>
            <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Um guia completo, direto e baseado em comportamentos reais. Tudo o que precisa de saber para deixar de viver na dúvida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 md:gap-5">
            {[
              "Como identificar sinais psicológicos de infidelidade",
              "Erros que fazem as pessoas ignorarem provas importantes",
              "Como confirmar suspeitas sem confrontos desnecessários",
              "Como proteger a sua saúde emocional durante o processo",
              "Checklist completo para analisar comportamentos suspeitos",
              "Como agir com clareza, sem decisões impulsivas",
            ].map((b) => (
              <div key={b} className="flex items-start gap-3 bg-secondary/50 border border-border rounded-xl p-5">
                <div className="shrink-0 w-7 h-7 rounded-full bg-red-brand flex items-center justify-center mt-0.5">
                  <Check size={16} className="text-white" strokeWidth={3} />
                </div>
                <p className="text-navy font-medium leading-snug">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28 bg-navy-deep text-white">
        <div className="max-w-6xl mx-auto px-5">
          <div className="text-center mb-14">
            <p className="text-xs md:text-sm uppercase tracking-widest text-red-brand-soft font-bold mb-3">Histórias Reais</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight">
              Pessoas que finalmente <span className="display-italic text-red-brand-soft">encontraram respostas</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { t: "Eu pensava que era apenas imaginação. Depois de aplicar os métodos do guia percebi o que realmente estava a acontecer. Recomendo a quem está em dúvida.", n: "Carlos", c: "Maputo" },
              { t: "Finalmente consegui respostas sem criar discussões em casa. O guia mostrou-me sinais que eu via todos os dias mas nunca tinha valorizado.", n: "Maria", c: "Beira" },
              { t: "Vale cada metical. Estava há meses com aquela sensação estranha e o checklist ajudou-me a organizar a minha cabeça e a tomar decisões com calma.", n: "Anselmo", c: "Matola" },
            ].map((t) => (
              <div key={t.n} className="bg-navy-light/40 backdrop-blur border border-white/10 rounded-2xl p-6">
                <div className="flex gap-0.5 mb-4 text-gold">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="text-white/85 leading-relaxed mb-5 italic">"{t.t}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full bg-red-brand flex items-center justify-center font-bold text-white">{t.n[0]}</div>
                  <div>
                    <p className="font-semibold">{t.n}</p>
                    <p className="text-xs text-white/60">{t.c}, Moçambique</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARANTEE */}
      <section className="py-16 bg-secondary">
        <div className="max-w-3xl mx-auto px-5">
          <div className="bg-white rounded-2xl border-2 border-navy/10 p-6 md:p-10 flex flex-col md:flex-row items-center gap-6 shadow-soft">
            <div className="shrink-0 w-20 h-20 rounded-full bg-navy flex items-center justify-center">
              <Shield size={40} className="text-white" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-navy mb-2">Garantia de 7 Dias</h3>
              <p className="text-muted-foreground leading-relaxed">
                Se o conteúdo não lhe ajudar a compreender melhor a situação, devolvemos o seu dinheiro em até 7 dias. <strong className="text-navy">Sem perguntas, sem complicações.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OFFER */}
      <section id="offer" className="py-20 md:py-28 gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow pointer-events-none" />
        <div className="relative max-w-2xl mx-auto px-5 text-center">
          <p className="text-xs md:text-sm uppercase tracking-widest text-red-brand-soft font-bold mb-3">Oferta Especial</p>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Aceda Agora e Comece a <span className="display-italic text-red-brand-soft">Ver com Clareza</span>
          </h2>
          <p className="text-white/75 mb-10 text-base md:text-lg">Guia digital completo. Entrega imediata por e-mail e WhatsApp.</p>

          <div className="bg-white text-navy rounded-3xl p-8 md:p-10 shadow-strong">
            <div className="inline-block bg-red-brand text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4">
              Promoção válida hoje
            </div>
            <p className="text-muted-foreground line-through text-lg mb-1">De 1.500 MZN</p>
            <div className="flex items-baseline justify-center gap-2 mb-2">
              <span className="font-serif text-6xl md:text-7xl font-bold text-red-brand">397</span>
              <span className="font-bold text-2xl text-navy">MZN</span>
            </div>
            <p className="text-sm text-muted-foreground mb-8">Pagamento único · Acesso vitalício</p>

            <a href="https://checkout.escalepay.com/2025566" target="_blank" rel="noopener noreferrer" className="block w-full bg-red-brand hover:bg-red-brand-deep text-white font-bold text-lg py-5 rounded-full shadow-red transition-all hover:scale-[1.02]">
              Quero Aceder Agora →
            </a>

            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Lock size={12} /> Pagamento seguro</span>
              <span className="flex items-center gap-1"><Check size={12} /> Acesso imediato</span>
              <span className="flex items-center gap-1"><Heart size={12} /> 100% confidencial</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-12">
            <p className="text-xs md:text-sm uppercase tracking-widest text-red-brand font-bold mb-3">Perguntas Frequentes</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-navy">
              Tem <span className="display-italic">dúvidas?</span>
            </h2>
          </div>
          <div className="space-y-3">
            {[
              { q: "Como recebo o guia?", a: "Logo após a confirmação do pagamento, receberá o link de acesso ao guia digital no seu e-mail e também via WhatsApp. A entrega é imediata e automática." },
              { q: "Funciona para homens e mulheres?", a: "Sim. O guia foi desenvolvido para qualquer pessoa que esteja a viver uma situação de dúvida na sua relação, independentemente do género." },
              { q: "O pagamento é seguro?", a: "Sim. Utilizamos plataformas de pagamento reconhecidas em Moçambique (M-Pesa, e-Mola, transferência bancária) com encriptação completa dos seus dados." },
              { q: "Por quanto tempo tenho acesso?", a: "O acesso ao guia é vitalício. Pode rever o conteúdo sempre que precisar, sem mensalidades nem renovações." },
              { q: "É realmente confidencial?", a: "Totalmente. Não partilhamos os seus dados com terceiros e o conteúdo é enviado de forma discreta para o seu contacto pessoal." },
            ].map((f, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden bg-secondary/30">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-navy hover:bg-secondary/60 transition-colors">
                  <span>{f.q}</span>
                  <ChevronDown size={20} className={`shrink-0 transition-transform text-red-brand ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-muted-foreground leading-relaxed animate-fade-in">{f.a}</div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Ainda tem dúvidas?</p>
            <a href="https://wa.me/258840000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold px-6 py-3 rounded-full transition-colors">
              <MessageCircle size={18} /> Falar via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-red-brand text-white text-center">
        <div className="max-w-2xl mx-auto px-5">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Não deixe a dúvida controlar a sua vida</h2>
          <p className="text-white/90 mb-8">Cada dia sem respostas é mais um dia de angústia. Tome o primeiro passo agora.</p>
          <button onClick={scrollToOffer} className="bg-white text-red-brand font-bold px-8 py-4 rounded-full hover:bg-navy hover:text-white transition-colors">
            Aceder ao Guia por 397 MZN
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-navy-deep text-white/70 py-12">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            <div>
              <div className="flex items-center gap-2 mb-3 text-white">
                <Shield className="text-red-brand" size={20} />
                <span className="font-serif text-lg font-bold">Verdade Revelada</span>
              </div>
              <p className="text-sm leading-relaxed">Guia digital para quem procura clareza, respostas e tranquilidade emocional.</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-3 text-sm">Informações</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Reembolso</a></li>
              </ul>
            </div>
            <div>
              <p className="text-white font-semibold mb-3 text-sm">Contacto</p>
              <a href="https://wa.me/258840000000" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors">
                <MessageCircle size={16} /> WhatsApp: +258 84 000 0000
              </a>
            </div>
          </div>
          <div className="pt-6 border-t border-white/10 text-xs text-center text-white/50">
            © 2026 Verdade Revelada. Todos os direitos reservados. Este produto é um guia informativo e não substitui aconselhamento profissional.
          </div>
        </div>
      </footer>
    </div>
  );
}
