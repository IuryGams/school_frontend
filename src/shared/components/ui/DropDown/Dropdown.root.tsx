"use client";
import {
  DropdownProvider,
  useDropdownContext,
} from "@/shared/contexts/DropdownContext";
import * as S from "./styled";

interface DropdownRootProps {
  children: React.ReactNode;
}


function DropdownWrapper({ children }: DropdownRootProps) {
  const { isOpen, dropdownRef } = useDropdownContext();


  return (
    <S.Wrapper
      ref={dropdownRef}
      as="div"
      data-open={isOpen}
      aria-hidden={isOpen}
    >
      {children}
    </S.Wrapper>
  );
}

export default function DropdownRoot(props: DropdownRootProps) {
  return (
    <DropdownProvider>
      <DropdownWrapper>
        {props.children}
      </DropdownWrapper>
    </DropdownProvider>
  );
}
