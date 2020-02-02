import Master from '@view/Master';


(() => {
    let lastKeyDownTime: number = 0;

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Shift') {
            const now: number = new Date().getTime();
            if (lastKeyDownTime > 0 && lastKeyDownTime > now - 200) {
                const master = new Master();
                const element = master.createDOM();
                document.body.appendChild(element);
            } else {
                lastKeyDownTime = now;
            }
        }
    });
})();