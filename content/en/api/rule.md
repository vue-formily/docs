---
title: Rule
description: 'Rule'
position: 16
category: Api
---

## Class Rule
<tree :items="[
  { text: 'Evento', url: '/api/evento' },
  { text: 'Objeto', url: '/api/objeto' },
  { text: 'Rule' }
]"></tree>

Validation rule class.

## Constructor
```typescript
Rule(rule: Rule | RuleSchema | Validator);
```

**Parameters**
- **rule** - The schema object or Rule instance or just a validator function. 
```typescript
type Validator = (
  value: any,
  // The rule's properties, e.g, maxLength, min...
  props?: Record<string, any>,
  ...args: any[]
) => string | boolean | Promise<string | boolean>;

interface RuleSchema {
  validator?: Validator;
  // Rule name. If not provided, a name will be auto generated 
  name?: string;
  // The error message when the rule is invalid
  message?: string;
}
```

## Properties
| Prop | Type | Default | Description |
| ---- | ---- | ---------------- | ----------- |
| **name** <prop-infos readonly></prop-infos> | `string` | | The rule's name |
| **message** | `string \| null` | `null` | The localized message to be shown as `error` message. |
| **validator** | `Validator \| null` | `null` | The validator for current rule. |
| **valid** | `boolean` | `true` | Indicate current rule is valid or not. |
| **error** | `string \| null` | `null` | The localized error message. |

## Methods
### setMessage
Set rule message.

**Signatures**
```typescript
setMessage(message?: string): void;
```

**Parameters**
- **message** - The message.

### reset
Reset the current rule to the initial state. That is `error = null`, `valid = true`.

**Signatures**
```typescript
reset(): void;
```

### validate
Validate curernt rule asynchronously. When calling, it will first trigger the `validate` event, then do the valiadtion. Finally, emit a `validated` event.

**Signatures**
```typescript
async validate(value: any, props: Record<string, any> = {}, ...args: any[]): Promise<Rule>;
```

**Parameters**
- **value** - Any value to validate.
- **props** - Properties object that used in validator.
- **...args** - The rest of the parameters want to pass along to the **validator**.

<alert>
<b>vue-formily</b> will pass the current <b>element's props</b> to the 3rd paremter, and that element to the 4th paramter.
</alert>

**Returns**
- The `Promise` of `Rule` instance.

## Inherited Methods
### From class [Evento](/api/evento)
<InheritedMethods name="evento"></InheritedMethods>
