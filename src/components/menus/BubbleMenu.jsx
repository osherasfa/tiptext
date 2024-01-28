import React from 'react';
import { BubbleMenu } from '@tiptap/react'
import { FaH1, FaBold, FaItalic, FaUnderline, FaStrikeThrough, FaCode, FaHighlight, FaLink, FaCodeBlock, FaUl, FaColor } from '../../assets/icons/menu-icons';
import LinkMenu from './LinkMenu';

function CustomBubbleMenu({ editor }) {
  const [ popupLink, setPopupLink ] = React.useState(false)
  const editorRef = React.useRef(editor)
  
  const toggle = (name, { level = 1, color, href = '', target = '_blank', fontFamily } = {}) => {
    const types = {
      'heading': pre => pre.toggleHeading({ level }),
      'bold': pre => pre.toggleBold(),
      'italic': pre => pre.toggleItalic(),
      'underline': pre => pre.toggleUnderline(),
      'strike': pre => pre.toggleStrike(),
      'code': pre => pre.toggleCode(),
      'highlight': pre => pre.toggleHighlight({ color }),
      'link': pre =>  pre.toggleLink({ href, target }),
      'codeBlock': pre => pre.toggleCodeBlock(),
      'listItem': pre => pre.toggleBulletList(),
      'textStyle': pre => {
        if(color)
          return editor.isActive('textStyle', { color }) ? pre.unsetColor() : pre.setColor(color)
        else if(fontFamily)
          return editor.isActive('textStyle', { fontFamily }) ? pre.unsetFontFamily() : pre.setFontFamily(fontFamily)
        else
          console.error(`Invalid property type: ${name}`)
      }
    }

    types[name] ? types[name](editor.chain().focus()).run() : console.error(`Invalid toggle type: ${name}`)
  }

  React.useEffect(() => {
    const editorEvents = editorRef.current
    editorEvents.on('focus', () => setPopupLink(false))

    return () => editorEvents.off('focus', () => setPopupLink(false))
  }, [])

  return (
    <BubbleMenu className='bubble-menu' editor={editor} tippyOptions={{ duration: 100, moveTransition: 'transform 0.2s ease-out'}}>
      <span aria-hidden='true'>
        <button
          onClick={() => toggle('heading', { level: 1 })}
          className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
        >
          <FaH1/>
        </button>
      </span>
      <span aria-hidden='true'>
        <button
          onClick={() => toggle('listItem')}
          className={editor.isActive('listItem') ? 'is-active' : ''}
        >
          <FaUl/>
        </button>
      </span>
      <span aria-hidden='true'>
        <button
          onClick={() => toggle('textStyle', { fontFamily: 'monospace' })}
          className={editor.isActive('textStyle', { fontFamily: 'monospace' }) ? 'is-active' : ''}
        >
          monospace
        </button>
      </span>
      <span aria-hidden='true'>
        <button
          onClick={() => toggle('bold')}
          className={editor.isActive('bold') ? 'is-active' : ''}
        >
          <FaBold/>
        </button>
      </span>
      <span aria-hidden='true'>
        <button
          onClick={() => toggle('italic')}
          className={editor.isActive('italic') ? 'is-active' : ''}
        >
          <FaItalic/>
        </button>
      </span>
      <span aria-hidden='true'>
        <button
          onClick={() => toggle('underline')}
          className={editor.isActive('underline') ? 'is-active' : ''}
        >
          <FaUnderline/>
        </button>
      </span>
      <span aria-hidden='true'>
        <button
          onClick={() => toggle('strike')}
          className={editor.isActive('strike') ? 'is-active' : ''}
        >
          <FaStrikeThrough/>
        </button>
      </span>
      <span aria-hidden='true'>
        <button
          onClick={() => toggle('code')}
          className={editor.isActive('code') ? 'is-active' : ''}
        >
          <FaCode/>
        </button>
      </span>
      <span aria-hidden='true'>
        <button
          onClick={() => toggle('codeBlock')}
          className={editor.isActive('codeBlock') ? 'is-active' : ''}
        >
          <FaCodeBlock/>
        </button>
      </span>
      <span aria-hidden='true'>
        <button
          onClick={() => toggle('highlight', { color: '#ffe066' })}
          className={editor.isActive('highlight', { color: '#ffe066' }) ? 'is-active' : ''}
        >
          <FaHighlight/>
        </button>
      </span>
      <span aria-hidden='true'>
        <button
          onClick={() => editor.isActive('link') ? editor.chain().focus().unsetLink().run() : setPopupLink(!popupLink)}
          className={editor.isActive('link') ? 'is-active' : ''}
        >
          <FaLink/>
        </button>
        {popupLink && <LinkMenu toggleLink={link => toggle('link', link)} />}
      </span>
      <span aria-hidden='true'>
        <button
          onClick={() => toggle('textStyle', { color: 'red' })}
          className={editor.isActive('textStyle', { color: 'red' }) ? 'is-active' : ''}
        >
          <FaColor/>
        </button>
      </span>
    </BubbleMenu>
  )
}

export default CustomBubbleMenu;