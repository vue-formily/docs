---
title: Form Groups
description: 'Form Groups'
position: 5
category: Guide
---

Sometimes we need to handle a list of something like skills, publishers... and **vue-formily** has the [Collection](/api/collection) will help you to do that.

Assuming you are building a **profile page** that contains a **name field** and a **list of addresses** of the current user. With that requirements, let's design a schema for that page.

Firstly, let's define the form schema called `profile`:

```typescript
const profile = {
  formId: "profile",
  fields: []
};
```

Now, the form need some `fields` to work with. 

The first field is the **name**. We know it's a **single field**, and its value should be `string`:

```typescript
{
  formId: "name",
  // We can omit this because `string` is the default type of Field 
  type: "string",
  props: {
    // We define `label` property to use to render the label
    label: "Name",
  }
}
```

The next field is the **addresses**, it's a list of many *address*. How do we build the schema for a list?

Let's break the **addresses** into a single address first. As we known, an address can contain many fields such as **address**, **city**, **postcode**... Each of them needs a schema to work with:

- **address** - A single field, and the type is `string`:

```typescript
{
  formId: "address",
  props: {
    label: "Address",
  }
}
```

- **city** - A single field, and the type is `string`:

```typescript
{
  formId: "city",
  props: {
    label: "City",
  }
}
```

- **postcode** - A single field, and the type is `number`:

```typescript
{
  formId: "postcode",
  type: 'number',
  props: {
    label: "Postcode",
  }
}
```

Now we have all schemas for our **address**. The final thing to do is to put them into a **list**, and we will use [Collection](/api/collection) to do it:

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
Here, we define a **collection schema** named `addresses`, it has the `group` field which is actually the [Group](/api/group) schema but drop the `formId` field. Because, in collection `formId` is not fixed, and will be auto generated when a new group is added. A **collection** can contain many **groups** inside it, and a group can be added dynamically by calling the `collection.addGroup()` method. 

Now, we have got all the missing pieces, let's put them all together. The final schema will look like this:

```typescript
const profile = {
  formId: "profile",
  fields: [
    {
      formId: "name",
      props: {
        label: "Name",
      }
    },
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
  ]
};
```

The last thing is to use it in the Vue component the render the form. We have created a live demo below.

<alert>
In the demo, we added some validation rules. To learn more, you can check it out in the sandbox
</alert>

## Live Demo

<sandbox id="vue-formily-groups-ws8eo" height="600"></sandbox>
