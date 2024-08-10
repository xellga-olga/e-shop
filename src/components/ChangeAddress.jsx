import { useState } from "react";

const ChangeAddress = ({setAddress, setModalOpen}) => {
  const [newAddress, setNewAddress] = useState('')

  const onClose = () => {
    setAddress(newAddress)
    setModalOpen(false)
  }

  return (
    <div>
      <input
        className="border p-2 mb-4 w-full"
        type="text"
        placeholder="Enter new address"
        onChange={(e) => setNewAddress(e.target.value)}
      />
      <div className="flex justify-end">
        <button className="text-white bg-gray-500 py-2 px-4 rounded mr-2"
        onClick={() => setModalOpen(false)}
        >
          Cancel
        </button>
        <button className="text-white bg-blue-500 py-2 px-4 rounded"
        onClick={onClose}
        >
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
