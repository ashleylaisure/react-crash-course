import { useState } from "react"

import MainHeader from "./components/MainHeader/MainHeader"
import PostList from "./components/PostList/PostList"

function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  // function showModalHandler() {
  //   setModalIsVisible(true);
  // }

  // function hideModalHandler() {
  //   setModalIsVisible(false);
  // }

  function modalHandler() {
    setModalIsVisible(!modalIsVisible)
  }


  return (
    <>
      <MainHeader onCreatePost={modalHandler}/>
      <main>
        <PostList modalVisable={modalIsVisible} modalHandler={modalHandler}/>
      </main>
      
    </>
  )
}

export default App
