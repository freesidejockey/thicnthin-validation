import Image from 'next/image'
import logoImage from '@/images/thicnthin-logo.svg'

export function Logo(props: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div {...props}>
      <Image
        src={logoImage}
        alt="ThicNThin"
        className="h-full w-auto"
        unoptimized
      />
    </div>
  )
}
