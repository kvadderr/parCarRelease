import { cardRejected, rejectedIcon, verifyWaitIcon, waitingIcon } from "../assets/icons/doc";
import { DocumentStatus } from "../enum/DocumentStatus";

export const notificationStatus = [
  {
    status: DocumentStatus.WAITING,
    icon: waitingIcon,
    title: 'Документы в процессe верификации',
    label: 'Пожалуйста ожидайте ответа'
  },
  {
    status: DocumentStatus.VERIFY_WAITING,
    icon: verifyWaitIcon,
    title: 'Документы находятся на верификации',
    label: 'Для обновления статуса нажмите «Проверить текущий статус»'
  },
  {
    status: DocumentStatus.REJECTED,
    icon: rejectedIcon,
    title: 'Документы не прошли верификацию',
    label: 'Чтобы пройти верификацию, нажмите кнопку «Пройти повторно»'
  },
  {
    status: DocumentStatus.CARD_REJECTED,
    icon: cardRejected,
    title: 'Не удалось привязать вашу карту',
    label: 'Попробуйте снова или обратитесь в службу поддержки, чтобы получить помощь'
  },
  
]