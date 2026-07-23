import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "default" | "compact";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 focus-visible:ring-brand-500",

  outline:
    "border border-brand-500 bg-transparent text-brand-700 hover:bg-brand-50 focus-visible:ring-brand-500",

  ghost:
    "bg-transparent text-ink hover:bg-surface focus-visible:ring-brand-500",
};

const sizeStyles: Record<ButtonSize, string> = {
  default:
    "h-10 rounded-[7px] px-5 text-sm",

  compact:
    "h-6 min-w-[74px] rounded-[4px] px-3 text-[8px]",
};

export default function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center
        whitespace-nowrap font-medium
        transition-colors duration-200
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-offset-2
        disabled:cursor-not-allowed
        disabled:opacity-50
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}