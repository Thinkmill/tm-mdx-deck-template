import { darkLayout } from "../../../src/theme";
import { Appear } from 'mdx-deck'

export default darkLayout

# Examples

```notes
With all this information no longer in storybooks, we needed a home for the things that had belonged there
```
---
## Nana nana nanana, I wanna start a fight

<ul style={{ textAlign: 'left' }}>
    <Appear>
        <li>Storybook accidentally leads you to write un-reusable examples</li>
        <li>We want the code for our examples to always be available to the user</li>
        <li>Because it is the documentation space, you put information in storybooks that doesn't belong there</li>
    </Appear>
</ul>

---
"We want each example to just be a component"
---
- Display examples inline (in our docs pages)
- Have multiple ways to view an example (isolated etc)
- Upload an example to codesandbox to allow others to prototype off them quickly