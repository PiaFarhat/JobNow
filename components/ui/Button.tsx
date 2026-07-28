import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "outline" | "ghost";
type ButtonSize = "default" | "compact" | "tiny";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-brand-500 text-white
    shadow-[0_4px_12px_rgba(0,204,153,0.22)]
    hover:bg-brand-600
    hover:shadow-[0_10px_24px_rgba(0,204,153,0.35)]
    focus-visible:ring-brand-500
  `,

  outline: `
    border border-brand-500
    bg-transparent text-brand-700
    hover:border-brand-600
    hover:bg-brand-500
    hover:text-white
    hover:shadow-[0_8px_20px_rgba(0,204,153,0.25)]
    focus-visible:ring-brand-500
  `,

  ghost: `
    bg-transparent text-ink
    hover:bg-brand-100
    hover:text-brand-700
    focus-visible:ring-brand-500
  `,
};
  

const sizeStyles: Record<ButtonSize, string> = {
  default: "h-10 w-fit rounded-[7px] px-5 text-sm",
  compact: "h-9 min-w-[96px] w-fit rounded-[6px] px-4 text-xs",
  tiny: "h-8 min-w-[92px] w-fit rounded-[5px] px-3 text-[11px]",
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
        inline-flex cursor-pointer
        items-center justify-center
        whitespace-nowrap font-medium

        transition-all duration-300 ease-out
        hover:-translate-y-0.5
        hover:scale-[1.01]
        active:translate-y-0
        active:scale-[0.99]

        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-offset-2

        disabled:cursor-not-allowed
        disabled:translate-y-0
        disabled:opacity-50
        disabled:shadow-none

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
