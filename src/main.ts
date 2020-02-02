(() => {
    let lastKeyDownTime: number = 0;

    window.addEventListener("keydown", (e) => {
        if (e.key === 'Shift') {
            const now: number = new Date().getTime();
            if (lastKeyDownTime > 0 && lastKeyDownTime > now - 200) {

            } else {
                lastKeyDownTime = now;
            }
        }
    })
})();