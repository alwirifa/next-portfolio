'use client'

interface ContanierProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContanierProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-4 md:px-16 lg:px-0">
      {children}
    </div>
  )
}