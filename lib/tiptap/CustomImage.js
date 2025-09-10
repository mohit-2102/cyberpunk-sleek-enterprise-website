import { Image as DefaultImage } from '@tiptap/extension-image';

export const CustomImage = DefaultImage.extend({
  addNodeView() {
    return ({ node, getPos, editor }) => {
      const dom = document.createElement('div');
      dom.className = 'relative inline-block group';

      const img = document.createElement('img');
      img.src = node.attrs.src;
      img.alt = node.attrs.alt || '';
      img.className = 'rounded max-w-full my-4';

      const deleteBtn = document.createElement('button');
      deleteBtn.innerText = '🗑️';
      deleteBtn.setAttribute('title', 'Delete image');
      deleteBtn.className =
        'absolute top-1 right-1 bg-white p-1 px-2 text-sm rounded shadow hidden group-hover:block z-10 cursor-pointer';
      deleteBtn.onclick = () => {
        editor.chain().focus().deleteRange({ from: getPos(), to: getPos() + node.nodeSize }).run();
      };

      dom.appendChild(img);
      dom.appendChild(deleteBtn);

      return {
        dom,
      };
    };
  },
});
