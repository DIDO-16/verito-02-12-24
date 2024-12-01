import React, { useState } from 'react';
import { Camera, Save, Plus, Trash2 } from 'lucide-react';
import { DetailedInspection } from '../../types';

interface InspectionFormProps {
  centerId: string;
  inspectorId: string;
  onSubmit: (inspection: Partial<DetailedInspection>) => void;
}

export const InspectionForm: React.FC<InspectionFormProps> = ({
  centerId,
  inspectorId,
  onSubmit
}) => {
  const [formData, setFormData] = useState<Partial<DetailedInspection>>({
    centerId,
    inspectorId,
    date: new Date().toISOString().split('T')[0],
    equipment: [],
    visualInspection: [],
    photos: [],
    additionalNotes: ''
  });

  const [currentCategory, setCurrentCategory] = useState('');
  const [currentItems, setCurrentItems] = useState<{ name: string; status: 'pass' | 'fail' | 'warning'; notes: string }[]>([]);

  const handleAddCategory = () => {
    if (currentCategory && currentItems.length > 0) {
      setFormData(prev => ({
        ...prev,
        visualInspection: [
          ...(prev.visualInspection || []),
          {
            category: currentCategory,
            items: [...currentItems]
          }
        ]
      }));
      setCurrentCategory('');
      setCurrentItems([]);
    }
  };

  const handleAddItem = () => {
    setCurrentItems(prev => [
      ...prev,
      { name: '', status: 'pass', notes: '' }
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentCategory && currentItems.length > 0) {
      handleAddCategory();
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">VIN</label>
            <input
              type="text"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              value={formData.vehicleVin || ''}
              onChange={e => setFormData(prev => ({ ...prev, vehicleVin: e.target.value }))}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
              value={formData.date}
              onChange={e => setFormData(prev => ({ ...prev, date: e.target.value }))}
              required
            />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Visual Inspection</h3>
          <button
            type="button"
            onClick={handleAddCategory}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Category
          </button>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <input
                type="text"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={currentCategory}
                onChange={e => setCurrentCategory(e.target.value)}
              />
            </div>
            <div className="flex items-end">
              <button
                type="button"
                onClick={handleAddItem}
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </button>
            </div>
          </div>

          {currentItems.map((item, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700">Item Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  value={item.name}
                  onChange={e => {
                    const newItems = [...currentItems];
                    newItems[index].name = e.target.value;
                    setCurrentItems(newItems);
                  }}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Status</label>
                <select
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  value={item.status}
                  onChange={e => {
                    const newItems = [...currentItems];
                    newItems[index].status = e.target.value as 'pass' | 'fail' | 'warning';
                    setCurrentItems(newItems);
                  }}
                >
                  <option value="pass">Pass</option>
                  <option value="fail">Fail</option>
                  <option value="warning">Warning</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Notes</label>
                <input
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  value={item.notes}
                  onChange={e => {
                    const newItems = [...currentItems];
                    newItems[index].notes = e.target.value;
                    setCurrentItems(newItems);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Photos</h3>
        <div className="space-y-4">
          {formData.photos?.map((photo, index) => (
            <div key={index} className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Category"
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={photo.category}
                onChange={e => {
                  const newPhotos = [...(formData.photos || [])];
                  newPhotos[index].category = e.target.value;
                  setFormData(prev => ({ ...prev, photos: newPhotos }));
                }}
              />
              <input
                type="text"
                placeholder="URL"
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                value={photo.url}
                onChange={e => {
                  const newPhotos = [...(formData.photos || [])];
                  newPhotos[index].url = e.target.value;
                  setFormData(prev => ({ ...prev, photos: newPhotos }));
                }}
              />
              <button
                type="button"
                onClick={() => {
                  const newPhotos = formData.photos?.filter((_, i) => i !== index);
                  setFormData(prev => ({ ...prev, photos: newPhotos }));
                }}
                className="p-2 text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => {
              setFormData(prev => ({
                ...prev,
                photos: [...(prev.photos || []), { category: '', url: '', notes: '' }]
              }));
            }}
            className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
          >
            <Camera className="h-4 w-4 mr-2" />
            Add Photo
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold mb-4">Additional Notes</h3>
        <textarea
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
          rows={4}
          value={formData.additionalNotes}
          onChange={e => setFormData(prev => ({ ...prev, additionalNotes: e.target.value }))}
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
        >
          <Save className="h-4 w-4 mr-2" />
          Save Inspection
        </button>
      </div>
    </form>
  );
};