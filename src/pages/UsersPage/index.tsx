import { useEffect, useState } from "react";
import { api } from "../../services/api";
import UserModal from "./UserModal";

interface User {
  id: string;
  name: string;
  email: string;
  typeOfAccess: string;
}

export function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

async function handleDelete(id: string) {
  const confirmDelete = window.confirm(
    "Tem certeza que deseja excluir este usuário?"
  );

  if (!confirmDelete) {
    return;
  }

  try {
    await api.delete(`/user/${id}`);

    alert("Usuário excluído com sucesso!");

    loadUsers();

  } catch (error) {
    console.error("Erro ao excluir usuário:", error);

    alert("Erro ao excluir usuário");
  }
}
  async function loadUsers() {
    try {
      const response = await api.get("/user");
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    }
  }


  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <section className="space-y-6">
  
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Usuários</h2>
          <p className="text-slate-600">
            Lista de usuários cadastrados no sistema.
          </p>
        </div>

        <button 
          onClick={() => setShowModal(true)} 
          className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700" 
        >
          + Novo Usuário
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
                E-mail
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-700">
                Tipo de Acesso
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-700">
                Ações
              </th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-8 text-center text-slate-500"
                >
                  Nenhum usuário cadastrado.
                </td>
              </tr>
            ) : (
              users.map((user, index) => (
                <tr
                  key={user.id}
                  className="border-b transition hover:bg-slate-50"
                >
                  <td className="px-6 py-4">{index + 1}</td>

                  <td className="px-6 py-4 font-medium">
                    {user.name}
                  </td>

                  <td className="px-6 py-4">
                    {user.email}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700">
                      {user.typeOfAccess}
                    </span>
                  </td>

                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-2">
                      <button 
                         onClick={() => {
                          setSelectedUser(user);
                          setShowModal(true);
                        }}
                        className="rounded-md bg-yellow-500 px-3 py-1 text-sm font-medium text-white transition hover:bg-yellow-600">
                        Editar
                      </button>

                      <button 
                        onClick={() => handleDelete(user.id)}
                        className="rounded-md bg-red-500 px-3 py-1 text-sm font-medium text-white transition hover:bg-red-600">
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
    {showModal && (
    <UserModal
      user={selectedUser}
      onClose={() => {
        setShowModal(false);
        setSelectedUser(null);
      }}
      onUserCreated={loadUsers}
/>
    )}
    </section>
  );
}