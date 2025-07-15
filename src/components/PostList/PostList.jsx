
import Post from '../Post/Post'
import { useLoaderData } from 'react-router-dom'

import styles from './PostList.module.css'

function PostList() {
    const posts = useLoaderData();

    // useEffect(() => {
    //     const fetchPosts = async () => {
    //         try{
    //             const fetchedPosts = await postService.index()
    //             if (fetchedPosts.err) {
    //                 throw new Error(fetchPosts.err)
    //             }
    //             setPosts(fetchedPosts)
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     }
    //     fetchPosts()
    // }, []);

    // const addPostHandler = async (formData) => {
    //     try {
    //         const newPost = await postService.create(formData)
    //         if (newPost.err) {
    //             throw new Error(newPost.err)
    //         }

    //         // console.log(newPost)
    //         // setPosts([newPost, ...posts])
    //         setPosts((existingPosts) => [newPost, ...existingPosts])
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    return (
        <div>

            {posts.length > 0 ? (
                <ul className={styles.posts}>
                    {posts.map((post) => 
                        <Post key={post._id} id={post._id} author={post.name} body={post.text}/>
                    )}
                </ul>
            ) : (
                <div style={{ textAlign: 'center', color: 'white'}}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
            
        </div>
        
    )
}

export default PostList
