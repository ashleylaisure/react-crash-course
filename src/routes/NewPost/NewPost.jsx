import { useState } from 'react'
import { Link, Form, redirect } from 'react-router-dom'
import styles from './NewPost.module.css'
import Modal from '../../components/Modal/Modal'
import * as postService from '../../services/postService.js'

function NewPost() {

    return (
        <Modal >
            <Form method="post" className={styles.form}>
                <p>
                    <label htmlFor="name">Your Name</label>
                    <input name="name" id="name" type="text" required ></input>
                </p>
                <p>
                    <label htmlFor="text">Text</label>
                    <textarea name="text" id="text"  required rows={3} ></textarea>
                </p>
                <p className={styles.actions}>
                    <Link to="/" type="button">Cancel</Link>
                    <button type="submit">Submit</button>
                </p>
            </Form>
        </Modal>
    )
}

export default NewPost;

export async function  action({request}) {
    const formData = await request.formData();
    const postData = Object.fromEntries(formData) // {name: "...", text: "..."}
    await postService.create(postData)
    return redirect('/')
}
