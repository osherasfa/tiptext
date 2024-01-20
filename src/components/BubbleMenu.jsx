import { BubbleMenu } from '@tiptap/react'
import { FaH1, FaBold } from '../assets/icons/menu-icons';

function CustomBubbleMenu({ editor }) {
  const isActive = (action, options = {}) => editor.isActive(action, action === 'heading' && { level: 'level' in options ? options.level : 1 }) ? 'is-active' : ''
  
  const toggle = (action, options = {}) => {
    const pre = editor.chain().focus()
    switch (action) {
      default:
        throw new Error(`Unsupported action: ${action}`)
      case 'heading':
        pre.toggleHeading({ level: 'level' in options ? options.level : 1 })
        break;
      case 'bold':
        pre.toggleBold()
        break;
    }
    pre.run()
  }

  return (
    <BubbleMenu className='bubbleMenu' editor={editor} tippyOptions={{ duration: 100, moveTransition: 'transform 0.2s ease-out'}}>
      <span aria-hidden='true'>
        <button
          onClick={() => toggle('heading')}
          className={isActive('heading')}
        >
          <FaH1/>
        </button>
      </span>
        <button
          onClick={() => toggle('bold')}
          className={isActive('bold')}
        >
          <FaBold/>
        </button>
    </BubbleMenu>
  )
}

export default CustomBubbleMenu;