import { Container } from '@/components/Container'

const steps = [
  {
    step: '01',
    title: 'Set your goal',
    description: 'Enter your current weight and target. We\'ll match you with others on a similar journey.',
  },
  {
    step: '02',
    title: 'Track together',
    description: 'Log your weight and see how you compare to your accountability partners in real-time.',
  },
  {
    step: '03',
    title: 'Stay motivated',
    description: 'Earn achievements for consistency and milestones. A little friendly competition goes a long way.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-32 bg-slate-50">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            How it works
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
            Simple accountability that actually works
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {steps.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-display text-lg font-semibold">
                  {item.step}
                </div>
                <h3 className="mt-6 font-display text-xl font-medium text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
