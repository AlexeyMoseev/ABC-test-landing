$(document).ready(function () {
    $('.js-form__button').on('click', function (e) {
        removeErrors();
        if (validate() === false) {
            e.preventDefault();
        } else {
            alert('Форма отправлена успешно');
        }
    });
    
    //Валидация данных
    $('.js-form__input').on('input', function () {
        $(this).css('background-color', '#E5E5E5');
        removeErrors();
    });

    let validate = function () {
        let i,
            x = $('.js-form__input'),
            valid = true;

        for (i = 0; i < x.length; i++) {
            if ((x[i].value == '') === true) {
                x[i].style.backgroundColor = '#ffc0cb';
                let error = generateError('Это поле не может быть пустым');
                error.style.textAlign = 'center';
                error.style.marginBottom = '5px';
                x[i].before(error);
                valid = false;
            }
        }

        //Валидация номера телефона
        /*eslint-disable */
        let testNumber = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/; 
        /*eslint-enable */
        let y = $('.js-form__number');
        if (testNumber.test(y.val()) === false) {
            y[0].style.backgroundColor = '#ffc0cb';
            valid = false;
            if (y.val() !== '') {
                let error = generateError(
                    'Введите корректный номер телефона +7(999)999-9999'
                );
                error.style.textAlign = 'center';
                error.style.marginBottom = '5px';
                y.before(error);
            }
        }

        //Валидация имени
        let testName = /^[А-ЯЁ][а-яё]+$/;
        let z = $('.js-form__name');
        if (testName.test(z.val()) === false) {
            z[0].style.backgroundColor = '#ffc0cb';
            valid = false;
            if (z.val() !== '') {
                let error = generateError('Введите корректное имя на русском языке');
                error.style.textAlign = 'center';
                error.style.marginBottom = '5px';
                z.before(error);
            }
        }

        return valid;
    };

    let generateError = function (text) {
        var error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red';
        error.innerHTML = text;
        return error;
    };

    let removeErrors = function () {
        var errors = $('.error');

        for (var i = 0; i < errors.length; i++) {
            errors[i].remove();
        }
    };
});
