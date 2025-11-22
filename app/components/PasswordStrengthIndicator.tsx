// Helper component for password strength indicator
export default function PasswordStrengthIndicator({ strength }: { strength: "weak" | "medium" | "strong" }) {
  const getBarColor = (index: number) => {
    if (strength === "weak" && index === 0) return "bg-red-500";
    if (strength === "medium" && index <= 1) return "bg-yellow-500";
    if (strength === "strong") return "bg-green-500";
    return "bg-gray-200";
  };

  const getTextColor = () => {
    if (strength === "weak") return "text-red-500";
    if (strength === "medium") return "text-yellow-500";
    return "text-green-500";
  };

  return (
    <div className="mt-2">
      <div className="flex gap-1">
        <div className={`h-1 flex-1 ${getBarColor(0)}`}></div>
        <div className={`h-1 flex-1 ${getBarColor(1)}`}></div>
        <div className={`h-1 flex-1 ${getBarColor(2)}`}></div>
      </div>
      <p className="text-xs mt-1 text-[var(--secondary-grey)]">
        Password strength: <span className={getTextColor()}>{strength}</span>
      </p>
    </div>
  );
}
