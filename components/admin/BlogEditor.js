'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
// import Image from '@tiptap/extension-image';
import { CustomImage } from '@/lib/tiptap/CustomImage';
import Placeholder from '@tiptap/extension-placeholder';
import { Table } from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';

import {
    Bold, Italic, Underline as UnderlineIcon, Strikethrough,
    Code, Heading1, Heading2, Heading3,
    List, ListOrdered, Code2, Quote,
    Minus, CornerDownLeft, Undo2, Redo2,
    ImageIcon, Trash2, Table2, Pilcrow, AlignLeft, AlignCenter, AlignRight, AlignJustify
} from 'lucide-react';

export default function BlogEditor({ content, onContentChange }) {
    const fileInputRef = useRef(null);
    const [rows, setRows] = useState(3);
    const [cols, setCols] = useState(3);
    const [errors, setErrors] = useState({ rows: false, cols: false });



    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            CustomImage.configure({ allowBase64: true }),
            Placeholder.configure({
                placeholder: 'Write your blog content here...',
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph', 'blockquote'],
            }),
            Table.configure({ resizable: true }),
            TableRow,
            TableHeader,
            TableCell,
        ],
        content: content || '',
        editorProps: {
            attributes: {
                class:
                    'tiptap prose max-w-none p-4 border min-h-[300px] focus:outline-none rounded bg-white',
            },
        },
        onUpdate({ editor }) {
            onContentChange?.(editor.getHTML());
        },
        autofocus: true,
        injectCSS: false,
        immediatelyRender: false,
    });

    const handleInsertTable = () => {
        const isRowInvalid = !rows || rows < 1;
        const isColInvalid = !cols || cols < 1;

        setErrors({ rows: isRowInvalid, cols: isColInvalid });

        if (isRowInvalid || isColInvalid) {
            return; // Don't insert table if invalid
        }

        editor.chain().focus().insertTable({
            rows: parseInt(rows),
            cols: parseInt(cols),
            withHeaderRow: true,
        }).run();

        // Optionally reset input after insertion
        setRows(3);
        setCols(3);
        setErrors({ rows: false, cols: false });
    };



    const insertImageFromFile = async (file) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result;
            editor.chain().focus().setImage({ src: base64 }).run();
        };
        reader.readAsDataURL(file);
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const formData = new FormData();
        formData.append('image', file);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/upload`, {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();

            if (res.ok && data.url) {
                editor.chain().focus().setImage({ src: data.url }).run();
            } else {
                alert('Image upload failed');
            }
        } catch (err) {
            console.error('Upload failed:', err);
            alert('Upload failed');
        }
    };


    const deleteSelectedImage = () => {
        const { state, commands } = editor;
        const { from, to } = state.selection;
        const node = state.doc.nodeAt(from);
        if (node?.type?.name === 'image') {
            commands.deleteRange({ from, to });
        }
    };

    if (!editor) return null;

    return (
        <div className="space-y-4">
            {/* Toolbar */}
            <div className="flex flex-wrap gap-2 border rounded px-3 py-2 bg-gray-50">
                <ToolbarButton onClick={() => editor.chain().focus().toggleBold().run()} icon={<Bold size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().toggleItalic().run()} icon={<Italic size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().toggleUnderline().run()} icon={<UnderlineIcon size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().toggleStrike().run()} icon={<Strikethrough size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().toggleCode().run()} icon={<Code size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().unsetAllMarks().run()} icon={<Trash2 size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().clearNodes().run()} icon={<CornerDownLeft size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().setParagraph().run()} icon={<Pilcrow size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().toggleBulletList().run()} icon={<List size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().toggleOrderedList().run()} icon={<ListOrdered size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} icon={<Heading1 size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} icon={<Heading2 size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} icon={<Heading3 size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} icon={<span className="text-sm font-bold">H4</span>} />
                <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()} icon={<span className="text-sm font-bold">H5</span>} />
                <ToolbarButton onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()} icon={<span className="text-sm font-bold">H6</span>} />
                <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('left').run()} icon={<AlignLeft size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('center').run()} icon={<AlignCenter size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('right').run()} icon={<AlignRight size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().setTextAlign('justify').run()} icon={<AlignJustify size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().toggleCodeBlock().run()} icon={<Code2 size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().toggleBlockquote().run()} icon={<Quote size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().setHorizontalRule().run()} icon={<Minus size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().setHardBreak().run()} icon={<CornerDownLeft size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().undo().run()} icon={<Undo2 size={18} />} />
                <ToolbarButton onClick={() => editor.chain().focus().redo().run()} icon={<Redo2 size={18} />} />
                <ToolbarButton onClick={() => fileInputRef.current?.click()} icon={<ImageIcon size={18} />} />
                <ToolbarButton onClick={deleteSelectedImage} icon={<Trash2 size={18} />} />
                <input type="file" ref={fileInputRef} accept="image/*" onChange={handleImageUpload} className="hidden" />
            </div>

            {/* Table Config Section */}
            <div className="flex items-center gap-3">
                <label className="text-sm">Rows:</label>
                <input
                    type="number"
                    min="1"
                    value={rows}
                    onChange={(e) => setRows(parseInt(e.target.value))}
                    onFocus={() => setErrors((prev) => ({ ...prev, rows: false }))}
                    className={`w-16 px-2 py-1 border rounded text-sm ${errors.rows ? 'border-red-500' : 'border-gray-300'
                        }`}
                />


                <label className="text-sm">Cols:</label>
                <input
                    type="number"
                    min="1"
                    value={cols}
                    onChange={(e) => setCols(parseInt(e.target.value))}
                    onFocus={() => setErrors((prev) => ({ ...prev, cols: false }))}
                    className={`w-16 px-2 py-1 border rounded text-sm ${errors.cols ? 'border-red-500' : 'border-gray-300'
                        }`}
                />


                <button
                    onClick={handleInsertTable}
                    className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                >
                    Insert Table
                </button>
            </div>

            {/* Editor Content */}
            <EditorContent editor={editor} className="prose" />
        </div>
    );

}

function ToolbarButton({ onClick, icon }) {
    return (
        <button
            onClick={onClick}
            className="p-1.5 border rounded hover:bg-gray-200 cursor-pointer transition-all"
            type="button"
        >
            {icon}
        </button>
    );
}
