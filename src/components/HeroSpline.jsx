import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Rocket, Play } from 'lucide-react';

export default function HeroSpline() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6tUXqVcUA0xgJugv/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60 dark:from-black/50 dark:via-black/20 dark:to-black/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(16,185,129,0.3)]">
            Explore your city — visualized in real time.
          </h1>
          <p className="mt-4 text-neutral-200/90">
            Parallax WebGIS with 3D terrain, floating panels, and interactive data stories for planners and the public.
          </p>
          <div className="pointer-events-auto mt-8 flex flex-wrap gap-3">
            <a
              href="#map"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 transition"
            >
              <Rocket className="h-4 w-4" /> Launch Map
            </a>
            <a
              href="#data"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-md hover:bg-white/20 transition"
            >
              <Play className="h-4 w-4" /> Explore Data
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
