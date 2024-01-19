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
                          class: 'bg-green-500'
                        }
                      }), 
                      Bold
                    ],
        content: `<h1>🔥 Next.js + Tiptap Block Editor Template 12</h1>`,
        editorProps: {
          attributes: {
            class: 'prose !prose-neutral prose-sm sm:prose lg:prose-lg xl:prose-2xl m-5 focus:outline-none outline-none dark:prose-invert min-h-full bg-red-500'
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
    <>
      <div>
        Editable
        <input type="checkbox" checked={isEditable} onChange={() => setIsEditable(!isEditable)} />
      </div>
      {editor && <BubbleMenu editor={editor} />}
      <EditorContent editor={editor} />
    </>
  )
}

export default Tiptap;