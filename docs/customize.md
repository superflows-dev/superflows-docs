---
sidebar_label: 'Globals & Customization'
sidebar_position: 2
---

# Globals & Customization

Let us start by learning about the most basic package - react-sf-themes. Use the react-sf-themes package to access the global configuration and the default theme provided by Superflows.

## react-sf-themes

Use the react-sf-themes package to access the global configuration & default theme provided by Superflows. Then customize it further by changing the default values to suit your UI. 

## How It Works

Customization works as follows:
- Access the default configuration and theme values using this package
- Modify them as per your requirement
- Pass the modified object to your Superflows components

## Theme

This package provides default values for:
- Variants
- Types
- Colors
- Spaces
- Modes
- InputTypes

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

Types are as followed:
- Filled
- Outlined

### Colors

Following colors are provided:

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

### Dimensions

Dimensions are default dimensions for certain Superflows components

| Space      | Value  
|------------|-------------------
| navHeight  | 50

## Modes

Modes are:

| Mode       | Value  
|------------|-------------------
| Day        | day
| Night      | night

## InputTypes

Input types are types of input accepted from the users in the input field.

| InputType       | Value  
|-----------------|-------------------
| Name            | name
| Email           | email
| Mobile          | mobile
| Date            | date
| DateOfBirth     | dateOfBirth
| Gender          | gender
| SearchString    | searchString

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