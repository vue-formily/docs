---
title: defineSchema
description: 'defineSchema'
position: 17
category: Api
---

Implementation-wise `defineSchema` does nothing but return the object passed to it. However, in terms of typing, the returned value has a synthetic type of a schema like `ValidationRuleSchema` or `FormSchema`, TSX and IDE tooling support.

```typescript
import { FormInstance, defineSchema } from '@vue-formily/formily';

const schema = defineSchema({
  formId: 'login',
  fields: [
    {
      formId: 'email'
    }
  ]
});

type LoginForm = FormInstance<typeof schema>;
```
