import React, { useEffect } from 'react'
import BubbleMenu from './menus/BubbleMenu'

import { EditorContent, useEditor } from '@tiptap/react'
import { extensions } from './utilities'

const Tiptap = () => {
    const editor = useEditor({
        extensions,
        content: `
        <h1 id="548224f6-fcca-4270-b086-cf42d824f997" data-toc-id="548224f6-fcca-4270-b086-cf42d824f997"><span data-name="fire" data-type="emoji" contenteditable="false">🔥</span> Next.js + Tiptap Block Editor Template 12</h1>
        <p>Welcome to our React Block Editor Template built on top of <a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://tiptap.dev/">Tiptap</a>, <a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://nextjs.org/">Next.js</a> <span style="color: #d9f99d"> and </span><a target="_blank" rel="noopener noreferrer nofollow" class="link" href="https://tailwindcss.com/">Tailwind</a>. This project can be a good starting point for your own implementation of a block editor.</p>
        <pre><code><span class="hljs-keyword">import</span> { useEditor, <span class="hljs-title class_">EditorContent</span> } <span class="hljs-keyword">from</span> <span class="hljs-string">'@tiptap/react'</span>
      
      <span class="hljs-keyword">function</span> <span class="hljs-title function_">App</span>() {
       <span class="hljs-keyword">const</span> editor = <span class="hljs-title function_">useEditor</span>()
      
       <span class="hljs-keyword">return</span> <span class="xml hljs-tag">&lt;</span><span class="xml hljs-tag hljs-name">EditorContent</span><span class="xml hljs-tag"> </span><span class="xml hljs-tag hljs-attr">editor</span><span class="xml hljs-tag">=</span><span class="xml hljs-tag hljs-string">{editor}</span><span class="xml hljs-tag"> /&gt;</span>
      }</code></pre>
        <p data-placeholder="" class="is-empty"><br class="ProseMirror-trailingBreak"></p>
        `,
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