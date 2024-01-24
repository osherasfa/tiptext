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
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'

import { common, createLowlight } from 'lowlight'

const extensions = [
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
    CodeBlockLowlight.configure({ lowlight: createLowlight(common) }),
    Highlight.configure({
      multicolor: true
    }),
    Link.configure({
      openOnClick: false,
      autolink: true,
    })
  ]

export { extensions }