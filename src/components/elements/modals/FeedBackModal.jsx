import React, { useState } from 'react';
import { Input } from '../../ui/Input/Input';
import { useInput } from '../../../hooks/useInput';
import { postFeedback } from '../../../api/postFeedback';
import CircularProgress from '@mui/material/CircularProgress';
import './Modals.scss';

export const FeedBackModal = ({ active, setActive }) => {
    const inintUserData = {
        email: '',
        fio: '',
        topic: '',
        score: '',
        teacher: '',
        date: '',
        file: {},
    };
    const [userData, setUserData] = useState(inintUserData);

    const email = useInput(userData.email, { isEmpty: true, isEmail: true });
    const fio = useInput(userData.fio, { isEmpty: true });
    const topic = useInput(userData.topic, { isEmpty: true });
    const score = useInput(userData.score, { isEmpty: true });
    const teacher = useInput(userData.teacher, { isEmpty: true });
    const date = useInput(userData.date, { isEmpty: true });
    const [fileName, setFileName] = useState('');
    const [postResult, setPostResult] = useState('');
    const [isPostLoading, setIsPostLoading] = useState(false);

    return (
        <div
            className={`modal ${active && 'active'}`}
            onClick={() => {
                setActive(false);
                setTimeout(() => {
                    setPostResult('');
                    setUserData(inintUserData);
                    email.setEmpty();
                    fio.setEmpty();
                    topic.setEmpty();
                    score.setEmpty();
                    teacher.setEmpty();
                    date.setEmpty();
                    setFileName('');
                }, 400);
            }}
        >
            <div
                className={`modal__content ${postResult}`}
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <h4 className="feedback__form-status">
                    {postResult === 'access' &&
                        'Ваша заявка успешно отправлена!'}
                    {postResult === 'error' && 'Ошибка при отправке'}
                </h4>
                {isPostLoading ? (
                    <div className="feedback__form-loader">
                        <CircularProgress />
                    </div>
                ) : (
                    <form className="feedback__form">
                        <h4 className="feedback__title">
                            Укажите данные о себе и работе
                        </h4>
                        <div className="feedback__body">
                            <Input
                                style={{ marginBottom: '12px' }}
                                placeholder="Почта*"
                                type="email"
                                name="email"
                                value={email.value}
                                error_text={email.isDirty ? email.valid : ''}
                                onBlur={(e) => email.onBlur(e)}
                                onChange={(e) => {
                                    email.onChange(e);
                                    setUserData({
                                        ...userData,
                                        email: e.target.value,
                                    });
                                }}
                            />
                            <Input
                                style={{ marginBottom: '12px' }}
                                placeholder="ФИО*"
                                type="text"
                                name="fio"
                                value={fio.value}
                                error_text={fio.isDirty ? fio.valid : ''}
                                onBlur={(e) => fio.onBlur(e)}
                                onChange={(e) => {
                                    fio.onChange(e);
                                    setUserData({
                                        ...userData,
                                        fio: e.target.value,
                                    });
                                }}
                            />
                            <Input
                                style={{ marginBottom: '12px' }}
                                placeholder="Тема работы*"
                                type="text"
                                name="topic"
                                value={topic.value}
                                error_text={topic.isDirty ? topic.valid : ''}
                                onBlur={(e) => topic.onBlur(e)}
                                onChange={(e) => {
                                    topic.onChange(e);
                                    setUserData({
                                        ...userData,
                                        topic: e.target.value,
                                    });
                                }}
                            />
                            <Input
                                style={{ marginBottom: '12px' }}
                                placeholder="Оценка*"
                                type="text"
                                name="score"
                                value={score.value}
                                error_text={score.isDirty ? score.valid : ''}
                                onBlur={(e) => score.onBlur(e)}
                                onChange={(e) => {
                                    score.onChange(e);
                                    setUserData({
                                        ...userData,
                                        score: e.target.value,
                                    });
                                }}
                            />
                            <Input
                                style={{ marginBottom: '12px' }}
                                placeholder="Научный руководитель*"
                                type="text"
                                name="teacher"
                                value={teacher.value}
                                error_text={
                                    teacher.isDirty ? teacher.valid : ''
                                }
                                onBlur={(e) => teacher.onBlur(e)}
                                onChange={(e) => {
                                    teacher.onChange(e);
                                    setUserData({
                                        ...userData,
                                        teacher: e.target.value,
                                    });
                                }}
                            />
                            <Input
                                style={{ marginBottom: '12px' }}
                                placeholder="Дата защиты*"
                                type="text"
                                name="date"
                                value={date.value}
                                error_text={date.isDirty ? date.valid : ''}
                                onBlur={(e) => date.onBlur(e)}
                                onChange={(e) => {
                                    date.onChange(e);
                                    setUserData({
                                        ...userData,
                                        date: e.target.value,
                                    });
                                }}
                            />
                            <div className="feedback__upload-wrapper">
                                <input
                                    className="feedback__upload"
                                    type="file"
                                    id="file-input"
                                    name="file"
                                    accept=".pdf,.doc,.docx"
                                    onChange={(e) => {
                                        const file = e.target.files;
                                        setFileName(file[0]['name']);
                                        setUserData({
                                            ...userData,
                                            file: e.target.files[0],
                                        });
                                    }}
                                />
                                <label
                                    className="feedback__upload-text"
                                    htmlFor="file-input"
                                >
                                    Выберите файл
                                </label>
                                <span className="feedback__filename">
                                    {fileName}
                                </span>
                            </div>
                        </div>
                        <button
                            className="feedback__button"
                            disabled={
                                email.valid ||
                                fio.valid ||
                                topic.valid ||
                                score.valid ||
                                teacher.valid ||
                                date.valid ||
                                fileName === ''
                            }
                            onClick={(e) => {
                                e.preventDefault();
                                setIsPostLoading(true);
                                postFeedback(
                                    userData,
                                    setPostResult,
                                    setIsPostLoading,
                                );
                            }}
                        >
                            Отправить
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};
