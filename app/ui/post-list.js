import {auth0} from "../lib/auth0";
import Post from './post'
import {getPost, getLike, getLikes} from '../lib/data'

export default async()=>{
    const posts=await getPost();
    const likes=await getLikes(user_id);
    const{user_id}=(await auth0.getSession()).user.user_id;
    return(
        <div className='flex flex-col grow items-center gap-16 mt-28'>
            {
            posts.map(post => (<Post 
                key={post.post.id} 
                user_id={user_id}
                isLikedInitial={likes.find(like => like.post_id === post.post_id)}
                post_id={post.post_id} 
                content={post.content} 
                url={post.url}
                />))
            }
        </div>
    )
}