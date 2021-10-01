---
title: Validation Rules
description: 'Validation Rules'
position: 7
category: Guide
---

## Links
- [Github](https://github.com/vue-formily/rules)

## Basic Usage
```typescript
import { required, email } from '@vue-formily/rules';

const schema = {
  formId: 'email',
  // Install requried and email rules with custom message
  rules: [
    {
      ...required,
      message: 'This field is required.'
    },
    {
      ...email,
      message: 'Invalid email.'
    },
  ]
}
```

## Localization
If [I18n](/plugins/i18n) plugin was installed, you can pass the resource key to the `message` field.

```typescript
import { required, email } from '@vue-formily/rules';

const resource = {
  validation: {
    required: 'This field is required.'
  }
}

const schema = {
  formId: 'email',
  rules: [
    {
      ...required,
      // The resource key
      message: 'validation.required'
    },
  ]
}
```

## Properties
Some rules require one or more properties like `min`, `maxLength`... You can pass the relevant property by the `props` like the example below:

```typescript
import { minLength, maxLength } from '@vue-formily/rules';

const schema = {
  formId: 'password',
  rules: [
    minLength,
    maxLength
  ],
  props; {
    minLength: 1,
    maxLength: 12
  }
}
```

## Apply Rule for Specific Types of Field
**vue-formily** allow you to apply rule only to specific types of fields. For example, `email` rule should be applied to `string` field only. To use this feature, just set the `for` option to the rule.

```typescript
import { email } from '@vue-formily/rules';

const schema = {
  formId: 'password',
  rules: [
    {
      ...email,
      // This accepts an array of field's types
      for: ['string']
    }
  ]
}
```

## Cascade
Sometime you want a rule available to multiple form elements. In that case, you can use the `cascade` option to that rule.

In this example, we want the `maxLength` rule is avaliable to all sub-elements:

```typescript
import { maxLength, email } from '@vue-formily/rules';

const schema = {
  formId: 'login',
  rules: [
    // Becasue maxLength is supporting `cascade` by default,
    // so we doesn't need to add `cascade` option. Otherwise,
    // you need to do something like: { ...maxLength, cascade: true }
    {
      ...maxLength,
      message: 'validation.maxLength'
    },
  ],
  fields: [
    {
      // Now email will have maxLength rule
      formId: 'email',
      rules: [
        email
      ],
      props: {
        maxLength: 12
      }
    }
  ]
}
```

## Available Rules
| Rule | For | Properties | Cascade | Description |
| ---- | --- | ---------- | --------| ----------- |
| email | `string` | | | Check valid email |
| min | `number \| date` | `min` | | Check `value` must greater the `min` value (inclusive) |
| max | `number \| date` | `max` | | Check `value` must smaller the `max` value (inclusive) |
| minLength | `string  \| enum \| set` | `minLength` | <yes-no yes></yes-no> | Check length of `value` must greater the `minLength` value (inclusive) |
| maxLength | `string  \| enum \| set` | `maxLength` | <yes-no yes></yes-no> | Check length of `value` must smaller the `maxLength` value (inclusive) |
| numeric | `string` | | | Check `value` must be a number |
| required | | | | Check `value` must be provided | 
