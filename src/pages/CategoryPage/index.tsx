import { useEffect, useState } from "react";
import { api } from "../../services/api";

interface Category {
  id: string;
  name: string;
  description: string;
}

export function CategoryPage() {
  const [categories, setCategories] = useState<Category[]>([]);

  async function loadCategories() {
    try {
      const response = await api.get("/category");
      setCategories(response.data);
    } catch (error) {
      console.error("Erro ao carregar categorias:", error);
    }
  }

  useEffect(() => {
    loadCategories();
  }, []);

  return (
    <section className="space-y-6">

      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Categorias
          </h2>

          <p className="text-slate-600">
            Lista de categorias cadastradas no sistema.
          </p>
        </div>

        <button
          className="
            rounded-lg
            bg-blue-600
            px-4
            py-2
            font-medium
            text-white
            transition
            hover:bg-blue-700
          "
        >
          + Nova Categoria
        </button>
      </div>

      <div className="overflow-x-auto rounded-2xl bg-white shadow-sm">
        <table className="min-w-full">
          <thead className="border-b bg-slate-100">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Nº
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Nome
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Descrição
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="py-8 text-center text-slate-500"
                >
                  Nenhuma categoria cadastrada.
                </td>
              </tr>
            ) : (
              categories.map((category, index) => (
                <tr
                  key={category.id}
                  className="border-b transition hover:bg-slate-50"
                >
                  <td className="px-6 py-4">
                    {index + 1}
                  </td>

                  <td className="px-6 py-4 font-medium">
                    {category.name}
                  </td>

                  <td className="px-6 py-4">
                    {category.description}
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button
                        className="
                          rounded-md
                          bg-yellow-500
                          px-3
                          py-1
                          text-sm
                          font-medium
                          text-white
                          transition
                          hover:bg-yellow-600
                        "
                      >
                        Editar
                      </button>

                      <button
                        className="
                          rounded-md
                          bg-red-500
                          px-3
                          py-1
                          text-sm
                          font-medium
                          text-white
                          transition
                          hover:bg-red-600
                        "
                      >
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

    </section>
  );
}