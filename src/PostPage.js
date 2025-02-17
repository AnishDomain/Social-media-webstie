import { useParams,Link } from "react-router-dom"

const PostPage = ({posts,handleDelete}) => {
  const {id} = useParams();
  const post = posts.find(post => post.id.toString
  () === id );
  return (
     <main className="postpage">
      <article className="post">
        {post &&
          <>
            <h2>{post.title}</h2>
            <p>{post.datetime}</p>
            <p>{post.body}</p>
            <div className="buttons">
              <Link to={`/edit/${post.id}`}><button>Edit</button></Link>
              <button onClick={() => 
                handleDelete(post.id)}>
                Delete Post
              </button>
            </div>
          </>

        }
        {!post &&
           <>
             <h2>Post Not Found</h2>
             <p>
              <Link to='/'>check out the home page</Link>
             </p>

           </>

        }
      </article>
      <div className="wrapper4">
        <div><span className="dot4"></span></div>
        <div><span className="dot4"></span></div>
        <div><span className="dot4"></span></div>
        <div><span className="dot4"></span></div>
        <div><span className="dot4"></span></div>
        <div><span className="dot4"></span></div>
        <div><span className="dot4"></span></div>
        <div><span className="dot4"></span></div>
        <div><span className="dot4"></span></div>
        <div><span className="dot4"></span></div>
        <div><span className="dot4"></span></div>
        <div><span className="dot4"></span></div>
        <div><span className="dot4"></span></div>
        <div><span className="dot4"></span></div>
        <div><span className="dot4"></span></div>
        <div><span className="dot4"></span></div> {/* Added more bubbles */}
        <div><span className="dot4"></span></div> {/* Add more if needed */}
        <div><span className='dot4'></span></div>
        <div><span className='dot4'></span></div>
      </div>

     </main>
  )
}

export default PostPage