export function DashboardHome() {
  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold">Resumo</h3>
        <p className="text-slate-600">Visão geral do painel administrativo.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Total de produtos</p>
          <strong className="mt-2 block text-3xl">0</strong>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Produtos ativos</p>
          <strong className="mt-2 block text-3xl">0</strong>
        </article>
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Estoque total</p>
          <strong className="mt-2 block text-3xl">0</strong>
        </article>
      </div>
    </section>
  )
}