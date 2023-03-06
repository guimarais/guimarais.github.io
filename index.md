---
title: Bad code done quick
---

<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

# Bad code done quick

## Simple geopandas merge and plot with altair

```python
import altair as alt
import pandas as pd
import geopandas as gpd
import gpdvega
import os

# Where to get the shapefile file and download it if you don't have it
filename = "ne_110m_admin_0_countries.zip"
url = f"https://www.naturalearthdata.com/http//www.naturalearthdata.com/download/110m/cultural/{filename}"
if not os.path.exists(filename):
    os.system(f"wget {url}")
filgp = f"{filename}!ne_110m_admin_0_countries.shp"

# Reads into geopandas dataframe
gdf = gpd.read_file(filgp)

# Remove Antartica
gdfn = gdf[gdf["ADMIN"] != "Antarctica"].reset_index(drop=True).copy(deep=True)
gdfn.rename(columns={"ADMIN": "Entity"}, inplace=True)

# Gets another dataframe to enrich geopandas dataframe
dco2 = pd.read_csv(
    "https://raw.githubusercontent.com/owid/co2-data/master/owid-co2-data.csv"
)

year_max = dco2.year.max()
dco2ly = dco2[dco2["year"] == year_max][["country", "population", "co2"]].copy(
    deep=True
)
dco2ly.rename(columns={"country": "Entity"}, inplace=True)

# Clean up to fix merge
country_dict = {
    "United States": "United States of America",
    "Tanzania": "United Republic of Tanzania",
    "Democratic Republic of Congo": "Democratic Republic of the Congo",
    "Serbia": "Republic of Serbia",
}

dco2ly.replace({"Entity": country_dict}, inplace=True)

country_dict2 = {"Ivory Coast": "Cote d'Ivoire"}
gdfn.replace({"Entity": country_dict2}, inplace=True)

# Merge into new pandas dataframe
drich = gdfn.merge(dco2ly, on=["Entity"], how="left")

# Plot
chart = (
    alt.Chart(drich, title="Emissions and population by country")
    .mark_geoshape()
    .project()
    .encode(
        color=alt.Color("co2", scale=alt.Scale(type="log")),
        tooltip=["Entity", "population", "co2"],
    )
    .properties(width=1000, height=600)
)

chart.save("world.html")

```
<iframe src="./world/world.html" height="600px" width="1000px"></iframe>


## How I made this page

Well... I asked chatgpt nicely.  
Here is how it went.

```markdown
**Prompt**
Please write a simple webpage I can put in github.io to use as a blog.

**Answer**
Sure, here's a simple webpage you can use as a blog on Github.io:

1. Create a new repository on Github with the name <your-username>.github.io
2. Clone the repository to your local machine.
3. Create a new file in the root directory of the repository called index.html.
4. Paste the following code into the file:
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
1. Save the file and commit the changes to the repository.
2. Push the changes to the Github repository.
3. Visit <your-username>.github.io in your web browser to see your new blog.

You can customize the content and design of your blog by editing the HTML and CSS of the webpage. You can add more blog posts by creating new HTML files in the root directory of the repository and linking to them from the index.html file.
```
But __html__ is somewhat cumbersome to maintain. So:

```m̀arkdown
**Prompt**
Is it possible to do it with markdown instead of html?

**Answer**
Yes, it's possible to use Markdown instead of HTML to create a simple webpage for your blog on Github.io. Here are the steps:

1. Create a new repository on Github with the name <your-username>.github.io
2. Clone the repository to your local machine.
3. Create a new file in the root directory of the repository called index.md.
4. Paste the following Markdown code into the file:

```

```markdown
# My Blog

## My First Blog Post

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta, ipsum vel consequat efficitur, velit urna rutrum nisi, eget consectetur orci erat eu elit. Nulla sed feugiat elit, vel pellentesque tortor. Mauris ut quam nulla. Morbi varius, dolor ac malesuada bibendum, lacus ex tincidunt eros, vel malesuada velit velit ac lacus. In non nisi sapien.

---

© 2023 My Name

```

```markdwon
1. Save the file and commit the changes to the repository.
2. Push the changes to the Github repository.
3. Visit <your-username>.github.io in your web browser to see your new blog.

You can customize the content and design of your blog by editing the Markdown and using a static site generator like Jekyll to generate your site. You can add more blog posts by creating new Markdown files in the root directory of the repository and linking to them from the index.md file.
```

But is it possible to use markdown and css?

```markdown
**Prompy**
Is it possible to have a style sheet with markdown in that page?

**Answer**
Yes, it's possible to use CSS styles with Markdown in your webpage. Here's how you can do it:
1. Create a new file in the root directory of the repository called style.css.
2. Paste the following CSS code into the file to style the header and main sections of your page:
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

```
1. Save the file and commit the changes to the repository.
2. Open your index.md file and add a link to the style.css file in the <head> section of the Markdown document:
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

```
1. Save the file and commit the changes to the repository.
2. Push the changes to the Github repository.
3. Visit <your-username>.github.io in your web browser to see your new blog with styles applied.

You can add more styles to your CSS file to customize the appearance of your blog.
```

Let's say you want to include an interactive vizualization in this markdown blog.  
I really like Altair.

```m̀arkdown
**Prompt**
How can I add an html file inside the previous markdown file?

**Answer**
You can add an HTML file inside your Markdown file using an HTML iframe. Here's how you can do it:
1. Create a new HTML file in the root directory of the repository called my-iframe.html.
2. Paste the following code into the file to create a simple HTML page with an iframe element:

```

```html

<!DOCTYPE html>
<html>
  <head>
    <title>My Iframe</title>
  </head>
  <body>
    <h1>My Iframe</h1>
    <iframe src="https://www.google.com" height="400px" width="100%"></iframe>
  </body>
</html>

```

```m̀arkdown
This code creates a page with a title "My Iframe", a heading "My Iframe", and an iframe element that displays the Google homepage.
1. Save the file and commit the changes to the repository.
2. Open your index.md file and add the following Markdown code where you want the iframe to appear:
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

<iframe src="my-iframe.html" height="500px" width="100%"></iframe>

© 2023 My Name

```

```m̀arkdown
This code creates an iframe element that displays the my-iframe.html file. The height and width attributes control the size of the iframe.
1. Save the file and commit the changes to the repository.
2. Push the changes to the Github repository.
3. Visit <your-username>.github.io in your web browser to see your new blog with the iframe embedded in the Markdown page.

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
