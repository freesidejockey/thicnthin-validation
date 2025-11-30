import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="bg-slate-50">
      <Container>
        <div className="flex flex-col items-center py-10">
          <Logo className="h-8 w-auto" />
          <p className="mt-4 text-sm text-slate-500">
            Copyright &copy; {new Date().getFullYear()} ThicNThin. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
