import { useState } from 'react'
import styles from './NewPost.module.css'

function NewPost({onCancel, onAddPost}) {

    const [textBody, setTextBody] = useState('')
    const [author, setAuthor] = useState('')

    const handleBodyChange = (event) => {
        setTextBody(event.target.value)
        // console.log(event.target.value)
    }
    const handleAuthorChange = (event) => {
        setAuthor(event.target.value)
    }

    function submitHandler(event){
        event.preventDefault();
        const postData = {
            author : author,
            body : textBody,
        };
        console.log(postData)
        onAddPost(postData)
        onCancel();
    }

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <p>
                <label htmlFor="name">Your Name</label>
                <input name="" id="name" type="text" required onChange={handleAuthorChange}></input>
            </p>
            <p>
                <label htmlFor="body">Text</label>
                <textarea name="" id="body" required rows={3} onChange={handleBodyChange}></textarea>
            </p>
            <p className={styles.actions}>
                <button type="button" onClick={onCancel}>Cancel</button>
                <button type="submit">Submit</button>
            </p>
        </form>
    )
}

export default NewPost
