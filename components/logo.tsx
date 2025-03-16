import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const sizes = {
    sm: { width: 100, height: 40 },
    md: { width: 150, height: 60 },
    lg: { width: 300, height: 120},
  }

  return (
    <Link href="/" className={className}>
      <Image
        src="/logo.png"
        alt="TIS Global Logo"
        width={sizes[size].width}
        height={sizes[size].height}
        className="dark:brightness-200" // Makes logo more visible in dark mode
        priority
      />
    </Link>
  )
}

