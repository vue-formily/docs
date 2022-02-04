---
title: Validation
description: 'Validation'
position: 15
category: Api
---

## Class Validation
<tree :items="[
  { text: 'Evento', url: '/api/evento' },
  { text: 'Objeto', url: '/api/objeto' },
  { text: 'Validation' }
]"></tree>

A class manages validation rules.

## Constructor
```typescript
Validation(rules?: ValitionRuleSchema[]);
```

**Parameters**
- **rules** - the schema object of this element. 
```typescript
type Validator = (
  value: any,
  // The rule's properties, e.g, maxLength, min...
  props?: Record<string, any>,
  ...args: any[]
) => string | boolean | Promise<string | boolean>;

type ValitionRuleSchema = Validator | {
  validator?: Validator;
  // Rule name. If not provided, a name will be auto generated 
  name?: string;
  // The error message when the rule is invalid
  message?: string;
  // Used for specific form element types. When provided,
  // the rule only apply for the provided types
  // 'string' | 'number' | 'boolean' | 'date' | 'set' | 'enum'
  for?: string[];
  // If provided, the rule will be cascade to sub form element's rule
  cascade?: boolean;
  // Decide the current rule should be inherited from 
  // the parent form element or not
  inherit?: boolean;
};
```

## Properties
| Prop | Type | Default | Description |
| ---- | ---- | ---------------- | ----------- |
| **rules** | `Rule[]` | `[]` | All the validation rules. |
| **schema** | `(RuleSchema<string> \| Validator \| undefined)[] \| null` | `null` | The current rules schema. |
| **valid** <prop-infos readonly></prop-infos> | `boolean` | `true` | `valid` is `true` if all rules are `valid` |
| **errors** <prop-infos readonly></prop-infos> | `string[] \| null` | `null` | Array of errors from the invalid rules |

## Methods
### addRules
Add multiple rules

**Signatures**
```typescript
addRules(rulesOrSchemas: (Rule | ValitionRuleSchema)[], options?: { from?: number }): Rule[];
```

**Parameters**
- **rulesOrSchemas** - Input [Rule](/api/rule) instance or rule schema.
- **options** - The options
```typescript
{
  // The position that the rules will be added from
  from?: number;
}
```

**Returns**
- Array of the added [Rule](/api/rule) instances.

### addRule
Add single rule.

**Signatures**
```typescript
addRule(ruleOrSchema: Rule | ValitionRuleSchema, options?: { from?: number }): Rule;
```

**Parameters**
- **rulesOrSchemas** - Input [Rule](/api/rule) instance or rule schema.
- **options** - The options
```typescript
{
  // The position that the rule will be added from
  from?: number;
}
```

**Returns**
- The added [Rule](/api/rule) instance.

### removeRules
Remove multiple rules.

**Signatures**
```typescript
removeRules(removes: (Rule | string)[]): Rule[];
```

**Parameters**
- **removes** - Array of [Rule](/api/rule) instances or rule name.

**Returns**
- The removed rules.

### removeRule
Remove single rule.

**Signatures**
```typescript
removeRule(remove: Rule | string): Rule;
```

**Parameters**
- **remove** - The [Rule](/api/rule) instance or rule name.

**Returns**
- The removed rule.

### reset
Reset all rules to the initial state. That is `error = null`, `valid = true`.

**Signatures**
```typescript
reset(): void;
```

### validate
Validate rules asynchronously. When calling, it will first trigger the `validate` event, then filter out and validate the rules. Finally, emit a `validated` event.

**Signatures**
```typescript
async validate(
  value: any,
  options: { excluded?: string[]; picks?: string[] } = {},
  ...args: any[]
): Promise<Validation>;
```

**Parameters**
- **value** - Any value.
- **options** - Validation options.
```typescript
{
  // Array of rule names don't want to validate
  excluded?: string[]; 
  // Array of rule names want to validate
  picks?: string[];
}
```
- **...args** - The extra parameters want to pass along to the rule's validators.

<alert>
<b>vue-formily</b> will pass the current element's `props` to the 3rd paremter and that element to the <b><i>4th paramter</i></b>.
</alert>

**Returns**
- The `Promise` of `Validation` instance.

### getSchema
Return current schema including added rule(s) by `addRule` method or removed rule(s) by `removeRule` method.

**Signatures**
```typescript
getSchema(): (Validator | RuleSchema<string> | undefined)[] | null;
```

**Returns**
- Array of `Validator | RuleSchema<string> | undefined` or `null`.

## Inherited Methods
### From class [Evento](/api/evento)
<InheritedMethods name="evento"></InheritedMethods>

## Related concepts
- [Rule](/api/rule)
