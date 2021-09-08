---
title: Events
description: 'Events'
position: 6
category: Guide
---

All **vue-formily** elements are derived from class [Evento](/api/evento), which is handling some basic methods like: `on`, `off`, `emit` and `once`.

## Register an Event
There are 2 ways to register an event:

### Register from schema

```typescript
// Registering an event in Field schema,
// just add the `on` field to the schema.
// The same is applied for `Group` and `Collection`
const fieldSchema = {
  formId: 'email',
  on: {
    validated() {
      // ...
    }
  }
};
```

### Register from code

```typescript
const form = new Form({
  formId: 'login'
});

form.on('validated', () => {
  // ...
});
```

## Emit an Event
To emit an event, wa use the `element.emit()` method. For examples:

```typescript
const field = new Field({
  formId: 'email',
  on: {
    myEvent(p1, p2, ...rest) {
      // ...
    }
  }
});

// Emit the event without parameters
field.emit('myEvent')

// Emit the event with parameters
field.emit('myEvent', {}, 'test', ...params);
```

## Vue Formily Events
By default, **vue-formily** will emit some events on elements:

- `changed` - Emitted when the `value` of an element has been changed.
- `validate` - Emitted before validating an element.
- `validated` - Emitted after validating an element.


