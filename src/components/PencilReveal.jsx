'use client';

import { useRef, useEffect, useState, useId } from 'react';
import styles from './PencilReveal.module.css';

/* ------------------------------------------------------------------
   Generate a zigzag "scribble" path that covers an 800×800 area
   from top-left → bottom-right (boustrophedon / serpentine pattern).
   ------------------------------------------------------------------ */
function generateScribblePath() {
  const W = 800;
  const rows = 14;
  const gap = W / rows;          // ~57 px between row centres
  let d = '';

  for (let i = 0; i < rows; i++) {
    const y = gap * i + gap / 2;
    if (i === 0) d += `M -20,${y.toFixed(1)}`;

    if (i % 2 === 0) {
      d += ` L ${W + 20},${y.toFixed(1)}`;
    } else {
      d += ` L -20,${y.toFixed(1)}`;
    }

    if (i < rows - 1) {
      const nextY = gap * (i + 1) + gap / 2;
      if (i % 2 === 0) {
        d += ` L ${W + 20},${nextY.toFixed(1)}`;
      } else {
        d += ` L -20,${nextY.toFixed(1)}`;
      }
    }
  }
  return d;
}

const SCRIBBLE_PATH = generateScribblePath();

/* ------------------------------------------------------------------
   Inline pencil icon SVG (pointing →, tip at right-centre)
   ------------------------------------------------------------------ */
const PencilSVG = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: 'block' }}
  >
    {/* eraser */}
    <rect x="2" y="14" width="4" height="8" rx="1.5" fill="#B0B0B0" />
    {/* metal band */}
    <rect x="5.5" y="13.5" width="2" height="9" rx="0.5" fill="#888" />
    {/* body */}
    <rect x="7" y="13" width="16" height="10" rx="1" fill="#2C2C2C" />
    {/* body stripe */}
    <rect x="7" y="17" width="16" height="2" fill="#1a1a1a" />
    {/* wood taper */}
    <polygon points="23,13 23,23 30,18" fill="#D4D4D4" />
    {/* graphite tip */}
    <polygon points="29,16.5 29,19.5 34,18" fill="#111" />
  </svg>
);

/* ------------------------------------------------------------------
   PencilReveal component
   ------------------------------------------------------------------ */
export default function PencilReveal({
  src,
  alt,
  width = 800,
  height = 800,
  priority = false,
}) {
  const maskId = useId().replace(/:/g, '_') + '_pencilMask';
  const pathRef = useRef(null);
  const pathInitialized = useRef(false);
  const pencilRef = useRef(null);
  const [animDone, setAnimDone] = useState(false);
  const [pencilFading, setPencilFading] = useState(false);

  // Ref callback: initialise dash state synchronously on mount
  // so the mask is fully closed before the browser ever paints.
  const setPathRef = (node) => {
    pathRef.current = node;
    if (node && !pathInitialized.current) {
      pathInitialized.current = true;
      const totalLen = node.getTotalLength();
      node.style.strokeDasharray = totalLen;
      node.style.strokeDashoffset = totalLen;
      // Make visible now that dash is set
      node.style.visibility = 'visible';
    }
  };

  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const totalLen = path.getTotalLength();
    const DURATION = 2500; // 2.5 s
    let start = null;
    let rafId;

    const tick = (ts) => {
      if (!start) start = ts;
      const t = Math.min((ts - start) / DURATION, 1);
      const ease = 1 - Math.pow(1 - t, 3); // ease-out cubic

      // reveal mask
      path.style.strokeDashoffset = totalLen * (1 - ease);

      // move pencil
      const drawn = totalLen * ease;
      const pt = path.getPointAtLength(drawn);
      const ahead = path.getPointAtLength(Math.min(drawn + 2, totalLen));
      const angle =
        Math.atan2(ahead.y - pt.y, ahead.x - pt.x) * (180 / Math.PI);

      if (pencilRef.current) {
        pencilRef.current.style.left = `${(pt.x / 800) * 100}%`;
        pencilRef.current.style.top = `${(pt.y / 800) * 100}%`;
        pencilRef.current.style.transform = `rotate(${angle}deg)`;
      }

      if (t < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        // pencil lifts & fades
        setPencilFading(true);
        setTimeout(() => setAnimDone(true), 600);
      }
    };

    // Start immediately – no delay
    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* ---- SVG with mask + image ---- */}
      <svg
        className={styles.revealSvg}
        viewBox="0 0 800 800"
        preserveAspectRatio="xMidYMax meet"
        aria-label={alt}
        role="img"
      >
        <defs>
          <mask id={maskId}>
            <rect width="800" height="800" fill="black" />
            <path
              ref={setPathRef}
              d={SCRIBBLE_PATH}
              stroke="white"
              strokeWidth="72"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              style={{ visibility: 'hidden' }}
            />
          </mask>
        </defs>
        <image
          href={src}
          width="800"
          height="800"
          mask={`url(#${maskId})`}
          preserveAspectRatio="xMidYMid meet"
        />
      </svg>

      {/* ---- Pencil icon ---- */}
      {!animDone && (
        <div
          ref={pencilRef}
          className={[
            styles.pencil,
            pencilFading ? styles.pencilFade : '',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <PencilSVG />
        </div>
      )}
    </div>
  );
}
