"use client";
import { useCallback, useState } from "react";
import PreviewImage from "../../PreviewImage";
import { Dialog } from "../Dialog";
import * as S from "./Table.styled";
import { Plus } from "lucide-react";
import SearchInput from "../SearchInput";


function TableHeader() {
    const [dialog, setDialog] = useState<boolean>(false);

    const handleCloseDialog = useCallback(() => {
    setDialog(false);
    }, []);


  return (
    <>
      <S.HeaderTeacher>
        <SearchInput />
        <div className="right">
          <button type="button" onClick={() => setDialog(prev=> !prev)}>
            <Plus />
            <span>Cadastrar professor</span>
          </button>
        </div>
      </S.HeaderTeacher>

      <Dialog.Root isOpen={dialog} onClose={handleCloseDialog}>
        <Dialog.Header
          title="Cadastrar professor"
          onClose={handleCloseDialog}
        />

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
    </>
  );
}

export default TableHeader;
