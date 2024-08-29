import '@mdxeditor/editor/style.css'
import './CreatePost.css'
import { MDXEditor, UndoRedo, BoldItalicUnderlineToggles, toolbarPlugin, headingsPlugin, listsPlugin, quotePlugin, thematicBreakPlugin, Button } from '@mdxeditor/editor'
import {useState} from 'react'

const CreatePost: React.FC = () => {
    const [text, setText] = useState("Hello World");


    return (
        <MDXEditor
          className='editor'
          markdown={text}
          onChange={setText}
          plugins={[
            headingsPlugin(),
            quotePlugin(),
            listsPlugin(),
            thematicBreakPlugin(),
            toolbarPlugin({
              toolbarContents: () => (
                <>
                  {' '}
                  <UndoRedo />
                  <BoldItalicUnderlineToggles />
                  <Button />
                </>
              )
            })
          ]}
        />

    );
};

export default CreatePost;