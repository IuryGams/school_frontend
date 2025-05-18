import * as S from "./styled";
import { Notification } from "../../components/ui/Notification";
import { Bell, Check, X } from "lucide-react";

export default function NotificationWidget() {
  return (
    <S.ContainerWidget>
      {/*  Header */}
      <S.HeaderWidget>
        <span>Notificações</span>
        <button>MARCAR TODAS COMO VISTAS</button>
      </S.HeaderWidget>
      
      {/* Recent Section */}
      <S.SectionWidget>
        <div className="title">
            Recentes
        </div>
        <Notification.Root>
          <Notification.Icon Icon={Bell} />
          <Notification.Content text="Eu sou uma notificação com um texto muito grande em cima. Com alguma informação relevante. O texto não esta quebrando porque ? Por mais que eu escreva ele não vai quebrar ? Otimo isso é muito bom." />
          <Notification.Actions>
            <Notification.Action icon={Check}  />
            <Notification.Action icon={X}  />
          </Notification.Actions>
        </Notification.Root>
        <Notification.Root>
          <Notification.Icon Icon={Bell} />
          <Notification.Content text="Eu sou uma notificação com um texto muito grande em cima. Com alguma informação relevante. O texto não esta quebrando porque ? Por mais que eu escreva ele não vai quebrar ? Otimo isso é muito bom." />
          <Notification.Actions>
            <Notification.Action icon={Check}  />
          </Notification.Actions>
        </Notification.Root>
      </S.SectionWidget>

      {/* Old Section */}
      <S.SectionWidget>
        <div className="title">
            Antigas
        </div>
        <Notification.Root>
          <Notification.Icon Icon={Bell} />
          <Notification.Content text="Alguma coisa" />
          <Notification.Actions>
            <Notification.Action icon={X} />
          </Notification.Actions>
        </Notification.Root>
      </S.SectionWidget>
    </S.ContainerWidget>
  );
}
