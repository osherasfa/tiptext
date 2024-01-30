import React from 'react';
import { BubbleMenu } from '@tiptap/react'
import { FaBold, FaItalic, FaUnderline, FaStrikeThrough, FaCode, FaHighlight, FaLink, FaCodeBlock, FaColor } from '../../assets/icons/menu-icons';
import LinkMenu from './LinkMenu';
import TypeMenu from './TypeMenu';

function CustomBubbleMenu({ editor }) {
  const [ popup, setPopup ] = React.useState('')
  const editorRef = React.useRef(editor)
  
  const toggle = (name, { level = 1, color, href = '', target = '_blank', fontFamily } = {}) => {
    const types = {
      'paragraph': pre => pre.setParagraph(),
      'heading': pre => pre.toggleHeading({ level }),
      'bold': pre => pre.toggleBold(),
      'italic': pre => pre.toggleItalic(),
      'underline': pre => pre.toggleUnderline(),
      'strike': pre => pre.toggleStrike(),
      'code': pre => pre.toggleCode(),
      'highlight': pre => pre.toggleHighlight({ color }),
      'link': pre =>  pre.toggleLink({ href, target }),
      'codeBlock': pre => pre.toggleCodeBlock(),
      'bulletList': pre => pre.toggleBulletList(),
      'taskList': pre => pre.toggleTaskList(),
      'orderedList': pre => pre.toggleOrderedList(),
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
    editorEvents.on('focus', () => setPopup(''))

    return () => editorEvents.off('focus', () => setPopup(''))
  }, [])

  return (
    <BubbleMenu className='bubble-menu' editor={editor} tippyOptions={{ duration: 100, moveTransition: 'transform 0.2s ease-out'}}>
      <span aria-hidden='true'>
        <TypeMenu editor={editor} popup={popup} setPopup={setPopup} toggle={toggle}/>
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
          onClick={() => editor.isActive('link') ? editor.chain().focus().unsetLink().run() : setPopup(popup === 'LinkMenu' ? '' : 'LinkMenu')}
          className={editor.isActive('link') ? 'is-active' : ''}
        >
          <FaLink/>
        </button>
        {popup === 'LinkMenu' && <LinkMenu toggleLink={link => toggle('link', link)} />}
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