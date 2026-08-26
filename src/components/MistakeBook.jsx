import { questions } from '../data/questions';
import { BookOpen, ArrowRight } from './Icons';

export default function MistakeBook({ mistakeIds, onSelectQuestion }) {
  const mistakeQuestions = questions.filter(q => mistakeIds.includes(q.id));

  if (mistakeQuestions.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-8 text-center shadow-sm">
        <BookOpen className="w-12 h-12 text-gray-300 mx-auto mb-3" />
        <h3 className="text-lg font-medium text-gray-900 mb-1">错题本还是空的</h3>
        <p className="text-sm text-gray-500">答错的题目会自动收录到这里，方便复习巩固</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-medium text-gray-900">错题本 ({mistakeQuestions.length} 题)</h3>
      </div>
      {mistakeQuestions.map(q => (
        <button
          key={q.id}
          onClick={() => onSelectQuestion(q)}
          className="w-full flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left"
        >
          <div className="flex-1 min-w-0">
            <div className="text-sm text-gray-500 mb-1">{q.categoryName} · {q.source}</div>
            <div className="text-gray-900 line-clamp-2">{q.prompt}</div>
          </div>
          <ArrowRight className="w-5 h-5 text-gray-300 shrink-0" />
        </button>
      ))}
    </div>
  );
}
