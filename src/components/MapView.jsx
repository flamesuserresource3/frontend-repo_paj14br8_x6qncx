import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Search, BarChart3, Compass, Settings, Sun, Moon, Map, Info } from 'lucide-react';

export default function MapView({ darkMode, onToggleDark }) {
  const [panelOpen, setPanelOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('info');

  return (
    <section id="map" className="relative min-h-screen w-full">
      {/* Map placeholder canvas */}
      <div className="absolute inset-0 bg-gradient-to-b from-neutral-100 to-neutral-200 dark:from-neutral-900 dark:to-neutral-950" aria-label="Map Canvas">
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,_rgba(16,185,129,0.08),transparent_60%)]" />
        <div className="absolute top-3 left-1/2 -translate-x-1/2 text-xs font-medium tracking-wide text-neutral-700/70 dark:text-neutral-300/60">
          Mapbox 3D Terrain Placeholder — connect your token to enable live map
        </div>
      </div>

      {/* Left controls: layers */}
      <div className="pointer-events-auto absolute left-4 top-24 z-20 w-64 max-w-[85vw] space-y-3">
        <ControlCard title="Layers" icon={<Layers className="h-4 w-4" />}> 
          <Toggle label="WMS / WFS" />
          <Toggle label="POI" defaultChecked />
          <Toggle label="Boundary" defaultChecked />
          <Toggle label="Demografi" />
          <Toggle label="PSU" />
        </ControlCard>
        <ControlCard title="Search" icon={<Search className="h-4 w-4" />}>
          <input
            type="text"
            placeholder="Cari lokasi, alamat..."
            className="w-full rounded-md border border-neutral-200 bg-white/80 px-3 py-2 text-sm outline-none placeholder:text-neutral-400 focus:border-emerald-400 focus:ring-2 focus:ring-emerald-200 dark:border-neutral-700 dark:bg-neutral-900/80 dark:text-white"
          />
        </ControlCard>
        <button
          onClick={onToggleDark}
          className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-neutral-800 shadow-sm hover:bg-white dark:bg-neutral-800/90 dark:text-neutral-100 dark:hover:bg-neutral-800"
        >
          {darkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />} Theme
        </button>
      </div>

      {/* Right sliding info panel */}
      <AnimatePresence>
        {panelOpen && (
          <motion.aside
            initial={{ x: 360, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 360, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
            className="pointer-events-auto absolute right-4 top-24 z-30 w-[360px] max-w-[90vw] overflow-hidden rounded-xl border border-white/20 bg-white/80 backdrop-blur-md shadow-xl dark:border-white/10 dark:bg-neutral-900/70"
          >
            <div className="flex items-center justify-between border-b border-black/5 px-4 py-3 dark:border-white/10">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Map className="h-4 w-4 text-emerald-500" />
                Info Panel
              </div>
              <button
                onClick={() => setPanelOpen(false)}
                className="rounded-md px-2 py-1 text-xs text-neutral-500 hover:bg-black/5 dark:text-neutral-300 dark:hover:bg-white/5"
              >
                Hide
              </button>
            </div>

            <div className="flex border-b border-black/5 text-xs dark:border-white/10">
              {[
                { key: 'info', label: 'Persil', icon: <Info className="h-3.5 w-3.5" /> },
                { key: 'stats', label: 'Statistik', icon: <BarChart3 className="h-3.5 w-3.5" /> },
                { key: 'nav', label: 'Navigasi', icon: <Compass className="h-3.5 w-3.5" /> },
                { key: 'settings', label: 'Settings', icon: <Settings className="h-3.5 w-3.5" /> },
              ].map((t) => (
                <button
                  key={t.key}
                  onClick={() => setActiveTab(t.key)}
                  className={`flex flex-1 items-center justify-center gap-1.5 px-3 py-2 hover:bg-black/5 dark:hover:bg-white/5 ${
                    activeTab === t.key ? 'text-emerald-600 dark:text-emerald-400' : 'text-neutral-600 dark:text-neutral-300'
                  }`}
                >
                  {t.icon}
                  {t.label}
                </button>
              ))}
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-4 text-sm">
              {activeTab === 'info' && (
                <div className="space-y-2">
                  <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Metadata</div>
                  <div className="rounded-lg border border-black/5 bg-white/70 p-3 dark:border-white/10 dark:bg-neutral-900/60">
                    <div className="font-medium">Persil A-10293</div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-300">Luas: 320 m² • Zona: K1 • Terakhir update: 2025-10-12</div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <Stat title="Kepadatan" value="7.2k/km²" />
                    <Stat title="Koef. Lantai" value="3.0" />
                    <Stat title="RTH" value="18%" />
                    <Stat title="Batas KDB" value="60%" />
                  </div>
                </div>
              )}
              {activeTab === 'stats' && (
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Ringkasan</div>
                  <div className="h-32 w-full rounded-md bg-gradient-to-tr from-emerald-400/20 to-cyan-400/20" />
                  <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-200">
                    <li>Populasi tumbuh 2.1% YoY</li>
                    <li>Kenaikan harga tanah 7.8%</li>
                    <li>Penambahan 3 layer baru minggu ini</li>
                  </ul>
                </div>
              )}
              {activeTab === 'nav' && (
                <div className="space-y-2">
                  {[
                    { label: 'CBD Core', coord: '1.29, 103.85' },
                    { label: 'Kawasan Pesisir', coord: '1.31, 103.90' },
                    { label: 'Sub-urban', coord: '1.35, 103.78' },
                  ].map((p) => (
                    <button key={p.label} className="flex w-full items-center justify-between rounded-md border border-black/5 bg-white/70 px-3 py-2 hover:bg-white dark:border-white/10 dark:bg-neutral-900/60 dark:hover:bg-neutral-900">
                      <span>{p.label}</span>
                      <span className="text-xs text-neutral-500">{p.coord}</span>
                    </button>
                  ))}
                </div>
              )}
              {activeTab === 'settings' && (
                <div className="space-y-3">
                  <Toggle label="Bangunan 3D" defaultChecked />
                  <Toggle label="Terrain 3D" defaultChecked />
                  <Toggle label="Mode Malam" checked={darkMode} onChange={onToggleDark} />
                </div>
              )}
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Show button when hidden */}
      {!panelOpen && (
        <button
          onClick={() => setPanelOpen(true)}
          className="pointer-events-auto absolute right-4 top-24 z-20 rounded-full bg-white/90 px-3 py-2 text-xs font-medium shadow hover:bg-white dark:bg-neutral-800/90 dark:text-neutral-100"
        >
          Show Panel
        </button>
      )}

      {/* Floating dock */}
      <div className="pointer-events-auto absolute bottom-6 right-6 z-30 flex items-center gap-3 rounded-full border border-white/20 bg-white/80 px-3 py-2 shadow-xl backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/70">
        {[
          { icon: <Search className="h-5 w-5" />, label: 'Search' },
          { icon: <Layers className="h-5 w-5" />, label: 'Layers' },
          { icon: <BarChart3 className="h-5 w-5" />, label: 'Stats' },
          { icon: <Compass className="h-5 w-5" />, label: 'Fly-to' },
          { icon: <Settings className="h-5 w-5" />, label: 'Settings' },
        ].map((b) => (
          <button
            key={b.label}
            className="group relative grid h-10 w-10 place-items-center rounded-full bg-white/90 text-neutral-800 shadow-sm hover:bg-white dark:bg-neutral-800/90 dark:text-neutral-100"
            aria-label={b.label}
          >
            {b.icon}
            <span className="pointer-events-none absolute -top-8 scale-0 rounded-md bg-neutral-800 px-2 py-1 text-[10px] text-white opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-white dark:text-neutral-900">
              {b.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

function ControlCard({ title, icon, children }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/20 bg-white/80 p-3 shadow backdrop-blur-md dark:border-white/10 dark:bg-neutral-900/70">
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
        <span className="text-emerald-600 dark:text-emerald-400">{icon}</span>
        {title}
      </div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function Toggle({ label, checked, defaultChecked, onChange }) {
  return (
    <label className="flex cursor-pointer items-center justify-between gap-3 text-sm">
      <span className="text-neutral-700 dark:text-neutral-200">{label}</span>
      <input
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={onChange}
      />
      <span className="relative h-5 w-9 rounded-full bg-neutral-300 after:absolute after:left-0.5 after:top-1/2 after:h-4 after:w-4 after:-translate-y-1/2 after:rounded-full after:bg-white after:shadow after:transition peer-checked:bg-emerald-500 peer-checked:after:translate-x-4 dark:bg-neutral-700" />
    </label>
  );
}

function Stat({ title, value }) {
  return (
    <div className="rounded-lg border border-black/5 bg-white/70 p-3 dark:border-white/10 dark:bg-neutral-900/60">
      <div className="text-xs text-neutral-500 dark:text-neutral-400">{title}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}
