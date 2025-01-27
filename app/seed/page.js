import{sql} from 
export default()=>{
    await sql'CREATE TABLE POST(id UUID DEFAULT uuid_generate_v4() PRIMARY KEY, content TEXT,url TEXT)'
    return <p>Database seed</p>
}