/**
 * The night layer: a moonlight wash plus a drifting firefly field, both
 * driven entirely by CSS variables that only have values under `.dark`.
 *
 * Rendered unconditionally so toggling the theme doesn't remount thirty nodes
 * mid-animation; in light mode --firefly-opacity is 0 and --moonlight is
 * transparent, so the layer is invisible and inert.
 */
const COUNT = 34;

/**
 * Built once at module load rather than during render — the positions must be
 * stable for the life of the page, or the field visibly jumps on re-render.
 */
const FLIES = Array.from({ length: COUNT }, (_, id) => {
  const size = 6 + Math.random() * 8;
  return {
    id,
    style: {
      width: `${size}px`,
      height: `${size}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      "--fly-dur": `${16 + Math.random() * 12}s`,
      "--fly-blink": `${2.5 + Math.random() * 2.5}s`,
      "--fly-delay": `${Math.random() * 12}s`,
    },
  };
});

export const Fireflies = () => (
  <div className="night-sky" aria-hidden="true">
    {FLIES.map((f) => (
      <span key={f.id} className="firefly" style={f.style} />
    ))}
  </div>
);
