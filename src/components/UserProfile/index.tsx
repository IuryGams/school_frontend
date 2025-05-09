"use client";
import Image from "next/image";
import * as S from "./styled";
import { ChevronsRight } from "lucide-react";
import Link from "next/link";
import { UserProfileOptions } from "@/shared/constants/UserProfileOptions";
import { useState } from "react";

export default function UserProfile() {

  const [openProfile, setOpenProfile] = useState(false);

  const toggleUserProfile = () => setOpenProfile((prev) => !prev);

  return (
    <S.UserProfile as="footer" onClick={toggleUserProfile}>
      <Image
        width={32}
        height={32}
        alt="Foto de um rapaz de pele branca, cabelos castanhos e oculos de grau preto"
        src="https://avatars.githubusercontent.com/u/116408591?v=4"
      />
      <b>Iury Menezessss</b>
      <span>admin</span>
      <div>
        <ChevronsRight />
      </div>

      {openProfile && (
        <S.ProfileOptions>
          {UserProfileOptions.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>
                <item.icon size={20} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </S.ProfileOptions>
      )}
    </S.UserProfile>
  );
}
