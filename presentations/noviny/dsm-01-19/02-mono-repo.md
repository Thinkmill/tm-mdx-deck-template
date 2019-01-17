import { dark } from '../../../src/theme'
import { darkLayout } from "../../../src/theme";

export default darkLayout

# Code Structure
---
Having a consistent structure allows us to build tools that pull information from our codebase
---
## Our structure:

```
myPackages/
    examples/
        example1.js
        example2.js
    docs/
        docs1.js
        docs2.js
    src/
    package.json
```
---
This powers features such as changelogs:

- The mono-repo keeps changelogs up-to-date
- The website can pull in this markdown file from each package
- The website gets to decide how to display them
---
Everything that comes next works because the website knows where to find things
