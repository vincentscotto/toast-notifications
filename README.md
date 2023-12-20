# Toast Notifications

Toasty!

The `notify` function provides a customizable notification system for displaying messages to users. This documentation outlines the function's parameters, customization options, and examples of usage.

## Function Signature

```javascript
function notify(message, status, options = {});
```

### Parameters

- `message` (string): The main text content of the notification.
- `status` (string): The status of the notification, such as 'success', 'error', 'info', 'warning', or 'default'.
- `options` (object): An optional object containing customization parameters for the notification.

## Customization Options

The `options` object can include the following properties:

- `duration` (number, default: 3000): The duration (in milliseconds) for which the notification will be displayed.
- `placement` (string, default: 'top-right'): The placement of the notification on the screen. Possible values are 'top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left', 'middle-right', 'middle-left'.
- `content` (string, default: ''): Additional content to be displayed in the notification.
- `additionalClass` (string, default: ''): Additional CSS class(es) to be applied to the notification.
- `onClick` (function, default: null): A custom function to be executed when the notification is clicked.
- `icon` (string, default: null): The class of an icon to be displayed in the notification.
- `closeButton` (boolean, default: false): If true, a close button will be displayed, allowing users to manually close the notification.
- `autoHide` (boolean, default: true): If true, the notification will automatically disappear after the specified duration.
- `animation` (string, default: 'fade'): The animation style for the notification. Possible values are 'fade', 'slide-up', 'slide-down', 'scale', 'rotate', or an empty string for no animation.
- `textColor` (string, default: ''): The text color of the notification.
- `backgroundColor` (string, default: ''): The background color of the notification.
- `fontSize` (string, default: ''): The font size of the notification.
- `width` (string, default: ''): The width of the notification.
- `height` (string, default: ''): The height of the notification.
- `boxShadow` (string, default: ''): The box shadow of the notification.

## Example Usage

### Basic Usage

```javascript
notify("Good news everyone!", "success", {
	duration: 334000,
	placement: "top-right",
	content: "This would add content under the Customized notify 1 header",
	additionalClass: "custom-notify",
	onClick: () => {
		console.log("notify clicked!");
	},
	icon: "fas fa-check",
	closeButton: true,
	autoHide: true,
	animation: "slide-down"
});

notify("Error!", "error", {
	duration: 5000,
	placement: "top-center",
	content: "This is an error popup",
	additionalClass: "custom-notify"
});
```

### Custom Overrides

```javascript
notify("Override Example", "default", {
	duration: 5000,
	placement: "bottom-right",
	content: "This notify has custom overrides!",
	additionalClass: "override-notify",
	backgroundColor: "#009688",
	textColor: "#ffffff",
	fontSize: "1.2em",
	height: "50px",
	width: "550px",
	animation: "slide-up",
	boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)"
});

notify("Middle notify", "error", {
	placement: "middle-left",
	backgroundColor: "#c5240b",
	content: "This notify is in the middle!"
});
```
