import { IconType } from "react-icons"
import { FaHome } from "react-icons/fa"

type MenusType = {
    name : string
    icons : IconType
    href? : string
}[]

export const Menu:MenusType = [
    {
        name : "Home",
        icons : FaHome,
        href : '/'
    },
] 