---
title: Plugins
description: 'Plugins'
position: 4
category: Guide
---

Plugins usually add global-level functionality to **vue-formily**.

## Install a Plugin
Use plugins by calling the `VueFormily.plug()` global method. This has to be done before you start your app by calling `new Vue()`:

### Vue 3.x
```typescript
import { createApp } from 'vue'
import { createFormily } from '@vue-formily/formily';

const formily = createFormily();

// calls `MyPlugin.install(Objeto)`
formily.plug(MyPlugin)

// vue 3.x
const app = createApp(App)

app.use(formily, {
  // options
});
```

### Vue 2.x
```typescript
import Vue from 'vue'
import { createFormily } from '@vue-formily/formily';

const formily = createFormily();

// calls `MyPlugin.install(Objeto)`
formily.plug(MyPlugin)

// vue 2.x
Vue.use(formily, {
  // options
});
```

## Writing a Plugin
A **vue-formily** plugin should expose an `install` method. The method will be called with the **vue-formily** global `config` object as the first argument, along with possible options:

```typescript
interface Plugs {}

type VueFormilyConfig = {
  plugs: Plugs;
  elements: any[];
};


MyPlugin.install = function (config: VueFormilyConfig, options) {
  // 4. add method
  config.plugs.myMethod = function (methodOptions) {
    // some logic ...
  }
}
```

## Using a Plugin
When a plugin is installed, you can access it throught the `plugs` property of the current form elemnent.

```typescript
const schema = {
  formId: 'login',
  fields: [
    {
      formId: 'email',
      props: {
        length() {
          // access myPLygin in Field
          this.plugs.myPlugin();
        }
      },
      rules: [
        function validator() {
          // access myPLygin in Rule
          this.plugs.myPlugin();
        }
      ]
    }
  ]
};
```
