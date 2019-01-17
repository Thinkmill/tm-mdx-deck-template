import { Split, FullScreenCode } from 'mdx-deck/layouts'
import { darkLayout } from "../../../src/theme";

export default darkLayout

# Documenting our Component APIS
---
export default Split

Previously: API documentation is hand-crafted and lives in a storybook

Problem: API documentation is hard to find and easily falls out of date
---
This information did not belong in storybooks
---
Wait, don't we already have most of this information in our code?

```notes
- prop-types or a type system already contain the type information
- Just add description and find a way to display it
```
---
## We aren't the only people who solved this:

- `extract-react-types` (us!)
- `react-docgen`
- `react-docgen-typescript`

Use whichever makes most sense for you!
