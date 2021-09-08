---
title: Objeto
description: 'Objeto'
position: 10
category: Api
---

## Abstract Class Objeto
<tree :items="[
  { text: 'Evento', url: '/api/evento' },
  { text: 'Objeto' }
]"></tree>

The generic class, using to extend more functions or data. Useful when developing plugins.

**All Known Subclasses**
- [Element](/api/element)
- [Validation](/api/validation)
- [Rule](/api/rule)

## Constructor
This class inherit the constructor from parent class. To get an instance of this class, use one of the subclass's constructors.

## Properties
| Prop | Type | Default | Description |
| ---- | ---- | ---------------- | ----------- |
| **_d** | `any` | `{}` | The internal data using in all subclasses. |

## Inherited Methods
### From class [Evento](/api/evento)
<InheritedMethods name="evento" />
