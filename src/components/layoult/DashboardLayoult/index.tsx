import type { ReactNode } from "react"

type DashboardLayoultProps = {
    children: ReactNode
}

export function DashboardLayoult ({ children }: DashboardLayoultProps) {
    return(
        <div className="min-h-screen bg-slate-100 text-slate-900">
            <aside className="fixed inset-y-0 left-0 w-64 bg-slate-900 p-6 text-white">
                <h1 className="text-xl font-bold">Admin</h1>

                <nav className="mt-8 space-y-2">
                    <button className="w-full rounded-lg bg-slate-700 px-4 py-2 text-left">
                        Resumo
                    </button>
                    <button className="w-full rounded-lg px-4 py-2 text-left hover:bg-slate-800">
                        Produtos
                    </button>
                </nav>
            </aside>

            <div className="min-h-screen pl-64 flex flex-col">
                <header className="border-b bg-white px-6 py-4">
                    <h2 className="text-2xl font-bold">Gestão de Produtos</h2>
                </header>

                <main className="flex-1 p-6">{children}</main>

                <footer className="border-t bg-white px-6 py-4 text-sm text-slate-500">
                    Painel de Produtos 
                </footer>
            </div>
        </div>
    )
}