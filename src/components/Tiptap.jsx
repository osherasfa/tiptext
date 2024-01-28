import React, { useEffect } from 'react'
import BubbleMenu from './menus/BubbleMenu'

import { EditorContent, useEditor } from '@tiptap/react'
import { extensions } from './utilities'

const Tiptap = () => {
  const [isEditable, setIsEditable] = React.useState(true)

  const editor = useEditor({ extensions, content: '<p>Loading...</p>' })

  useEffect(() => {
    if (editor) {
      editor.setEditable(isEditable)
      fetch('./content.html')
      .then(res => res.text())
      .then(data => editor.commands.setContent(data))
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