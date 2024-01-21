import { BubbleMenu } from '@tiptap/react'
import { FaH1, FaBold, FaLink } from '../assets/icons/menu-icons';
import LinkMenu from './menus/LinkMenu';

function CustomBubbleMenu({ editor }) {
  const isActive = (action, options = { on: 'is-active', off: '' }) => editor.isActive(action, action === 'heading' && { level: 'level' in options ? options.level : 1 }) ? options.on : options.off
  
  const toggle = (action, options = { level: 1, href: 'https://www.google.com', target: '_blank' }) => {
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

  return (
    <BubbleMenu className='bubble-menu' editor={editor} tippyOptions={{ duration: 100, moveTransition: 'transform 0.2s ease-out'}}>
      <span aria-hidden='true'>
        <button
          onClick={() => toggle('heading')}
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
          onClick={() => toggle('link')}
          className={isActive('link')}
        >
          <FaLink/>
        </button>
        {editor.isActive('link') && <LinkMenu/>}
      </span>
    </BubbleMenu>
  )
}

export default CustomBubbleMenu;