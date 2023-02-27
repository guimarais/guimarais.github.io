---
title: Bad code done quick
---

<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>

# Bad code done quick

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
