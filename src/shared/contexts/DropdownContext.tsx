"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";

interface DropdownContextType {
  isOpen: boolean;
  toggleDropdown?: () => void;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}

const DropdownContext = createContext({} as DropdownContextType);

interface DropdownProviderProps {
  children: React.ReactNode;
}

export function DropdownProvider({ children }: DropdownProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);


  // function to change the state of dropdown
  function toggleDropdown() {
    setIsOpen((prev) => !prev);
  }

  // function to close dropdown 
  function closeDropdown() {
    setIsOpen(false);
  }


  useEffect(() => {

    // function to close dropdown when user click outside  
    function handleClickOutsideDropdown(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) 
        closeDropdown();
    }

    window.addEventListener("click", handleClickOutsideDropdown);

    return () => {
      window.removeEventListener("click", handleClickOutsideDropdown);
    };
  }, [isOpen, dropdownRef]);

  return (
    <DropdownContext.Provider value={{ isOpen, toggleDropdown, dropdownRef }}>
      {children}
    </DropdownContext.Provider>
  );
}

export function useDropdownContext() {
  return useContext(DropdownContext);
}
