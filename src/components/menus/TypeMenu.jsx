import React from "react"
import Popup from "../Popup"
import { FaArrow, FaH1, FaH2, FaH3, FaOl, FaParagraph, FaTasklist, FaUl } from "../../assets/icons/menu-icons"

function TypeMenu({ editor, popup, setPopup, toggle }) {
  const isList = () => editor.isActive('bulletList') || editor.isActive('orderedList') || editor.isActive('taskList');
  
    return (
      <>
        <button
          onClick={() => setPopup(popup === 'TypeMenu' ? '' : 'TypeMenu')}
        >
          {
            (editor.isActive('bulletList') && <FaUl/>)
            || (editor.isActive('orderedList') && <FaOl/>)
            || (editor.isActive('taskList') && <FaTasklist/>)
            || (editor.isActive('heading', { level: 1 }) && <FaH1/>)
            || (editor.isActive('heading', { level: 2 }) && <FaH2/>)
            || (editor.isActive('heading', { level: 3 }) && <FaH3/>)
            || (editor.isActive('bulletList') && <FaUl/>)
            || (editor.isActive('paragraph') && <FaParagraph/>)
          }
          <FaArrow/>
        </button>
        { 
        popup === 'TypeMenu' && 
        <Popup className='flex flex-col items-start [&>button]:type-menu_btn text-neutral-800'>
          <div className="text-[.65rem] font-bold mb-1 uppercase text-neutral-500 px-1.5">Hierarchy</div>
          <button
            onClick={() => toggle('paragraph')}
            className={editor.isActive('paragraph') && !isList() ? 'is-active' : ''}
          >
            <FaParagraph/>
            Paragraph
          </button>
          <button
            onClick={() => toggle('heading', { level: 1 })}
            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
          >
            <FaH1/>
            Heading 1
          </button>
          <button
            onClick={() => toggle('heading', { level: 2 })}
            className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
          >
            <FaH2/>
            Heading 2
          </button>
          <button
            onClick={() => toggle('heading', { level: 3 })}
            className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
          >
            <FaH3/>
            Heading 3
          </button>
          <div className="text-[.65rem] font-bold mb-1 uppercase text-neutral-500 px-1.5">Lists</div>
          <button
          onClick={() => toggle('bulletList')}
          className={editor.isActive('bulletList') ? 'is-active' : ''}
        >
          <FaUl/>
          Bullet List
        </button>
        <button
          onClick={() => toggle('orderedList')}
          className={editor.isActive('orderedList') ? 'is-active' : ''}
        >
          <FaOl/>
          Numbered List
        </button>
        <button
          onClick={() => toggle('taskList')}
          className={editor.isActive('taskList') ? 'is-active' : ''}
        >
          <FaTasklist/>
          Todo List
        </button>
        </Popup> }
      </>
    )
}

export default TypeMenu