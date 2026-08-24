import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

interface CustomDropdownProps {
  value: string;
  onChange: (value: string) => void;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  disabled?: boolean;
}

const CustomDropdown = ({
  value,
  onChange,
  options,
  placeholder = "Select an option",
  disabled = false,
}: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel =
    options.find((opt) => opt.value === value)?.label || placeholder;

  return (
    <div ref={containerRef} style={{ position: "relative", width: "100%" }}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        style={{
          width: "100%",
          padding: "12px 14px",
          borderRadius: "8px",
          border: "2px solid rgba(108, 99, 255, 0.2)",
          background: disabled
            ? "rgba(255, 255, 255, 0.02)"
            : "linear-gradient(135deg, rgba(108, 99, 255, 0.08) 0%, rgba(108, 99, 255, 0.04) 100%)",
          color: disabled ? "rgba(255, 255, 255, 0.5)" : "#fff",
          fontSize: "14px",
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "all 0.2s ease",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "left",
          opacity: disabled ? 0.5 : 1,
        }}
        onMouseEnter={(e) => {
          if (!disabled) {
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(108, 99, 255, 0.5)";
            (e.currentTarget as HTMLElement).style.background =
              "linear-gradient(135deg, rgba(108, 99, 255, 0.15) 0%, rgba(108, 99, 255, 0.08) 100%)";
          }
        }}
        onMouseLeave={(e) => {
          if (!disabled) {
            (e.currentTarget as HTMLElement).style.borderColor =
              "rgba(108, 99, 255, 0.2)";
            (e.currentTarget as HTMLElement).style.background =
              "linear-gradient(135deg, rgba(108, 99, 255, 0.08) 0%, rgba(108, 99, 255, 0.04) 100%)";
          }
        }}
      >
        <span>{selectedLabel}</span>
        <ChevronDown
          size={18}
          style={{
            color: "#6c63ff",
            transition: "transform 0.2s ease",
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
          }}
        />
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "calc(100% + 4px)",
            left: 0,
            right: 0,
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
            border: "2px solid rgba(108, 99, 255, 0.3)",
            borderRadius: "8px",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4)",
            zIndex: 1000,
            maxHeight: "280px",
            overflowY: "auto",
          }}
        >
          {options.length === 0 ? (
            <div
              style={{
                padding: "12px 14px",
                color: "#999",
                fontSize: "14px",
              }}
            >
              No options available
            </div>
          ) : (
            options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "none",
                  background:
                    value === option.value
                      ? "rgba(108, 99, 255, 0.3)"
                      : "transparent",
                  color:
                    value === option.value
                      ? "#6c63ff"
                      : "rgba(255, 255, 255, 0.8)",
                  fontSize: "14px",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "all 0.15s ease",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.05)",
                  fontWeight: value === option.value ? "600" : "400",
                  display: "block",
                }}
                onMouseEnter={(e) => {
                  if (value !== option.value) {
                    (e.currentTarget as HTMLElement).style.background =
                      "rgba(108, 99, 255, 0.15)";
                    (e.currentTarget as HTMLElement).style.color = "#fff";
                  }
                }}
                onMouseLeave={(e) => {
                  if (value !== option.value) {
                    (e.currentTarget as HTMLElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLElement).style.color =
                      "rgba(255, 255, 255, 0.8)";
                  }
                }}
              >
                {option.label}
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
