export function AppMockup() {
  return (
    <div className="relative w-[320px] sm:w-[380px]">
      {/* Phone frame */}
      <div className="relative rounded-[2.5rem] border-[8px] border-slate-800 bg-white shadow-xl overflow-hidden">
        {/* Status bar */}
        <div className="flex justify-between items-center px-6 py-2 text-slate-900 text-sm">
          <span className="font-semibold">9:41</span>
          <div className="absolute left-1/2 -translate-x-1/2 w-24 h-6 bg-slate-900 rounded-full"></div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3C7.46 3 3.34 4.78.29 7.67c-.18.18-.29.43-.29.71 0 .28.11.53.29.71l2.48 2.48c.18.18.43.29.71.29.27 0 .52-.11.7-.28.79-.74 1.69-1.36 2.66-1.85.33-.16.56-.5.56-.9v-3.1c1.45-.48 3-.73 4.6-.73s3.15.25 4.6.73v3.1c0 .4.23.74.56.9.98.49 1.87 1.12 2.67 1.85.18.18.43.28.7.28.28 0 .53-.11.71-.29l2.48-2.48c.18-.18.29-.43.29-.71 0-.28-.11-.53-.29-.71C20.66 4.78 16.54 3 12 3z"/>
            </svg>
            <svg className="w-6 h-3" fill="currentColor" viewBox="0 0 24 12">
              <rect x="0" y="0" width="22" height="12" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
              <rect x="2" y="2" width="18" height="8" rx="1" fill="currentColor"/>
              <rect x="22" y="4" width="2" height="4" rx="1" fill="currentColor"/>
            </svg>
          </div>
        </div>

        {/* App content */}
        <div className="px-4 pb-4">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-slate-900 text-2xl font-bold">Progress</h1>
            <button className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          {/* Time period toggles */}
          <div className="flex gap-2 mb-4">
            {['1W', '1M', '3M', 'YTD', 'ALL'].map((period, i) => (
              <button
                key={period}
                className={`px-3 py-1.5 rounded-full text-xs font-medium ${
                  i === 1
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {period}
              </button>
            ))}
          </div>

          {/* Chart */}
          <div className="rounded-2xl bg-slate-50 p-4 mb-4 border border-slate-200">
            <svg viewBox="0 0 200 100" className="w-full h-28">
              {/* Grid lines */}
              <line x1="0" y1="15" x2="200" y2="15" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="0" y1="35" x2="200" y2="35" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="0" y1="55" x2="200" y2="55" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2,2" />
              <line x1="0" y1="75" x2="200" y2="75" stroke="#e2e8f0" strokeWidth="0.5" strokeDasharray="2,2" />

              {/* Y-axis labels */}
              <text x="0" y="15" fill="#94a3b8" fontSize="6" dominantBaseline="middle">195</text>
              <text x="0" y="35" fill="#94a3b8" fontSize="6" dominantBaseline="middle">167</text>
              <text x="0" y="55" fill="#94a3b8" fontSize="6" dominantBaseline="middle">147</text>
              <text x="0" y="75" fill="#94a3b8" fontSize="6" dominantBaseline="middle">127</text>

              {/* Blue line (weight) - higher values */}
              <path
                d="M 20 22 L 50 24 L 80 26 L 110 28 L 140 27 L 170 25 L 195 26"
                fill="none"
                stroke="#2563eb"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Green line (goal/comparison) - lower values */}
              <path
                d="M 20 58 L 50 57 L 80 58 L 110 60 L 140 59 L 170 61 L 195 65"
                fill="none"
                stroke="#22c55e"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data points - Blue */}
              <circle cx="20" cy="22" r="3" fill="#2563eb" />
              <circle cx="50" cy="24" r="3" fill="#2563eb" />
              <circle cx="80" cy="26" r="3" fill="#2563eb" />
              <circle cx="110" cy="28" r="3" fill="#2563eb" />
              <circle cx="140" cy="27" r="3" fill="#2563eb" />
              <circle cx="170" cy="25" r="3" fill="#2563eb" />
              <circle cx="195" cy="26" r="3" fill="#2563eb" />

              {/* Data points - Green */}
              <circle cx="20" cy="58" r="3" fill="#22c55e" />
              <circle cx="50" cy="57" r="3" fill="#22c55e" />
              <circle cx="80" cy="58" r="3" fill="#22c55e" />
              <circle cx="110" cy="60" r="3" fill="#22c55e" />
              <circle cx="140" cy="59" r="3" fill="#22c55e" />
              <circle cx="170" cy="61" r="3" fill="#22c55e" />
              <circle cx="195" cy="65" r="3" fill="#22c55e" />

              {/* X-axis labels */}
              <text x="20" y="95" fill="#94a3b8" fontSize="5" textAnchor="middle">Nov 1</text>
              <text x="55" y="95" fill="#94a3b8" fontSize="5" textAnchor="middle">Nov 8</text>
              <text x="95" y="95" fill="#94a3b8" fontSize="5" textAnchor="middle">Nov 15</text>
              <text x="135" y="95" fill="#94a3b8" fontSize="5" textAnchor="middle">Nov 22</text>
              <text x="170" y="95" fill="#94a3b8" fontSize="5" textAnchor="middle">Nov 29</text>
              <text x="195" y="95" fill="#94a3b8" fontSize="5" textAnchor="middle">Dec 2</text>
            </svg>
          </div>

          {/* Accountability Partners */}
          <h2 className="text-slate-500 text-xs font-semibold tracking-wider mb-3">ACCOUNTABILITY PARTNERS</h2>

          <div className="space-y-2">
            {/* You */}
            <div className="flex items-center gap-3 rounded-xl bg-white p-3 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-blue-600">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-slate-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div className="flex-1">
                <div className="text-slate-900 font-medium">You</div>
                <div className="text-slate-400 text-xs">178 lbs → 170 lbs</div>
              </div>
              <div className="px-2 py-1 rounded-lg bg-blue-50 border border-blue-200">
                <span className="text-blue-600 text-sm font-semibold">-7 lbs</span>
              </div>
            </div>

            {/* Sarah M. */}
            <div className="flex items-center gap-3 rounded-xl bg-white p-3 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-green-500">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center text-lg">
                💁‍♀️
              </div>
              <div className="flex-1">
                <div className="text-slate-900 font-medium">Sarah M.</div>
                <div className="text-slate-400 text-xs">137 lbs → 135 lbs</div>
              </div>
              <div className="px-2 py-1 rounded-lg bg-green-50 border border-green-200">
                <span className="text-green-600 text-sm font-semibold">-5 lbs</span>
              </div>
            </div>

            {/* Mike R. */}
            <div className="flex items-center gap-3 rounded-xl bg-white p-3 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg border-2 border-slate-300 bg-white">
              </div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-lg">
                👨
              </div>
              <div className="flex-1">
                <div className="text-slate-900 font-medium">Mike R.</div>
                <div className="text-slate-400 text-xs">202 lbs → 190 lbs</div>
              </div>
              <div className="px-2 py-1 rounded-lg bg-blue-50 border border-blue-200">
                <span className="text-blue-600 text-sm font-semibold">-8 lbs</span>
              </div>
            </div>

            {/* Jordan K. (partially visible) */}
            <div className="flex items-center gap-3 rounded-xl bg-white p-3 border border-slate-200 shadow-sm opacity-60">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg border-2 border-slate-300 bg-white">
              </div>
              <div className="w-10 h-10 rounded-xl bg-teal-100 flex items-center justify-center text-lg">
                🧑
              </div>
              <div className="flex-1">
                <div className="text-slate-900 font-medium">Jordan K.</div>
              </div>
              <div className="px-2 py-1 rounded-lg bg-teal-50 border border-teal-200">
                <span className="text-teal-600 text-sm font-semibold">-4 lbs</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="flex justify-around items-center py-3 bg-white border-t border-slate-200">
          <div className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 13h2v8H3v-8zm4-6h2v14H7V7zm4-4h2v18h-2V3zm4 8h2v10h-2V11zm4 4h2v6h-2v-6z"/>
            </svg>
            <span className="text-blue-600 text-[10px] font-medium">Progress</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
            <span className="text-slate-400 text-[10px]">Logbook</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-lg">🎯</span>
            <span className="text-slate-400 text-[10px]">Goals</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-lg">🏆</span>
            <span className="text-slate-400 text-[10px]">Achievements</span>
          </div>
        </div>

        {/* Home indicator */}
        <div className="flex justify-center pb-2 bg-white">
          <div className="w-32 h-1 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}
