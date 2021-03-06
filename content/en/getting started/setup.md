---
title: Setup
description: ''
position: 2
category: Getting started
---
Add `@vue-formily/formily` dependency to your project:

<code-group>
  <code-block label="Yarn" active>

  ```bash
  # vue 3.x
  yarn add @vue-formily/formily@next
  # vue 2.x
  yarn add @vue-formily/formily
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  # vue 3.x
  npm install @vue-formily/formily@next
  # vue 2.x
  npm install @vue-formily/formily
  ```

  </code-block>
</code-group>

Or with a script tag and a CDN, import the library like this:

```html
<!-- vue 3.x -->
<script src="https://unpkg.com/@vue-formily/formily@next"></script>
<!-- vue 2.x -->
<script src="https://unpkg.com/@vue-formily/formily@latest"></script>
```

This will inject a `Formily` global object, which you will use to access the various components, funtions exposed by vue-formily.

If you are using native ES Modules, there is also an ES Modules compatible build:

```html
<script type="module">
  // vue 3.x
  import Vue from 'https://unpkg.com/@vue-formily/formily@next/dist/formily.esm.js'
  // vue 2.x
  import Vue from 'https://unpkg.com/@vue-formily/formily@latest/dist/formily.esm.js'
</script>
```

Then integrate it with **Vue**

### Vue 3.x
```typescript
import { createApp } from 'vue'
import { createFormily } from '@vue-formily/formily';

const formily = createFormily();

const app = createApp(App)

app.use(formily, {} as VueFormilyOptions);
```

### Vue 2.x
```typescript
import Vue from 'vue';
import { createFormily } from '@vue-formily/formily';

const formily = createFormily();

Vue.use(formily, {} as VueFormilyOptions);
```

## Options
<alert>
  Options configured here will apply globally to all form elements
</alert>

```typescript
interface VueFormilyOptions {
  // By default, vue-formily will execute the 
  // validation silently when changing element's value.
  // To disable it, just set the `silent` to `false`.
  // When disabled, the element has to be validated manually
  // by calling the `element.validate()` method.
  silent?: boolean;
  // The default rules want to apply to the form.
  // With rules that have the `cascade = true`,
  // then thay can apply to all the child elements.
  rules?: ValidationRuleSchema[];
  // The alias of the object contain all the references to the created forms.
  // Default is `forms`
  alias?: string;
}
```

## Related concepts
- [ValidationRuleSchema](/api/validation#constructor)
