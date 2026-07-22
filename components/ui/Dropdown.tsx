import type {
  ReactNode,
  SelectHTMLAttributes,
} from "react";

type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: DropdownOption[];
  placeholder?: string;
  hideLabel?: boolean;
  icon?: ReactNode;
  variant?: "default" | "filled";
};

export default function Dropdown({
  label,
  options,
  placeholder = "Select an option",
  hideLabel = false,
  icon,
  variant = "default",
  className = "",
  id,
  ...props
}: DropdownProps) {
  const selectId =
    id ?? label.toLowerCase().replaceAll(" ", "-");

  const variantStyles =
    variant === "filled"
      ? "border-transparent bg-[#f9f9f9]"
      : "border-border bg-white";

  return (
    <div className="w-full">
      <label
        htmlFor={selectId}
        className={
          hideLabel
            ? "sr-only"
            : "mb-2 block text-sm font-medium text-heading"
        }
      >
        {label}
      </label>

      <div className="relative">
        {icon && (
          <span className="pointer-events-none absolute left-3 top-1/2 z-10 -translate-y-1/2 text-heading">
            {icon}
          </span>
        )}

        <select
          id={selectId}
          defaultValue=""
          className={`
            h-11 w-full appearance-none
            rounded-[10px] border
            pr-9 text-xs font-medium text-heading
            outline-none transition-colors
            focus:border-brand-500
            focus:ring-2 focus:ring-brand-100
            disabled:cursor-not-allowed
            disabled:opacity-60
            ${icon ? "pl-10" : "pl-4"}
            ${variantStyles}
            ${className}
          `}
          {...props}
        >
          <option value="" disabled>
            {placeholder}
          </option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-heading"
        >
          <path
            d="M5 7.5 10 12.5 15 7.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}