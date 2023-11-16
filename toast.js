function showToast(message, status, options = {}) {
  const {
    duration = 3000,
    placement = 'top-right',
    content = '',
    additionalClass = '',
    onClick = null,
  } = options;

  const toastContainer = document.getElementById('toast-container');
  const toast = document.createElement('div');

  toast.className = `toast ${status} ${placement} ${additionalClass}`;

  // header
  const messageHeader = document.createElement('h2');
  messageHeader.className = 'toast-header';
  messageHeader.textContent = message;
  toast.appendChild(messageHeader);

  // content
  if (content) {
    const contentContainer = document.createElement('p');
    contentContainer.className = 'toast-content';
    contentContainer.textContent = content;
    toast.appendChild(contentContainer);
  }

  toast.addEventListener('click', () => {
    toast.style.opacity = 0;
    setTimeout(() => {
      toast.remove();
    }, 300);

    // call custom onClick function if provided
    if (onClick && typeof onClick === 'function') {
      onClick();
    }
  });

  toastContainer.appendChild(toast);

  toast.getBoundingClientRect();

  toast.style.opacity = 1;

  setTimeout(() => {
    toast.style.opacity = 0;
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}

// example usage with additional options
showToast('Customized Toast 1', 'success', {
  duration: 335000,
  placement: 'bottom-right',
  content: 'This would add content under the Customized Toast 1 header',
  additionalClass: 'custom-toast',
  onClick: () => {
    console.log('Toast clicked!');
  },
});

showToast('Customized Toast 2', 'error', {
  duration: 335000,
  placement: 'top-center',
  additionalClass: 'custom-toast',
});
