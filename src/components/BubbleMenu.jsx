import React from 'react';
import { BubbleMenu } from '@tiptap/react'
import { FaH1, FaBold, FaLink } from '../assets/icons/menu-icons';
import LinkMenu from './menus/LinkMenu';

function CustomBubbleMenu({ editor }) {
  const [ popupLink, setPopupLink ] = React.useState(false)

  const isActive = (action, options = {}) => editor.isActive(action, action === 'heading' && { level: options.level }) ? 'is-active' : ''
  
  const toggle = (action, options = {}) => {
    const pre = editor.chain().focus()
    switch (action) {
      default:
        throw new Error(`Unsupported action: ${action}`)
      case 'heading':
        pre.toggleHeading({ level: options.level })
        break;
      case 'bold':
        pre.toggleBold()
        break;
      case 'link':
        pre.toggleLink({ href: options.href, target: options.target})
    }
    pre.run()
  }

  React.useEffect(() => {
    editor.on('focus', () => {
      setPopupLink(false)
    })
  }, [editor])

  return (
    <BubbleMenu className='bubble-menu' editor={editor} tippyOptions={{ duration: 100, moveTransition: 'transform 0.2s ease-out'}}>
      <span aria-hidden='true'>
        <button
          onClick={() => toggle('heading', { level: 1 })}
          className={isActive('heading')}
        >
          <FaH1/>
        </button>
      </span>
      <span aria-hidden='true'>
        <button
          onClick={() => toggle('bold')}
          className={isActive('bold')}
        >
          <FaBold/>
        </button>
      </span>
      <span aria-hidden='true'>
        <button
          onClick={() => isActive('link') ? editor.chain().focus().unsetLink().run() : setPopupLink(!popupLink)}
          className={isActive('link')}
        >
          <FaLink/>
        </button>
        {popupLink && <LinkMenu toggleLink={link => toggle('link', link)} togglePopup={state => setPopupLink(state)} />}
      </span>
    </BubbleMenu>
  )
}

export default CustomBubbleMenu;