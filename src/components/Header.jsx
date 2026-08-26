import { BookOpen, Dumbbell } from './Icons';

export default function Header({ activeTab, onTabChange, streak }) {
  const tabs = [
    { id: 'practice', label: '练习', icon: Dumbbell },
    { id: 'mistakes', label: '错题本', icon: BookOpen },
  ];

  return (
    <header className="sticky top-0 z-50 bg-warm-50/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-gray-900">小数苗</span>
          </div>

          <nav className="flex items-center gap-1 bg-white rounded-full p-1 shadow-sm">
            {tabs.map(tab => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    isActive ? 'bg-primary-light text-primary' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 text-sm text-orange-600">
            <span className="text-base">🔥</span>
            <span>连续 {streak} 题</span>
          </div>
        </div>
      </div>
    </header>
  );
}
