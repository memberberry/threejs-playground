
import { customGUI } from "../gui"

export {}
declare global {
    namespace dat{
        interface GUI{
            values: customGUI
        }
    }
}