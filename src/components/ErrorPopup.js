// ErrorPopup.js
import React from 'react';

const ErrorPopup = ({ message, onClose }) => {
    return (
        <div className="popup">
            <div className="popup-content">
                <button className="popup-close" onClick={onClose}>
                    Закрыть
                </button>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ErrorPopup;
