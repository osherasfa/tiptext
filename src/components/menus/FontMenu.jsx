import React from "react"
import Popup from "../Popup"
import { FaArrow } from "../../assets/icons/menu-icons"

function FontMenu({ editor, popup, setPopup, toggle }) {  
    return (
      <>
        <button
          onClick={() => setPopup(popup === 'FontMenu' ? '' : 'FontMenu')}
          className={editor.isActive('textStyle', { fontFamily: 'monospace' }) ? 'is-active' : ''}
        >
          monospace
          <FaArrow />
        </button>
        { 
        popup === 'FontMenu' && 
        <Popup className='flex flex-col items-start [&>button]:type-menu_btn text-neutral-800'>
            <button
                onClick={() => toggle('textStyle', { fontFamily: 'inter' })}
                className={editor.isActive('textStyle', { fontFamily: 'inter' }) ? 'is-active' : ''}
            >
                inter
            </button>
            <button
                onClick={() => toggle('textStyle', { fontFamily: 'arial' })}
                className={editor.isActive('textStyle', { fontFamily: 'arial' }) ? 'is-active' : ''}
            >
                arial
            </button>
            <button
                onClick={() => toggle('textStyle', { fontFamily: 'helvetica' })}
                className={editor.isActive('textStyle', { fontFamily: 'helvetica' }) ? 'is-active' : ''}
            >
                helvetica
            </button>
            <button
                onClick={() => toggle('textStyle', { fontFamily: 'times new roman' })}
                className={editor.isActive('textStyle', { fontFamily: 'times new roman' }) ? 'is-active' : ''}
            >
                times new roman
            </button>
            <button
                onClick={() => toggle('textStyle', { fontFamily: 'garamond' })}
                className={editor.isActive('textStyle', { fontFamily: 'garamond' }) ? 'is-active' : ''}
            >
                garamond
            </button>
            <button
                onClick={() => toggle('textStyle', { fontFamily: 'gerogia' })}
                className={editor.isActive('textStyle', { fontFamily: 'gerogia' }) ? 'is-active' : ''}
            >
                gerogia
            </button>
            <button
                onClick={() => toggle('textStyle', { fontFamily: 'courier' })}
                className={editor.isActive('textStyle', { fontFamily: 'courier' }) ? 'is-active' : ''}
            >
                courier
            </button>
            <button
                onClick={() => toggle('textStyle', { fontFamily: 'courier new' })}
                className={editor.isActive('textStyle', { fontFamily: 'courier new' }) ? 'is-active' : ''}
            >
                courier new
            </button>
        </Popup> }
      </>
    )
}

export default FontMenu