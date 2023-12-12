import React from 'react';
import './WorkBody.scss';

import { LocalizationContext, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Worker } from '@react-pdf-viewer/core';
import de_RU from './pdf_viewer_localization.json';

export const WorkBody = ({ data }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <div className="work__body">
            <div className="work__info">
                <div className="work_info__item">
                    <span className="work_info__title">Студент:</span>
                    <span className="work_info__desc">{data['student']}</span>
                </div>
                <div className="work_info__item">
                    <span className="work_info__title">Оценка:</span>
                    <span className="work_info__desc">{data['score']}</span>
                </div>
                <div className="work_info__item">
                    <span className="work_info__title">Дата защиты:</span>
                    <span className="work_info__desc">{data['date']}</span>
                </div>
                <div className="work_info__item">
                    <span className="work_info__title">
                        Научный руководитель:
                    </span>
                    <span className="work_info__desc">{data['teacher']}</span>
                </div>
            </div>
            <div className="work__description">
                <span className="work_info__title">Краткое описание:</span>
                <p className="work_info__desc">{data['desc']}</p>
            </div>
            <div className="work__pdf">
                <span className="work_info__title">Текст работы:</span>
                {'pdf' in data ? (
                    <Worker workerUrl="/js/pdf.worker.min.js">
                        <LocalizationContext.Provider value={''}>
                            <Viewer
                                plugins={[defaultLayoutPluginInstance]}
                                localization={de_RU}
                                fileUrl={data['pdf']}
                            />
                        </LocalizationContext.Provider>
                    </Worker>
                ) : (
                    <p
                        style={{
                            marginTop: '-5px',
                        }}
                        className="work_info__desc"
                    >
                        Отсутствует
                    </p>
                )}
            </div>
        </div>
    );
};
