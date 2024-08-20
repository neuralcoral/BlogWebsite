import '@mdxeditor/editor/style.css'
import { MDXEditor, UndoRedo, BoldItalicUnderlineToggles, toolbarPlugin, headingsPlugin, listsPlugin, quotePlugin, thematicBreakPlugin, Button } from '@mdxeditor/editor'

const CreatePost: React.FC = () => {

    return (
        <MDXEditor
          className='editor'
          markdown="Hello world"
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