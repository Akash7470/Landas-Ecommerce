import * as React from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & { label?: string; error?: string; onToggle?: () => void; visible?: boolean };

export default function PasswordInput({ label, error, visible, onToggle, className = "", ...props }: Props) {
  return (
    <label className="block w-full">
      {label && <span className="mb-1 block text-sm font-medium text-gray-700">{label}</span>}
      <div className={`flex items-center rounded-xl border px-3 ${error ? "border-red-500 bg-red-50" : "border-gray-300"}`}>
        <input
          {...props}
          type={visible ? "text" : "password"}
          className={`w-full bg-transparent py-2 outline-none ${className}`}
        />
        <button type="button" onClick={onToggle} className="ml-2 text-sm text-gray-600 hover:text-gray-900">
          {visible ? "Hide" : "Show"}
        </button>
      </div>
      {error && <span className="mt-1 block text-sm text-red-600">{error}</span>}
    </label>
  );
}