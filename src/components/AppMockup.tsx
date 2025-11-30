export function AppMockup() {
  return (
    <div className="relative w-[280px] sm:w-[320px]">
      {/* Phone frame */}
      <div className="rounded-[2.5rem] border-[8px] border-slate-900 bg-white p-4 shadow-xl">
        {/* Chart area */}
        <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-4 mb-4">
          <svg viewBox="0 0 200 80" className="w-full h-24">
            {/* Green line (You) */}
            <path
              d="M 10 20 Q 40 25 70 35 T 130 30 T 190 45"
              fill="none"
              stroke="#22c55e"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Blue line (Competitor) */}
            <path
              d="M 10 50 Q 50 48 90 40 T 150 50 T 190 48"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              strokeLinecap="round"
            />
            {/* Data points - Green */}
            <circle cx="10" cy="20" r="3" fill="#22c55e" />
            <circle cx="50" cy="28" r="3" fill="#22c55e" />
            <circle cx="90" cy="32" r="3" fill="#22c55e" />
            <circle cx="130" cy="30" r="3" fill="#22c55e" />
            <circle cx="170" cy="40" r="3" fill="#22c55e" />
            <circle cx="190" cy="45" r="3" fill="#22c55e" />
            {/* Data points - Blue */}
            <circle cx="10" cy="50" r="3" fill="#3b82f6" />
            <circle cx="50" cy="47" r="3" fill="#3b82f6" />
            <circle cx="90" cy="40" r="3" fill="#3b82f6" />
            <circle cx="130" cy="48" r="3" fill="#3b82f6" />
            <circle cx="170" cy="50" r="3" fill="#3b82f6" />
            <circle cx="190" cy="48" r="3" fill="#3b82f6" />
          </svg>
        </div>

        {/* User cards */}
        <div className="space-y-3">
          {/* You */}
          <div className="flex items-center justify-between rounded-xl border-2 border-slate-200 bg-white p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded border-2 border-green-500 bg-green-100">
                <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-medium text-slate-900">You</span>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-green-100 px-2 py-1">
              <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-sm font-semibold text-green-700">-1.6lbs</span>
            </div>
          </div>

          {/* Rick */}
          <div className="flex items-center justify-between rounded-xl border-2 border-slate-200 bg-white p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded border-2 border-blue-500 bg-blue-100">
                <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="font-medium text-slate-900">Rick</span>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-red-100 px-2 py-1">
              <svg className="h-3 w-3 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
              <span className="text-sm font-semibold text-red-700">+0.6lbs</span>
            </div>
          </div>

          {/* Tony */}
          <div className="flex items-center justify-between rounded-xl border-2 border-slate-200 bg-white p-3">
            <div className="flex items-center gap-3">
              <div className="flex h-6 w-6 items-center justify-center rounded border-2 border-slate-300 bg-white">
              </div>
              <span className="font-medium text-slate-900">Tony</span>
            </div>
            <div className="flex items-center gap-1 rounded-lg bg-green-100 px-2 py-1">
              <svg className="h-3 w-3 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-sm font-semibold text-green-700">-1.1lbs</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
