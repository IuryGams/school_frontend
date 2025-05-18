"use client";
import * as S from "./styled";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function PreviewImage() {
  const [selectedImage, setSelectedImage] = useState<string>("");

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;

    const imageSrc = URL.createObjectURL(file);
    console.log(imageSrc);

    setSelectedImage(imageSrc);
  }

  useEffect(() => {
    return () => {
      if (selectedImage) {
        URL.revokeObjectURL(selectedImage);
      }
    };
  }, [selectedImage]);

  return (
    <S.ContainerImage>
      <label htmlFor="image-upload">
        {!selectedImage ? (
          <span>Cliquei aqui para adicionar uma foto.</span>
        ) : (
          <S.ImageBox>
            <Image src={selectedImage} fill alt="Preview image" />
          </S.ImageBox>
        )}
      </label>
      <input
        type="file"
        id="image-upload"
        accept="image/*"
        onChange={handleFileChange}
      />
      {selectedImage && <span>Para trocar a foto clique na imagem</span>}
    </S.ContainerImage>
  );
}
