import { useState } from 'react'
import { motion } from 'framer-motion'
import { Zap, Activity, Cpu, Radio, Globe, MessageCircle, Disc as Discord, ExternalLink } from 'lucide-react'
import heroImg from './assets/hero.png'
import './App.css'

/* ── Floating particles ── */
function Particles() {
  const colors = ['#01cdfe', '#ff71ce', '#b967ff', '#fffb96']
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 20,
    duration: 10 + Math.random() * 15,
    color: colors[Math.floor(Math.random() * colors.length)],
    size: Math.random() * 4 + 1,
  }))

  return (
    <div className="particles fixed inset-0 pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full"
          initial={{ y: '110vh', opacity: 0 }}
          animate={{ 
            y: '-10vh', 
            opacity: [0, 1, 1, 0],
            x: [0, Math.random() * 50 - 25, 0]
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
          style={{
            left: p.left,
            background: p.color,
            boxShadow: `0 0 10px ${p.color}`,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  )
}

/* ── Corner decorations ── */
function Corners() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-primary/50" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-accent/50" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-accent/50" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-primary/50" />
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative min-h-screen bg-background text-text selection:bg-primary selection:text-background overflow-x-hidden">
      <Particles />
      <Corners />

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-40 w-full border-b border-white/5 bg-background/80 backdrop-blur-xl px-6 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center shadow-[0_0_15px_rgba(255,113,206,0.5)]">
            <Zap size={18} className="text-background fill-current" />
          </div>
          <span className="font-orbitron font-bold tracking-widest text-lg">AXON_</span>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex gap-6 text-sm font-rajdhani uppercase tracking-[0.2em]"
        >
          <a href="#" className="hover:text-primary transition-colors">Core</a>
          <a href="#" className="hover:text-accent transition-colors">Data</a>
          <a href="#" className="hover:text-muted transition-colors">Nodes</a>
        </motion.div>
      </nav>

      <main className="container mx-auto px-4 pt-20 pb-32">
        {/* ── Hero section ── */}
        <section className="flex flex-col items-center text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-primary/30 bg-primary/5 text-[10px] tracking-[0.3em] font-orbitron text-primary shadow-[0_0_15px_rgba(255,113,206,0.1)]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            ONLINE — 1989
          </motion.div>

          <div className="relative group">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-10"
            >
              <img 
                src={heroImg} 
                className="w-48 h-auto drop-shadow-[0_0_30px_rgba(1,205,254,0.3)] group-hover:drop-shadow-[0_0_50px_rgba(1,205,254,0.5)] transition-all duration-500" 
                alt="Hero" 
              />
            </motion.div>
            <div className="absolute -inset-4 bg-accent/10 blur-3xl rounded-full -z-0 animate-pulse" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-6xl md:text-8xl font-black font-orbitron italic tracking-tighter leading-none">
              <span className="block bg-gradient-to-b from-primary via-muted to-accent bg-clip-text text-transparent filter drop-shadow-[0_0_20px_rgba(255,113,206,0.5)]">
                AESTHETIC
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-rajdhani tracking-[0.5em] text-accent/80 uppercase">
              A E S T H E T I C &nbsp; V I B E S
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            <button
              onClick={() => setCount((c) => c + 1)}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="group relative px-8 py-4 bg-primary text-background font-orbitron font-bold tracking-widest overflow-hidden transition-all active:scale-95 shadow-[0_0_30px_rgba(255,113,206,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                FEEL_ <span className="text-2xl">{count}</span>
              </span>
              <motion.div 
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                animate={{ x: isHovered ? '0%' : '-100%' }}
                transition={{ type: "spring", damping: 20 }}
              />
            </button>

            <button className="px-8 py-4 border-2 border-accent text-accent font-orbitron font-bold tracking-widest hover:bg-accent hover:text-background transition-all shadow-[0_0_20px_rgba(1,205,254,0.2)]">
              ACCESS_
            </button>
          </motion.div>
        </section>

        {/* ── Features section ── */}
        <section className="mt-40 grid md:grid-cols-3 gap-8">
          {[
            { icon: <Cpu />, title: "Vortex Core", desc: "Quantum processing at 1.21 gigawatts." },
            { icon: <Activity />, title: "Live Feed", desc: "Real-time aesthetic synchronization." },
            { icon: <Radio />, title: "Broadcast", desc: "Signal strength 100% stable." },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-white/10 bg-surface/40 backdrop-blur-sm group hover:border-primary/50 transition-all duration-500"
            >
              <div className="w-12 h-12 mb-6 flex items-center justify-center text-accent group-hover:text-primary transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-orbitron font-bold mb-4 tracking-wider">{feature.title}</h3>
              <p className="font-rajdhani text-muted text-lg">{feature.desc}</p>
            </motion.div>
          ))}
        </section>

        {/* ── Connect section ── */}
        <section className="mt-40 text-center">
          <h2 className="text-3xl font-orbitron mb-12 tracking-[0.3em]">CONNECT_NODES</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { icon: <Globe />, label: "Web", color: "hover:bg-accent/20" },
              { icon: <Discord />, label: "Discord", color: "hover:bg-[#5865F2]" },
              { icon: <MessageCircle />, label: "Chat", color: "hover:bg-primary/20" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ scale: 1.1, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-3 border border-white/10 bg-white/5 rounded-sm transition-all ${social.color} hover:border-transparent group`}
              >
                {social.icon}
                <span className="font-rajdhani font-medium uppercase tracking-widest">{social.label}</span>
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            ))}
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center font-rajdhani text-sm tracking-[0.4em] text-muted">
        <p>© 2026 AXON PROTOCOL // SYSTEM_READY</p>
      </footer>

      <div className="fixed bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-muted to-accent" />
    </div>
  )
}

export default App
