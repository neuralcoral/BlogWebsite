import { useEffect, useState } from "react";
import Post from '../../models/post';
import { getPostedPosts } from "../../api/posts";

const BlogEntry = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    
    useEffect(() => {
        const abortController = new AbortController();
        const signal = abortController.signal;
        const fetchPosts = async() => {
            try {
                const postedPosts = await getPostedPosts({ signal });
                setPosts(postedPosts);
                console.log(postedPosts);
            } catch (error) {
                console.error('Failed to fetch posts: ', error);
            }
        };
        fetchPosts();
        return  () => {
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

export default BlogEntry;