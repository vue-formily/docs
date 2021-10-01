---
title: Basic Usage
description: ''
position: 3
category: Getting started
---

Let's start with a simple login form:

## Schema
`vue-formily` need a form schema to work with, so let's define one:

```js
import { required, email } from "@vue-formily/rules";

const loginForm = defineSchema({
  formId: "login",
  fields: [
    {
      formId: "email",
      type: "string",
      format: "{raw}",
      value: "",
      rules: [
        {
          ...required,
          message: "Please enter email address."
        },
        {
          ...email,
          message: "Please enter valid email address."
        }
      ],
      props: {
        label: "email",
        inputType: "email"
      }
    },
    {
      formId: "password",
      type: "string",
      rules: [
        {
          ...required,
          message: "Please enter password."
        }
      ],
      value: "",
      props: {
        label: "password",
        inputType: "password"
      }
    }
  ]
})
```
We're using **required** and **email** rules to validate fields. To learn more about validation rules, please check the document [here](/guide/validation-rules).

## Create New Form
Then we call [`$formily.addform`](/api/extension#addform) to create new form element and injects it to Vue instance's `forms` object.

```vue
<template>
  <form class="login">
    <div v-for="(field, i) in forms.login.fields" :key="i" class="field">
      <label :for="field._uid">{{ field.label }}</label>
      <input v-model="field.raw" :type="field.props.inputType" :name="field.name" :id="field._uid" />
    </div>
  </form>
</template>

<script>
export default {
  created() {
    // Create new form element and injects it to `forms` object.
    this.$formily.addForm(loginForm);
  }
}
</script>
```

## Live Demo
<sandbox id="vue-formily-basic-usage-qunmk"></sandbox>
