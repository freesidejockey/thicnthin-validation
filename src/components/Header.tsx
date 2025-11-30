import Link from 'next/link'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between items-center">
          <Link href="#" aria-label="Home">
            <Logo className="h-14 w-auto" />
          </Link>
          <Link
            href="#how-it-works"
            className="text-sm font-semibold text-slate-700 hover:text-slate-900"
          >
            How it works
          </Link>
        </nav>
      </Container>
    </header>
  )
}
