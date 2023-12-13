import React from 'react';
import { createPortal } from 'react-dom';

export const MyTableFilter = React.forwardRef((props, ref) => {
    const filters_container = document.getElementById('table_filters');
    return (
        <>
            {filters_container &&
                createPortal(
                    <div
                        className={`filter__wrapper filter_type_${props.filterType}`}
                    >
                        {props.children}
                    </div>,
                    filters_container,
                )}
        </>
    );
});
