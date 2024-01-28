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
import ListItem from '@tiptap/extension-list-item'
import BulletList from '@tiptap/extension-bullet-list'
import TextStyle from '@tiptap/extension-text-style'
import { Color } from '@tiptap/extension-color'
import FontFamily from '@tiptap/extension-font-family'
import { common, createLowlight } from 'lowlight'
import { Extension } from '@tiptap/react';
import Image from '@tiptap/extension-image'
import History from '@tiptap/extension-history'

 export const FontSize = Extension.create({
    name: 'fontSize',
    addOptions() {
        return {
            types: ['textStyle'],
        };
    },
    addGlobalAttributes() {
        return [
            {
                types: this.options.types,
                attributes: {
                    fontSize: {
                        default: null,
                        parseHTML: element => element.style.fontSize.replace(/['"]+/g, ''),
                        renderHTML: attributes => {
                            if (!attributes.fontSize) {
                                return {};
                            }
                            return {
                                style: `font-size: ${attributes.fontSize}`,
                            };
                        },
                    },
                },
            },
        ];
    },
    addCommands() {
        return {
            setFontSize: fontSize => ({ chain }) => {
                return chain()
                    .setMark('textStyle', { fontSize: fontSize + "px" })
                    .run();
            },
            unsetFontSize: () => ({ chain }) => {
                return chain()
                    .setMark('textStyle', { fontSize: null })
                    .removeEmptyTextStyle()
                    .run();
            },
        };
    },
});


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
    ListItem,
    BulletList,
    CodeBlockLowlight.configure({ lowlight: createLowlight(common) }),
    Highlight.configure({
      multicolor: true
    }),
    Link.configure({
      openOnClick: false,
      autolink: true,
    }),
    TextStyle,
    Color,
    FontFamily,
    FontSize,
    Image,
    History,
  ]

export { extensions }