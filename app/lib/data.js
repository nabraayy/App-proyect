import { sql } from "@vercel/postgres";
 
export async function getPost(){
    return (await sql `SELECT * FROM POST`).rows;
}

export async function getPosts(post_id) {
   return(await sql`SELECT * FROM sa_posts WHERE post_id=${post_id}`).rows;
}

export async function getLikes(user_id) {
   return(await sql`SELECT post_id FROM sa_likes WHERE user_id=${user_id}`).rows;
}

export async function getLike(user_id,post_id) {
   return (await sql`SELECT post_id FROM sa_likes WHERE user_id =${user_id} AND post_id=${post_id}`).rows;
}
