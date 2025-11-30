'use client'

import { useState } from 'react'
import { Container } from '@/components/Container'
import { AppMockup } from '@/components/AppMockup'
import { supabase } from '@/lib/supabase'

export function Hero() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const { error } = await supabase
      .from('waitlist_signups')
      .insert({ email })

    if (error) {
      if (error.code === '23505') {
        // Unique constraint violation - email already exists
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
        setErrorMessage('Something went wrong. Please try again.')
      }
      return
    }

    setStatus('success')
    setEmail('')
  }

  return (
    <Container className="pt-20 pb-16 lg:pt-32">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
        <div className="text-center lg:text-left">
          <h1 className="mx-auto lg:mx-0 max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Lose weight{' '}
            <span className="relative whitespace-nowrap text-blue-600">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">together</span>
            </span>
          </h1>
          <p className="mx-auto lg:mx-0 mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            Get matched with others who share your weight loss goals. Track your progress side by side and stay accountable together.
          </p>

          <form onSubmit={handleSubmit} className="mt-10 flex flex-col sm:flex-row gap-4 max-w-md mx-auto lg:mx-0">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-full border border-slate-300 px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              disabled={status === 'loading' || status === 'success'}
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="rounded-full bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {status === 'loading' ? 'Joining...' : status === 'success' ? 'You\'re in!' : 'Join Waitlist'}
            </button>
          </form>

          {status === 'success' && (
            <p className="mt-4 text-sm text-green-600 text-center lg:text-left">
              Thanks for joining! We'll be in touch soon.
            </p>
          )}

          {status === 'error' && (
            <p className="mt-4 text-sm text-red-600 text-center lg:text-left">
              {errorMessage}
            </p>
          )}

          <p className="mt-4 text-sm text-slate-500 text-center lg:text-left">
            Be the first to know when we launch. No spam, ever.
          </p>
        </div>

        <div className="mt-16 lg:mt-0 flex justify-center">
          <AppMockup />
        </div>
      </div>
    </Container>
  )
}
