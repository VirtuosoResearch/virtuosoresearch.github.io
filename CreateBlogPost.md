# Add a Blog Post
Follow this tutorial to create a blog post with markdown.

Please replace all the `{blog_name}` with your custimize blog post name for the whole tutorial.

## Create key files

- `Markdown file` : Under `src/blogs` create a `{blog_name}.md` file. Please follow [Write a Markdown post](/WriteMarkdown.md) for the LaTex written format.
- `tsx file` : Under `src/blogs` create a `{blog_post}.tsx` and add the following scripts.
- `image folder` : Under `public/images` create a floder `{blog_post}` to save all your images for this blog post.

```Typescript
// {blog_post}.tsx
import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Markdown from './{blog_name}.md'; //replace name here
import Header from '../Header';
import './Blog.css'

const {blog_name}Blog: React.FC = () => { //replace name here
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(Markdown)
            .then((response) => response.text())
            .then((data) => setMarkdown(data));
    }, []);
    
    const mdfile = <ReactMarkdown children={markdown} />
    return (
        <div>
            <Header />
            <div className="blog-content">
                <ReactMarkdown children={markdown} />
            </div>
        </div>
    );
};

export default {blog_name}Blog; //replace name here
```

## Create links

- `App.tsx` : Open this file under `src/` and add a route tag as following:

```Typescript
import {blog_name} from './blogs/{blog_name}'; // replace blog name

return (
    <BrowserRouter basename={process.env.PUBLIC_URL} >
      
      <Routes>
        <!-- Add the following line, replace blog name -->
        <Route path="/research/blog/{blog_name}" element={<{blog_name} />} />
        <!-- End Here -->
      </Routes>
    </BrowserRouter>
  );
```

- `Research.tsx` : Open this file under `src/` and add a Link tag as following:

```Typescript
return (
        <div>
        <Header />
            <div className="blog-container">
                <h1>Posts:</h1>
                <!-- Add the following block, replace blog name, tytle, Author and date -->
                <Link reloadDocument to="/research/blog/{blog_name}"> 
                    <h2>{blog_tytle}</h2>
                </Link>
                <p>{blog_author}, {date}</p>
                <!-- End Here -->
            </div>
        </div>
    );

```


