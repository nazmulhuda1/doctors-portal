import React from 'react';

const Loaders = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full justify-center items-center" role="status">
                <span className="visually-hidden">...</span>
            </div>
        </div>
    );
};

export default Loaders;