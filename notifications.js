function notify(message, status, options = {}) {
  const {
    duration = 3000,
    placement = 'top-right',
    content = '',
    additionalClass = '',
    onClick = null,
    icon = null,
    closeButton = false,
    autoHide = true,
    animation = 'fade',
    textColor = '',
    backgroundColor = '',
    fontSize = '',
    width = '',
    height = '',
    boxShadow = '',
  } = options;

  let notifyContainer = document.getElementById('notify-container');

  if (!notifyContainer) {
    notifyContainer = document.createElement('div');
    notifyContainer.id = 'notify-container';
    document.body.appendChild(notifyContainer);
  }

  const notify = document.createElement('div');

  notify.className = `notify ${status} ${placement} ${additionalClass} ${animation}`;
  notify.style.color = textColor;
  notify.style.backgroundColor = backgroundColor;
  notify.style.fontSize = fontSize;
  notify.style.boxShadow = boxShadow;
  notify.style.width = width;
  notify.style.height = height;

  // header
  const messageHeader = document.createElement('h2');
  messageHeader.className = 'notify-header';
  messageHeader.textContent = message;
  notify.appendChild(messageHeader);

  // add icon if provided
  if (icon) {
    const iconElement = document.createElement('i');
    iconElement.className = `icon ${icon}`;
    notify.appendChild(iconElement);
  }

  // add content if provided
  if (content) {
    const contentContainer = document.createElement('p');
    contentContainer.className = 'notify-content';
    contentContainer.textContent = content;
    notify.appendChild(contentContainer);
  }

  // add close button if enabled
  if (closeButton) {
    const closeButtonElement = document.createElement('span');
    closeButtonElement.className = 'close-button';
    closeButtonElement.innerHTML = '&times;';

    closeButtonElement.addEventListener('click', () => {
      notify.style.opacity = 0;
      setTimeout(() => {
        notify.remove();
      }, 300);

      // custom onClick function if provided
      if (onClick && typeof onClick === 'function') {
        onClick();
      }
    });

    notify.appendChild(closeButtonElement);
  }

  notify.addEventListener('click', () => {
    if (autoHide) {
      notify.style.opacity = 0;
      setTimeout(() => {
        notify.remove();
      }, 300);
    }
  });

  notifyContainer.appendChild(notify);

  notify.getBoundingClientRect();

  notify.style.opacity = 1;

  if (animation === 'slide-up' || animation === 'slide-down' || animation === 'scale' || animation === 'rotate') notify.classList.add('active');

  if (autoHide) {
    setTimeout(() => {
      notify.style.opacity = 0;
      setTimeout(() => {
        notify.remove();
      }, 300);
    }, duration);
  }
}

// example usage
notify('Good news everyone!', 'success', {
  duration: 334000,
  placement: 'top-right',
  content: 'This would add content under the Customized notify 1 header',
  additionalClass: 'custom-notify',
  onClick: () => {
    console.log('notify clicked!');
  },
  icon: 'fas fa-check',
  closeButton: true,
  autoHide: true,
  animation: 'slide-down',
});

notify('Error!', 'error', {
  duration: 5000,
  placement: 'top-center',
  content: 'This is an error popup',
  additionalClass: 'custom-notify',
});

notify('Information', 'info', {
  duration: 6000,
  placement: 'bottom-center',
  content: 'This is an information popup',
  additionalClass: 'custom-notify',
  animation: '',
});

notify('Warning', 'warning', {
  duration: 7500,
  placement: 'bottom-left',
  content: 'This is an warning popup',
  additionalClass: 'custom-notify',
  animation: '',
});

notify('Comments activated', 'default', {
  duration: 2000
});


// example usage with overrides
notify('Override Example', 'default', {
  duration: 5000,
  placement: 'bottom-right',
  content: 'This notify has custom overrides!',
  additionalClass: 'override-notify',
  backgroundColor: '#009688',
  textColor: '#ffffff',
  fontSize: '1.2em',
  height: '50px',
  width: '550px',
  animation: 'slide-up',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
});

notify('Middle notify', 'error', {
  placement: 'middle-left',
  backgroundColor: '#c5240b',
  content: 'This notify is in the middle!',
});
