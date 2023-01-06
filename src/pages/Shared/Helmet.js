import React from 'react';

const Helmet = (props) => {
    document.title = 'Doctor protal - ' + props.title
    return (
        <div>
            {props.children}
        </div>
    );
};

export default Helmet;