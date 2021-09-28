---
title: TypeScript Support
description: 'TypeScript Support'
position: 8
category: Guide
---

A static type system can help prevent many potential runtime errors as applications grow, which is why *vue-formily* is written in TypeScript.

## Editor Support
We strongly recommend using [Visual Studio Code](https://code.visualstudio.com/), which provides great out-of-the-box support for TypeScript.

[WebStorm](https://www.jetbrains.com/webstorm/) also provides out-of-the-box support for both TypeScript and Vue.

## Define Schemas
To let TypeScript properly infer types inside form element options, you need to define schemas with `defineSchema` global method:

```typescript
import { defineSchema } from '@vue-formily/formily';

const loginForm = defineSchema({
  formId: 'login',
  group: {
    fields: [
      {
        formId: 'email',
        rules: [
          required,
          email
        ]
      }
    ]
  }
});
```

Then, you can use this schema to define new Form instance, and use this instance type to cast:

```typescript
type LoginForm = FormInstance<typeof loginForm>;

const form = this.formily.getForm<LoginForm>('login');
```

All **vue-formily** element instance types are defined [here](https://github.com/vue-formily/formily/blob/main/src/core/elements/instanceTypes.ts).

The `defineSchema` global method can apply for all form elements: [Form](/api/form), [Group](/api/group), [Collection](/api/collection), [Field](/api/field) and validation rules schema: [Rule](/api/rule).

