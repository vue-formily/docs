---
title: String Format
description: 'String Format'
position: 22
category: Plugins
---

## String Format Plugin
Simple string format plugin for **vue-formily**.

## Install
<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @vue-formily/string-format
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @vue-formily/string-format --save
  ```

  </code-block>
</code-group>

### CDN
You can use **string-format** plugin with a script tag and a CDN, import the library like this:

```html
<script src="https://unpkg.com/@vue-formily/string-format@latest"></script>
```

This will inject a `StringFormatPlugin` global object, which you will use to access the various methods exposed by the plugin or register to **vue-formily**.

If you are using native ES Modules, there is also an ES Modules compatible build:

```html
<script type="module">
  import stringFormat from 'https://unpkg.com/@vue-formily/string-format@latest/dist/string-format-plugin.esm.js'
</script>
```

### Set Up

```typescript
import Vue from 'vue';
import VueFormily from '@vue-formily/formily';
import stringFormat from '@vue-formily/string-format';

VueFormily.plug(stringFormat);
Vue.use(VueFormily);
```

## Basic Usage
### Stand Along
```typescript
import stringFormat from '@vue-formily/string-format';

stringFormat.format('Hello, {name}!', {
  name: 'Bob'
}); // Hello, Bob!

stringFormat.format('Today is {dates[6]}.', {
  dates: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
}); // Today is Sunday.

stringFormat.format('Welcome, {user.name}!', {
  user: {
    name: 'Bob'
  }
}); // Welcome, Bob!
```

### In Vue Formily's [Field](/api/field)
After installing **String Format Plugin**, we can use the `format` option in the [FieldSchema](/api/field#constructor). Note that the **schema's type** has to be `string`.

```typescript
// Sample schema
{
  formId: 'name',
  // Type has te be string
  type: 'string',
  // `value` is the Field's value
  format: 'Welcome, {value}!'
}
```


## Methods
### format
Format the input string.

**Signatures**
```typescript
format(format: string, data: Record<string, any> | Record<string, any>[]): string;
```

**Parameters**
- **format** - The format string.
- **data** - The data used for the formatting.
