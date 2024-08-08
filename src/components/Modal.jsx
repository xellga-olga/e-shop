const Modal = ({ modalOpen, setModalOpen, children }) => {
  if (!modalOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="w-full max-w-md p-6 shadow-lg rounded-lg bg-white relative">
        <button
          className="absolute top-7 right-7 text-xl text-gray-300"
          onClick={() => setModalOpen(false)}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
