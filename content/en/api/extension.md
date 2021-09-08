---
title: Extension of Vue
description: 'Extension of Vue'
position: 8
category: Api
---

## Extension of Vue
## The `forms` object
By default, **vue-formily** will inject an object called `forms` to current **Vue instance**, which is holding all the **Form** instances. The `forms` alias can be customized by setting the `alias` option in the [installation step](/getting%20started/setup#options).

To imagine that, let's see the example below:

```typescript
// Install vue-formily
import VueFormily from 'vue-formily';

Vue.use(VueFormily);

// In Vue component
export default {
  created() {
    this.$formily.add({
      formId: 'login',
      // ...
    });
  },
  methods: {
    async submit() {
      // Access the login form through the `forms` object
      await this.forms.login.validate();
    }
  }
}
```

## The `$formily` Instance
Every Vue instance will have a **$formily** instance which contains the following methods:

### addForm
Create new Form instance and injects it to `forms` object of the current Vue instance, and **vue-formily** will auto bind the current Vue instanceto the form.

<alert type="warning">
  <b>vue-formily</b> will add a <b>_formy</b> prop to the added form instance, this prop will contain some data like <b>vm (the Vue instance)</b>... so this object shouldn't be modified.
</alert>

**Signatures**
```typescript
addForm(schema: FormSchema): Form;
```

**Parameters**
- **schema** - The [FormSchema](/api/form#constructor).

**Returns**
- The [Form](/api/form) instance.

### removeForm
Remove a **form element** from current Vue instance.

**Signatures**
```typescript
removeForm(formId: string): void;
```

**Parameters**
- **formId** - The form id.
