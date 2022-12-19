---
sidebar_position: 6
---

# Navigation Bar

The navigation bar component is **SfNav**. This building block is the navigation bar provided by Superflows.

## Features

SfNav has the following built-in features.
- [**Brand Info**](#brand) - Brand name and brand logo are customizable, just pass them via props
- [**Menus**](#menu) - Menu options are fully customizable, just pass your menu structure as a JSON object via props
- [**Search Input**](#search) - SfNav comes with a search input field
- [**Call-to-action Button**](#sign-in) - SfNav comes with a call-to-action button, which can be used to highlight key actions such as sign in and subscribe.
- [**Profile Section**](#profile) - User profile section is also included, which can be used to show the status of a signed in user. It also includes a separate profile menu, that is JSON-customizable as well.
- [**Back Button**](#back) - SfNav transforms itself into a navbar with a back button on inner screens / pages for history-based back navigation
- [**Notifications**](#notifications) - Notifications feature is in-built, which includes a notification bell and a JSON-customizable   dropdown list to show recent notifications
- [**Announcement Banner**](#announcement-banner) - Provision for showing an announcement banner is also given on the top of the navigation bar
- **Routing** - Client-side routing is built inside this component, no external routing library required
- **Customizability** - All features mentioned above are inherently customizable. You can override the basic look and feel by passing your own inline css or stylenames to the SfNav component.
- **Responsive** - SfNav is fully responsive and adapts to all screen sizes
- **Extendibility** - In some places, SfNav also allows you to inject your own components, for greater customizability

## Usage

### Imports

```jsx
import {SfNav} from 'react-sf-building-blocks'
```

### Basic Usage

Basic usage is straight forward. Simply import it and use it without any props. The navigation bar will render with the default props. Please note that the navigation bar is responsive. If you are viewing this documentation on a desktop or laptop, you will see the desktop version. Open the documentation on your mobile device to view the mobile version.

<iframe width="380" height="220" src="https://www.youtube.com/embed/J2jJO9_EtUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br /><br />

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav/>
        </div>
    );
}
```


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
                <SfNav variant="dark"/>
            </div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav variant="light"/>
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
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav brandLogo="https://superflows.dev/img/superflows_gray_transparent_200.png" stylesBrand={{border: 'solid 3px red'}} stylesBrandLogo={{border: 'solid 3px red'}}/>
        </div>
    );
}
```

### Brand Name

You can change the brand name as shown below.

```jsx live
function Apps(props) {
  
    return (
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav brand="Your Brand"/>
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

### Video Tutorial

<iframe width="380" height="220" src="https://www.youtube.com/embed/cT9g195G59Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br />

## Menu

### Anatomy

Menu section has two customizable elements
- Menus (Desktop & Mobile)
- Submenus (Desktop & Mobile)

They are highlighed below.

```jsx live
function Apps(props) {
  
    return (
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav 
                stylesMenu={{border: 'solid 3px red'}} 
                stylesSubMenu={{border: 'solid 3px red'}}
                stylesMenuMobile={{border: 'solid 3px red'}}
                stylesMenuMobileSelected={{border: 'solid 3px red'}}
                stylesSubMenuMobile={{border: 'solid 3px red'}}/>
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

```jsx live
function Apps(props) {
  
    return (
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav onMenuClicked={(value) => {alert(value)}}/>
        </div>
    );
}
```

### Advanced Customization

If you are interested in obtaining complete control over the look and feel, you already have it. You can completely override the base css properties of the menu elements. Some examples are shown below.

```jsx live
function Apps(props) {
  
    return (
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav 
                stylesMenu={{backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px'}} 
                stylesSubMenu={{backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', border: 'solid 1px gray'}}
                stylesMenuMobile={{backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px', border: 'solid 1px gray'}}
                stylesMenuMobileSelected={{backgroundColor: 'white', color: 'black', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px', border: 'solid 1px gray'}}
                stylesSubMenuMobile={{backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px', border: 'solid 1px gray'}}/>
        </div>
    );
}
```

### Video Tutorial

<iframe width="380" height="220" src="https://www.youtube.com/embed/h-wR_oLW60U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br />


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
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav 
                stylesSearchContainer={{border: 'solid 3px red'}} />
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
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav searchCaption="Find"/>
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
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav onSearchPressed={(value) => {alert(value)}}/>
        </div>
    );
}
```

### Advanced Customization

If you are interested in obtaining complete control over the look and feel, you already have it. You can completely override the base css properties of the search elements. Some examples are shown below.

```jsx live
function Apps(props) {
  
    return (
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav 
                stylesSearchContainer={{backgroundColor: 'black', color: 'white', border: 'solid 1px gray'}}
                stylesSearchInput={{backgroundColor: '#444', borderRadius: '10px', color: '#efefef', paddingTop: '5px', paddingBottom: '5px'}}
                />
        </div>
    );
}
```

### Video Tutorial

<iframe width="380" height="220" src="https://www.youtube.com/embed/2mnL8fSgS80" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br />


## Sign In

### Anatomy

Sign In section has the following customizable elements
- Sign In Button

They are highlighed below.

```jsx live
function Apps(props) {
  
    return (
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav stylesSignIn={{border: 'solid 3px red'}}/>
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

### SignIn Caption

You can change the caption of the sign in button as shown below.


```jsx live
function Apps(props) {
  
    return (
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav signInCaption="Log In"/>
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
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav onSignInPressed={() => {alert('Sign in pressed!')}}/>
        </div>
    );
}
```


### Advanced Customization

If you are interested in obtaining complete control over the look and feel, you already have it. You can completely override the base css properties of the sign in button. Some examples are shown below.

```jsx live
function Apps(props) {
  
    return (
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav 
                stylesSignIn={{backgroundColor: 'black', color: 'white', border: 'solid 1px gray'}}
                />
        </div>
    );
}
```


### Video Tutorial

<iframe width="380" height="220" src="https://www.youtube.com/embed/Zs8TgAlDgJo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br />


## Profile

### Anatomy

Profile section has the following customizable elements
- Profile Picture
- Profile Menu
- Profile Preamble
- Profile Component

Profile picture is highlighed below. Click on the profile picture. Profile Menu will dropdown. Profile Preamble and Profile Component are two locations, where you can insert custom components. Let us go through them in subsequent sections.

```jsx live
function Apps(props) {
  
    return (
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav showProfile={true} showSignIn={false} profileMenu={[{caption: "Profile", link: "profile"}, [{caption: "Settings", link: "support"}, {caption: "Notifications", link: "notifications"}, {caption: "Privacy", link: "privacy"}], {caption: "Support", link: "support"}, {caption: 'Upgrade', link: "upgrade"}]} profilePicture='https://i.pinimg.com/736x/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4--free-avatars-online-profile.jpg' stylesProfilePicture={{border: 'solid 3px red'}} />
        </div>
    );
}
```

### Customize The Menu

You can customize the profile menu by using the profileMenu prop as shown below. Pass a json object in the format shown below to the profileMenu prop and the profile drop down menu will get populated accordingly.

```jsx live
function Apps(props) {
  
    return (
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav showProfile={true} showSignIn={false} profileMenu={[{caption: "Profile", link: "profile"}, [{caption: "Settings", link: "support"}, {caption: "Notifications", link: "notifications"}, {caption: "Privacy", link: "privacy"}], {caption: "Support", link: "support"}, {caption: 'Upgrade', link: "upgrade"}]} profilePicture='https://i.pinimg.com/736x/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4--free-avatars-online-profile.jpg' onMenuClicked={(link) => {alert(link)}}/>
        </div>
    );
}
```

### Extend The Functionality: Profile Preamble

You can insert a custom component just before the drop down menu. Look at the example below. A custom component is passed to the profilePreamble prop.

```jsx live
function Apps(props) {
  
    return (
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav showProfile={true} showSignIn={false} profileMenu={[{caption: "Profile", link: "profile"}, [{caption: "Settings", link: "support"}, {caption: "Notifications", link: "notifications"}, {caption: "Privacy", link: "privacy"}], {caption: "Support", link: "support"}, {caption: 'Upgrade', link: "upgrade"}]} profilePicture='https://i.pinimg.com/736x/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4--free-avatars-online-profile.jpg' profilePreamble={<div style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px'}}><small>Hi Hrushi!</small><br /><small><small><i>Welcome to Superflows!</i></small></small></div>}  />
        </div>
    );
}
```

### Extend The Functionality: Profile Component

You can insert a custom component just after the drop down menu. Look at the example below. A custom component is passed to the profileComponent prop.

```jsx live
function Apps(props) {
  
    return (

        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav showProfile={true} showSignIn={false} profileMenu={[{caption: "Profile", link: "profile"}, [{caption: "Settings", link: "support"}, {caption: "Notifications", link: "notifications"}, {caption: "Privacy", link: "privacy"}], {caption: "Support", link: "support"}, {caption: 'Upgrade', link: "upgrade"}]} profilePicture='https://i.pinimg.com/736x/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4--free-avatars-online-profile.jpg' profileComponent={<div style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px'}}><small>Sign Out</small></div>}   />
        </div>

    );
}
```

### Menu Callback

You can receive a callback after user presses any profile menu. Callback returns the menu link.


```jsx live
function Apps(props) {
  
    return (
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav showProfile={true} showSignIn={false} profileMenu={[{caption: "Profile", link: "profile"}, [{caption: "Settings", link: "support"}, {caption: "Notifications", link: "notifications"}, {caption: "Privacy", link: "privacy"}], {caption: "Support", link: "support"}, {caption: 'Upgrade', link: "upgrade"}]} profilePicture='https://i.pinimg.com/736x/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4--free-avatars-online-profile.jpg' onMenuClicked={(value) => {alert(value)}}/>
        </div>
    );
}
```


### Advanced Customization

If you are interested in obtaining complete control over the look and feel, you already have it. You can completely override the base css properties of the profile picture, picture container and the menu. Profile preamble and profile component are anyways custom components.

```jsx live
function Apps(props) {
  
    return (
        <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
            <SfNav 
            showSignIn={false} 
                    showProfile={true} 
                    profileMenu={
                    [{caption: "Profile", link: "profile"}, [{caption: "Settings", link: "support"}, {caption: "Notifications", link: "notifications"}, {caption: "Privacy", link: "privacy"}], {caption: "Support", link: "support"}, {caption: 'Upgrade', link: "upgrade"}]
                    } 
                    profilePreamble={
                    <div style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px'}}><small>Hi Hrushi!</small><br /><small><small><i>Welcome to Superflows!</i></small></small></div>
                    } 
                    profileComponent={
                    <div style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px'}}><small>Sign Out</small></div>
                    } 
                    profilePicture='https://i.pinimg.com/736x/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4--free-avatars-online-profile.jpg' 
                    stylesProfilePictureContainer={
                    {backgroundColor: 'black', padding: '2px', color: 'white', borderRadius: '5px'}
                    } 
                    stylesProfilePreamble={
                    {backgroundColor: 'white', color: 'black'}} stylesProfileComponent={{backgroundColor: 'white', color: 'black'}
                    } 
                    stylesMenu={
                    {backgroundColor: 'black', color: 'white', paddingTop: '3px', paddingBottom: '3px', paddingLeft: '10px', paddingRight: '10px', borderRadius: '5px'}
                    } 
                    stylesSubMenu={
                    {backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', border: 'solid 1px gray'}
                    }
                    stylesMenuMobile={
                    {backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px', border: 'solid 1px gray'}
                    }
                    stylesMenuMobileSelected={
                    {backgroundColor: 'white', color: 'black', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px', border: 'solid 1px gray'}
                    }
                    stylesSubMenuMobile={
                    {backgroundColor: 'black', color: 'white', paddingLeft: '5px', paddingRight: '5px', borderRadius: '5px', border: 'solid 1px gray'}
                    }
            />
        </div>
    );
}
```


### Video Tutorial

<iframe width="380" height="220" src="https://www.youtube.com/embed/8uXgtEb9Ucw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br />

## Back

### Anatomy

Back section has the following customizable elements
- Back Button

Back button is highlighed below. Back button is usually required on inner screens / pages, where back navigation functionality is required

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showBack={true} menu={[]} showSearch={false} showSignIn={false} stylesBack={{border: 'solid 3px red'}} />
        </div>
    );
}
```

### Show / Hide the Back button

By default, the menu button is shown and the back button is not shown. To show the back button, set the showBack prop to true. Please note that after the back button is displayed, the menu button is not shown. Only one of these two buttons can be shown at one time. Usually the back button on the navbar will be required on the inner screens, where the menu, search and sign in button may also not be required. You can remove them as well. 

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showBack={true} onBackPressed={() => {alert('back pressed');}} menu={[]} showSearch={false} showSignIn={false} />
        </div>
    );
}
```


### Back Callback

You can receive a callback after user presses the back button, after subscribing to the onBackPressed prop.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showBack={true} onBackPressed={() => {alert('back pressed');}} menu={[]} showSearch={false} showSignIn={false} />
        </div>
    );
}
```

### Back Icon

You can change the back icon by passing your own icon object to the backIcon prop. This example uses an icon from the React Bootstrap icon library. You can use any other icon library as well.

```jsx
import {ArrowLeft} from 'react-bootstrap-icons'
```

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showBack={true} onBackPressed={() => {alert('back pressed');}} menu={[]} showSearch={false} showSignIn={false} backIcon={<ArrowLeft style={{paddingTop: '5px'}} />}/>
        </div>
    );
}
```

### Advanced Customization

If you are interested in obtaining complete control over the look and feel, you already have it. You can completely override the base css properties of the back icon. An example is show below:

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showBack={true} onBackPressed={() => {alert('back pressed');}} menu={[]} showSearch={false} showSignIn={false} stylesBack={{backgroundColor: 'black', color: 'white', padding: '0px', width: '20px', height: '20px', textAlign: 'center', lineHeight: '1.1', borderRadius: '10px', marginRight: '10px'}} />
        </div>
    );
}
```

### Video Tutorial

<iframe width="380" height="220" src="https://www.youtube.com/embed/r8VIwvYWOCU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br />

## Notifications

### Anatomy

Notifications section is composed of the following customizable elements
- Bell
- Notification List
- View All Button

All of these components are highlighted below:

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showNotification={true} notificationList={[
                {id: 1, title: "First one!", description: 'This is the description of the firs notification.', timestampReceived: "2 days ago", read: false},
                {id: 2, title: "2nd notification", description: 'Displaying notifications is super simple!', timestampReceived: "5 days ago", read: true},
                {id: 3, title: "Get started now", description: 'Create the notification list using a simple JSON array and your job is done.', timestampReceived: "1 month ago", read: false}]} stylesNotificationIcon={{border: 'solid 3px red'}} stylesNotificationListContainer={{border: 'solid 3px red'}} stylesNotificationViewAll={{border: 'solid 3px red'}}/>
        </div>
    );
}
```

### Show / Hide Notifications

By default notifications are visible. To show them, set the showNotification prop to true.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav />
            <br />
            <SfNav showNotification={true}/>
        </div>
    );
}
```

### Bell Icon

The default bell icon is from the unicode character set. You can use any icon and icon library of your choice. To change the bell icon, pass your icon object to the notificationIcon prop.

```jsx
import {Bell} from 'react-bootstrap-icons';
```

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showNotification={true} notificationList={[
                {id: 1, title: "First one!", description: 'This is the description of the firs notification.', timestampReceived: "2 days ago", read: false},
                {id: 2, title: "2nd notification", description: 'Displaying notifications is super simple!', timestampReceived: "5 days ago", read: true},
                {id: 3, title: "Get started now", description: 'Create the notification list using a simple JSON array and your job is done.', timestampReceived: "1 month ago", read: false}]} notificationIcon={<Bell style={{marginTop: '5px'}}/>} />
        </div>
    );
}
```

### Notification List

The notification list can be customized by passing a json array to the notificationList prop. Look at the example below.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showNotification={true} notificationList={[
                {id: 1, title: "New Follower!", description: 'Ram Joshi has started following you', timestampReceived: "2 days ago", read: false},
                {id: 2, title: "Richa reacted to your comment", description: 'Thanks I feel the same', timestampReceived: "5 days ago", read: true}]} />
            <br />
            <SfNav showNotification={true} notificationList={[
                {id: 1, title: "New Follower!", description: 'Ram Joshi has started following you', timestampReceived: "2 days ago", read: true},
                {id: 2, title: "Richa reacted to your comment", description: 'Thanks I feel the same', timestampReceived: "5 days ago", read: true}]} />
        </div>
    );
}
```

### New Notification Indication

If the notification list contains an unread notification, a red badge notification indicator will be shown on the notification icon. If all the notifications are read, it is not shown.

### Notification Callback

Subscribe to the onNotificationClicked prop to listen to the notification click events.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showNotification={true} onNotificationClicked={(value) => {alert('Clicked on notification: ' + value.title)}} />
        </div>
    );
}
```

### View All Callback

Subscribe to the onViewAllClicked prop to listen to the view all button press event.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showNotification={true} onViewAllNotificationsClicked={() => {alert('On View All Clicked')}} notificationList={[
                {id: 1, title: "New Follower!", description: 'Ram Joshi has started following you', timestampReceived: "2 days ago", read: true},
                {id: 2, title: "Richa reacted to your comment", description: 'Thanks I feel the same', timestampReceived: "5 days ago", read: true}]} />
        </div>
    );
}
```

### Advanced Customization

If you are interested in obtaining complete control over the look and feel, you already have it. You can completely override the base css properties of the notification elements according to your requirements. Showing you an example below.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav 
                showNotification={true} 
                onViewAllNotificationsClicked={() => {alert('On View All Clicked')}} 
                notificationList={[
                    {id: 1, title: "New Follower!", description: 'Ram Joshi has started following you', timestampReceived: "2 days ago", read: false},
                    {id: 2, title: "Richa reacted to your comment", description: 'Thanks I feel the same', timestampReceived: "5 days ago", read: true}]}
                stylesNotificationIcon={{backgroundColor: '#ddd', color: 'black', height: '30px', width: '30px', justifyContent: 'center', borderRadius: '15px'}}
                stylesNotificationUnRead={{backgroundColor: 'black'}}
                stylesNotificationViewAll={{color: 'black'}}
                notificationIcon={<Bell style={{marginTop: '5px'}} />}  />
        </div>
    );
}
```

### Video Tutorial

<iframe width="380" height="220" src="https://www.youtube.com/embed/lsqwMUipZTg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


<br />

## Announcement Banner

### Anatomy

Banner section is composed of the following customizable elements
- Container
- Banner Text
- Call to action button

All of these components are highlighted below:

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showBanner={true} stylesBannerContainer={{border: 'solid 3px red'}} stylesBannerText={{border: 'solid 3px red'}} stylesBannerCta={{border: 'solid 3px red'}}/>
        </div>
    );
}
```

### Show / Hide Banner

By default banner is not visible. To show it, set the showBanner prop to true.

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showBanner={true}/>
        </div>
    );
}
```

### Banner Text

To change the banner text, set the string value to the bannerText property. For mobile screens, a separate (optional) prop bannerTextMobile has also been provided, which you can use as well.


```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showBanner={true} bannerText={"30% OFF On Select Products 💰"} bannerTextMobile={"30% OFF 💰"} />
        </div>
    );
}
```

### Banner Call-to-Action

To change the call to action text, set the string value to the bannerCta  property. For mobile screens, a separate (optional) prop bannerCtaMobile has also been provided, which you can use as well!


```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showBanner={true} bannerText={"30% Summer Discount 💰"} bannerTextMobile={"30% OFF 💰"} bannerCta={"Buy Now"} bannerCtaMobile={"Buy"} />
        </div>
    );
}
```

### Call-to-Action Callback

You can subscribe to the onBannerCtaPressed prop to listen to get a callback after the user clicks on the call-to-action button. As follows:

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showBanner={true} bannerText={"30% Summer Discount 💰"} bannerTextMobile={"30% OFF 💰"} bannerCta={"Buy Now"} bannerCtaMobile={"Buy"} onBannerCtaPressed={() => {alert('clicked on cta');}} />
        </div>
    );
}
```


### Dismiss Button

By default, the dismiss button is visible. You can also hide it as show below:


```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showBanner={true} showBanner={true} bannerText={"30% Summer Discount 💰"} bannerTextMobile={"30% OFF 💰"} bannerCta={"Buy Now"} bannerCtaMobile={"Buy"} bannerEnableDismiss={false} />
            <br /><br /><br />
            <SfNav showBanner={true} showBanner={true} bannerText={"30% Summer Discount 💰"} bannerTextMobile={"30% OFF 💰"} bannerCta={"Buy Now"} bannerCtaMobile={"Buy"} bannerEnableDismiss={true} />
        </div>
    );
}
```

### Advanced Customization

If you need full control over the look and feel of the banner section, you can utilize inline css. Just use any of the banner related style properties. Showing an example below:


```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showBanner={true} showBanner={true} bannerText={"30% Summer Discount 💰"} bannerTextMobile={"30% OFF 💰"} bannerCta={"Buy Now"} bannerCtaMobile={"Buy"} stylesBannerContainer={{backgroundColor: 'black', paddingTop: '10px', paddingBottom: '10px'}} stylesBannerCta={{backgroundColor: 'white', color: 'black', fontSize: '120%'}} stylesBannerText={{fontSize: '120%'}} />
        </div>
    );
}
```

### Inject Custom Banner Component

You can also replace the existing banner with your own custom component. Just assign your custom component to the bannerComponent prop. You can also set an optional custom component differently for mobiles, use the bannerComponentMobile prop. An example is shown below:

```jsx live
function Apps(props) {
  
    return (
        <div>
            <SfNav showBanner={true} bannerComponent={<div style={{backgroundColor: 'black', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}><div>We will be down for maintenance tomorrow 13:00 - 13:30 hrs</div><img src="https://www.route66sodas.com/wp-content/uploads/2019/01/Alert.gif" style={{width: '30px', height: '30px', marginBottom: '5px', marginLeft: '10px'}}/></div>} bannerComponentMobile={<div style={{backgroundColor: 'black', height: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white'}}><div>Maintenance tomorrow 13:00 hrs</div><img src="https://www.route66sodas.com/wp-content/uploads/2019/01/Alert.gif" style={{width: '30px', height: '30px', marginBottom: '5px', marginLeft: '10px'}}/></div>} />
        </div>
    );
}
```

### Video Tutorial

<iframe width="380" height="220" src="https://www.youtube.com/embed/ebAf6_MAft8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<br />

## Routing

SfNav ships with routing & navigation. It is disabled by default. 

### Enable Routing

To enable routing set the enableRouting prop to true, as shown below:

```jsx
function Apps(props) {
  
    return (
        <div>
            <SfNav enableRouting={true} />
        </div>
    );
}
```

However, setting enableRouting to true alone is not enough. Some more configuration is required.

### Routing & Navigation Scenarios

SfNav supports the following routing & navigation scenarios:
- **Routing To Home** - User should be navigated to the home component after a click on the brand info section
- **Routing To Menus** - User should be routed to the respective components after a click on any of the menus / submenus
- **Routing To Notifications** - User should be routed either to a notification list component or to a notification detail component, after a click on the notification section
- **Event-based Routing** - Users should be programmatically routed somewhere after a particular event has happened, for instance, the user submits a form successfully and now needs to be navigated to the next page
- **Url-based Routing** - User should be routed to the appropriate page after directly arriving on a page, say via a deeplink url

### Routing To Home

To get the routing to home working, pass a navigation object to the homeMenu prop. Navigation object is a JSON object with three properties - link, component and args.

```jsx
{caption: "Home", link: "home", component: <Home />}
```

*Link* is shown in the address bar of the browser. *Component* is the react component that needs to be displayed. *Args* is the component array to be passed down to the component. Routing to home is setup as shown in the below example.

```jsx

const Home = () => {
  return <div style={{width: '100%', padding: '30px', textAlign: 'center', backgroundColor: '#efefef', border: 'solid 3px white', color: 'gray'}}>Home Component</div>
}

function Apps(props) {
  
    return (
        <div>
            <SfNav enableRouting={true} homeMenu={{args: [], link: "home", component: <Home />}}/>
        </div>
    );
}

```

View Demo

[![View Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-oudbtg?file=App.tsx)

### Routing To Menus

Routing to different pages via menus can be achieved by including components in the json array passed to the menu prop (please refer [this section](#menu) to read more about menu). In the json menu array in the example below, we have included the respective components for the About menu and the Services submenu. Hence, for them, the menu click event triggers routing, whereas for other menus, the onMenuClicked callback (default method) gets invoked. Routing is handled in the same way for the profile menu as well.

```jsx

const About = () => {
  return <div style={{padding: '30px', textAlign: 'center', backgroundColor: '#efefef', border: 'solid 3px white', color: 'gray'}}>About Component</div>
}

const Services = () => {
  return <div style={{padding: '30px', textAlign: 'center', backgroundColor: '#efefef', border: 'solid 3px white', color: 'gray'}}>Services Component</div>
}

function Apps(props) {
  
    return (
        <div>
            <SfNav 
                enableRouting={true} 
                menu={[{caption: "About", link: "about", component: <About /> }, [{caption: "Solutions", link: "solutions"}, {caption: "Products", link: "products"}, {caption: "Services", link: "services", component: <Services />}], [{caption: "Contact", link: "contact"}, {caption: 'Instagram', link: "instagram"}]]} 
                />
        </div>
    );
}

```

View Demo

[![View Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-oudbtg?file=App.tsx)

### Routing To Notifications

It is possible to route either to the notifications list page after a click on the view all button, or to the notification detail page after a click on any particular notification in the notification list. To setup routing for the view all click event, create a JSON navigation object and set it to the notificationListMenu prop, whereas to setup routing for click event on any single notification from the list, create another JSON navigation object and set it to the notificationDetailsMenu prop. Look at the example below.

In case menus are not passed to the notificationListMenu or the notificationDetailsMenu props, the default callback functions are invoked (see [notifications](#notifications)). 

> On the notification details screen, the url parameter, which is the notification id, can be obtained by using the useContext hook.

```jsx

import { useContext } from 'react';
import { ContextSfNav, SfNav } from 'react-sf-building-blocks';

```

```jsx

const NotificationList = () => {
  return (
    <div style={{textAlign: 'center', padding: '30px', backgroundColor: '#efefef', border: 'solid 3px white', color: 'gray'}}>
      Notification List Component
    </div>
  );
};

const NotificationDetails = () => {
  const contextSfNav = useContext(ContextSfNav);

  return (
    <div style={{padding: '30px', textAlign: 'center', backgroundColor: '#efefef', border: 'solid 3px white', color: 'gray'}}>     Notification Details Component + {' '} + {JSON.stringify(contextSfNav.navigationData.args)}
    </div>
  );
};

const Home = () => {
  return (
    <div style={{padding: '30px', textAlign: 'center', backgroundColor: '#efefef', border: 'solid 3px white', color: 'gray'}}>
      Home Component
    </div>
  );
};

export default function App() {
  return (
    <div>
      <SfNav
        enableRouting={true}
        showNotification={true}
        notificationList={[
          {
            id: 1,
            title: 'title 1',
            description: 'This is the desc 1',
            timestampReceived: '2 days ago',
            read: false,
          },
          {
            id: 2,
            title: 'title 2',
            description: 'This is the desc 2',
            timestampReceived: '5 days ago',
            read: true,
          },
          {
            id: 3,
            title: 'title 3',
            description: 'This is the desc 3 also it is necessary',
            timestampReceived: '1 month ago',
            read: false,
          },
        ]}
        homeMenu={{ caption: 'home', link: 'home', component: <Home /> }}
        notificationListMenu={{
          args: [],
          link: 'notif_list',
          component: <NotificationList />,
        }}
        notificationDetailsMenu={{
          args: [],
          link: 'notif_details',
          component: <NotificationDetails />,
        }}
      />
    </div>
  );
}
```


View Demo

[![View Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-o87vv6?file=App.tsx)   

### Event-based Routing

It is also possible to programmatically route a user to any component, say in response to any event. For instance, user fills up a form, submits it and needs to be taken to the success page or error depending on the result of the submit operation. To implement this you can access the navigateTo function via useContext and pass a navigation object to its navigateTo function, at runtime. 

One more point to note, all components that are not explicility specified in the homeMenu, profileMenu, notificationListMenu or notificationDetailsMenu, should be provided in the otherMenu prop.

An example is shown below:

```jsx

const Home = () => {
  const contextSfNav = useContext(ContextSfNav)
  return (
    <div style={{textAlign: 'center',padding: '30px',backgroundColor: '#efefef',border: 'solid 3px white',color: 'gray'}}>
      <div>
        <b>Home Component</b>
      </div>
      <br />
      <div style={{color: 'blue',textDecoration: 'underline',cursor: 'pointer'}} onClick={() => {
          contextSfNav.navigateTo({
            component: <About />,
            link: 'about',
            args: [],
          });
        }}>About Component</div>
    </div>
  );
};

const About = () => {
  const contextSfNav = useContext(ContextSfNav);
  return (
    <div style={{textAlign: 'center',padding: '30px',backgroundColor: '#efefef',border: 'solid 3px white',color: 'gray'}}>
      <div>
        <b>About Component</b>
      </div>
      <br />
      <div style={{color: 'blue',textDecoration: 'underline',cursor: 'pointer'}} onClick={() => {
          contextSfNav.navigateTo({
            component: <Home />,
            link: 'home',
            args: [],
          });
        }}>Back To Home</div>
    </div>
  );
};

export default function App() {
  return (
    <div>
      <SfNav
        enableRouting={true}
        homeMenu={{ args: [], link: 'home', component: <Home /> }}
        otherMenu={[{ link: 'about', component: <About />, args: [] }]}
      />
    </div>
  );
}
```


View Demo

[![View Demo](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/edit/react-ts-xvwnym?file=App.tsx)   


### Url-based Routing

When users arrive on a specific url, say via a deeplink, SfNav tries to find the appropriate component to route the user to. SfNav assumes the following url format:

```
https://<www-domain>/<link>/<param1>/<param2>/....
```

An example could be:

```
https://www.example.com/learn/12/2
```

- **www-domain** is the domain of your website (www.example.com)
- **link** maps to the component (learn)
- **params** are passed on the component as an array via props ([12,2])

SfNav picks up the link part from a url and tries to find a matching component. To find the match, it looks up the menu objects that you have provided in the various menu props - homeMenu, menu, profileMenu, notificationListMenu, notificationDetailMenu and otherMenu. If a match is found, routing is triggered, otherwise a default error page is shown.

## Example Scenarios

### Night Mode

- Use the light variant
- Container will have a dark background

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px', backgroundColor: 'black'}}>
                <SfNav variant="dark"/>
            </div>
        </div>
    );
}
```

### Sign In / Registered User (but not subscribed)

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav 
                    showSignIn={true}
                    signInCaption="Subscribe Now"
                    menu={
                        [[{caption: "Watch", link: "watch"}, {caption: "TV Shows", link: "tv"}, {caption: "Movies", link: "movies"}]]
                    } 
                    showProfile={true} 
                    profileMenu={
                    [{caption: "Profile", link: "profile"}, [{caption: "Settings", link: "support"}, {caption: "Notifications", link: "notifications"}, {caption: "Privacy", link: "privacy"}], {caption: "Support", link: "support"}, {caption: 'Upgrade', link: "upgrade"}]
                    } 
                    profilePreamble={
                    <div style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px'}}><small>Hi Hrushi!</small><br /><div style={{lineHeight: '100%'}}><small><small><i>Welcome to Superflows!</i></small></small></div></div>
                    } 
                    profileComponent={
                    <div style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px'}}><small>Sign Out</small></div>
                    } 
                    profilePicture='https://i.pinimg.com/736x/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4--free-avatars-online-profile.jpg' 
                    onMenuClicked={(link) => {alert(link)}}
                />
            </div>
        </div>
    );
}
```

### Sign In / Registered User & Subscribed

```jsx live
function Apps(props) {
  
    return (
        <div>
            <div style={{paddingBottom: '20px', paddingTop: '20px'}}>
                <SfNav 
                    showSignIn={false}
                    menu={
                        [[{caption: "Watch", link: "watch"}, {caption: "TV Shows", link: "tv"}, {caption: "Movies", link: "movies"}]]
                    } 
                    showProfile={true} 
                    profileMenu={
                    [{caption: "Profile", link: "profile"}, {caption: "Membership", link: "membership"}, [{caption: "Settings", link: "support"}, {caption: "Notifications", link: "notifications"}, {caption: "Privacy", link: "privacy"}], {caption: "Support", link: "support"}, {caption: 'Upgrade', link: "upgrade"}]
                    } 
                    profilePreamble={
                    <div style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px'}}><small>Hi Hrushi!</small><br /><div style={{lineHeight: '100%'}}><small><small><i>Welcome to Superflows!</i></small></small></div><div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}><div style={{marginTop: '10px', marginBottom: '5px', width: '100%', textAlign: 'center',fontSize: '80%', paddingLeft: '5px', paddingRight: '5px', paddingTop: '3px', paddingBottom: '3px', backgroundColor: 'white', borderRadius: '10px'}}>Premium</div></div></div>
                    } 
                    profileComponent={
                    <div style={{width: '100%', paddingTop: '10px', paddingBottom: '10px', paddingLeft: '10px', paddingRight: '10px'}}><small>Sign Out</small></div>
                    } 
                    profilePicture='https://i.pinimg.com/736x/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4--free-avatars-online-profile.jpg' 
                    onMenuClicked={(link) => {alert(link)}}
                    
                />
            </div>
        </div>
    );
}
```


## Props

Alphabetically arranged:

| Prop                              | Type           | Mandatory | Description 
|-----------------------------------|----------------|-----------|---------------------------------
| backIcon                          | icon           | no        | icon for back button
| bannerComponent                   | component      | no        | custom react component (above the navigation bar)
| bannerComponentMobile             | component      | no        | custom react component (above the navigation bar) for mobile screens
| bannerCta                         | string         | no        | text of the banner cta button
| bannerCtaMobile                   | string         | no        | text of the banner cta button for mobile screens
| bannerEnableDismiss               | boolean        | no        | flag, which shows / hides the dismiss button on the banner
| bannerText                        | string         | no        | banner text
| bannerTextMobile                  | string         | no        | banner text for mobile screens
| brand                             | string         | no        | brand name 
| brandLogo                         | img            | no        | brand logo image
| enableRouting                     | boolean        | no        | flag, which enables routing
| homeMenu                          | component      | no        | json object for home menu
| menu                              | json object    | no        | json object which renders the menu
| menuIcon                          | icon           | no        | icon for menu  in portrait view
| notificationList                  | json object    | no        | json array that contains the notification information
| notificationListMenu              | json object    | no        | json object for notification list menu
| notificationDetailsMenu           | json object    | no        | json object for notification details menu
| notificationIcon                  | icon           | no        | icon object for the notification bell
| optionsIcon                       | icon           | no        | icon for options in portrait view
| onBackPressed                     | callback       | no        | callback after the back button is pressed
| onHomePressed                     | callback       | no        | callback after clicking on home button 
| onMenuClicked                     | callback       | no        | callback after clicking on any menu
| onNotificationClicked             | callback       | no        | callback after clicking on a notification
| onSearchPressed                   | callback       | no        | callback after search text is entered
| onSignInPressed                   | callback       | no        | callback after clicking on sign in button
| onViewAllNotificationsClicked     | callback       | no        | callback after clicking on the view all button
| profileComponent                  | component      | no        | custom react component (below the profile menu)
| profileMenu                       | json object    | no        | json object which renders the profile menu
| profilePicture                    | img            | no        | url for profile picture
| profilePreamble                   | component      | no        | custom react component 
(above the profile menu)
| showProfile                       | boolean        | no        | flag, which shows / hides the profile section
| showBanner                        | boolean        | no        | flag, which shows / hides the banner section
| showNotification                  | boolean        | no        | flag, which shows / hides notifications
| showSearch                        | boolean        | no        | flag, which shows / hides search input
| showSignIn                        | boolean        | no        | flag, which shows / hides sign in button
| showBack                          | boolean        | no        | flag, which shows / hides back button
| searchCaption                     | string         | no        | caption of the search input
| signInCaption                     | string         | no        | caption of the sign in button
| searchIcon                        | object         | no        | icon for the search input
| theme                             | object         | no        | superflows theme object
| variant                           | string         | no        | theme variant such as primary, secondary, danger, etc.

Props for inline CSS Styling

| Prop                              | Type           | Mandatory | Description 
|-----------------------------------|----------------|-----------|---------------------------------
| stylesBack                        | json object    | no        | styles object to customize the back button
| stylesBannerContainer             | json object    | no        | styles object to customize the banner container
| stylesBannerCta                   | json object    | no        | styles object to customize the cta button of the banner
| stylesBannerText                  | json object    | no        | styles object to customize the banner text
| stylesBrand                       | json object    | no        | styles object to customize the brand name
| stylesBrandLogo                   | json object    | no        | styles object to customize the brand logo
| stylesContainerDesktop            | json object    | no        | styles object to customize the nav container for landscape view
| stylesContainerMobile             | json object    | no        | styles object to customize the nav container for portrait view
| stylesContainerRightMenu          | json object    | no        | styles object to customize the right menu container for portrait view
| stylesMenu                        | json object    | no        | styles object to customize the menu
| stylesMenuMobile                  | json object    | no        | styles object to customize the mobile menu
| stylesMenuMobileSelected          | json object    | no        | styles object to customize the selected
| stylesNotificationBadge           | json object    | no        | styles object to customize the notification badge
| stylesNotificationIcon            | json object    | no        | styles object to customize the notification icon
| stylesNotificationListContainer   | json object    | no        | styles object to customize the notification list container
| stylesNotificationRead            | json object    | no        | styles object to customize the notifications that are read
| stylesNotificationUnRead          | json object    | no        | styles object to customize the notifications that are not read
| stylesNotificationViewAll         | json object    | no        | styles object to customize the view all button
| stylesProfileComponent            | json object    | no        | styles object to customize the profile component
| stylesProfilePicture              | json object    | no        | styles object to customize the profile picture
| stylesProfilePreamble             | json object    | no        | styles object to customize the profile preamble
| stylesSearchContainer             | json object    | no        | styles object to customize the search input container
| stylesSearchInput                 | json object    | no        | styles object to customize the search input
| stylesSignIn                      | json object    | no        | styles object to customize the sign in button
| stylesSubMenu                     | json object    | no        | styles object to customize the sub menu
| stylesSubMenuMobile               | json object    | no        | styles object to customize the mobile sub menu mobile menu

Props for classname-based styling

| classNameBack                     | string         | no        | class names string to customize the profile component
| classNameBannerContainer          | string         | no        | class names string to customize the container of the banner
| classNameBannerCta                | string         | no        | class names string to customize the banner cta button
| classNameBannerText               | string         | no        | class names string to customize the banner text
| classNameBrand                    | string         | no        | class names string to customize the brand name
| classNameBrandLogo                | string         | no        | class names string to customize the brand logo
| classNameContainerDesktop         | string         | no        | class names string to customize the nav container for landscape view
| classNameContainerMobile          | string         | no        | class names string to customize the nav container for portrait view
| classNameContainerRightMenu       | string         | no        | class names string to customize the right menu container for portrait view
| classNameMenu                     | string         | no        | class names string to customize the menu
| classNameMenuMobile               | string         | no        | class names string to customize the mobile menu
| classNameMenuMobileSelected       | string         | no        | class names string to customize the selected mobile menu
| classNameNotificationBadge        | string         | no        | class names string to customize the notification badge
| classNameNotificationIcon         | string         | no        | class names string to customize the notification icon
| classNameNotificationListContainer| string         | no        | class names string to customize the notification list container
| classNameNotificationRead         | string         | no        | class names string to customize the notifications that are read
| classNameNotificationUnRead       | string         | no        | class names string to customize the notifications that not read
| classNameNotificationViewAll      | string         | no        | class names string to customize the view all button 
| classNameProfileComponent         | string         | no        | class names string to customize the profile component
| classNameProfilePicture           | string         | no        | class names string to customize the profile picture
| classNameProfilePreamble          | string         | no        | class names string to customize the profile preamble
| classNameSignIn                   | string         | no        | class names string to customize the sign in button
| classNameSearchContainer          | string         | no        | class names string to customize the search input container
| classNameSearchInput              | string         | no        | class names string to customize the search input
| classNameSubMenu                  | string         | no        | class names string to customize the sub menu
| classNameSubMenuMobile            | string         | no        | class names string to customize the mobile sub menu

