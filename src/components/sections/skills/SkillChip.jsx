function SkillChip({ chip, onMouseEnter, onMouseLeave }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="relative flex items-center justify-center gap-2.5 rounded-xl border border-gray-800/60 bg-gray-900/10 px-4 py-3 text-xs font-medium tracking-wide text-gray-300 transition-all duration-300 select-none hover:-translate-y-0.5 hover:border-blue-500/30 hover:bg-blue-500/5 hover:text-blue-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.06)]"
    >
      {chip.icon ? (
        <span className="flex-shrink-0 text-lg transition-colors duration-200">{chip.icon}</span>
      ) : (
        <div className="h-4 w-4 shrink-0 rounded-md bg-gray-800/40 animate-pulse" />
      )}

      <span className="truncate">{chip.name}</span>
    </div>
  );
}

export default SkillChip;
