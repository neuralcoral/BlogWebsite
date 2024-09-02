import { useEffect, useState } from "react";
import { getDraftedPosts } from "../../api/posts";
import Post from "../../models/post";

const EditPosts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const fetchPosts = async() => {
            try {
                const draftedPosts = await getDraftedPosts({ signal });
                setPosts(draftedPosts);
                console.log(draftedPosts);
            } catch (error) {
                console.error('Failed to fetch posts: ', error);
            }
        };
        fetchPosts();
        return () => {
            abortController.abort();
        }

    }, []);
    return (
        <>
            {
                posts.map((post) => {
                    return (
                        <div key={post.id} className="post-preview">
                            <h2>{post.title}</h2>
                            <p>{post.body.substring(0, 100)}...</p>
                        </div>
                    );
                })
            }
        </>
    );
};

export default EditPosts;