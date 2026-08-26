import { useState, useMemo } from 'react';
import { questions, categories } from './data/questions';
import { useProgress } from './hooks/useProgress';
import Header from './components/Header';
import CategoryList from './components/CategoryList';
import QuestionCard from './components/QuestionCard';
import StatsPanel from './components/StatsPanel';
import MistakeBook from './components/MistakeBook';

export default function App() {
  const [activeTab, setActiveTab] = useState('practice');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [directQuestion, setDirectQuestion] = useState(null);

  const { progress, recordAnswer } = useProgress();

  const categoryQuestions = useMemo(() => {
    if (selectedCategory) {
      return questions.filter(q => q.category === selectedCategory);
    }
    return [];
  }, [selectedCategory]);

  const currentQuestion = useMemo(() => {
    if (directQuestion) return directQuestion;
    if (categoryQuestions.length > 0) return categoryQuestions[questionIndex];
    return null;
  }, [directQuestion, categoryQuestions, questionIndex]);

  const answeredCountByCategory = useMemo(() => {
    const map = {};
    Object.keys(progress.answers).forEach(qid => {
      const q = questions.find(q => q.id === qid);
      if (q) {
        map[q.category] = (map[q.category] || 0) + 1;
      }
    });
    return map;
  }, [progress.answers]);

  const handleCategorySelect = (catId) => {
    setSelectedCategory(catId);
    setQuestionIndex(0);
    setDirectQuestion(null);
  };

  const handleSubmit = (qid, isCorrect) => {
    recordAnswer(qid, isCorrect);
  };

  const handleNext = () => {
    if (directQuestion) {
      setDirectQuestion(null);
      return;
    }
    if (questionIndex < categoryQuestions.length - 1) {
      setQuestionIndex(prev => prev + 1);
    } else {
      setSelectedCategory(null);
      setQuestionIndex(0);
    }
  };

  const handleSelectMistakeQuestion = (q) => {
    setDirectQuestion(q);
    setActiveTab('practice');
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setDirectQuestion(null);
    setQuestionIndex(0);
  };

  return (
    <div className="min-h-screen bg-warm-100">
      <Header activeTab={activeTab} onTabChange={setActiveTab} streak={progress.streak} />

      <main className="max-w-2xl mx-auto px-4 py-6">
        {activeTab === 'practice' && (
          <>
            {!currentQuestion ? (
              <>
                {/* Hero */}
                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-1">今日练习</div>
                  <h1 className="text-2xl font-bold text-gray-900 leading-tight">
                    一步一步，<br />把数学想明白
                  </h1>
                  <p className="text-sm text-gray-500 mt-2">
                    已按文档整理 {categories.length} 类、{questions.length} 道原题。选一个类型，按顺序逐题练习。
                  </p>
                </div>

                <div className="mb-4 text-sm font-medium text-gray-700">选择题型</div>
                <CategoryList
                  onSelect={handleCategorySelect}
                  answeredCountByCategory={answeredCountByCategory}
                />

                <div className="mt-6">
                  <StatsPanel progress={progress} />
                </div>
              </>
            ) : (
              <>
                <button
                  onClick={handleBackToCategories}
                  className="mb-4 text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1"
                >
                  ← 返回题型列表
                </button>

                <div className="mb-4 flex items-center gap-3">
                  <span className="text-sm font-medium text-primary bg-primary-light px-3 py-1 rounded-full">
                    {currentQuestion.categoryName}
                  </span>
                  <span className="text-sm text-gray-500">
                    第 {directQuestion ? questions.filter(q => q.category === currentQuestion.category).findIndex(q => q.id === currentQuestion.id) + 1 : questionIndex + 1} / {categoryQuestions.length} 题
                  </span>
                </div>

                <QuestionCard
                  question={currentQuestion}
                  totalInCategory={categoryQuestions.length}
                  index={directQuestion
                    ? questions.filter(q => q.category === currentQuestion.category).findIndex(q => q.id === currentQuestion.id)
                    : questionIndex}
                  onSubmit={handleSubmit}
                  onNext={handleNext}
                  hasAnswered={!!progress.answers[currentQuestion.id]}
                />

                <div className="mt-6">
                  <StatsPanel progress={progress} />
                </div>
              </>
            )}
          </>
        )}

        {activeTab === 'mistakes' && (
          <MistakeBook
            mistakeIds={progress.mistakes}
            onSelectQuestion={handleSelectMistakeQuestion}
          />
        )}
      </main>
    </div>
  );
}
