import React from 'react';

const ConfimationModal = ({ title, message, closeModal, successAction, dataModal }) => {
    return (
        <div>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="confirmationModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label onClick={() => successAction(dataModal)} htmlFor="confirmationModal" className="btn">Delete</label>
                        <button onClick={closeModal} className='btn btn-outline'>Cancle</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfimationModal;