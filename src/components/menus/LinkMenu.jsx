import React from "react"
import { FaLink } from "../../assets/icons/menu-icons"
import Popup from "./Popup"

function LinkMenu({ toggleLink }){
    const handleSubmit = e => {
        e.preventDefault()

        toggleLink({ href: e.target[0].value, target: e.target.nextElementSibling.children[0].checked ? '_blank' : '_self' })
    }

    return (
        <Popup className='flex-col gap-2'>
            <form className="flex items-center gap-2" onSubmit={handleSubmit}>
                <label className="flex items-center gap-2 p-2 rounded-lg bg-neutral-100">
                    <FaLink className="!text-black"/>
                    <input type="url" placeholder="Enter URL" className="flex-1 bg-transparent outline-none min-w-[12rem] text-black text-sm" pattern="https?://.*" required/>
                </label>
                <button className="flex items-center justify-center border text-sm font-semibold rounded-md whitespace-nowrap disabled:opacity-60" type="submit">Set Link</button>
            </form>
            <label className="relative self-start inline-flex items-center gap-3 cursor-pointer select-none text-sm font-semibold text-neutral-500">
                Open in new tab
                <input type="checkbox" className="sr-only peer"/>
                <div className="w-[38px] h-5 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[1px] after:start-auto after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[18px] after:w-[18px] after:transition-all peer-checked:bg-black"></div>
            </label>
        </Popup>
    )
}

export default LinkMenu