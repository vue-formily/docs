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
| *protected* **_d** | `Record<string, any>` | `{}` | The internal data using in all subclasses. |
| *protected* **_config** <prop-infos readonly></prop-infos> | `Record<string, any>` | `{}` | The internal configuration using in all subclasses. <alert>vue-formily stores all the elements constructor and plugins here</alert> |
| **plugs** | [`Plugs`](/guide/plugins#writing-a-plugin) | `{}` | Any plugins for the current element |

## Inherited Methods
### From class [Evento](/api/evento)
<InheritedMethods name="evento" />
