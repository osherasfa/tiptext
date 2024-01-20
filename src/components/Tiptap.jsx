import { EditorContent, useEditor, } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Text from '@tiptap/extension-text'
import Paragraph from '@tiptap/extension-paragraph'
import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'

import BubbleMenu from './BubbleMenu'
import React, { useEffect } from 'react'

const Tiptap = () => {
    const editor = useEditor({
        extensions: [
                      Document,
                      Text, 
                      Paragraph, 
                      Heading.configure({ 
                        levels: [1, 2, 3],
                        HTMLAttributes: {
                          
                        }
                      }), 
                      Bold
                    ],
        content: `<h1>🔥 Next.js + Tiptap Block Editor Template 12</h1>`,
        editorProps: {
          attributes: {
            class: 'prose !prose-neutral prose-sm sm:prose lg:prose-lg xl:prose-2xl focus:outline-none outline-none dark:prose-invert px-8 py-16 !max-w-full min-h-full'
          }
        }
      })

  const [isEditable, setIsEditable] = React.useState(true)

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
    }
  }, [isEditable, editor])

  return (
    <div className='relative flex flex-col flex-1 h-screen overflow-hidden'>
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