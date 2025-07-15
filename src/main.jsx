import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'

import NewPost, {action as newPostAction } from './routes/NewPost/NewPost.jsx'
import RootLayout from './routes/RootLayout.jsx'
import Posts, { loader as postsLoader} from './routes/Posts.jsx'
import PostDetails, {loader as detailsLoader} from './routes/PostDetails/PostDetails.jsx'

const router = createBrowserRouter([
  {path: '/', 
    element: <RootLayout />, 
    children: [

      {path: '/', 
        element: <Posts />,
        loader: postsLoader,
        children: [
          {path: '/new', element: <NewPost />, action: newPostAction},
          {path: '/:postId', element: <PostDetails />, loader: detailsLoader}
        ]
      },
    ],
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
