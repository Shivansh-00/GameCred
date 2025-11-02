interface SkillBadgeProps {
  skill: "Bronze" | "Silver" | "Gold" | "Platinum" | "Diamond"
  size?: "sm" | "md" | "lg"
}

export function SkillBadge({ skill, size = "md" }: SkillBadgeProps) {
  const colors = {
    Bronze: "bg-amber-900/20 text-amber-400 border-amber-700/50",
    Silver: "bg-slate-600/20 text-slate-300 border-slate-500/50",
    Gold: "bg-amber-500/20 text-amber-300 border-amber-400/50",
    Platinum: "bg-cyan-500/20 text-cyan-300 border-cyan-400/50",
    Diamond: "bg-purple-500/20 text-purple-300 border-purple-400/50",
  }

  const sizes = {
    sm: "px-2 py-1 text-xs",
    md: "px-3 py-1.5 text-sm",
    lg: "px-4 py-2 text-base",
  }

  return <div className={`border rounded-full font-semibold inline-block ${colors[skill]} ${sizes[size]}`}>{skill}</div>
}
