---
sidebar_position: 5
---

# Input

The button component is **SfInput**. This building block can be used to accept various types of user inputs.

## InputType

Types of inputs supported are as follows:

| InputType           | Description 
|---------------------|-------------------------------------------------
| name                | input field for accepting names
| email               | input field for accepting emails
| mobile              | input field for accepting mobiles
| gender              | input field for accepting gender
| date                | input field for accepting date
| dateOfBirth         | input field for accepting date of birth
| searchString        | input field for accepting search string

## Features

SfInput also has some additional in-built features.
- **Built-in Validations** - validation of user input happens according to the inputType as the user types
- **Enter Press Handling** - onEnterPressed callback can be used to detect when the user presses the enter key

## Props

| Prop           | Type           | Mandatory | Description 
|----------------|----------------|-----------|---------------------------------
| variant        | string         | yes       | theme variant such as primary, secondary, danger, etc.
| caption        | string         | yes       | button text
| inputType      | string         | yes       | type of input - "name"
| onComplete     | callback       | yes       | callback function when correct input is inserted (validation succeeds)
| value          | string         | no        | value to pre-fill the inputwith
| onEnterPressed | callback       | no        | callback function when user presses enter key
| hint           | string         | no        | placeholder value
| disabled       | boolean        | no        | flag to disable the button
| autoFocus      | boolean        | no        | flag, which sets autofocus on load
| mode           | string         | no        | "day" / "night"
| theme          | object         | no        | superflows theme object
| icon           | object         | no        | bootstrap icon to be shown after the text
| className      | string         | no        | any classes that need to passed to the SfButton component
| styles         | string         | no        | any styles that need to passed to the SfButton component

## Usage

### Imports

```jsx
import {SfInput} from 'react-sf-building-blocks'
```

### Usage

```jsx live
function Apps(props) {
  
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <SfInput inputType="name" variant={'primary'} caption={'First Name'} onComplete={(event) => {console.log('clicked', event);}}/>
                    </td>
                    <td>
                        <SfInput inputType="name" variant={'secondary'} caption={'Last Name'} onComplete={(event) => {console.log('clicked', event);}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfInput inputType="email" variant={'primary'} caption={'Email'} onComplete={(event) => {console.log('clicked', event);}}/>
                    </td>
                    <td>
                        <SfInput inputType="email" variant={'secondary'} caption={'Email'} onComplete={(event) => {console.log('clicked', event);}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfInput inputType="mobile" variant={'primary'} caption={'Mobile'} onComplete={(event) => {console.log('clicked', event);}}/>
                    </td>
                    <td>
                        <SfInput inputType="mobile" variant={'secondary'} caption={'Mobile'} onComplete={(event) => {console.log('clicked', event);}}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
```

## Variants

```jsx live
function Apps(props) {
  
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <SfInput inputType="name" variant={'primary'} caption={'First Name'} onComplete={(event) => {console.log('clicked', event);}}/>
                    </td>
                    <td>
                        <SfInput inputType="name" variant={'secondary'} caption={'Last Name'} onComplete={(event) => {console.log('clicked', event);}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfInput inputType="name" variant={'danger'} caption={'First Name'} onComplete={(event) => {console.log('clicked', event);}}/>
                    </td>
                    <td>
                        <SfInput inputType="name" variant={'success'} caption={'Last Name'} onComplete={(event) => {console.log('clicked', event);}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfInput inputType="mobile" variant={'warning'} caption={'Mobile'} onComplete={(event) => {console.log('clicked', event);}}/>
                    </td>
                    <td>
                        <SfInput inputType="mobile" variant={'info'} caption={'Mobile'} onComplete={(event) => {console.log('clicked', event);}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfInput inputType="email" variant={'dark'} caption={'Email'} onComplete={(event) => {console.log('clicked', event);}}/>
                    </td>
                    <td>
                        <SfInput inputType="email" variant={'light'} caption={'Email'} onComplete={(event) => {console.log('clicked', event);}}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
```

## Disabled

```jsx live
function Apps(props) {
  
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <SfInput inputType="name" variant={'primary'} caption={'First Name'} onComplete={(event) => {console.log('clicked', event);}} disabled={true}/>
                    </td>
                    <td>
                        <SfInput inputType="name" variant={'secondary'} caption={'Last Name'} onComplete={(event) => {console.log('clicked', event);}} disabled={true}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfInput inputType="email" variant={'danger'} caption={'Email'} onComplete={(event) => {console.log('clicked', event);}} disabled={true}/>
                    </td>
                    <td>
                        <SfInput inputType="email" variant={'success'} caption={'Email'} onComplete={(event) => {console.log('clicked', event);}} disabled={true}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfInput inputType="mobile" variant={'warning'} caption={'Mobile'} onComplete={(event) => {console.log('clicked', event);}} disabled={true}/>
                    </td>
                    <td>
                        <SfInput inputType="mobile" variant={'info'} caption={'Mobile'} onComplete={(event) => {console.log('clicked', event);}} disabled={true}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
```

## Icon

```jsx
import {CardHeading, EnvelopeFill, PhoneFill} from 'react-bootstrap-icons';
```

```jsx live
function Apps(props) {
  
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <SfInput inputType="name" variant={'primary'} caption={'First Name'} onComplete={(event) => {console.log('clicked', event);}} icon={<CardHeading />}/>
                    </td>
                    <td>
                        <SfInput inputType="name" variant={'secondary'} caption={'Last Name'} onComplete={(event) => {console.log('clicked', event);}} icon={<CardHeading />}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfInput inputType="email" variant={'danger'} caption={'Email'} onComplete={(event) => {console.log('clicked', event);}} icon={<EnvelopeFill />}/>
                    </td>
                    <td>
                        <SfInput inputType="email" variant={'success'} caption={'Email'} onComplete={(event) => {console.log('clicked', event);}} icon={<EnvelopeFill />}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfInput inputType="mobile" variant={'warning'} caption={'Mobile'} onComplete={(event) => {console.log('clicked', event);}} icon={<PhoneFill />}/>
                    </td>
                    <td>
                        <SfInput inputType="mobile" variant={'info'} caption={'Mobile'} onComplete={(event) => {console.log('clicked', event);}} icon={<PhoneFill />}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
```

## Hint

```jsx live
function Apps(props) {
  
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <SfInput inputType="name" variant={'primary'} caption={'First Name'} onComplete={(event) => {console.log('clicked', event);}} hint="Type here..."/>
                    </td>
                    <td>
                        <SfInput inputType="name" variant={'secondary'} caption={'Last Name'} onComplete={(event) => {console.log('clicked', event);}} hint="Type here..."/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfInput inputType="email" variant={'danger'} caption={'Email'} onComplete={(event) => {console.log('clicked', event);}} hint="abc@def.com"/>
                    </td>
                    <td>
                        <SfInput inputType="email" variant={'success'} caption={'Email'} onComplete={(event) => {console.log('clicked', event);}} hint="abc@def.com"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfInput inputType="mobile" variant={'warning'} caption={'Mobile'} onComplete={(event) => {console.log('clicked', event);}} hint="+<country-code><number>"/>
                    </td>
                    <td>
                        <SfInput inputType="mobile" variant={'info'} caption={'Mobile'} onComplete={(event) => {console.log('clicked', event);}} hint="+<country-code><number>"/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
```

## Pre-fill Value

```jsx live
function Apps(props) {
  
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <SfInput inputType="name" variant={'primary'} caption={'First Name'} onComplete={(event) => {console.log('clicked', event);}} value="Sneha"/>
                    </td>
                    <td>
                        <SfInput inputType="name" variant={'secondary'} caption={'Last Name'} onComplete={(event) => {console.log('clicked', event);}} value="G"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfInput inputType="email" variant={'danger'} caption={'Email'} onComplete={(event) => {console.log('clicked', event);}} value="sneha.g@abc.com"/>
                    </td>
                    <td>
                        <SfInput inputType="email" variant={'success'} caption={'Email'} onComplete={(event) => {console.log('clicked', event);}} value="sneha.g@abc.com"/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfInput inputType="mobile" variant={'warning'} caption={'Mobile'} onComplete={(event) => {console.log('clicked', event);}} value={{isd: "+91", number: '8422334455'}}/>
                    </td>
                    <td>
                        <SfInput inputType="mobile" variant={'info'} caption={'Mobile'} onComplete={(event) => {console.log('clicked', event);}} value={{isd: "+91", number: '8422334455'}}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
```

## Day / Night Mode

```jsx live
function Apps(props) {
  
    return (
        <table>
            <tbody>
                <tr>
                    <td style={{backgroundColor: 'black'}}>
                        <SfInput inputType="name" variant={'primary'} caption={'First Name'} onComplete={(event) => {console.log('clicked', event);}} value="Sneha" mode="night"/>
                    </td>
                    <td>
                        <SfInput inputType="name" variant={'primary'} caption={'First Name'} onComplete={(event) => {console.log('clicked', event);}} value="Sneha"/>
                    </td>
                </tr>
                <tr>
                    <td style={{backgroundColor: 'black'}}>
                        <SfInput inputType="email" variant={'secondary'} caption={'Email'} onComplete={(event) => {console.log('clicked', event);}} value="Sneha" mode="night"/>
                    </td>
                    <td>
                        <SfInput inputType="email" variant={'secondary'} caption={'Email'} onComplete={(event) => {console.log('clicked', event);}} value="Sneha"/>
                    </td>
                </tr>
                <tr>
                    <td style={{backgroundColor: 'black'}}>
                        <SfInput inputType="mobile" variant={'danger'} caption={'Mobile'} onComplete={(event) => {console.log('clicked', event);}} value="Sneha" mode="night" value={{isd: "+91", number: '8422334455'}}/>
                    </td>
                    <td>
                        <SfInput inputType="mobile" variant={'danger'} caption={'Mobile'} onComplete={(event) => {console.log('clicked', event);}} value="Sneha" value={{isd: "+91", number: '8422334455'}}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
```