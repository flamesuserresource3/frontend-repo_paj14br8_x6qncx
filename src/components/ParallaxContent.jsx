import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ParallaxContent() {
  return (
    <section id="data" className="relative w-full bg-white dark:bg-neutral-950">
      {/* Transition header */}
      <div className="mx-auto max-w-7xl px-6 py-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 dark:text-white"
        >
          From immersive map to actionable insights
        </motion.h2>
        <p className="mx-auto mt-3 max-w-2xl text-neutral-600 dark:text-neutral-300">
          Scroll to reveal cards, 3D previews, and story-driven geospatial narratives.
        </p>
        <ChevronDown className="mx-auto mt-6 h-6 w-6 animate-bounce text-neutral-400" />
      </div>

      {/* Insight Cards */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 pb-16 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: 'Kepadatan', value: '7.2k/km²', change: '+2.1%' },
          { title: 'Rasio Hunian', value: '0.83', change: '+0.04' },
          { title: 'Green Space', value: '18%', change: '+1.2%' },
          { title: 'Akses Transit', value: '92%', change: '+0.6%' },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
          >
            <div className="text-sm text-neutral-500 dark:text-neutral-400">{c.title}</div>
            <div className="mt-2 text-2xl font-semibold text-neutral-900 dark:text-white">{c.value}</div>
            <div className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">{c.change} this year</div>
          </motion.div>
        ))}
      </div>

      {/* 3D Visualization Preview */}
      <div className="mx-auto max-w-7xl px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-br from-emerald-400/10 via-cyan-400/10 to-transparent p-6 dark:border-neutral-800"
        >
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-white">3D Visualization</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                Elevation and building extrusion preview. Integrate with your Mapbox GL JS token to enable live 3D terrain.
              </p>
            </div>
            <button className="rounded-full bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
              Open 3D View
            </button>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="h-36 rounded-lg bg-neutral-100 dark:bg-neutral-800" />
            <div className="h-36 rounded-lg bg-neutral-100 dark:bg-neutral-800" />
            <div className="h-36 rounded-lg bg-neutral-100 dark:bg-neutral-800" />
          </div>
        </motion.div>
      </div>

      {/* Data Stories */}
      <div className="relative isolate">
        <div className="pointer-events-none absolute inset-0 -z-[1] bg-gradient-to-b from-transparent to-emerald-500/5" />
        <div className="mx-auto max-w-7xl px-6 pb-24">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-xl font-semibold text-neutral-900 dark:text-white"
          >
            Data Stories
          </motion.h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {[1, 2].map((i) => (
              <motion.article
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-neutral-200 bg-white p-5 dark:border-neutral-800 dark:bg-neutral-900"
              >
                <div className="h-40 w-full rounded-lg bg-neutral-100 dark:bg-neutral-800" />
                <h4 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-white">Story {i}: Urban Growth</h4>
                <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                  Scroll-driven narrative combining charts, maps, and annotations for an engaging urban analytics story.
                </p>
                <button className="mt-3 text-sm font-medium text-emerald-600 hover:text-emerald-500 dark:text-emerald-400">
                  Read story →
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-neutral-200 bg-white py-8 text-sm text-neutral-600 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <div className="flex items-center gap-2">
            <span>© 2025 WebGIS Parallax</span>
            <span className="text-neutral-400">•</span>
            <span>Mapbox attribution</span>
          </div>
          <div className="flex items-center gap-3">
            <span>API v1.0</span>
            <span className="text-neutral-400">•</span>
            <span>Layers active: 5</span>
            <span className="text-neutral-400">•</span>
            <span>Last update: 2m ago</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
