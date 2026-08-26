import { useState, useEffect } from 'react';
import { ArrowRight } from './Icons';

export default function QuestionCard({ question, totalInCategory, index, onSubmit, onNext, hasAnswered }) {
  const [answer, setAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [showMethod, setShowMethod] = useState(false);

  useEffect(() => {
    setAnswer('');
    setShowResult(false);
    setIsCorrect(false);
    setShowMethod(false);
  }, [question.id]);

  const handleSubmit = () => {
    if (!answer.trim() || showResult) return;
    const correct = checkAnswer(answer, question.answer);
    setIsCorrect(correct);
    setShowResult(true);
    onSubmit(question.id, correct);
  };

  const handleNext = () => {
    onNext();
  };

  const checkAnswer = (userAns, correctAns) => {
    const normalize = (s) => s.replace(/[\s,，.。厘米米个种只字段人分次元年]/g, '').toLowerCase();
    const u = normalize(userAns);
    const c = normalize(correctAns);
    return u === c || correctAns.includes(userAns.trim()) || userAns.trim().includes(c);
  };

  const inputDisabled = showResult;

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-100 text-gray-600 text-sm font-medium">
            填
          </span>
          <span className="text-sm text-gray-500">{question.kind === 'choice' ? '选择题' : '填空题'}</span>
        </div>
        <span className="text-xs text-gray-400">文档原题</span>
      </div>

      <h3 className="text-lg font-medium text-gray-900 mb-4 leading-relaxed">
        {question.prompt}
      </h3>

      {question.image && (
        <div className="mb-4 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
          <img
            src={question.image}
            alt={question.source}
            className="w-full max-h-64 object-contain"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
        </div>
      )}

      {question.options && (
        <div className="space-y-2 mb-4">
          {question.options.split(',').map((opt, i) => (
            <label key={i} className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 hover:bg-gray-50 cursor-pointer">
              <input
                type="radio"
                name="choice"
                value={opt.trim()}
                disabled={inputDisabled}
                onChange={(e) => setAnswer(e.target.value)}
                className="w-4 h-4 text-primary"
              />
              <span className="text-gray-700">{opt.trim()}</span>
            </label>
          ))}
        </div>
      )}

      {!question.options && (
        <div className="flex gap-3 mb-4">
          <input
            type="text"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={inputDisabled}
            placeholder="在这里填写答案"
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all disabled:bg-gray-50"
            onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          />
          <span className="self-center text-sm text-gray-400 shrink-0">填写最终答案</span>
        </div>
      )}

      {!showResult ? (
        <button
          onClick={handleSubmit}
          disabled={!answer.trim()}
          className="inline-flex items-center justify-center px-7 py-3 h-12 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          提交答案
          <ArrowRight className="w-4 h-4 ml-2" />
        </button>
      ) : (
        <div className="space-y-4">
          <div className={`p-4 rounded-xl ${isCorrect ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
            <div className="font-medium mb-1">
              {isCorrect ? '回答正确！' : '回答错误'}
            </div>
            <div className="text-sm">
              正确答案：{question.answer}
            </div>
          </div>

          {question.method && (
            <div className="border border-gray-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setShowMethod(!showMethod)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                查看解析
                <span className="text-gray-400">{showMethod ? '收起' : '展开'}</span>
              </button>
              {showMethod && (
                <div className="px-4 pb-4 text-sm text-gray-600 whitespace-pre-line leading-relaxed">
                  {question.method}
                </div>
              )}
            </div>
          )}

          <button
            onClick={handleNext}
            className="inline-flex items-center justify-center px-7 py-3 h-12 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
          >
            {index < totalInCategory - 1 ? '下一题' : '完成练习'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </button>
        </div>
      )}
    </div>
  );
}
