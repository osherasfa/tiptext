import React from "react"
import Popup from "../Popup"
import { FaArrow } from "../../assets/icons/menu-icons"

function FontMenu({ editor, popup, setPopup, toggle }) {  
    return (
      <>
        <button
          onClick={() => setPopup(popup === 'FontMenu' ? '' : 'FontMenu')}
        >
          {editor.getAttributes('textStyle').fontFamily || 'inter'}
          <FaArrow />
        </button>
        { 
        popup === 'FontMenu' && 
        <Popup className='flex flex-col items-start [&>button]:type-menu_btn text-neutral-800'>
            <button
                onClick={() => editor.commands.unsetFontFamily()}
                className={ !editor.getAttributes('textStyle').fontFamily ? 'is-active' : ''}
            >
                inter
            </button>
            <button
                onClick={() => toggle('textStyle', { fontFamily: 'Comic Sans MS, Comic Sans' })}
                className={editor.isActive('textStyle', { fontFamily: 'Comic Sans MS, Comic Sans' }) ? 'is-active' : ''}
            >
                Comic Sans
            </button>
            <button
                onClick={() => toggle('textStyle', { fontFamily: 'serif' })}
                className={editor.isActive('textStyle', { fontFamily: 'serif' }) ? 'is-active' : ''}
            >
                serif
            </button>
            <button
                onClick={() => toggle('textStyle', { fontFamily: 'monospace' })}
                className={editor.isActive('textStyle', { fontFamily: 'monospace' }) ? 'is-active' : ''}
            >
                monospace
            </button>
            <button
                onClick={() => toggle('textStyle', { fontFamily: 'cursive' })}
                className={editor.isActive('textStyle', { fontFamily: 'cursive' }) ? 'is-active' : ''}
            >
                cursive
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
        </Popup> }
      </>
    )
}

export default FontMenu