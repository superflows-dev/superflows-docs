---
sidebar_position: 4
---

# Button

The button component is **SfButton**.

## Props

| Prop          | Type           | Mandatory | Description 
|---------------|----------------|-----------|---------------------------------
| variant       | string         | yes       | theme variant such as primary, secondary, danger, etc.
| type          | string         | yes       | theme type such as filled or outlined
| caption       | string         | yes       | button text
| onClick       | callback       | yes       | onClick callback function
| disabled      | boolean        | no        | flag to disable the button
| theme         | object         | no        | superflows theme object
| icon          | object         | no        | bootstrap icon to be shown after the text
| className     | string         | no        | any classes that need to passed
| styles        | string         | no        | any styles that need to passed

## Usage

### Imports

```jsx
import { SfButton } from 'react-sf-building-blocks'
```

### Usage

```jsx live
function Apps(props) {
  
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <SfButton variant={'primary'} type={'filled'} caption={'Next'} onClick={(event) => {alert('clicked');}}/>
                    </td>
                    <td>
                        <SfButton variant={'primary'} type={'outlined'} caption={'Next'} onClick={(event) => {alert('clicked');}}/>
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
                        <SfButton variant={'primary'} type={'filled'} caption={'Primary Filled'} onClick={(event) => {alert('clicked');}}/>
                    </td>
                    <td>
                        <SfButton variant={'primary'} type={'outlined'} caption={'Primary Outlined'} onClick={(event) => {alert('clicked');}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfButton variant={'secondary'} type={'filled'} caption={'Secondary Filled'} onClick={(event) => {alert('clicked');}}/>
                    </td>
                    <td>
                        <SfButton variant={'secondary'} type={'outlined'} caption={'Secondary Outliined'} onClick={(event) => {alert('clicked');}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfButton variant={'danger'} type={'filled'} caption={'Danger Filled'} onClick={(event) => {alert('clicked');}}/>
                    </td>
                    <td>
                        <SfButton variant={'danger'} type={'outlined'} caption={'Danger Outlined'} onClick={(event) => {alert('clicked');}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfButton variant={'success'} type={'filled'} caption={'Success Filled'} onClick={(event) => {alert('clicked');}}/>
                    </td>
                    <td>
                        <SfButton variant={'success'} type={'outlined'} caption={'Success Outlined'} onClick={(event) => {alert('clicked');}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfButton variant={'warning'} type={'filled'} caption={'Warning Filled'} onClick={(event) => {alert('clicked');}}/>
                    </td>
                    <td>
                        <SfButton variant={'warning'} type={'outlined'} caption={'Warning Outlined'} onClick={(event) => {alert('clicked');}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfButton variant={'dark'} type={'filled'} caption={'Dark Filled'} onClick={(event) => {alert('clicked');}}/>
                    </td>
                    <td>
                        <SfButton variant={'dark'} type={'outlined'} caption={'Dark Outlined'} onClick={(event) => {alert('clicked');}}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <SfButton variant={'light'} type={'filled'} caption={'Light Filled'} onClick={(event) => {alert('clicked');}}/>
                    </td>
                    <td>
                        <SfButton variant={'light'} type={'outlined'} caption={'Light Outlined'} onClick={(event) => {alert('clicked');}}/>
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
                        <SfButton variant={'primary'} type={'filled'} caption={'Primary Filled'} disabled={true} onClick={(event) => {alert('clicked');}}/>
                    </td>
                    <td>
                        <SfButton variant={'primary'} type={'outlined'} caption={'Primary Outlined'} disabled={true} onClick={(event) => {alert('clicked');}}/>
                    </td>
                </tr>  
            </tbody>
        </table>
    );
}
```

## Icon

```jsx
import {ArrowRight} from 'react-bootstrap-icons';
```

```jsx live
function Apps(props) {
  
    return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <SfButton variant={'primary'} type={'filled'} caption={'Primary Filled'} onClick={(event) => {alert('clicked');}} icon={<ArrowRight />}/>
                    </td>
                    <td>
                        <SfButton variant={'primary'} type={'outlined'} caption={'Primary Outlined'} onClick={(event) => {alert('clicked');}} icon={<ArrowRight />}/>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
```
