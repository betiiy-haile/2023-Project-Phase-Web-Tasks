import React from 'react';
import Modal from 'react-modal';
type props = {
    isOpen: boolean,
    onCancel: () => void,
    onConfirm: () => void,
}

const ConfirmationModal = ({ isOpen, onCancel, onConfirm }: props) => {
    return (
        <Modal isOpen={isOpen} onRequestClose={onCancel} className="fixed" overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-slate-300 py-6 px-10 rounded-md">
                <h2 className="text-2xl font-bold mb-4">Confirmation</h2>
                <p className="mb-4">Are you sure you want to delete?</p>
                <div className="flex justify-end">
                    <button
                        className="px-5 py-2 mr-2 bg-gray-500 text-white rounded-md"
                        onClick={onCancel}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-5 py-2 bg-red-500 text-white rounded-md"
                        onClick={onConfirm}
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </Modal>
    );
};

export default ConfirmationModal;