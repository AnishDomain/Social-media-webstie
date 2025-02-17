import {Link} from 'react-router-dom'


const Post = ({post}) => {
  return (
    <article className="post">
     <Link to={`post/${post.id}`}>
      <h2>{post.title}</h2>
      <p className='postDate'>{post.datetime}</p>
      </Link>
      <p className='postBody'>{
         post?.body /*using nested ternary operator*/
         ? (post.body.length <= 25 
           ? post.body 
           : `${post.body.slice(0, 25)}...`) /*inner ternary operator*/
         : 'No content available'/*outer ternary operator*/

        }</p>
    </article>
  ) 
}

export default Post


