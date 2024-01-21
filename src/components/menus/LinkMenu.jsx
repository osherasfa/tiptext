import { FaLink } from "../../assets/icons/menu-icons"
import Popup from "./Popup"
function LinkMenu(){
    return (
        <Popup className='flex-col gap-2'>
            <form className="flex items-center gap-2">
                <label className="flex items-center gap-2 p-2 rounded-lg bg-neutral-100">
                    <FaLink className="!text-black"/>
                    <input className="flex-1 bg-transparent outline-none min-w-[12rem] text-black text-sm" placeholder="Enter URL" type="url"/>
                </label>
                <button className="flex items-center justify-center border text-sm font-semibold rounded-md disabled:opacity-50 whitespace-nowrap" type="submit">Set Link</button>
            </form>
            <label className="flex self-start items-center justify-start gap-2 text-sm font-semibold cursor-pointer select-none text-neutral-500">
                Open in new tab
            </label>
        </Popup>
    )
}

export default LinkMenu