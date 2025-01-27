import { createPost } from "../lib/actions"

export default()=>{
<form action={createPost}>

<input name='content'/>
<input type='file' name='media'/>
<input type='submit' value='publicar'/>

</form>
}
