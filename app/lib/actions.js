'use server'
export async function createPost(formData) {
    //insert into post
    const{url}= await put(
        'media', 
        formData.get("media"),
        {access:'public'}
    )

    const content = formData.get('content');
    await sql('INSERT INTO POST(content,url) VALUES (${formData.get(content)}, ${url})');

    
}