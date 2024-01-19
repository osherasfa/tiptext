import { BubbleMenu } from '@tiptap/react'

function CustomBubbleMenu({editor}) {
  return (
    <BubbleMenu className='bubbleMenu' editor={editor} tippyOptions={{ duration: 100 }}>
      <span aria-hidden='true'>
        <button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          H1
        </button>
        <button
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          toggleBold
        </button>
      </span>
    </BubbleMenu>
  )
}

export default CustomBubbleMenu;