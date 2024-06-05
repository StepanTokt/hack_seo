const fieldsets = document.querySelectorAll('fieldset');

fieldsets.forEach(fieldset => {
    const inputs = fieldset.querySelectorAll('input');
    inputs.forEach(input => {
        if (input.hasAttribute('disabled')) {
            input.removeAttribute('disabled');
        }
        if (input.hasAttribute('checked')) {
            input.removeAttribute('checked');
        }
    });
});

const reactionInput = document.querySelector('#reaction');
let reactionTime = parseInt(reactionInput.value, 10);

reactionInput.addEventListener('input', () => {
    reactionTime = parseInt(reactionInput.value, 10);
});


fieldsets.forEach(fieldset => {
    let timer;
    fieldset.addEventListener('change', () => {
        clearTimeout(timer);

        timer = setTimeout(() => {
            const inputs = fieldset.querySelectorAll('input');
            inputs.forEach(input => {
                if (input.getAttribute('type') === 'checkbox') {
                    if (input.parentNode.classList.contains('correct')) {
                        if (!input.checked) {
                            input.parentNode.style.backgroundColor = 'red';
                        } else {
                            input.parentNode.style.backgroundColor = 'green';
                        }
                    }
                } else {
                    if (input.parentNode.classList.contains('correct')) {
                        if (!input.checked) {
                            input.parentNode.style.backgroundColor = 'red';
                        } else {
                            input.parentNode.style.backgroundColor = 'green';
                        }
                    }
                }
            });
        }, reactionTime);
    });
});


// 43


