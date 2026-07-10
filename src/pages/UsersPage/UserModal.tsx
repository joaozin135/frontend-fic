import { useState } from "react";
import { api } from "../../services/api";

interface User {
  id: string;
  name: string;
  email: string;
  typeOfAccess: string;
}

interface UserModalProps {
  onClose: () => void;
  onUserCreated: () => void;
  user?: User | null;
}

export default function UserModal({
  onClose,
  onUserCreated,
  user,
}: UserModalProps) {

    const [name, setName] = useState(user?.name ?? "");
    const [email, setEmail] = useState(user?.email ?? "");
    const [password, setPassword] = useState("");
    const [typeOfAccess, setTypeOfAccess] = useState(user?.typeOfAccess ?? "USUARIO");

    const [loading, setLoading] = useState(false);


  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    try {

      setLoading(true);


    if(user){

    await api.put(`/user/${user.id}`, {
        name,
        email,
        typeOfAccess,
    });

    }else{

    await api.post("/user", {
        name,
        email,
        password,
        typeOfAccess,
    });

}


      alert("Usuário cadastrado com sucesso!");

      onUserCreated();
      onClose();


    } catch (error: any) {
        console.log(
            "ERRO BACKEND:",
            error.response?.data?.message
        );

        alert(
            error.response?.data?.message?.join("\n") ||
            "Erro ao cadastrar usuário"
        );
} finally {

      setLoading(false);

    }
  }

  


  return (

    <div className="
      fixed 
      inset-0 
      bg-black/50 
      flex 
      items-center 
      justify-center 
      z-50
    ">


      <div className="
        bg-white 
        rounded-xl 
        shadow-lg 
        w-full 
        max-w-md 
        p-6
      ">


        <div className="
          flex 
          justify-between 
          items-center 
          mb-6
        ">


          <h2 className="
            text-xl 
            font-semibold
          ">
            {user ? "Editar Usuário" : "Novo Usuário"}
          </h2>


          <button
            onClick={onClose}
            className="
              text-gray-500
              hover:text-black
              text-xl
            "
          >
            ×
          </button>


        </div>

        <form
          onSubmit={handleSubmit}
          className="
            flex 
            flex-col 
            gap-4
          "
        >

          <div>

            <label className="block text-sm mb-1">
              Nome
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="
                w-full 
                border 
                rounded-lg 
                px-3 
                py-2
                outline-none
                focus:ring-2
                focus:ring-yellow-400
              "
              placeholder="Digite o nome"
              required
            />

          </div>

          <div>

            <label className="block text-sm mb-1">
              Email
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full 
                border 
                rounded-lg 
                px-3 
                py-2
                outline-none
                focus:ring-2
                focus:ring-yellow-400
              "
              placeholder="Digite o email"
              required
            />

          </div>

          <div>

            <label className="block text-sm mb-1">
              Senha
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full 
                border 
                rounded-lg 
                px-3 
                py-2
                outline-none
                focus:ring-2
                focus:ring-yellow-400
              "
              placeholder="Digite a senha"
              required
            />

          </div>

          <div>
            <label className="block text-sm mb-1">
              Tipo de acesso
            </label>

            <select
              value={typeOfAccess}
              onChange={(e) => setTypeOfAccess(e.target.value)}
              className="
                w-full 
                border 
                rounded-lg 
                px-3 
                py-2
                outline-none
                focus:ring-2
                focus:ring-yellow-400
              "
            >
              <option value="USER">
                Usuário
              </option>

              <option value="ADMIN">
                Administrador
              </option>
            </select>
          </div>

          <div className="
            flex 
            justify-end 
            gap-3 
            mt-5
          ">
            <button
              type="button"
              onClick={onClose}
              className="
                px-4
                py-2
                rounded-lg
                border
                hover:bg-gray-100
              "
            >
              Cancelar
            </button>

            <button
              type="submit"
              disabled={loading}
              className="
                px-4
                py-2
                rounded-lg
                bg-yellow-500
                hover:bg-yellow-600
                disabled:opacity-50
              "
            >

              {loading ? "Salvando..." : "Cadastrar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}