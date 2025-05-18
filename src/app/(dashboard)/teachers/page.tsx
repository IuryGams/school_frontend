"use client";
import TeacherCard from "@/shared/components/Cards/TeacherCard";
import PreviewImage from "@/shared/components/PreviewImage";
import { Dialog } from "@/shared/components/ui/Dialog";
import WrapperMain from "@/shared/components/WrapperMain";
import * as S from "@/styles/pages/teachers.styled";
import { Plus, Search } from "lucide-react";
import { useState } from "react";

export default function TeacherPage() {
  const [dialog, setDialog] = useState<boolean>(false);

  return (
    <WrapperMain component={S.TeacherMainContent}>
      <S.HeaderTeacher>
        <div className="left">
          <Search size={20} />
          <input type="search" placeholder="Busque o professor..." />
        </div>
        <div className="right">
          <button type="button" onClick={() => setDialog(prev => !prev)}>
            <Plus />
            <span>Cadastrar professor</span>
          </button>
        </div>
      </S.HeaderTeacher>

      <S.ContainerCardsTeacher>
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
        <TeacherCard />
      </S.ContainerCardsTeacher>

      <Dialog.Root isOpen={dialog} onClose={() => setDialog(false)}>
        <Dialog.Header title="Cadastrar professor" onClose={() => setDialog(false)} />
        <Dialog.Content>
          <S.Form>
            <S.DivisionForm>
              <PreviewImage />
              <S.GroupsInput>
                <S.GroupInput>
                  <label>*Primeiro nome:</label>
                  <input type="text" placeholder="Ex: Luiz" />
                </S.GroupInput>

                <S.GroupInput>
                  <label>*Ultimo nome:</label>
                  <input type="text" placeholder="Ex: Sousa" />
                </S.GroupInput>

                <S.GroupInput>
                  <label>*Email:</label>
                  <input type="email" placeholder="Ex: meu_email@email.com" />
                </S.GroupInput>
                <S.GroupInput>
                  <label>*Telefone:</label>
                  <input type="text" placeholder="Ex: (85) 9999-9999" />
                </S.GroupInput>
              </S.GroupsInput>
            </S.DivisionForm>
            <S.ButtonBox>
              <button>
                <Plus />
                Cadastrar
              </button>
            </S.ButtonBox>
          </S.Form>
        </Dialog.Content>
      </Dialog.Root>
    </WrapperMain>
  );
}
