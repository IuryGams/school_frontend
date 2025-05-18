"use client";
import Dropdown from "@/shared/components/ui/DropDown";
import { Bell } from "lucide-react";
import * as S from "./styled";
import { useState } from "react";
import NotificationWidget from "@/shared/widgets/notification.widget";

export default function Actions() {
  const [notifications, setNotifications] = useState<number>(0);

  return (
    <S.Container>
      <div>
        <Dropdown.Root>
          <Dropdown.Label tag="button">
            <S.BoxIcon>
              <Bell size={24} />
              {notifications != 0 && <span>{notifications}</span>}
            </S.BoxIcon>
          </Dropdown.Label>
          <Dropdown.Content>
            <NotificationWidget />
          </Dropdown.Content>
        </Dropdown.Root>
      </div>
    </S.Container>
  );
}
