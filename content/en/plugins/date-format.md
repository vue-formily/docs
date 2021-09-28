---
title: Date Format
description: 'Date Format'
position: 20
category: Plugins
---

## Date Format Plugin
Simple date format plugin for **vue-formily**.

## Links
- [Github](https://github.com/vue-formily/date-format-plugin)

## Installation
<code-group>
  <code-block label="Yarn" active>

  ```bash
  yarn add @vue-formily/date-format
  ```

  </code-block>
  <code-block label="NPM">

  ```bash
  npm install @vue-formily/date-format --save
  ```

  </code-block>
</code-group>

### CDN
You can use **date-format** plugin with a script tag and a CDN, import the library like this:

```html
<script src="https://unpkg.com/@vue-formily/date-format@latest"></script>
```

This will inject a `DateFormatPlugin` global object, which you will use to access the various methods exposed by the plugin or register to **vue-formily**.

If you are using native ES Modules, there is also an ES Modules compatible build:

```html
<script type="module">
  import dateFormat from 'https://unpkg.com/@vue-formily/date-format@latest/dist/date-format-plugin.esm.js'
</script>
```

For locales:
```html
<!-- Get the en-US locale -->
<script src="https://unpkg.com/@vue-formily/date-format@latest/dist/locale/en-US.json"></script>
```

### Set Up
### Vue 3.x
```typescript
import { createApp } from 'vue'
import { createFormily } from '@vue-formily/formily';
import dateFormat from '@vue-formily/date-format';

const formily = createFormily();

formily.plug(dateFormat, {} as DateFormatOptions);

const app = createApp(App)

app.use(formily);
```

### Vue 2.x
```typescript
import Vue from 'vue';
import { createFormily } from '@vue-formily/formily';
import dateFormat from '@vue-formily/date-format';

const formily = createFormily();

formily.plug(dateFormat, {} as DateFormatOptions);

Vue.use(formily);
```

## Options
```typescript
type Locale = {
  code: string;
  localize?: Record<string, any>;
}

type DateFormatOptions = {
  // 1 -> 7 ~ monday -> sunday
  firstDayOfWeek?: number;
  // 1 -> 7
  minimalDaysInFirstWeek?: number;
  timeZone?: string | number;
  locale?: string;
  locales?: Locale[];
};
```

## Date and Time Patterns
Date and time formats are specified by date and time pattern strings. Within date and time pattern strings, unquoted letters from `A` to `Z` and from `a` to `z` are interpreted as pattern letters representing the components of a date or time string. Text can be quoted using single quotes `'` to avoid interpretation. `''` represents a single quote. All other characters are not interpreted; they're simply copied into the output string during formatting or matched against the input string during parsing.

The following pattern letters are defined (all other characters from 'A' to 'Z' and from 'a' to 'z' are reserved):

| Letter | Date or Time Component | Presentation | Examples |
| ------ | ---------------------- | ------------ | -------- |
| **G** | Era designator | Text | AD |
| **y** | Year | Year |	1996; 96 |
| **Y** | Week year	| Year | 2009; 09 |
| **M** | Month in year	| Month | July; Jul; 07 |
| **w** | Week in year	| Number | 27 |
| **W** | Week in month	| Number | 2 |
| **D** | Day in year	| Number | 189 |
| **d** | Day in month	| Number | 10 |
| **F** | Day of week in month	| Number | 2 |
| **E** | Day name in week | Text |	Tuesday; Tue |
| **u** | Day number of week (1 = Monday, ..., 7 = Sunday) | Number | 1 |
| **a** | Am/pm marker | Text |	PM |
| **H** | Hour in day (0-23) | Number | 0 |
| **k** | Hour in day (1-24) | Number | 24 |
| **K** | Hour in am/pm (0-11) | Number | 0 |
| **h** | Hour in am/pm (1-12) | Number | 12 |
| **m** | Minute in hour | Number | 30 |
| **s** | Second in minute | Number | 55 |
| **S** | Millisecond | Number | 978 |
| **z** | Time zone	| General time zone | Pacific Standard Time; PST; GMT-08:00 |
| **Z** | Time zone	| RFC 2822 time zone | -0800 |
| **X** | Time zone	| ISO 8601 time zone | -08; -0800; -08:00 |

Pattern letters are usually repeated, as their number determines the exact presentation:

- **Text** - If the number of pattern letters is **4 or more**, the full form is used; otherwise a short or abbreviated form is used if available.

- **Number** - The number of pattern letters is the minimum number of digits, and shorter numbers are zero-padded to this amount.

- **Year** - If the number of pattern letters is 2, the year is truncated to 2 digits; otherwise it is interpreted as a number.

- **Month** - If the number of pattern letters is 3 or more, the month is interpreted as text; otherwise, it is interpreted as a number.

- **General time zone** - Time zones are interpreted as text if they have names. For time zones representing a GMT offset value, the following syntax is used:

  - GMTOffsetTimeZone:
  
    `GMT Sign Hours : Minutes`
     
     **Sign** - one of `+` `-`

     **Hours** - `Digit` or `Digit Digit`

     **Minutes** - `Digit Digit`

     **Digit** -  one of `0 1 2 3 4 5 6 7 8 9`

  - Hours must be between 0 and 23, and Minutes must be between 00 and 59.
  
- **RFC 2822 time zone** - The RFC 2822 4-digit time zone format is used:

  - RFC822TimeZone:
    
    `Sign TwoDigitHours Minutes`

    **TwoDigitHours** - `Digit Digit`

  - TwoDigitHours must be between 00 and 23. Other definitions are as for general time zones.

- **ISO 8601 Time zone** - The number of pattern letters designates the format for both formatting and parsing as follows:

  - ISO8601TimeZone:
    
    **OneLetterISO8601TimeZone** - `Sign TwoDigitHours`, `Z`
            
    **TwoLetterISO8601TimeZone** - `Sign TwoDigitHours Minutes`, `Z`
            
    **ThreeLetterISO8601TimeZone** - `Sign TwoDigitHours : Minutes`, `Z`
            
  - Other definitions are as for general time zones or RFC 2822 time zones. If the offset value from GMT is 0, `Z` is produced. If the number of pattern letters is 1, any fraction of an hour is ignored. For example, if the pattern is `X` and the time zone is **GMT+05:30**, **+05** is produced.

## Basic Usage
### Stand Along
```typescript
import dateFormat from '@vue-formily/date-format';
import enUS from '@vue-formily/date-format/locale/en-US';

// Set locale to en-US
dateFormat.options.locale = enUS.code;
// Register global locales
dateFormat.options.locales = [enUS];

const date = new Date('2020-12-27T08:06:10.941Z');

dateFormat.format("yyyy.MM.dd G 'at' HH:mm:ss z", date); // 2020.12.27 A at 15:06:10 GMT+7
dateFormat.format('yyyyy.MMMMM.dd GGG hh:mm aaa', date); // 02020.December.27 Anno Domini 03:06 PM
dateFormat.format("EEE, MMMM d, ''yy", date); // Sunday, Dec 27, '20
dateFormat.format("h:mm a", date); // 3:06 PM
dateFormat.format("hh 'o''clock' a, zzzz", date); // 03 o'clock PM, Indochina Time
dateFormat.format("K:mm a, z", date); // 3:06 PM, GMT+7
dateFormat.format("yyyy-MM-dd'T'HH:mm:ss.SSSZ", date); // 2020-12-27T15:06:10.941+0700
dateFormat.format("yyyy-MM-dd'T'HH:mm:ss.SSSXXX", date); // 2020-12-27T15:06:10.941+07
```

### In Vue Formily's [Field](/api/field)
After installing **Date Format Plugin**, we can use the `format` option in the [FieldSchema](/api/field#constructor).  Note that the **schema's type** has to be `date`.

```typescript
// Sample schema
{
  formId: 'time',
  // Type has te be date
  type: 'date',
  format: 'K:mm a, z'
}
```

## Methods
### format
Format the input string.

**Signatures**
```typescript
format(format: string, date: number | Date | { value: Date }, options?: DateFormatOptions): string;
```

**Parameters**
- **format** - The format string.
- **date** - The valid date instance.
