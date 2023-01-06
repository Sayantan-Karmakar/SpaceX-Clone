let isActive = false;
function toggle() {
  if (isActive) {
    //disable active
    document.querySelector('.shadow').className = 'shadow';
    document.querySelector('.mobile-nav').className = 'mobile-nav';
    isActive = false;
  } else {
    //activate
    document.querySelector('.shadow').className = 'shadow active';
    document.querySelector('.mobile-nav').className = 'mobile-nav active';
    isActive = true;
  }
}