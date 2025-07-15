import { useLoaderData, Link, useNavigate } from "react-router-dom";

import React from 'react'
import Modal from "../../components/Modal/Modal";
import styles from './PostDetails.module.css'
import * as postService from '../../services/postService.js'
import { BsTrash } from "react-icons/bs";


function PostDetails() {
    const post = useLoaderData()
    const navigate = useNavigate()

    const handleDeletePost = async (post) => {
        console.log('Post', post)
        await postService.deletePost(post._id)
        navigate('..')
        navigate(0)
    }

    return (
        <div>
            {!post ? (
                <Modal >
                    <main className={styles.details}>
                        <h1>Cuold not find Post</h1>
                        <p>
                            <Link to=".." className={styles.btn}> okay</Link>
                        </p>
                    </main>
                </Modal>
            ) : (
                <Modal>
                    <main className={styles.details}>
                        <p className={styles.author}>{post.name}</p>
                        <p className={styles.text}>{post.text}</p>
                        <button onClick={() => handleDeletePost(post)}><BsTrash size={25}/></button>
                    </main>
                </Modal>
            )}
        
        </div>
    )
}

export default PostDetails

export async function loader({params}) {
    const postDetails = await postService.show(params.postId)
    return postDetails
}
