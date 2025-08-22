import * as React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string };

export default function Input({ label, error, className = "", ...props }: Props) {
  return (
    <label className="block w-full">
      {label && <span className="mb-1 block text-sm font-medium text-gray-700">{label}</span>}
      <input
        {...props}
        className={`w-full rounded-xl border px-3 py-2 outline-none transition focus:ring-2 focus:ring-yellow-300 ${
          error ? "border-red-500 bg-red-50" : "border-gray-300"
        } ${className}`}
      />
      {error && <span className="mt-1 block text-sm text-red-600">{error}</span>}
    </label>
  );
}