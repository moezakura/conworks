import Master from '@view/Master';

(() => {
  let lastKeyDownTime: number = 0;
  let masterView: Master = new Master();

  window.addEventListener('keydown', e => {
    if (e.key === 'Shift') {
      const now: number = new Date().getTime();
      if (lastKeyDownTime > 0 && lastKeyDownTime > now - 200) {
        const element = masterView.createDOM();
        document.body.appendChild(element);
      } else {
        lastKeyDownTime = now;
      }
    }
  });
})();
