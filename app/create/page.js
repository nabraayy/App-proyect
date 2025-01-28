import { createPost } from "../lib/actions"
import ImageSelector from "../ui/image-selector"

export default()=>{
<form action={createPost} className="flex flex-col gap-8">

<input name='content'/>
<ImageSelector/>
<input type='submit' value='publicar'/>

</form>
}
