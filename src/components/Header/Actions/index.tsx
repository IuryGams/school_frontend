"use client";
import Dropdown from "@/components/DropDown";
import { Bell, Settings } from "lucide-react";
import * as S from "./styled"
import { useState } from "react";

export default function Actions() {

    const [notifications, setNotifications] = useState<number>(0);

  return (
    <S.Container>
      <div>
        <Dropdown.Root>
          <Dropdown.Label tag="button">
            <S.BoxIcon>
              <Bell size={24} />
              {notifications != 0 &&  <span>{notifications}</span>} 
            </S.BoxIcon>
          </Dropdown.Label>
          <Dropdown.Content>
            <ul>
              <li>Notificação 1</li>
              <li>Notificação 2</li>
              <li>Notificação 3</li>
            </ul>
          </Dropdown.Content>
        </Dropdown.Root>
      </div>
      <div>
        <Dropdown.Root>
          <Dropdown.Label tag="button">
            <Settings size={24} />
          </Dropdown.Label>
          <Dropdown.Content>
            <S.NotificationBox>
              <li>Notificação 1</li>
              <li>Notificação 2</li>
              <li>Notificação 3</li>
            </S.NotificationBox>
          </Dropdown.Content>
        </Dropdown.Root>
      </div>
    </S.Container>
  );
}
