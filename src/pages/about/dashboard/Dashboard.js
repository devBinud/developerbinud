import React, { useState } from 'react';
import AddProject from '../../../admin/AddProject';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('blog');

  const tabs = [
    { name: 'Add Blog', key: 'blog' },
    { name: 'Add Project', key: 'project' },
    { name: 'Add User', key: 'user' },
    { name: 'Add Service', key: 'service' },
    { name: 'Inspiration', key: 'inspiration' },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'blog':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Add Blog</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Blog Title" className="input-field" />
              <textarea placeholder="Blog Content" rows="5" className="input-field" />
              <button type="submit" className="btn-orange">Submit Blog</button>
            </form>
          </div>
        );
      case 'project':
        return (<AddProject/>);
      case 'user':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Add User</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Username" className="input-field" />
              <input type="password" placeholder="Password" className="input-field" />
              <button type="submit" className="btn-orange">Add User</button>
            </form>
          </div>
        );
      case 'service':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Add Service</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Service Title" className="input-field" />
              <textarea placeholder="Service Description" className="input-field" />
              <button type="submit" className="btn-orange">Add Service</button>
            </form>
          </div>
        );
      case 'inspiration':
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Inspiration Cards</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {['UI Set 1', 'UI Set 2', 'UI Set 3', 'UI Set 4'].map((item, i) => (
                <div key={i} className="card-item">
                  <svg className="icon-orange" viewBox="0 0 24 24">
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                    <path d="M22 4L12 14.01l-3-3" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-900 text-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6">
        <h1 className="text-2xl font-bold mb-6 text-orange-400">Admin Panel</h1>
        <nav className="flex flex-col gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`text-left px-4 py-2 rounded-md transition font-medium ${
                activeTab === tab.key
                  ? 'bg-orange-400 text-white'
                  : 'hover:bg-gray-700 text-gray-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-10 bg-white text-gray-900 rounded-l-3xl">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default Dashboard;
