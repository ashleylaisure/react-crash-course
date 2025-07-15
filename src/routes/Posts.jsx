import { Outlet } from "react-router-dom"
import PostList from "../components/PostList/PostList"
import * as postService from '../services/postService.js'

function Posts() {

    return (
        <>
        <Outlet />
        <main>
            <PostList />
        </main>
        
        </>
    )
}

export default Posts;

export async function loader() {
    const fetchedPosts = await postService.index()
    return fetchedPosts
}