---
title: Form Elements
description: 'Form Elements'
position: 4
category: Guide
---

**vue-formily** has 3 base form elements classes: [Field](/api/field), [Group](/api/group) and [Collection](/api/collection).

## Field
A Field represents a single field in a form. E.g, username, email, password... Each Field will have one of these types: `string`, `number`, `boolean`, `date`. And its value will be casted to the relevant `type` automatically, if the value can not cast, the it will be set to `null`. For example:

```typescript
const field = new Field({
  formId: 'age',
  type: 'number'
});

await field.setValue('1'); // field.value === 1
await field.setValue('1a'); // field.value === null
```

### Schema
To learn about the schema, please read the [document](/api/field#constructor).

Here are some usages:

```typescript
// Properties
{
  formId: 'age',
  type: 'number',
  props: {
    placeholder: 'Age',
    label: 'Age'
  }
}

// Default and initial value
{
  formId: 'name',
  type: 'string',
  // The field will have this value when it was reset
  default: 'John',
  // The field will have this value on first init
  value: 'Smith'
}

// Validation
{
  formId: 'name',
  type: 'string',
  rules: [
    // Use default
    requried,
    // Override
    {
      ...requried,
      message: 'This field is required.'
    }
  ]
}
```

### Checked State
When working with **checkbox** or **radio**, it's handy if we can handle the **checked** state. And you can handle it through the `checkedValue` if schema:

<alert>
We can not set <b>checkedValue</b> for <b>boolean</b> type
</alert>

```typescript
const field = new Field({
  formId: 'name',
  type: 'string',
  checkedValue: 'test'
});

await field.setValue('test'); // field.checked === true
```

You can set the `checkedValue` in code:

```typescript
const field = new Field({
  formId: 'name',
  type: 'string'
});

field.setCheckedValue('test');

await field.setValue('test'); // field.checked === true
```

## Group
A Group is a container for other form elements such as: `Field`, `Collection` or event another `Group`. Group has the type is `enum`, that mean its value is an **object** that has the value of all **sub-elements**. For example:

<alert>
Group is also the base class of the class <a href="/api/form">Form</a>
</alert>

```typescript
const group = new Group({
  formId: 'user',
  fields: [
    {
      formId: 'firstName',
      value: 'John'
    },
    {
      formId: 'lastName',
      value: 'Smith'
    }
  ]
});

console.log(group.value); // { fisrtName: 'John', lasName: 'Smith' }
```

### Schema
To learn about the schema, please read the [document](/api/group#constructor).

Here are the example:

```typescript
{
  formId: 'user',
  fields: [
    {
      formId: 'firstName',
      value: 'John'
    },
    {
      formId: 'lastName',
      value: 'Smith'
    }
  ],
  // Add some validation for this group
  rules: [
    // Required all sub-elements have to have value
    requried
  ]
}
```

Here is the demo on Codepen:

<p class="codepen" data-height="400" data-theme-id="dark" data-default-tab="result" data-slug-hash="VwWPPZd" data-user="hqnan" style="height: 400px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/hqnan/pen/VwWPPZd">
  vue-formily group's value</a> by anha (<a href="https://codepen.io/hqnan">@hqnan</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

## Collection
A Collection is a list of **groups**, it's useful when you need to design a form that contains a list of items such as: addresses, cards, skills... Collection has the type is `set`, that mean its value is an **array** that has the value of all **sub-groups**. For example:

```typescript
const collection = new Collection({
  formId: "skills",
  group: {
    fields: [
      {
        formId: "name"
      },
      {
        formId: "description"
      }
    ]
  }
});

const group = collection.addGroup();

await group.setValue({
  name: 'FE',
  description: 'Frontend Developers are awesome!'
});

console.log(collection.value); // [{ name: 'FE', description: 'Frontend Developers are awesome!' }]
```

Here is the demo on Codepen:

<p class="codepen" data-height="300" data-theme-id="dark" data-default-tab="result" data-slug-hash="JjJEyjx" data-user="hqnan" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/hqnan/pen/JjJEyjx">
  vue-formily collection value</a> by anha (<a href="https://codepen.io/hqnan">@hqnan</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

### Schema
To learn about the schema, please read the [document](/api/collection#constructor).

Here are the example:

```typescript
{
  formId: "addresses",
  props: {
    label: "Addresses"
  },
  group: {
    fields: [
      {
        formId: "address",
        props: {
          label: "Address"
        }
      },
      {
        formId: "city",
        props: {
          label: "City"
        }
      },
      {
        formId: "postcode",
        props: {
          label: "Postcode"
        }
      }
    ]
  }
}
```

We have defined a **collection schema** named `addresses`, it has the `group` field which is actually the [Group](/api/group) schema but drop the `formId` field. Because, in collection `formId` is not fixed, and will be auto generated when a new group is added. A **collection** can contain many **groups** inside it, and a group can be added dynamically by calling the `collection.addGroup()` method. 
