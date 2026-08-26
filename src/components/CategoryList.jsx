import { categories } from '../data/questions';
import { iconMap, ChevronRight } from './Icons';

const toneStyles = {
  orange: 'bg-orange-50 text-orange-600',
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-green-50 text-green-600',
  yellow: 'bg-yellow-50 text-yellow-600',
};

export default function CategoryList({ onSelect, answeredCountByCategory }) {
  return (
    <div className="space-y-3">
      {categories.map(cat => {
        const Icon = iconMap[cat.icon] || iconMap.CircleHelp;
        const answered = answeredCountByCategory[cat.id] || 0;
        return (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className="w-full flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left"
          >
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${toneStyles[cat.tone] || toneStyles.orange}`}>
              <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-gray-900">{cat.name}</div>
              <div className="text-sm text-gray-500">{cat.count} 道原题</div>
            </div>
            {answered > 0 && (
              <span className="text-xs bg-primary-light text-primary px-2 py-0.5 rounded-full">
                已答 {answered}
              </span>
            )}
            <ChevronRight className="w-5 h-5 text-gray-300 shrink-0" />
          </button>
        );
      })}
    </div>
  );
}
