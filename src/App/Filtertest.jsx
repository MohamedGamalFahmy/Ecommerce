import { useState } from 'react';

const FilterTest = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'شاي' },
    { id: 2, name: 'قهوة' },
    { id: 3, name: 'لبن' }
  ]);

  const handleRemove = (idToRemove) => {
    const newItems = items.filter(item => item.id !== idToRemove);
    setItems(newItems);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">قائمة المنتجات</h2>
      {items.map(item => (
        <div key={item.id} className="flex justify-between items-center border-b py-2">
          <span>{item.name}</span>
          <button
            onClick={() => handleRemove(item.id)}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            حذف
          </button>
        </div>
      ))}
    </div>
  );
};

export default FilterTest;