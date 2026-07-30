"use client";

import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

type DropdownOption = {
  label: string;
  value: string;
};

type DropdownProps = {
  label: string;
  options: DropdownOption[];
  placeholder?: string;
  hideLabel?: boolean;
  icon?: ReactNode;
  variant?: "default" | "filled";
  className?: string;
  id?: string;
  name?: string;
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
  name,
}: DropdownProps) {
  const generatedId = useId();
  const dropdownId = id ?? generatedId;
  const listboxId = `${dropdownId}-listbox`;
  const wrapperRef = useRef<HTMLDivElement>(null);
  const optionRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const selectedOption = options.find((option) => option.value === selectedValue);
  const menuOptions = [{ label: placeholder, value: "" }, ...options];
  const selectedIndex = Math.max(
    0,
    menuOptions.findIndex((option) => option.value === selectedValue),
  );
  const [activeIndex, setActiveIndex] = useState(selectedIndex);

  const variantStyles =
    variant === "filled"
      ? "border-transparent bg-[#f9f9f9]"
      : "border-border bg-white";

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      optionRefs.current[activeIndex]?.focus();
    }
  }, [activeIndex, isOpen]);

  const selectOption = (option: DropdownOption) => {
    setSelectedValue(option.value);
    setActiveIndex(menuOptions.findIndex((item) => item.value === option.value));
    setIsOpen(false);
  };

  const moveActiveOption = (direction: 1 | -1) => {
    setActiveIndex((current) => {
      const nextIndex = current + direction;

      if (nextIndex < 0) {
        return menuOptions.length - 1;
      }

      if (nextIndex >= menuOptions.length) {
        return 0;
      }

      return nextIndex;
    });
  };

  const handleButtonKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex(selectedIndex);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex(selectedIndex);
    }

    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const handleOptionKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    option: DropdownOption,
  ) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      moveActiveOption(1);
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      moveActiveOption(-1);
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectOption(option);
    }

    if (event.key === "Escape") {
      event.preventDefault();
      setIsOpen(false);
    }
  };

  return (
    <div ref={wrapperRef} className="relative w-full">
      <label
        id={`${dropdownId}-label`}
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

        <input type="hidden" name={name} value={selectedValue} />

        <button
          id={dropdownId}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={`${dropdownId}-label ${dropdownId}`}
          aria-controls={listboxId}
          onClick={() => {
            setIsOpen((current) => !current);
            setActiveIndex(selectedIndex);
          }}
          onKeyDown={handleButtonKeyDown}
          className={`
            flex h-11 w-full appearance-none items-center
            rounded-[10px] border
            pr-9 text-xs font-medium text-heading
            outline-none transition-colors
            focus:border-brand-500
            focus:ring-2 focus:ring-brand-100
            ${icon ? "pl-10" : "pl-4"}
            ${variantStyles}
            ${className}
          `}
        >
          <span className="truncate text-left">
            {selectedOption?.label ?? placeholder}
          </span>
        </button>

        <svg
          aria-hidden="true"
          viewBox="0 0 20 20"
          fill="none"
          className={`
            pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5
            -translate-y-1/2 text-heading transition-transform duration-200
            ${isOpen ? "rotate-180" : ""}
          `}
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

      {isOpen && (
        <div
          id={listboxId}
          role="listbox"
          aria-labelledby={`${dropdownId}-label`}
          className="
            absolute left-0 right-0 top-[calc(100%+6px)] z-40
            max-h-56 overflow-auto rounded-[10px]
            border border-border bg-white py-1
            shadow-[0_12px_28px_rgba(16,34,29,0.12)]
          "
        >
          {menuOptions.map((option, index) => {
            const isSelected = option.value === selectedValue;

            return (
              <button
                key={option.value || "placeholder"}
                ref={(element) => {
                  optionRefs.current[index] = element;
                }}
                type="button"
                role="option"
                aria-selected={isSelected}
                onClick={() => selectOption(option)}
                onKeyDown={(event) => handleOptionKeyDown(event, option)}
                onMouseEnter={() => setActiveIndex(index)}
                className={`
                  flex w-full items-center px-4 py-2.5
                  text-left text-[12px] font-medium
                  transition-colors duration-150
                  focus-visible:outline-none
                  ${
                    isSelected
                      ? "bg-brand-50 text-brand-700"
                      : "text-heading hover:bg-brand-50 hover:text-brand-700"
                  }
                  ${activeIndex === index ? "bg-brand-50 text-brand-700" : ""}
                `}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
