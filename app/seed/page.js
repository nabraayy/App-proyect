import { sql } from "@vercel/postgres"

export default async () => {

  await sql`DROP TABLE IF EXIST sa_users, sa_posts, sa_likes`

  
  await sql`CREATE TABLE IF NOT EXISTS sa_users(
    user_id UUID DEFAULT uui_generate_v4() PRIMARY KEY, 
    nickname text,
    name text,
    picture text, 
    email text UNIQUE)`;

  await sql`CREATE TABLE IF NOT EXIST sa_posts(
    post_id UUID DEFAULT uui_generate_v4() PRIMARY KEY, 
    content TEXT, 
    url TEXT)`;

  await sql`CREATE TABLE sa_likes(
    user_id UUID REFERENCES sa_users(user_id),
    post_id UUID REFERENCES sa_posts(post_id) ,
    PRIMARY KEY(user_id, post_id) 
    )`

    return <p>Database seed the guay</p>
}