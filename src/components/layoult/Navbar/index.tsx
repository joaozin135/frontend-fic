type NavbarProps = {
  title: string
}

export function Navbar({ title }: NavbarProps) {
  return (
    <header className="border-b bg-white px-6 py-4">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="text-sm text-slate-500">Gestão de produtos</p>
    </header>
  )
}