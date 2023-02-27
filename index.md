---
title: Bad code done quick
---

<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

# Bad code done quick

## How I made this page

Well... I asked chatgpt nicely.
Here is how it went.

```markdown
**Prompt**
Please write a simple webpage I can put in github.io to use as a blog.

**Answer**
Sure, here's a simple webpage you can use as a blog on Github.io:

1. Create a new repository on Github with the name <your-username>.github.io
1. Clone the repository to your local machine.
1. Create a new file in the root directory of the repository called index.html.
1. Paste the following code into the file:
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>My Blog</title>
  </head>
  <body>
    <header>
      <h1>Welcome to my Blog</h1>
    </header>
    <main>
      <article>
        <h2>My First Blog Post</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta, ipsum vel consequat efficitur, velit urna rutrum nisi, eget consectetur orci erat eu elit. Nulla sed feugiat elit, vel pellentesque tortor. Mauris ut quam nulla. Morbi varius, dolor ac malesuada bibendum, lacus ex tincidunt eros, vel malesuada velit velit ac lacus. In non nisi sapien.</p>
      </article>
    </main>
    <footer>
      <p>Copyright © 2023 My Name</p>
    </footer>
  </body>
</html>
```


```markdown
---
title: My Blog
---

<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

# My Blog

## My First Blog Post

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta, ipsum vel consequat efficitur, velit urna rutrum nisi, eget consectetur orci erat eu elit. Nulla sed feugiat elit, vel pellentesque tortor. Mauris ut quam nulla. Morbi varius, dolor ac malesuada bibendum, lacus ex tincidunt eros, vel malesuada velit velit ac lacus. In non nisi sapien.

---

© 2023 My Name

```

```css
header {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

h1 {
  margin: 0;
}

main {
  margin: 20px;
}

```

## My First Blog Post

Just testing github.  
The following plot is done in [Altair](https://altair-viz.github.io/), which outputs nice html content.

```python
import altair as alt
import numpy as np
import pandas as pd


x, y = np.meshgrid(range(-5, 5), range(-5, 5))
z = x**2 + y**3

source = pd.DataFrame({"x": x.ravel(), "y": y.ravel(), "z": z.ravel()})

alt.Chart(source).mark_rect().encode(
    x="x:O", y="y:O", color="z:Q", tooltip=["z"]
).interactive().save("tooltip1.html")

```

<iframe src="./figures/tooltip1.html" height="300px" width="100%"></iframe>

---

© 2023 Luis Guimarais
