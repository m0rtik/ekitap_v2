import { useState, useRef, useEffect, ReactNode } from "react";

interface DropdownProps {
  renderDropdown: (props: { isOpen: boolean; setIsOpen: (open: boolean) => void }) => ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ renderDropdown }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Закрытие при клике вне
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Закрытие по "Esc" и навигация клавишами
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return <div ref={dropdownRef}>{renderDropdown({ isOpen, setIsOpen })}</div>;
};

export default Dropdown;
