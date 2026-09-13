import React, { useState, useEffect } from 'react';
import {
  getStoredServices,
  addService,
  updateService,
  deleteService,
  resetServicesToDefault,
} from '../utils/serviceStore';
import { Plus, Edit2, Trash2, RotateCcw, Check, Save, Lock, LogOut, KeyRound } from 'lucide-react';

const OWNER_PASSCODE = 'hairmasters2026';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passcode, setPasscode] = useState('');
  const [authError, setAuthError] = useState(false);

  const [services, setServices] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', price: '', duration: '', description: '' });

  const [showAddForm, setShowAddForm] = useState(false);
  const [newForm, setNewForm] = useState({
    title: '',
    category: 'cuts',
    price: '₦15,000',
    duration: '60 mins',
    description: '',
    details: '',
  });

  const [message, setMessage] = useState('');

  useEffect(() => {
    const isAuth = sessionStorage.getItem('hair_masters_owner_auth') === 'true';
    if (isAuth) {
      setIsAuthenticated(true);
      setServices(getStoredServices());
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (passcode === OWNER_PASSCODE) {
      sessionStorage.setItem('hair_masters_owner_auth', 'true');
      setIsAuthenticated(true);
      setAuthError(false);
      setServices(getStoredServices());
    } else {
      setAuthError(true);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('hair_masters_owner_auth');
    setIsAuthenticated(false);
    setPasscode('');
  };

  const flashMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => setMessage(''), 3000);
  };

  const handleEditStart = (svc) => {
    setEditingId(svc.id);
    setEditForm({
      title: svc.title,
      price: svc.price,
      duration: svc.duration,
      description: svc.description,
    });
  };

  const handleEditSave = (id) => {
    const updated = updateService(id, editForm);
    setServices(updated);
    setEditingId(null);
    flashMessage('Service updated successfully!');
  };

  const handleDelete = (id, title) => {
    if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
      const updated = deleteService(id);
      setServices(updated);
      flashMessage(`"${title}" has been deleted.`);
    }
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (!newForm.title || !newForm.price) return;
    const updated = addService(newForm);
    setServices(updated);
    setShowAddForm(false);
    setNewForm({
      title: '',
      category: 'cuts',
      price: '₦15,000',
      duration: '60 mins',
      description: '',
      details: '',
    });
    flashMessage('New service added!');
  };

  const handleReset = () => {
    if (window.confirm('Reset all services to default menu? Custom changes will be restored.')) {
      const updated = resetServicesToDefault();
      setServices(updated);
      flashMessage('Services restored to default.');
    }
  };

  /* Passcode Protected Lock Screen */
  if (!isAuthenticated) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center bg-background px-6 py-16">
        <div className="w-full max-w-md bg-card p-8 rounded-3xl border border-stone-300 shadow-xl space-y-6 text-center">
          <div className="w-14 h-14 bg-rose/20 text-rose rounded-full flex items-center justify-center mx-auto border border-rose/30">
            <Lock className="w-7 h-7" />
          </div>

          <div>
            <h1 className="font-serif text-3xl text-[#1C1917] font-normal">
              Owner Access Required
            </h1>
            <p className="mt-2 text-xs font-medium text-[#1C1917] leading-relaxed">
              This area is restricted exclusively to the salon owner. Please enter your private owner passcode to manage services.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 text-left">
            <div>
              <label className="block text-xs font-semibold text-[#1C1917] mb-1">
                Owner Passcode
              </label>
              <div className="relative">
                <input
                  required
                  type="password"
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Enter owner password..."
                  className="salon-input mt-0"
                />
                <KeyRound className="w-4 h-4 text-stone-400 absolute right-3 top-3.5" />
              </div>
            </div>

            {authError && (
              <p className="text-xs font-semibold text-red-600">
                Incorrect passcode. Please try again.
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 bg-[#1C1917] hover:bg-stone-800 text-white font-medium text-sm rounded-full transition-all shadow-xs"
            >
              Unlock Owner Portal
            </button>
          </form>

          <div className="pt-2 border-t border-stone-200 text-[11px] text-stone-500">
            <span>Passcode: <code className="bg-stone-200 px-1.5 py-0.5 rounded text-[#1C1917]">hairmasters2026</code></span>
          </div>
        </div>
      </div>
    );
  }

  /* Authenticated Owner Portal */
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 bg-background space-y-10">
      
      {/* Admin Portal Header */}
      <div className="border-b border-stone-300 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-rose font-semibold text-xs uppercase tracking-widest">
            <Lock className="w-4 h-4" />
            <span>Authenticated Owner Portal</span>
          </div>
          <h1 className="mt-1 font-serif text-3xl sm:text-5xl text-[#1C1917] font-normal">
            Manage Salon Services
          </h1>
          <p className="mt-2 text-sm font-medium text-[#1C1917]">
            Add new services, edit prices, update descriptions, or remove items. All changes save in real-time.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="flex items-center gap-1.5 rounded-full bg-[#1C1917] px-5 py-2.5 text-xs font-semibold text-white hover:bg-stone-800"
          >
            <Plus className="w-4 h-4 text-rose" />
            <span>{showAddForm ? 'Close Form' : 'Add New Service'}</span>
          </button>

          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-3 py-2 text-xs font-semibold text-stone-600 hover:text-red-600 border border-stone-300 rounded-full hover:border-red-300"
            title="Reset to default menu"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset Defaults</span>
          </button>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-red-700 bg-red-50 hover:bg-red-100 border border-red-200 rounded-full transition-colors"
            title="Lock Portal"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Lock / Logout</span>
          </button>
        </div>
      </div>

      {/* Success Notification */}
      {message && (
        <div className="p-4 rounded-xl bg-emerald-100 border border-emerald-300 text-emerald-900 text-sm font-semibold flex items-center gap-2 animate-fadeIn">
          <Check className="w-5 h-5 text-emerald-700" />
          <span>{message}</span>
        </div>
      )}

      {/* Add New Service Form */}
      {showAddForm && (
        <form onSubmit={handleAddSubmit} className="bg-card p-6 sm:p-8 rounded-2xl border border-rose/40 shadow-md space-y-4 animate-fadeIn">
          <h3 className="font-serif text-2xl text-[#1C1917] font-normal border-b border-stone-200 pb-2">
            Add A New Salon Service
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1C1917]">Service Title *</label>
              <input
                required
                type="text"
                value={newForm.title}
                onChange={(e) => setNewForm({ ...newForm, title: e.target.value })}
                placeholder="e.g. Scalp Scrub Ritual"
                className="salon-input"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1C1917]">Price *</label>
              <input
                required
                type="text"
                value={newForm.price}
                onChange={(e) => setNewForm({ ...newForm, price: e.target.value })}
                placeholder="e.g. ₦20,000"
                className="salon-input"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#1C1917]">Category *</label>
              <select
                value={newForm.category}
                onChange={(e) => setNewForm({ ...newForm, category: e.target.value })}
                className="salon-input"
              >
                <option value="cuts">Precision Cuts</option>
                <option value="color">Colour & Highlights</option>
                <option value="treatments">Hair Treatments</option>
                <option value="blowout">Blowouts & Silk Press</option>
                <option value="bridal">Bridal & Occasion</option>
                <option value="kids">Kids’ Salon</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1C1917]">Estimated Duration</label>
              <input
                type="text"
                value={newForm.duration}
                onChange={(e) => setNewForm({ ...newForm, duration: e.target.value })}
                placeholder="e.g. 45 mins"
                className="salon-input"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#1C1917]">Description *</label>
            <textarea
              required
              rows={2}
              value={newForm.description}
              onChange={(e) => setNewForm({ ...newForm, description: e.target.value })}
              placeholder="Short description for guests..."
              className="salon-input resize-none"
            />
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-5 py-2.5 text-xs font-semibold text-stone-600 hover:text-[#1C1917]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-rose text-[#1C1917] font-semibold text-xs rounded-full hover:opacity-90 shadow-xs"
            >
              Save & Publish Service
            </button>
          </div>
        </form>
      )}

      {/* Current Services List */}
      <div className="space-y-4">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-[#1C1917]">
          Current Salon Menu ({services.length} Items)
        </h3>

        <div className="space-y-4">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="bg-card p-6 rounded-2xl border border-stone-300 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              {editingId === svc.id ? (
                <div className="w-full space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                      className="salon-input mt-0"
                    />
                    <input
                      type="text"
                      value={editForm.price}
                      onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                      className="salon-input mt-0"
                    />
                    <input
                      type="text"
                      value={editForm.duration}
                      onChange={(e) => setEditForm({ ...editForm, duration: e.target.value })}
                      className="salon-input mt-0"
                    />
                  </div>
                  <textarea
                    rows={2}
                    value={editForm.description}
                    onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                    className="salon-input mt-0 resize-none"
                  />
                  <div className="flex items-center gap-2 justify-end">
                    <button
                      onClick={() => setEditingId(null)}
                      className="px-4 py-1.5 text-xs font-semibold text-stone-600"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => handleEditSave(svc.id)}
                      className="flex items-center gap-1 px-5 py-1.5 bg-rose text-[#1C1917] font-semibold text-xs rounded-full"
                    >
                      <Save className="w-3.5 h-3.5" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-1 max-w-2xl">
                    <div className="flex items-center gap-3">
                      <h4 className="font-serif text-xl font-semibold text-[#1C1917]">{svc.title}</h4>
                      <span className="text-xs font-bold text-rose bg-rose/10 px-2.5 py-0.5 rounded-full">
                        {svc.price}
                      </span>
                      <span className="text-xs text-stone-500 font-medium">{svc.duration}</span>
                    </div>
                    <p className="text-xs font-medium text-[#1C1917]">{svc.description}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleEditStart(svc)}
                      className="flex items-center gap-1 p-2 text-xs font-semibold text-stone-700 hover:text-rose hover:bg-rose/10 rounded-lg transition-colors border border-stone-200"
                      title="Edit price or details"
                    >
                      <Edit2 className="w-4 h-4" />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => handleDelete(svc.id, svc.title)}
                      className="flex items-center gap-1 p-2 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors border border-stone-200"
                      title="Delete service"
                    >
                      <Trash2 className="w-4 h-4" />
                      <span>Delete</span>
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
