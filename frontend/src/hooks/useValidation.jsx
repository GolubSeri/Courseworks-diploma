import { useEffect, useState } from 'react';

export const useValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState('');
    const [minLength, setMinLength] = useState('');
    const [maxLength, setMaxLength] = useState('');
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        for (let validation in validations) {
            switch (validation) {
                case 'isEmpty':
                    value
                        ? setEmpty('')
                        : setEmpty('Поле не может быть пустым');
                    break;

                case 'minLength':
                    value.length <= validations[validation]
                        ? setMinLength(
                              `Длина должна быть более ${validations[validation]} символов`,
                          )
                        : setMinLength('');
                    break;

                case 'maxLength':
                    value.length >= validations[validation]
                        ? setMaxLength(
                              `Длина должна быть менее ${validations[validation]} символов`,
                          )
                        : setMaxLength('');
                    break;

                case 'isLogin':
                    const re_login =
                        // eslint-disable-next-line no-useless-escape
                        /^[a-zA-Z0-9_\.]+$/;
                    re_login.test(String(value).toLocaleLowerCase())
                        ? setLogin('')
                        : setLogin('Недопустимый символ');
                    break;

                case 'isEmail':
                    const re_email =
                        // eslint-disable-next-line no-useless-escape
                        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})+$/i;
                    re_email.test(String(value).toLocaleLowerCase())
                        ? setEmail('')
                        : setEmpty('Неверный email');
                    break;

                case 'isPassword':
                    const re_pas = /^[a-zA-Z0-9!@#$%^&*]+$/i;
                    const re_pas_2 = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]+$/i;

                    if (re_pas.test(String(value).toLocaleLowerCase())) {
                        setPassword('');
                    } else {
                        setPassword('Недопустимый символ');
                        break;
                    }

                    re_pas_2.test(String(value).toLocaleLowerCase())
                        ? setPassword('')
                        : setPassword(
                              'Пароль должен содержать хотя бы 1 цифру',
                          );

                    break;

                default:
                    break;
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    let errors = [isEmpty, minLength, maxLength, login, email, password];
    for (let i = 0; i < errors.length; i++) {
        if (errors[i]) {
            return errors[i];
        }
    }

    return '';
};
