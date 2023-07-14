import { useContext } from "react"
import Context from "./Context"

export const useStore = () => {
    const [state, dispactch] = useContext(Context)
    return [state, dispactch]
}