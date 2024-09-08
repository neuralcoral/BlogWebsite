import { useEffect, useState } from "react";
import { getDraftedPosts } from "../../api/posts";
import Post from "../../models/post";
import EditPost from './EditPost';

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
                        <EditPost post={post}/>
                    );
                })
            }
        </>
    );
};

export default EditPosts;