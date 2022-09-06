---
sidebar_label: 'Customize'
sidebar_position: 2
---

# Customize

Learn how to customize the Superflows colors to suit your UI.

## Theme Package: react-sf-themes

Use the react-sf-themes package to access the default theme provided by Superflows. Then customize it further by changing the default color values & spaces to suit your UI. 

## How It Works

Customization works as follows:
- Access the default theme using this package
- Modify the colors & spaces as per your requirement
- Pass the modified theme to your Superflows components

## Theme

Theme is a set of:
- Variants
- Types
- Colors
- Spaces

### Variants

Superflows provides the following variants:
- Primary
- Secondary
- Danger
- Success
- Warning
- Info
- Light
- Dark

### Types

Superflows provides two types:
- Filled
- Outlined

### Colors

Following colors are defined by default:

| Variant      | Background Color  | Text Color         |
|--------------|-------------------|--------------------|
| Primary      | #0d6efd           | #ffffff            |
| Secondary    | #6c757d           | #ffffff            |
| Danger       | #dc3545           | #ffffff            |
| Success      | #198754           | #ffffff            |
| Warning      | #ffc107           | #000000            |
| Info         | #0dcaf0           | #000000            |
| Light        | #f8f9fa           | #000000            |
| Dark         | #212529           | #ffffff            |

### Spaces

Spaces are dimensions, which are intended to be used for spacings, paddings, margins, etc.

| Space      | Value  
|------------|-------------------
| min        | 5
| ltl        | 10
| mod        | 15
| big        | 20
| lrg        | 25
| xlg        | 30
| max        | 35


## Quickstart

### Installation

```bash
npm install --save react-sf-themes
```

### Usage

```tsx
import React from 'react'
import Themes from 'react-sf-themes'

const App = () => {

  console.log('Themes', Themes.getTheme());

  return <div></div>
}

export default App

```