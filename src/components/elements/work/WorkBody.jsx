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
                <p className="work_info__desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni voluptatem omnis ea sint dolor quasi, recusandae ullam
                    dignissimos veniam beatae ratione repellendus quos
                    distinctio ducimus. Voluptatem molestiae qui corporis eaque
                    aspernatur distinctio ipsam dolores quisquam? Reiciendis,
                    amet commodi ducimus fugit vitae officia assumenda dicta
                    nemo sit nam adipisci quisquam earum accusamus laboriosam
                    sed placeat quidem omnis minus ratione inventore harum
                    veritatis error quis iste! Est ducimus esse, possimus rerum
                    ut beatae enim, tempora atque obcaecati veniam officiis
                    animi officia natus quis nostrum repellat. Saepe, hic? Sequi
                    delectus obcaecati cumque provident reiciendis? Ratione,
                    quos! Nemo vel, iure quidem repellat minima ipsum deserunt
                    culpa laudantium perspiciatis optio fugiat ut rerum modi quo
                    est quasi consectetur debitis iste voluptatum totam error
                    dignissimos, dicta ex! Vero doloribus possimus aliquam
                    voluptates eos fugiat. Quis expedita numquam assumenda dolor
                    consectetur placeat aliquam eaque adipisci fugiat sunt
                    corrupti vitae excepturi fuga officia itaque quae odio
                    laborum voluptates exercitationem, unde blanditiis eveniet
                    sit sint necessitatibus! Error libero placeat esse quibusdam
                    excepturi aut fugiat necessitatibus aperiam dolorum.
                    Exercitationem nulla doloribus nostrum, numquam repellat
                    totam officiis quo recusandae cum possimus autem
                    reprehenderit enim explicabo excepturi dicta vero magnam
                    saepe minima, iste quibusdam reiciendis ducimus modi?
                    Possimus delectus labore sequi facilis nobis, voluptate
                    architecto officiis dolores ut, pariatur distinctio quas!
                    Fuga excepturi quae dolorum culpa officiis, minima cumque
                    aliquam! Magnam, nesciunt, rem ducimus iusto temporibus
                    tempore perferendis quis molestiae dolorum consectetur quae
                    quo est repudiandae. Obcaecati, consequatur expedita nihil
                    eum ab facilis ad perspiciatis consectetur aliquid repellat
                    quibusdam nostrum corporis impedit?
                </p>
            </div>
            <div className="work__pdf">
                <span className="work_info__title">Текст работы:</span>
                <Worker workerUrl="/js/pdf.worker.min.js">
                    <LocalizationContext.Provider>
                        <Viewer
                            plugins={[defaultLayoutPluginInstance]}
                            localization={de_RU}
                            fileUrl={
                                'pdf' in data
                                    ? data['pdf']
                                    : '/Курсовая работа v3.0.pdf'
                            }
                        />
                    </LocalizationContext.Provider>
                </Worker>
            </div>
        </div>
    );
};
