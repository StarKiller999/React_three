import React, { useMemo, useRef, useState } from "react";
import './Styles/App.css';
import PostList from "./Components/PostList";
import PostForm from "./Components/PostForm";
import MySelect from "./Components/UI/Select/MySelect.jsx";
import MyInput from "./Components/UI/Input/MyInput";
import PostFilter from "./Components/PostFilter";
import MyModal from "./Components/UI/MyModal/MyModal.jsx";
import MyButton from "./Components/UI/Button/MyButton";

function App() {
  const [posts, setPosts] = useState([  ])
  const [filter, setFilter] = useState({sort: '', query: ''});
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = useState(posts, filter.sort, filter.query)


  

  

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
console.log(response.data)
  }
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  
  return (
    <div className="App">
      <button onClick={fetchPosts}>GET POST</button>
      <MyButton style={{marginTop: '30px'}} onClick={()=> setModal(true)}>Создать пользователя</MyButton>
      <MyModal visible={modal} setVisible={setModal}><PostForm create={createPost} /></MyModal>
      
      <hr style={{ margin: '15px 0' }} />
      <div>
        <PostFilter 
        filter={filter}
        setFilter={setFilter}/>
      </div>
      
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Посты про JS' />
      
    </div>
  );
}

export default App;