import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function DashboardHome() {
  const [totais, setTotais] = useState({
    users: 0,
    courses: 0,
    categories: 0,
  });

  useEffect(() => {
    async function carregarDados() {
      try {
        const usersResponse = await api.get("/user");
        const coursesResponse = await api.get("/course");
        const categoriesResponse = await api.get("/category");

        console.log("Usuários:", usersResponse.data);
        console.log("Cursos:", coursesResponse.data);
        console.log("Categorias:", categoriesResponse.data);

        setTotais({
          users: usersResponse.data.length,
          courses: coursesResponse.data.length,
          categories: categoriesResponse.data.length,
        });
      } catch (error) {
        console.error("Erro ao carregar dashboard:", error);
      }
    }

    carregarDados();
  }, []);

  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-2xl font-bold">Resumo</h3>
        <p className="text-slate-600">
          Visão geral do painel administrativo.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Total de usuários</p>
          <strong className="mt-2 block text-3xl">
            {totais.users}
          </strong>
        </article>

        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Categorias</p>
          <strong className="mt-2 block text-3xl">
            {totais.categories}
          </strong>
        </article>

        <article className="rounded-2xl bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">Cursos</p>
          <strong className="mt-2 block text-3xl">
            {totais.courses}
          </strong>
        </article>
      </div>
    </section>
  );
}