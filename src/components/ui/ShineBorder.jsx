function ShineBorder({
  borderWidth = 1,
  duration = 14,
  shineColor = ["#3B82F6", "#06B6D4", "#7C3AED"],
}) {
  return (
    <div
      className="absolute inset-0 rounded-[inherit] pointer-events-none animate-shine"
      style={{
        "--border-width": `${borderWidth}px`,
        "--duration": `${duration}s`,
        backgroundImage: `radial-gradient(
          transparent,
          transparent,
          ${Array.isArray(shineColor)
            ? shineColor.join(",")
            : shineColor},
          transparent,
          transparent
        )`,
        backgroundSize: "300% 300%",
        padding: "var(--border-width)",
        mask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "xor",
        maskComposite: "exclude",
      }}
    />
  );
}

export default ShineBorder;