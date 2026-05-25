import { forwardRef } from "react";

const BLOCK_COUNT = 36;

const blocks = Array.from({ length: BLOCK_COUNT }, (_, index) => index);

const CinematicTransition = forwardRef(function CinematicTransition(
  { active = false, mode = "idle", copy },
  ref,
) {
  return (
    <aside
      ref={ref}
      className={`transition-layer transition-layer--${mode} ${
        active ? "is-active" : "is-idle"
      }`}
      aria-hidden="true"
    >
      <div className="transition-layer__grid" aria-hidden="true">
        {blocks.map((blockIndex) => (
          <span
            key={blockIndex}
            data-transition-block
            className="transition-layer__block"
          />
        ))}
      </div>

      <div className="transition-layer__copy">
        <span className="transition-layer__eyebrow">{copy.eyebrow}</span>
        <h2 className="transition-layer__title">{copy.title}</h2>
        <p className="transition-layer__caption">{copy.caption}</p>
      </div>
    </aside>
  );
});

export default CinematicTransition;
