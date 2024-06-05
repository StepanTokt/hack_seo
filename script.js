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

fieldsets.forEach(fieldset => {
   
    fieldset.addEventListener('focusout', () => {
        const inputs = fieldset.querySelectorAll('input');
        inputs.forEach(input => {
            if (input.parentNode.classList.contains('correct')) {
                if(!input.checked){
                    input.parentNode.style.backgroundColor = 'red';
                }else{
                    input.parentNode.style.backgroundColor = 'green';
                }
                
            }
         
        });

    });
});


