const ChangeAddress = () => {
  return (
    <div>
      <input
        className="border p-2 mb-4 w-full"
        type="text"
        placeholder="Enter new address"
      />
      <div className="flex justify-end">
        <button className="text-white bg-gray-500 py-2 px-4 rounded mr-2">
          Cancel
        </button>
        <button className="text-white bg-blue-500 py-2 px-4 rounded">
          Save Address
        </button>
      </div>
    </div>
  );
};

export default ChangeAddress;
