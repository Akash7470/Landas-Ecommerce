import * as React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "secondary" };

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  const base = "w-full rounded-xl px-4 py-2 font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-yellow-400 text-white hover:bg-yellow-500 disabled:bg-gray-300"
      : "bg-gray-200 text-gray-900 hover:bg-gray-300";
  return <button {...props} className={`${base} ${styles} ${className}`} />;
}