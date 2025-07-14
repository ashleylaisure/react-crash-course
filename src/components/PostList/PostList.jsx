import React, { useState } from 'react'
import Post from '../Post/Post'
import NewPost from '../NewPost/NewPost'
import Modal from '../Modal/Modal'

import styles from './PostList.module.css'

function PostList({modalVisable, modalHandler}) {
    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        setPosts((existingPosts) => [postData, ...existingPosts]);
    }

    return (
        <div>
            {modalVisable && (
                <Modal onClose={modalHandler}>
                    <NewPost 
                        onCancel={modalHandler}
                        onAddPost ={addPostHandler}
                    />
                </Modal>
            )}
            
            {posts.length > 0 ? (
                <ul className={styles.posts}>
                    {posts.map((post) => 
                        <Post key={post.body} author={post.author} body={post.body}/>
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
