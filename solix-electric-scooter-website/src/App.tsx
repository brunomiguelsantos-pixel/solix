import { useState } from "react";

/* ══════════════════════════════════════════════════════════
   DATA
══════════════════════════════════════════════════════════ */

const models = [
  {
    id: "S1",
    name: "Solix S1",
    tag: "Equilíbrio Perfeito",
    tagColor: "text-green-300 bg-green-400/10 border-green-400/30",
    autonomy: "até 40 km",
    speed: "25 km/h",
    weight: "12 kg",
    charge: "4–6 horas",
    motor: "350W",
    battery: "36V – 10Ah",
    tire: '8,5"',
    highlight: "Compacto, prático e sustentável. Ideal para o uso do dia a dia.",
    image: "/images/solix-detail.jpg",
    accent: "from-green-500/20 to-transparent border-green-500/30",
    bar: "from-green-400 to-emerald-300",
  },
  {
    id: "S2",
    name: "Solix S2",
    tag: "Mais Potência",
    tagColor: "text-orange-300 bg-orange-400/10 border-orange-400/30",
    autonomy: "até 60 km",
    speed: "30 km/h",
    weight: "15 kg",
    charge: "5–7 horas",
    motor: "500W",
    battery: "36V – 15Ah",
    tire: '10"',
    highlight: "Perfeito para quem busca mais desempenho e conforto na cidade.",
    image: "/images/scooter-slim.jpg",
    accent: "from-orange-500/20 to-transparent border-orange-500/30",
    bar: "from-orange-400 to-amber-300",
  },
  {
    id: "S3",
    name: "Solix S3",
    tag: "Liberdade Sem Limites",
    tagColor: "text-yellow-300 bg-yellow-400/10 border-yellow-400/30",
    autonomy: "até 80 km",
    speed: "40 km/h",
    weight: "18 kg",
    charge: "6–8 horas",
    motor: "750W",
    battery: "48V – 20Ah",
    tire: '10"',
    highlight: "Alta performance para quem quer ir mais longe sem depender da rede elétrica.",
    image: "/images/solix-hero.jpg",
    accent: "from-yellow-500/20 to-transparent border-yellow-500/30",
    bar: "from-yellow-400 to-orange-400",
  },
];

const faqs = [
  {
    q: "O patinete recarrega apenas com energia solar?",
    a: "Sim! O patinete pode ser carregado exclusivamente pela energia solar captada pelas placas integradas ao deck. Em condições de boa incidência solar, o carregamento completo leva aproximadamente um dia ensolarado inteiro. Também é possível recarregar via tomada convencional.",
  },
  {
    q: "Qual o público-alvo da Solix?",
    a: "O principal público-alvo são prefeituras e órgãos públicos interessados em soluções de mobilidade urbana sustentável. Também atendemos lojas para revenda, condomínios, hotéis e outras instituições.",
  },
  {
    q: "Os produtos podem ser personalizados?",
    a: "Sim! A Solix oferece personalização dos patinetes conforme as necessidades específicas de cada cliente ou projeto.",
  },
  {
    q: "Qual a garantia dos patinetes Solix?",
    a: "Todos os patinetes Solix possuem garantia de 2 (dois) anos contra defeitos de fabricação, com suporte técnico e peças originais.",
  },
  {
    q: "Como funciona o aplicativo de segurança?",
    a: "O app Solix pode ser baixado diretamente pelo site oficial. Ele oferece rastreamento, controle remoto de travamento, monitoramento de bateria e recursos de segurança.",
  },
  {
    q: "A Solix atende projetos de frota para prefeituras?",
    a: "Sim! A Solix tem experiência em projetos de mobilidade urbana para prefeituras e órgãos públicos, com propostas personalizadas e suporte completo.",
  },
];

/* ══════════════════════════════════════════════════════════
   COMPONENTS
══════════════════════════════════════════════════════════ */

function SunIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="12" cy="12" r="4" />
      <line x1="12" y1="2" x2="12" y2="5" />
      <line x1="12" y1="19" x2="12" y2="22" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="2" y1="12" x2="5" y2="12" />
      <line x1="19" y1="12" x2="22" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </svg>
  );
}

function LogoSolix({ height = 32 }: { height?: number }) {
  return (
    <svg height={height} viewBox="0 0 200 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text fontFamily="'Arial Black', 'Impact', sans-serif" fontWeight="900" fontSize="50" fill="white" y="48" letterSpacing="-1">
        SOL
      </text>
      {/* star dot in center of I */}
      <text fontFamily="'Arial Black', 'Impact', sans-serif" fontWeight="900" fontSize="50" fill="white" y="48" x="108" letterSpacing="-1">I</text>
      <circle cx="117" cy="22" r="5" fill="#F97316" />
      <polygon points="117,15 118.8,20.4 124.5,20.4 119.8,23.6 121.6,29 117,25.8 112.4,29 114.2,23.6 109.5,20.4 115.2,20.4" fill="#FCD34D" />
      {/* X gradient */}
      <text fontFamily="'Arial Black', 'Impact', sans-serif" fontWeight="900" fontSize="50" fill="url(#xg)" y="48" x="127" letterSpacing="-1">X</text>
      <defs>
        <linearGradient id="xg" x1="127" y1="0" x2="200" y2="52" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#FBBF24" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Badge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-orange-300 ${className}`}>
      {children}
    </span>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`rounded-2xl border transition-all duration-300 ${open ? "border-orange-400/40 bg-orange-400/5" : "border-white/10 bg-white/[0.03]"}`}>
      <button className="flex w-full items-center justify-between gap-4 p-6 text-left" onClick={() => setOpen(!open)}>
        <span className="text-base font-semibold text-white">{q}</span>
        <span className={`flex-shrink-0 transition-transform duration-300 ${open ? "rotate-45 text-orange-400" : "text-slate-400"}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
            <path strokeLinecap="round" d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      {open && <p className="px-6 pb-6 text-sm leading-7 text-slate-300">{a}</p>}
    </div>
  );
}

/* ══════════════════════════════════════════════════════════
   APP
══════════════════════════════════════════════════════════ */
export default function App() {
  const [activeModel, setActiveModel] = useState(2); // S3 default
  const m = models[activeModel];

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#080808] text-white">

      {/* ── ambient glows ── */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-[50rem] w-[50rem] -translate-x-1/2 rounded-full bg-orange-500/6 blur-[120px]" />
        <div className="absolute right-0 top-1/2 h-[35rem] w-[35rem] rounded-full bg-amber-400/5 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[30rem] w-[30rem] rounded-full bg-orange-600/5 blur-[100px]" />
      </div>

      {/* ════════════════════════════════════════
          HEADER
      ════════════════════════════════════════ */}
      <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-black/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 lg:px-8">
          <a href="#topo" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 shadow-[0_0_20px_rgba(249,115,22,0.5)]">
              <SunIcon className="h-4.5 w-4.5 text-white" />
            </div>
            <LogoSolix height={28} />
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-400 lg:flex">
            {[["#sobre", "Sobre"], ["#modelos", "Modelos"], ["#tecnologia", "Tecnologia Solar"], ["#especificacoes", "Especificações"], ["#contato", "Contato"]].map(([h, l]) => (
              <a key={h} href={h} className="transition hover:text-orange-400">{l}</a>
            ))}
          </nav>

          <a href="#contato"
            className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-5 py-2.5 text-sm font-bold text-black shadow-[0_0_18px_rgba(249,115,22,0.45)] transition hover:shadow-[0_0_28px_rgba(249,115,22,0.65)]">
            Solicitar Proposta
          </a>
        </div>
      </header>

      <main id="topo">

        {/* ════════════════════════════════════════
            HERO — imagem principal do patinete robusto
        ════════════════════════════════════════ */}
        <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-8 lg:pt-24">
          {/* texto */}
          <div>
            <Badge><SunIcon className="h-3.5 w-3.5" /> Energia Solar · 100% Elétrico · Sustentável</Badge>

            <h1 className="mt-6 text-5xl font-black leading-[1.06] tracking-tight sm:text-6xl lg:text-[5rem]">
              A energia do sol<br />
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
                te leva mais longe.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              A <strong className="font-bold text-white">Solix</strong> é especializada em patinetes elétricos movidos a energia solar — mobilidade prática, econômica e sustentável, com personalização para cada cliente.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#modelos"
                className="rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-4 text-sm font-bold text-black shadow-[0_0_28px_rgba(249,115,22,0.45)] transition hover:scale-105 hover:shadow-[0_0_40px_rgba(249,115,22,0.6)]">
                Ver Modelos
              </a>
              <a href="#contato"
                className="rounded-full border border-white/15 bg-white/[0.06] px-8 py-4 text-sm font-bold text-white transition hover:border-orange-400/40 hover:bg-white/10">
                Solicitar Proposta
              </a>
            </div>

            {/* stats strip */}
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[["80 km", "Autonomia máx."], ["40 km/h", "Velocidade máx."], ["2 anos", "Garantia"], ["3 modelos", "Linha completa"]].map(([v, l]) => (
                <div key={l} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-xl font-black text-orange-400">{v}</p>
                  <p className="mt-0.5 text-xs text-slate-400">{l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* IMAGEM HERO — patinete robusto com suspensão (foto enviada) */}
          <div className="relative">
            {/* floating chip topo */}
            <div className="absolute -left-5 top-8 z-10 hidden rounded-2xl border border-orange-400/25 bg-black/85 px-4 py-3 shadow-2xl backdrop-blur-xl md:block">
              <p className="text-[10px] font-bold uppercase tracking-widest text-orange-300">Recarga Solar</p>
              <p className="mt-0.5 text-base font-bold text-white">Sem depender da tomada</p>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-b from-orange-500/12 via-orange-500/4 to-transparent p-3 shadow-[0_50px_140px_rgba(0,0,0,0.85)]">
              <img
                src="/images/solix-hero.jpg"
                alt="Patinete elétrico Solix S3 — movido a energia solar"
                className="h-[40rem] w-full rounded-[1.5rem] object-cover object-center"
              />
              {/* overlay info */}
              <div className="absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/80 p-5 backdrop-blur-xl">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-orange-300">Modelo Flagship</p>
                    <p className="mt-1 text-xl font-black text-white">Solix S3 · Alta Performance</p>
                  </div>
                  <span className="flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/10 px-4 py-2 text-sm font-bold text-orange-200">
                    <SunIcon className="h-4 w-4" /> 80 km · 750W
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            SOBRE
        ════════════════════════════════════════ */}
        <section id="sobre" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* imagem slim — patinete dobrável (segunda foto enviada) */}
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-[2rem] border border-white/10 p-3 shadow-[0_40px_100px_rgba(0,0,0,0.7)]">
                <img
                  src="/images/solix-detail.jpg"
                  alt="Patinete elétrico Solix — vista lateral"
                  className="h-[36rem] w-full rounded-[1.5rem] object-cover object-center"
                />
              </div>
              {/* chip */}
              <div className="absolute -right-4 bottom-14 hidden rounded-2xl border border-orange-400/25 bg-black/90 px-5 py-4 shadow-2xl backdrop-blur-xl lg:block">
                <p className="text-[10px] font-bold uppercase tracking-widest text-orange-300">Garantia</p>
                <p className="mt-1 text-2xl font-black text-white">2 anos</p>
                <p className="text-xs text-slate-400">em todos os modelos</p>
              </div>
            </div>

            {/* texto */}
            <div className="order-1 lg:order-2">
              <Badge>Sobre a Solix</Badge>
              <h2 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl">
                Mais mobilidade.<br />
                <span className="text-orange-400">Um futuro mais limpo.</span>
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-300">
                A Solix é uma empresa especializada na <strong className="text-white">venda e produção de patinetes elétricos movidos a energia solar</strong>. Nossa proposta é oferecer uma alternativa de mobilidade prática, econômica e sustentável, com produtos que podem ser <strong className="text-white">personalizados</strong> de acordo com as necessidades de cada cliente.
              </p>
              <p className="mt-4 text-base leading-8 text-slate-400">
                Nosso principal público-alvo são <strong className="text-white">prefeituras e órgãos públicos</strong> interessados em soluções de mobilidade urbana, além de lojas parceiras, condomínios, hotéis e outras instituições.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                {[["🏛️", "Prefeituras", "Principal público"], ["🏪", "Lojas Parceiras", "Rede de revendas"], ["🌱", "Zero Emissões", "100% sustentável"], ["🔧", "Personalizável", "Sob medida"]].map(([i, t, s]) => (
                  <div key={t} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <span className="text-2xl">{i}</span>
                    <p className="mt-2 font-bold text-white">{t}</p>
                    <p className="text-sm text-slate-400">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            MODELOS — com as fotos reais
        ════════════════════════════════════════ */}
        <section id="modelos" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge>Nossos Modelos</Badge>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Escolha o que mais<br />
                <span className="text-orange-400">combina com você.</span>
              </h2>
            </div>
            {/* tabs */}
            <div className="flex gap-2">
              {models.map((mod, i) => (
                <button key={mod.id} onClick={() => setActiveModel(i)}
                  className={`rounded-full px-6 py-2.5 text-sm font-black transition ${activeModel === i ? "bg-gradient-to-r from-orange-500 to-amber-400 text-black shadow-[0_0_18px_rgba(249,115,22,0.45)]" : "border border-white/15 bg-white/[0.05] text-slate-300 hover:border-orange-400/30"}`}>
                  {mod.id}
                </button>
              ))}
            </div>
          </div>

          {/* Model card */}
          <div className={`mt-8 overflow-hidden rounded-[2rem] border bg-gradient-to-br ${m.accent}`}>
            <div className="grid lg:grid-cols-2">
              {/* foto do modelo */}
              <div className="relative min-h-[22rem] overflow-hidden">
                <img src={m.image} alt={m.name} className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/10 to-black/70 lg:to-black/50" />
                <span className={`absolute left-5 top-5 rounded-full border px-4 py-1.5 text-xs font-black uppercase tracking-widest backdrop-blur ${m.tagColor}`}>
                  {m.tag}
                </span>
              </div>

              {/* info */}
              <div className="p-8 lg:p-10">
                <p className="text-xs font-black uppercase tracking-widest text-orange-400">Solix</p>
                <h3 className="mt-1 text-4xl font-black">{m.name}</h3>
                <p className="mt-3 text-slate-300">{m.highlight}</p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  {[
                    ["🛣️", "Autonomia", m.autonomy],
                    ["⚡", "Velocidade", m.speed],
                    ["⚖️", "Peso", m.weight],
                    ["☀️", "Carga solar", m.charge],
                    ["🔋", "Motor", m.motor],
                    ["🔌", "Bateria", m.battery],
                  ].map(([ic, lb, vl]) => (
                    <div key={lb} className="rounded-xl border border-white/10 bg-black/30 p-4">
                      <p className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        <span>{ic}</span>{lb}
                      </p>
                      <p className="mt-1.5 font-black text-white">{vl}</p>
                    </div>
                  ))}
                </div>

                {/* comparação velocidade */}
                <div className="mt-6 space-y-2">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Performance vs. linha</p>
                  {models.map((mod) => (
                    <div key={mod.id} className="flex items-center gap-3 text-xs">
                      <span className="w-8 font-bold text-slate-300">{mod.id}</span>
                      <div className="flex-1 rounded-full bg-white/10 h-2">
                        <div className={`h-2 rounded-full bg-gradient-to-r ${mod.bar} transition-all duration-500`}
                          style={{ width: mod.id === "S1" ? "50%" : mod.id === "S2" ? "75%" : "100%" }} />
                      </div>
                      <span className="w-16 text-right text-slate-400">{mod.autonomy}</span>
                    </div>
                  ))}
                </div>

                <a href="#contato"
                  className="mt-7 flex w-full items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-400 py-4 text-sm font-black text-black shadow-[0_0_20px_rgba(249,115,22,0.35)] transition hover:shadow-[0_0_35px_rgba(249,115,22,0.55)]">
                  Solicitar Proposta — {m.name}
                </a>
              </div>
            </div>
          </div>

          {/* Mini cards dos 3 modelos */}
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {models.map((mod, i) => (
              <button key={mod.id} onClick={() => setActiveModel(i)}
                className={`rounded-2xl border p-5 text-left transition ${activeModel === i ? "border-orange-400/50 bg-orange-400/8" : "border-white/10 bg-white/[0.03] hover:border-orange-400/20"}`}>
                <img src={mod.image} alt={mod.name} className="mb-4 h-36 w-full rounded-xl object-cover" />
                <p className="text-[10px] font-black uppercase tracking-widest text-orange-400">{mod.id}</p>
                <p className="mt-1 text-lg font-black">{mod.name}</p>
                <p className="text-sm text-slate-400">{mod.tag}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="rounded-full bg-white/8 px-3 py-1 text-xs font-semibold text-slate-200">{mod.autonomy}</span>
                  <span className="rounded-full bg-white/8 px-3 py-1 text-xs font-semibold text-slate-200">{mod.motor}</span>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            TECNOLOGIA SOLAR
        ════════════════════════════════════════ */}
        <section id="tecnologia" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/10 via-amber-400/5 to-black">
            <div className="grid items-center gap-0 lg:grid-cols-2">
              {/* imagem robusta novamente para mostrar painel solar */}
              <div className="relative h-[32rem] overflow-hidden lg:h-full">
                <img src="/images/scooter-main.jpg" alt="Painel solar integrado ao deck do patinete Solix"
                  className="h-full w-full object-cover object-center" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/60" />
                {/* label sobre a imagem */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-orange-400/25 bg-black/80 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-400 shadow-[0_0_20px_rgba(249,115,22,0.5)]">
                      <SunIcon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-orange-300">Tecnologia Solix</p>
                      <p className="font-bold text-white">Painel solar integrado ao deck</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* conteúdo */}
              <div className="p-8 lg:p-12">
                <Badge><SunIcon className="h-3.5 w-3.5" /> Tecnologia Solar</Badge>
                <h2 className="mt-5 text-4xl font-black tracking-tight">
                  Carregado pelo sol,<br />
                  <span className="text-orange-400">livre da tomada.</span>
                </h2>
                <p className="mt-5 text-base leading-8 text-slate-300">
                  O patinete Solix utiliza <strong className="text-white">placas e painéis solares</strong> integrados ao deck para captar a energia do sol e transformá-la em carga para a bateria. Em boa incidência solar, o carregamento completo leva <strong className="text-white">aproximadamente um dia ensolarado inteiro</strong>.
                </p>

                {/* fluxo solar */}
                <div className="mt-8 space-y-3">
                  {[
                    { step: "01", icon: "☀️", title: "Captação Solar", desc: "Placas fotovoltaicas integradas ao deck captam a radiação solar." },
                    { step: "02", icon: "⚡", title: "Conversão de Energia", desc: "Sistema converte a energia solar em corrente elétrica eficiente." },
                    { step: "03", icon: "🔋", title: "Armazenamento", desc: "Bateria de íon de lítio armazena a energia para uso imediato ou posterior." },
                    { step: "04", icon: "🛴", title: "Propulsão Elétrica", desc: "Motor elétrico silencioso impulsiona o patinete com zero emissões." },
                  ].map((item) => (
                    <div key={item.step} className="flex items-start gap-4 rounded-xl border border-white/8 bg-black/30 p-4">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-orange-400/15 text-xs font-black text-orange-300">{item.step}</div>
                      <div>
                        <p className="flex items-center gap-2 font-bold text-white">
                          <span>{item.icon}</span>{item.title}
                        </p>
                        <p className="mt-0.5 text-sm text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-orange-400/25 bg-orange-400/8 p-5">
                  <p className="flex items-center gap-2 font-bold text-orange-300">
                    💡 Dica Solix
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Em dias ensolarados, posicione o patinete com o painel solar voltado diretamente para o sol para maximizar a eficiência de recarga. Você também pode carregar durante o uso!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ESPECIFICAÇÕES — blueprint visual
        ════════════════════════════════════════ */}
        <section id="especificacoes" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="mb-12 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <Badge>Especificações Técnicas</Badge>
              <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                Detalhes que fazem<br />
                <span className="text-orange-400">a diferença.</span>
              </h2>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            {/* blueprint image */}
            <div className="overflow-hidden rounded-[2rem] border border-blue-400/20 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
              <img
                src="/images/solix-s1.jpg"
                alt="Blueprint técnico do patinete Solix"
                className="h-full w-full object-cover"
              />
            </div>

            {/* specs grid */}
            <div className="space-y-3">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Dimensões e estrutura</p>
              {[
                ["Comprimento total", "1.250 mm"],
                ["Altura total", "1.180 mm"],
                ["Largura do guidão", "660 mm"],
                ["Largura do deck", "260 mm"],
                ["Largura do pneu", "140 mm"],
                ["Diâmetro do pneu", "200 mm"],
                ["Tipo de pneu", "Todo terreno"],
                ["Suspensão", "Dianteira e traseira"],
                ["Freio", "Disco (dianteiro e traseiro)"],
                ["Estrutura", "Alumínio aeronáutico"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-xl border border-white/8 bg-white/[0.03] px-5 py-3.5">
                  <span className="text-sm text-slate-400">{label}</span>
                  <span className="text-sm font-black text-white">{value}</span>
                </div>
              ))}

              <div className="mt-4 grid grid-cols-3 gap-3">
                {[
                  ["350W", "Motor S1"],
                  ["500W", "Motor S2"],
                  ["750W", "Motor S3"],
                ].map(([v, l]) => (
                  <div key={l} className="rounded-2xl border border-orange-400/20 bg-orange-400/8 p-4 text-center">
                    <p className="text-2xl font-black text-orange-400">{v}</p>
                    <p className="mt-1 text-xs text-slate-400">{l}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* diagrama explodido */}
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
            <img
              src="/images/solix-s2.jpg"
              alt="Diagrama explodido — componentes do patinete Solix"
              className="w-full object-contain"
            />
          </div>

          {/* componentes principais */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: "⚙️", title: "Motor Elétrico", desc: "350W a 750W dependendo do modelo." },
              { icon: "🔋", title: "Bateria Lítio", desc: "36V–48V, 10Ah a 20Ah de capacidade." },
              { icon: "☀️", title: "Painel Solar", desc: "Alta eficiência, integrado ao deck." },
              { icon: "🛡️", title: "Freio a Disco", desc: "Dianteiro e traseiro com sistema E-ABS." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-orange-400/25">
                <span className="text-3xl">{item.icon}</span>
                <p className="mt-3 font-bold text-white">{item.title}</p>
                <p className="mt-1 text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════
            MANUAL / MODOS
        ════════════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900 to-black">
            <div className="grid gap-0 lg:grid-cols-2">
              {/* imagem manual */}
              <div className="relative overflow-hidden">
                <img
                  src="/images/solix-s3.jpg"
                  alt="Manual de uso — Solix Patinetes Elétricos"
                  className="h-full w-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/50 lg:hidden" />
              </div>

              {/* conteúdo */}
              <div className="p-8 lg:p-12">
                <Badge>Como Usar</Badge>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Simples, rápido<br />
                  <span className="text-orange-400">e seguro.</span>
                </h2>

                <div className="mt-7 space-y-3">
                  {[
                    ["01", "Carregue a bateria", "Conecte o carregador na tomada ou posicione sob o sol."],
                    ["02", "Ligue o patinete", "Pressione o botão de energia no painel."],
                    ["03", "Selecione o modo", "Escolha entre Eco, Normal ou Sport."],
                    ["04", "Empurre e acelere", "Dê um impulso e use o acelerador do guidão."],
                    ["05", "Aproveite!", "Em dias ensolarados, o painel carrega durante o uso."],
                  ].map(([step, title, desc]) => (
                    <div key={step} className="flex items-start gap-4 rounded-xl border border-white/8 bg-white/[0.03] p-4">
                      <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-orange-400/15 text-xs font-black text-orange-300">{step}</span>
                      <div>
                        <p className="font-bold text-white">{title}</p>
                        <p className="text-sm text-slate-400">{desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Modos */}
                <p className="mt-7 text-[10px] font-black uppercase tracking-widest text-slate-400">Modos de condução</p>
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {[
                    ["ECO", "até 25 km/h", "from-green-500/20 to-green-500/5", "border-green-400/30", "text-green-300"],
                    ["NORMAL", "até 30 km/h", "from-blue-500/20 to-blue-500/5", "border-blue-400/30", "text-blue-300"],
                    ["SPORT", "até 40 km/h", "from-orange-500/20 to-orange-500/5", "border-orange-400/30", "text-orange-300"],
                  ].map(([mode, speed, grad, bord, tc]) => (
                    <div key={mode} className={`rounded-2xl border bg-gradient-to-br ${grad} ${bord} p-4 text-center`}>
                      <p className={`text-xs font-black uppercase tracking-widest ${tc}`}>{mode}</p>
                      <p className="mt-1 text-sm font-bold text-white">{speed}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            APP DE SEGURANÇA
        ════════════════════════════════════════ */}
        <section className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
          <div className="grid items-center gap-10 rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900 via-[#0a0a0a] to-black p-8 lg:grid-cols-[1fr_auto] lg:p-14">
            <div>
              <Badge>App de Segurança</Badge>
              <h2 className="mt-5 text-3xl font-black sm:text-4xl">
                Seu patinete na palma da mão.<br />
                <span className="text-orange-400">Disponível no site oficial.</span>
              </h2>
              <p className="mt-4 max-w-lg text-base leading-8 text-slate-300">
                A Solix disponibiliza, por meio do site oficial, acesso ao <strong className="text-white">aplicativo de segurança</strong> desenvolvido para auxiliar na utilização e no acompanhamento do produto.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {["📍 Rastreamento em tempo real", "🔒 Travamento remoto", "📊 Monitor de bateria", "🔔 Alertas de segurança", "🛠️ Agendamento de revisões", "📞 Suporte técnico direto"].map((f) => (
                  <div key={f} className="flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-slate-200">
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* phone */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-56">
                <div className="rounded-[2.5rem] border-[5px] border-white/15 bg-gradient-to-b from-slate-800 to-slate-900 p-4 shadow-[0_40px_100px_rgba(0,0,0,0.8)]">
                  <div className="mb-3 flex justify-between text-[10px] text-slate-400">
                    <span>9:41</span><span>●●●</span>
                  </div>
                  <div className="rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 p-3 text-center">
                    <p className="text-[10px] font-black uppercase tracking-widest text-black">SOLIX APP</p>
                    <p className="mt-0.5 text-lg font-black text-black">Segurança</p>
                  </div>
                  <div className="mt-3 rounded-xl bg-white/8 p-3">
                    <p className="text-[10px] text-slate-400">Bateria</p>
                    <div className="mt-1.5 h-2 rounded-full bg-white/10">
                      <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-orange-500 to-amber-300" />
                    </div>
                    <p className="mt-0.5 text-right text-xs font-black text-orange-300">75%</p>
                  </div>
                  <div className="mt-2 rounded-xl bg-green-500/12 p-2.5 text-center">
                    <p className="text-[10px] font-bold text-green-400">● Conectado · Travado</p>
                  </div>
                  <div className="mt-2 grid grid-cols-2 gap-2">
                    <div className="rounded-xl bg-white/8 p-2.5 text-center">
                      <p className="text-[10px] text-slate-400">Autonomia</p>
                      <p className="text-xs font-black text-white">58 km</p>
                    </div>
                    <div className="rounded-xl bg-white/8 p-2.5 text-center">
                      <p className="text-[10px] text-slate-400">Solar</p>
                      <p className="text-xs font-black text-orange-300">☀️ Ativo</p>
                    </div>
                  </div>
                  <button className="mt-3 w-full rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400 py-2.5 text-xs font-black text-black">
                    🔓 Destravar
                  </button>
                </div>
                <div className="absolute left-1/2 top-1.5 h-3.5 w-16 -translate-x-1/2 rounded-full bg-black" />
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            FAQ
        ════════════════════════════════════════ */}
        <section id="faq" className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
          <div className="text-center">
            <Badge>FAQ</Badge>
            <h2 className="mt-5 text-4xl font-black sm:text-5xl">
              Perguntas sobre<br />
              <span className="text-orange-400">a Solix</span>
            </h2>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </section>

        {/* ════════════════════════════════════════
            CONTATO
        ════════════════════════════════════════ */}
        <section id="contato" className="mx-auto max-w-7xl px-5 pb-20 lg:px-8">
          <div className="overflow-hidden rounded-[2.5rem] border border-orange-400/20 bg-gradient-to-br from-orange-500/12 via-amber-400/5 to-black p-8 shadow-[0_40px_120px_rgba(249,115,22,0.12)] lg:p-14">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
              <div>
                <Badge><SunIcon className="h-3.5 w-3.5" /> Fale com a Solix</Badge>
                <h2 className="mt-5 text-4xl font-black sm:text-5xl">
                  Leve a energia solar<br />
                  <span className="text-orange-400">para sua cidade.</span>
                </h2>
                <p className="mt-5 max-w-xl text-lg text-slate-300">
                  Entre em contato para solicitar uma proposta, agendar uma demonstração ou saber mais sobre projetos de mobilidade urbana sustentável com a Solix.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    ["📞", "Telefone", "(11) 98765-4321"],
                    ["📧", "E-mail", "contato@solix.com.br"],
                    ["🌐", "Site", "www.solix.com.br"],
                  ].map(([ic, lb, vl]) => (
                    <div key={lb} className="rounded-2xl border border-white/10 bg-black/40 p-5">
                      <span className="text-2xl">{ic}</span>
                      <p className="mt-2 text-[10px] font-black uppercase tracking-widest text-slate-400">{lb}</p>
                      <p className="mt-1 font-bold text-white">{vl}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2 text-sm text-slate-400">
                  {["@solixpatinetes", "solix.com.br", "CNPJ disponível no site"].map((s) => (
                    <span key={s} className="rounded-full border border-white/8 bg-white/[0.04] px-4 py-1.5">{s}</span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:min-w-[220px]">
                <a href="mailto:contato@solix.com.br"
                  className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-8 py-4 text-sm font-black text-black shadow-[0_0_28px_rgba(249,115,22,0.4)] transition hover:shadow-[0_0_45px_rgba(249,115,22,0.6)]">
                  📧 Enviar E-mail
                </a>
                <a href="tel:+5511987654321"
                  className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-8 py-4 text-sm font-black text-white transition hover:border-orange-400/40">
                  📞 Ligar Agora
                </a>
                <a href="#modelos"
                  className="flex items-center justify-center gap-2 rounded-full border border-orange-400/30 bg-orange-400/8 px-8 py-4 text-sm font-black text-orange-300 transition hover:bg-orange-400/15">
                  🛴 Ver Modelos
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* ════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════ */}
      <footer className="border-t border-white/[0.07] bg-black px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <LogoSolix height={28} />
              <p className="mt-4 text-sm leading-6 text-slate-400">
                Patinetes elétricos movidos a energia solar.<br />
                Mais mobilidade. Um futuro mais limpo.
              </p>
              <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-orange-400">
                <SunIcon className="h-4 w-4" /> Tecnologia Sustentável
              </p>
            </div>
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-300">Produtos</p>
              <div className="space-y-2 text-sm text-slate-400">
                <p>Solix S1 — Equilíbrio Perfeito</p>
                <p>Solix S2 — Mais Potência</p>
                <p>Solix S3 — Alta Performance</p>
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-300">Empresa</p>
              <div className="space-y-2 text-sm text-slate-400">
                <a href="#sobre" className="block hover:text-orange-400">Sobre a Solix</a>
                <a href="#tecnologia" className="block hover:text-orange-400">Tecnologia Solar</a>
                <a href="#modelos" className="block hover:text-orange-400">Modelos</a>
                <a href="#faq" className="block hover:text-orange-400">FAQ</a>
              </div>
            </div>
            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-300">Contato</p>
              <div className="space-y-2 text-sm text-slate-400">
                <p>📞 (11) 98765-4321</p>
                <p>📧 contato@solix.com.br</p>
                <p>🌐 www.solix.com.br</p>
                <p>📱 @solixpatinetes</p>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/[0.07] pt-8 text-xs text-slate-500 sm:flex-row">
            <p>© 2026 Solix Patinetes Elétricos. Todos os direitos reservados.</p>
            <p className="flex items-center gap-1.5">
              <SunIcon className="h-3.5 w-3.5 text-orange-400" />
              Tecnologia Sustentável · Mobilidade Inteligente · Energia Renovável
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
