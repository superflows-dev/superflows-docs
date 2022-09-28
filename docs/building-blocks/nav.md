---
sidebar_position: 6
---

# Nav

The button component is **SfNav**. This building block is the navigation bar provided by Superflows.

## Features

SfNav has the following built-in features.
- **Custom Branding** - Brand name and brand logo are customizable, just pass them via props
- **Custom Menus** - Menu options are fully customizable, just pass your menu structure as a JSON object via props
- **Custom Icons** - All icons fully customizable, just pass them via props
- **Custom Design and Look & Feel** - Design of SfNav is fully customizable, you can pass class names or css styles directly to each individual sub-component
- **Extendible** - SfNav functionality can be extended, you can place custom components inside the navigation bar
- **Responsive** - SfNav renders separately in portrait and landscape mode

## Usage

### Imports

```jsx
import {SfNav} from 'react-sf-building-blocks'
```

### Basic Usage

Basic usage is straight forward. Simply import it and use it without any props. The navigation bar will render with the default props. Please note that the navigation bar is responsive. If you are viewing this documentation on a desktop or laptop, you will see the desktop version. Open the documentation on your mobile device to view the mobile version.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav/>
        </div>
    );
}
```

Before looking at further usage, please go through all the props first.

## Props

| Prop                          | Type           | Mandatory | Description 
|-------------------------------|----------------|-----------|---------------------------------
| variant                       | string         | no        | theme variant such as primary, secondary, danger, etc.
| theme                         | object         | no        | superflows theme object
| brand                         | string         | no        | brand name 
| brandLogo                     | img            | no        | brand logo image
| menu                          | json object    | no        | json object which renders the menu
| menuIcon                      | icon           | no        | icon for menu  in portrait view
| optionsIcon                   | icon           | no        | icon for options in portrait view
| showSearch                    | boolean        | no        | flag, which shows / hides search input
| showSignIn                    | boolean        | no        | flag, which shows / hides sign in button
| searchCaption                 | string         | no        | caption of the search input
| signInCaption                 | string         | no        | caption of the sign in button
| searchIcon                    | object         | no        | icon for the search input
| stylesBrand                   | json object    | no        | styles object to customize the brand name
| stylesBrandLogo               | json object    | no        | styles object to customize the brand logo
| stylesMenu                    | json object    | no        | styles object to customize the menu
| stylesSubMenu                 | json object    | no        | styles object to customize the sub menu
| stylesMenuMobile              | json object    | no        | styles object to customize the mobile menu
| stylesSubMenuMobile           | json object    | no        | styles object to customize the mobile sub menu
| stylesMenuMobileSelected      | json object    | no        | styles object to customize the selected mobile menu
| stylesSignIn                  | json object    | no        | styles object to customize the sign in button
| stylesSearchContainer         | json object    | no        | styles object to customize the search input container
| stylesSearchInput             | json object    | no        | styles object to customize the search input
| stylesContainerDesktop        | json object    | no        | styles object to customize the nav container for landscape view
| stylesContainerMobile         | json object    | no        | styles object to customize the nav container for portrait view
| stylesContainerRightMenu      | json object    | no        | styles object to customize the right menu container for portrait view
| classNameBrand                | json object    | no        | class names string to customize the brand name
| classNameBrandLogo            | json object    | no        | class names string to customize the brand logo
| classNameSignIn               | json object    | no        | class names string to customize the sign in button
| classNameMenu                 | json object    | no        | class names string to customize the menu
| classNameSubMenu              | json object    | no        | class names string to customize the sub menu
| classNameMenuMobile           | json object    | no        | class names string to customize the mobile menu
| classNameSubMenuMobile        | json object    | no        | class names string to customize the mobile sub menu
| classNameMenuMobileSelected   | json object    | no        | class names string to customize the selected mobile menu
| classNameSearchContainer      | json object    | no        | class names string to customize the search input container
| classNameSearchInput          | json object    | no        | class names string to customize the search input
| classNameContainerDesktop     | json object    | no        | class names string to customize the nav container for landscape view
| classNameContainerMobile      | json object    | no        | class names string to customize the nav container for portrait view
| classNameContainerRightMenu   | json object    | no        | class names string to customize the right menu container for portrait view
| onHomePressed                 | callback       | no        | callback after clicking on home button 
| onSearchPressed               | callback       | no        | callback after search text is entered
| onSignInPressed               | callback       | no        | callback after clicking on sign in button
| onMenuClicked                 | callback       | no        | callback after clicking on any menu

## Variants

Standard variants are available.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav variant="primary"/>
            </div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav variant="secondary"/>
            </div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav variant="danger"/>
            </div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav variant="success"/>
            </div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav variant="warning"/>
            </div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav variant="info"/>
            </div>
            <div style={{paddingBottom: '20px', paddingTop: '20px', backgroundColor: 'gray'}}>
                <SfNav variant="light"/>
            </div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav variant="dark"/>
            </div>
        </div>
    );
}
```

## Brand

### Anatomy

Brand section has two customizable elements
- Brand name
- Brand logo

They are highlighed below.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav brandLogo="https://superflows.dev/img/superflows_gray_transparent_200.png" stylesBrand={{border: 'solid 3px red'}} stylesBrandLogo={{border: 'solid 3px red'}}/>
            </div>
        </div>
    );
}
```

### Brand Name

You can change the brand name as shown below.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav brand="Your Brand"/>
            </div>
        </div>
    );
}
```

### Brand Logo

You can add or change the brand logo as shown below.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav brandLogo="https://superflows.dev/img/superflows_gray_transparent_200.png"/>
            </div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav brandLogo="https://superflows.dev/img/superflows_gray_transparent_200.png" brand=""/>
            </div>
        </div>
    );
}
```

### Advanced Customization

If you are interested in obtaining complete control over the look and feel, you already have it. You can completely override the base css properties of the brand logo and brand elements according to your requirements. Some examples are shown below.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav 
                    brandLogo="https://superflows.dev/img/superflows_gray_transparent_200.png" 
                    stylesBrandLogo={{
                        backgroundColor: 'white', 
                        borderRadius: '10px', 
                        paddingRight: '0px', 
                        marginRight: '10px', 
                        border: 'solid 1px black'
                    }}/>
            </div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav 
                    brandLogo="https://superflows.dev/img/superflows_gray_transparent_200.png" 
                    stylesBrand={{
                        color: 'black',
                        textShadow: '1px 2px 2px gray'
                    }}
                    stylesBrandLogo={{
                        backgroundColor: 'white', 
                        borderRadius: '10px', 
                        paddingRight: '0px', 
                        marginRight: '10px', 
                        border: 'solid 1px black'
                    }}/>
            </div>
        </div>
    );
}
```

## Menu

### Anatomy

Menu section has two customizable elements
- Menus (Desktop & Mobile)
- Submenus (Desktop & Mobile)

They are highlighed below.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav 
                    stylesMenu={{border: 'solid 3px red'}} 
                    stylesSubMenu={{border: 'solid 3px red'}}
                    stylesMenuMobile={{border: 'solid 3px red'}}
                    stylesMenuMobileSelected={{border: 'solid 3px red'}}
                    stylesSubMenuMobile={{border: 'solid 3px red'}}/>
            </div>
        </div>
    );
}
```

### Customize The Menu

You can customize the menu by using the menu prop.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav menu={[{caption: "About", link: "about"}, [{caption: "Solutions", link: "solutions"}]]}/>
            </div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav brandLogo="https://superflows.dev/img/superflows_gray_transparent_200.png" menu={[{caption: "About", link: "about"}, [{caption: "Solutions", link: "solutions"}, {caption: "Products", link: "products"}, {caption: "Services", link: "services"}], [{caption: "Contact", link: "contact"}, {caption: 'Instagram', link: "instagram"}]]}/>
            </div>
        </div>
    );
}
```

### Menu Callback

You can receive a callback after user presses any menu. Callback returns the menu link.

```jsx
import {Search} from 'react-bootstrap-icons';
```

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav onMenuClicked={(value) => {alert(value)}}/>
            </div>
        </div>
    );
}
```

### Advanced Customization

If you are interested in obtaining complete control over the look and feel, you already have it. You can completely override the base css properties of the menu elements. Some examples are shown below.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav 
                    stylesMenu={{backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px'}} 
                    stylesSubMenu={{backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', border: 'solid 1px gray'}}
                    stylesMenuMobile={{backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px', border: 'solid 1px gray'}}
                    stylesMenuMobileSelected={{backgroundColor: 'white', color: 'black', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px', border: 'solid 1px gray'}}
                    stylesSubMenuMobile={{backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px', border: 'solid 1px gray'}}/>
            </div>
        </div>
    );
}
```

## Search

### Anatomy

Search has the following customizable elements
- Search Container
- Search Caption
- Search Icon

They are highlighed below.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav 
                    stylesSearchContainer={{border: 'solid 3px red'}} />
            </div>
        </div>
    );
}
```

### Search Visibility

You can change show / hide the visibility of the search section as shown below.


```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav showSearch={false}/>
            </div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav showSearch={true}/>
            </div>
        </div>
    );
}
```

### Search Caption

You can change the search caption as shown below.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav searchCaption="Find"/>
            </div>
        </div>
    );
}
```

### Search Icon

You can change add an icon to the search section as shown below.

```jsx
import {Search} from 'react-bootstrap-icons';
```

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav searchIcon={<Search />} searchCaption=""/>
            </div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav searchIcon={<Search />}/>
            </div>
        </div>
    );
}
```

### Search Callback

You can receive a callback after user enters text into the search input and presses the return key. 

```jsx
import {Search} from 'react-bootstrap-icons';
```

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav onSearchPressed={(value) => {alert(value)}}/>
            </div>
        </div>
    );
}
```

### Advanced Customization

If you are interested in obtaining complete control over the look and feel, you already have it. You can completely override the base css properties of the search elements. Some examples are shown below.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav 
                    stylesSearchContainer={{backgroundColor: 'black', color: 'white', border: 'solid 1px gray'}}
                    stylesSearchInput={{backgroundColor: '#444', borderRadius: '10px', color: '#efefef', paddingTop: '5px', paddingBottom: '5px'}}
                    />
            </div>
        </div>
    );
}
```

## Sign In

### Anatomy

Sign In section has the following customizable elements
- Sign In Button

They are highlighed below.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav stylesSignIn={{border: 'solid 3px red'}}/>
            </div>
        </div>
    );
}
```

### SignIn Visibility

You can change show / hide the visibility of the sign in section as shown below.


```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav showSignIn={false}/>
            </div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav showSignIn={true}/>
            </div>
        </div>
    );
}
```

### SignIn Callback

You can receive a callback after user presses the sign in button. 

```jsx
import {Search} from 'react-bootstrap-icons';
```

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav onSignInPressed={() => {alert('Sign in pressed!')}}/>
            </div>
        </div>
    );
}
```


### Advanced Customization

If you are interested in obtaining complete control over the look and feel, you already have it. You can completely override the base css properties of the sign in button. Some examples are shown below.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav 
                    stylesSignIn={{backgroundColor: 'black', color: 'white', border: 'solid 1px gray'}}
                    />
            </div>
        </div>
    );
}
```
