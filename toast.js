// toast.js

function showToast(message, status, options = {}) {
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
  } = options;

  const toastContainer = document.getElementById('toast-container');
  const toast = document.createElement('div');

  toast.className = `toast ${status} ${placement} ${additionalClass} ${animation}`;

  // header
  const messageHeader = document.createElement('h2');
  messageHeader.className = 'toast-header';
  messageHeader.textContent = message;
  toast.appendChild(messageHeader);

  // add icon if provided
  if (icon) {
    const iconElement = document.createElement('i');
    iconElement.className = `icon ${icon}`;
    toast.appendChild(iconElement);
  }

  // add content if provided
  if (content) {
    const contentContainer = document.createElement('p');
    contentContainer.className = 'toast-content';
    contentContainer.textContent = content;
    toast.appendChild(contentContainer);
  }

  // add close button if enabled
  if (closeButton) {
    const closeButtonElement = document.createElement('span');
    closeButtonElement.className = 'close-button';
    closeButtonElement.innerHTML = '&times;';

    closeButtonElement.addEventListener('click', () => {
      toast.style.opacity = 0;
      setTimeout(() => {
        toast.remove();
      }, 300);

      // custom onClick function if provided
      if (onClick && typeof onClick === 'function') {
        onClick();
      }
    });

    toast.appendChild(closeButtonElement);
  }

  toast.addEventListener('click', () => {
    if (autoHide) {
      toast.style.opacity = 0;
      setTimeout(() => {
        toast.remove();
      }, 300);
    }


  });

  toastContainer.appendChild(toast);

  toast.getBoundingClientRect();

  toast.style.opacity = 1;

  if (animation === 'slide-up') toast.classList.add('active');

  if (autoHide) {
    setTimeout(() => {
      toast.style.opacity = 0;
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, duration);
  }
}

// example usage with additional options
showToast('Customized Toast 1', 'success', {
  duration: 5000,
  placement: 'bottom-right',
  content: 'This would add content under the Customized Toast 1 header',
  additionalClass: 'custom-toast',
  onClick: () => {
    console.log('Toast clicked!');
  },
  icon: 'fas fa-check', // font awesome class for a checkmark icon
  closeButton: true,
  autoHide: true,
  animation: 'slide-up', // slide-up animation in your CSS
});

showToast('Customized Toast 2', 'error', {
  duration: 5000,
  placement: 'top-center',
  additionalClass: 'custom-toast',
});
