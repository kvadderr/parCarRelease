import { DocumentDTO } from "../../@types/entity/DocumentDTO"
import { CarIcon, UserIcon, AddressIcon, CameraIcon } from "../assets/icons/doc"

export const documentList: DocumentDTO[] = [
  {
    title: "Паспорт",
    description: "Сделайте фото пасспорта",
    icons: <UserIcon />,
    isSuccess: true
  },
  {
    title: "Водительские права",
    description: "Сделайте фото пасспорта",
    icons: <CarIcon />,
    isSuccess: true
  },
  {
    title: "Адрес прописки",
    description: "Сделайте фото прописки из паспорта",
    icons: <AddressIcon />,
    isSuccess: false
  },
  {
    title: "Селфи с паспортом",
    description: "Сделай селфи с паспортом",
    icons: <CameraIcon />,
    isSuccess: false
  },

]