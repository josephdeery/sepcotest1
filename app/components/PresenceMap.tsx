import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  Sphere,
  Graticule,
} from "react-simple-maps";

// World TopoJSON via CDN (Natural Earth 1:110m)
const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

type TipDir = "left" | "right" | "top" | "bottom";

interface Location {
  id: string;
  name: string;
  coordinates: [number, number]; // [lon, lat]
  note: string;
  labelDx: number; // SVG-px offset for the permanent label line
  labelDy: number;
  tipDir: TipDir;  // which direction the hover tooltip opens
}

// ── Established locations ──────────────────────────────────────────────────
const ESTABLISHED: Location[] = [
  {
    id: "mauritania",
    name: "Mauritania",
    coordinates: [-15.97, 18.08],
    note: "Headquarters — Nouakchott",
    labelDx: -44, labelDy: -20,
    tipDir: "right",
  },
  {
    id: "senegal",
    name: "Sénégal",
    coordinates: [-17.44, 14.69],
    note: "Dakar, Diamniadio",
    labelDx: 14, labelDy: 24,
    tipDir: "right",
  },
  {
    id: "dubai",
    name: "Dubai",
    coordinates: [55.27, 25.2],
    note: "UAE",
    labelDx: 14, labelDy: -22,
    tipDir: "left",
  },
];

// ── In-development locations ───────────────────────────────────────────────
const EXPANSION: Location[] = [
  {
    id: "algeria",
    name: "Algeria",
    coordinates: [3.04, 36.74],
    note: "In development",
    labelDx: 14, labelDy: -24,
    tipDir: "bottom",
  },
  {
    id: "namibia",
    name: "Namibia",
    coordinates: [17.08, -22.56],
    note: "In development",
    labelDx: -44, labelDy: 20,
    tipDir: "right",
  },
  {
    id: "mozambique",
    name: "Mozambique",
    coordinates: [32.58, -25.97],
    note: "In development",
    labelDx: 14, labelDy: 22,
    tipDir: "left",
  },
  {
    id: "suriname",
    name: "Suriname",
    coordinates: [-55.17, 5.87],
    note: "In development",
    labelDx: -44, labelDy: -22,
    tipDir: "right",
  },
];

const ALL: Location[] = [...ESTABLISHED, ...EXPANSION];

// ── Hover tooltip ──────────────────────────────────────────────────────────
const TIP_W = 138, TIP_H = 36, TIP_GAP = 14;

function tipRect(dir: TipDir): { rx: number; ry: number } {
  switch (dir) {
    case "right":  return { rx: TIP_GAP,           ry: -TIP_H / 2 };
    case "left":   return { rx: -TIP_GAP - TIP_W,  ry: -TIP_H / 2 };
    case "top":    return { rx: -TIP_W / 2,         ry: -TIP_GAP - TIP_H };
    case "bottom": return { rx: -TIP_W / 2,         ry: TIP_GAP };
  }
}

function HoverTooltip({ name, note, dir }: { name: string; note: string; dir: TipDir }) {
  const { rx, ry } = tipRect(dir);
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ duration: 0.12 }}
    >
      <rect x={rx} y={ry} width={TIP_W} height={TIP_H} rx={3} fill="#0d2240" stroke="rgba(255,255,255,0.18)" strokeWidth={0.6} />
      <text x={rx + TIP_W / 2} y={ry + 13} textAnchor="middle" fill="white" fontSize={8} fontFamily="Raleway, sans-serif" fontWeight="700">{name}</text>
      <text x={rx + TIP_W / 2} y={ry + 26} textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize={6.5} fontFamily="Raleway, sans-serif">{note}</text>
    </motion.g>
  );
}

// ── Component ──────────────────────────────────────────────────────────────
export function PresenceMap() {
  const [hovered, setHovered] = useState<string | null>(null);

  const hoveredLoc = ALL.find((l) => l.id === hovered) ?? null;

  return (
    <section className="py-24" style={{ backgroundColor: "#F8FAFC" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8" style={{ backgroundColor: "#7e8474" }} />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ fontFamily: "Raleway, sans-serif", fontWeight: 600, color: "#7e8474", letterSpacing: "0.15em" }}
          >
            Our Presence
          </span>
        </div>

        {/* Heading row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <h2
            className="uppercase"
            style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#034e7c" }}
          >
            Where we operate<br />Where we're growing
          </h2>
          
        </div>

        {/* Map card */}
        <div
          className="overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0a1628 0%, #0d2240 100%)", border: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="flex flex-col lg:flex-row">

            {/* ── MAP ── */}
            <div className="flex-1 relative">
              <ComposableMap
                width={800}
                height={420}
                projection="geoNaturalEarth1"
                projectionConfig={{ scale: 145 }}
                style={{ width: "100%", height: "auto", display: "block" }}
                aria-label="SEPCO global presence map"
              >
                <defs>
                  <radialGradient id="glow-green" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#4caf7d" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#4caf7d" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="glow-blue" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#6699ff" stopOpacity="0.22" />
                    <stop offset="100%" stopColor="#6699ff" stopOpacity="0" />
                  </radialGradient>
                </defs>

                {/* Ocean sphere */}
                <Sphere fill="rgba(5,18,48,0.65)" stroke="rgba(255,255,255,0.07)" strokeWidth={0.5} />

                {/* Latitude/longitude graticule */}
                <Graticule stroke="rgba(255,255,255,0.04)" strokeWidth={0.4} />

                {/* Country fills */}
                <Geographies geography={GEO_URL}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="rgba(255,255,255,0.07)"
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth={0.4}
                        style={{ outline: "none" }}
                      />
                    ))
                  }
                </Geographies>

                {/* Glow halos — established (render below markers) */}
                {ESTABLISHED.map((loc) => (
                  <Marker key={`halo-e-${loc.id}`} coordinates={loc.coordinates}>
                    <circle
                      r={hovered === loc.id ? 24 : 18}
                      fill="url(#glow-green)"
                      style={{ transition: "r 0.25s ease" }}
                    />
                  </Marker>
                ))}

                {/* Glow halos — expansion */}
                {EXPANSION.map((loc) => (
                  <Marker key={`halo-x-${loc.id}`} coordinates={loc.coordinates}>
                    <circle
                      r={hovered === loc.id ? 22 : 16}
                      fill="url(#glow-blue)"
                      style={{ transition: "r 0.25s ease" }}
                    />
                  </Marker>
                ))}

                {/* Expansion markers */}
                {EXPANSION.map((loc) => (
                  <Marker
                    key={loc.id}
                    coordinates={loc.coordinates}
                    onMouseEnter={() => setHovered(loc.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ cursor: "pointer" }}
                  >
                    <circle r={5.5} fill="#6699ff" />
                    <circle r={9} fill="none" stroke="#6699ff" strokeWidth={1} strokeOpacity={0.45} />
                  </Marker>
                ))}

                {/* Established markers */}
                {ESTABLISHED.map((loc) => (
                  <Marker
                    key={loc.id}
                    coordinates={loc.coordinates}
                    onMouseEnter={() => setHovered(loc.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ cursor: "pointer" }}
                  >
                    <circle r={6.5} fill="#4caf7d" />
                    <circle r={11} fill="none" stroke="#4caf7d" strokeWidth={1} strokeOpacity={0.4} />
                  </Marker>
                ))}

                {/* Permanent labels — established (green tint) */}
                {ESTABLISHED.map((loc) => (
                  <Annotation
                    key={`lbl-e-${loc.id}`}
                    subject={loc.coordinates}
                    dx={loc.labelDx}
                    dy={loc.labelDy}
                    connectorProps={{ stroke: "rgba(76,175,125,0.3)", strokeWidth: 0.5 }}
                  >
                    <text
                      fill="rgba(175,235,205,0.82)"
                      fontSize={7.5}
                      fontFamily="Raleway, sans-serif"
                      fontWeight="600"
                      textAnchor={loc.labelDx < 0 ? "end" : "start"}
                      dy={4}
                    >
                      {loc.name}
                    </text>
                  </Annotation>
                ))}

                {/* Permanent labels — expansion (blue tint) */}
                {EXPANSION.map((loc) => (
                  <Annotation
                    key={`lbl-x-${loc.id}`}
                    subject={loc.coordinates}
                    dx={loc.labelDx}
                    dy={loc.labelDy}
                    connectorProps={{ stroke: "rgba(102,153,255,0.25)", strokeWidth: 0.5 }}
                  >
                    <text
                      fill="rgba(180,200,255,0.72)"
                      fontSize={7.5}
                      fontFamily="Raleway, sans-serif"
                      fontWeight="600"
                      textAnchor={loc.labelDx < 0 ? "end" : "start"}
                      dy={4}
                    >
                      {loc.name}
                    </text>
                  </Annotation>
                ))}

                {/* Hover tooltip — rendered last so it sits above all labels */}
                {hoveredLoc && (
                  <Marker key={`tip-${hoveredLoc.id}`} coordinates={hoveredLoc.coordinates}>
                    <AnimatePresence>
                      <HoverTooltip
                        name={hoveredLoc.name}
                        note={hoveredLoc.note}
                        dir={hoveredLoc.tipDir}
                      />
                    </AnimatePresence>
                  </Marker>
                )}
              </ComposableMap>
            </div>

            {/* ── LEGEND PANEL ── */}
            <div
              className="lg:w-68 p-8 flex flex-col justify-center gap-7"
              style={{ borderLeft: "1px solid rgba(255,255,255,0.08)", minWidth: "240px" }}
            >

              {/* Established */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#4caf7d" }} />
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.14em" }}
                  >
                    Established
                  </span>
                </div>
                <ul className="space-y-3">
                  {ESTABLISHED.map((loc) => (
                    <li
                      key={loc.id}
                      onMouseEnter={() => setHovered(loc.id)}
                      onMouseLeave={() => setHovered(null)}
                      style={{ cursor: "default" }}
                    >
                      <div
                        style={{
                          fontFamily: "Raleway, sans-serif",
                          fontWeight: 600,
                          fontSize: "0.875rem",
                          color: hovered === loc.id ? "#ffffff" : "rgba(255,255,255,0.85)",
                          transition: "color 0.15s",
                        }}
                      >
                        {loc.name}
                      </div>
                      <div
                        style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", marginTop: "2px" }}
                      >
                        {loc.note}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }} />

              {/* In Development */}
              <div>
                <div className="flex items-center gap-2.5 mb-4">
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "transparent", border: "1.5px solid #6699ff" }}
                  />
                  <span
                    className="text-xs uppercase tracking-widest"
                    style={{ fontFamily: "Raleway, sans-serif", fontWeight: 700, color: "rgba(255,255,255,0.6)", letterSpacing: "0.14em" }}
                  >
                    In Development
                  </span>
                </div>
                <ul className="space-y-2.5">
                  {EXPANSION.map((loc) => (
                    <li
                      key={loc.id}
                      className="flex items-center gap-2.5"
                      onMouseEnter={() => setHovered(loc.id)}
                      onMouseLeave={() => setHovered(null)}
                      style={{ cursor: "default" }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "#6699ff" }} />
                      <span
                        style={{
                          fontFamily: "Raleway, sans-serif",
                          fontWeight: 500,
                          fontSize: "0.875rem",
                          color: hovered === loc.id ? "#ffffff" : "rgba(255,255,255,0.65)",
                          transition: "color 0.15s",
                        }}
                      >
                        {loc.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.25rem" }}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#4caf7d", fontSize: "2rem", lineHeight: 1 }}>3</div>
                    <div style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", marginTop: "4px" }}>Active countries</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#6699ff", fontSize: "2rem", lineHeight: 1 }}>4</div>
                    <div style={{ fontFamily: "Raleway, sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.35)", marginTop: "4px" }}>In development</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
