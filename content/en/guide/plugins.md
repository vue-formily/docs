---
title: Plugins
description: 'Plugins'
position: 4
category: Guide
---

Plugins usually add global-level functionality to **vue-formily**.

## Using a Plugin
Use plugins by calling the `VueFormily.plug()` global method. This has to be done before you start your app by calling `new Vue()`:

```typescript
// calls `MyPlugin.install(Objeto)`
VueFormily.plug(MyPlugin)

Vue.use(VueFormily, {
  // options
});

new Vue({
  //... options
})
```

## Writing a Plugin
A **vue-formily** plugin should expose an `install` method. The method will be called with the [Objeto](/api/objeto) constructor as the first argument, along with possible options:

```typescript
MyPlugin.install = function (Objeto, options) {
  // 1. add global method or property
  Vue.myGlobalMethod = function () {
    // some logic ...
  }

  // 4. add an instance method
  Vue.prototype.$myMethod = function (methodOptions) {
    // some logic ...
  }
}
```
