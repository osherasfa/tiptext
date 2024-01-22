import React, { useEffect } from 'react'
import BubbleMenu from './BubbleMenu'

import { EditorContent, useEditor, } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import Paragraph from '@tiptap/extension-paragraph'
import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Strike from '@tiptap/extension-strike'
import Code from '@tiptap/extension-code'
import Highlight from '@tiptap/extension-highlight'

const Tiptap = () => {
    const editor = useEditor({
        extensions: [
                      Document,
                      Text, 
                      Paragraph, 
                      Heading.configure({ 
                        levels: [1, 2, 3],
                      }), 
                      Bold,
                      Italic,
                      Underline,
                      Strike,
                      Code,
                      Highlight,
                      Link.configure({
                        openOnClick: false,
                        autolink: true,
                      })
                    ],
        content: `<h1>🔥 Next.js + Tiptap Block Editor Template 12</h1>
        <p>Welcome to our React Block Editor Template built on top of <a target="_blank" rel="noopener noreferrer nofollow" href="https://tiptap.dev/">Tiptap</a>, <a target="_blank" rel="noopener noreferrer nofollow" href="https://nextjs.org/">Next.js</a> and <a target="_blank" rel="noopener noreferrer nofollow" href="https://tailwindcss.com/">Tailwind</a>. This project can be a good starting point for your own implementation of a block editor.</p>`,
      })

  const [isEditable, setIsEditable] = React.useState(true)

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])

  return (
    <div className='relative flex flex-col flex-1 h-full overflow-hidden'>
      <div>
        Editable
        <input type="checkbox" checked={isEditable} onChange={() => setIsEditable(!isEditable)} />
      </div>
      {editor && <BubbleMenu editor={editor} />}
      <EditorContent className='flex-1 overflow-y-auto mt-[25px]' editor={editor} />
    </div>
  )
}

export default Tiptap;