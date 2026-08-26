import { Trophy, Flame, Star, BarChart } from './Icons';

export default function StatsPanel({ progress }) {
  const accuracy = progress.total > 0 ? Math.round((progress.correct / progress.total) * 100) : 0;

  return (
    <div className="space-y-4">
      {/* Accuracy Card */}
      <div className="bg-primary rounded-2xl p-5 text-white">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm opacity-90">今日正确率</span>
          <Trophy className="w-5 h-5 opacity-80" />
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-4xl font-bold">{accuracy}%</span>
          <span className="text-sm opacity-80">共答 {progress.total} 题</span>
        </div>
        <div className="mt-3 h-2 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white/80 rounded-full transition-all duration-500"
            style={{ width: `${accuracy}%` }}
          />
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
          <Flame className="w-5 h-5 text-orange-500 mx-auto mb-1" />
          <div className="text-xs text-gray-500">连续答对</div>
          <div className="text-lg font-semibold text-gray-900">{progress.streak} 题</div>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
          <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
          <div className="text-xs text-gray-500">今日收获</div>
          <div className="text-lg font-semibold text-gray-900">{progress.correct} 学习星</div>
        </div>
        <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
          <BarChart className="w-5 h-5 text-green-600 mx-auto mb-1" />
          <div className="text-xs text-gray-500">错题分析</div>
          <div className="text-lg font-semibold text-gray-900">{progress.mistakes.length} 题</div>
        </div>
      </div>
    </div>
  );
}
