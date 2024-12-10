import { useState } from "react"
import SettingSection from "./SettingSection"
import { HelpCircle, Plus } from "lucide-react"

const ConnectedAccounts = () => {
  const [connectedAccounts, setConnectedAccounts] = useState([
    { id: 1, name: "Google", icon: "/logo-Google.png", connected: true },
    { id: 2, name: "Facebook", icon: "/logo-Facebook.png", connected: false  },
    { id: 3, name: "Twitter", icon: "/logo-X.png", connected: false  },
    { id: 4, name: "GitHub", icon: "/logo-Git.svg", connected: true  },
  ])
  return (
    <SettingSection icon={HelpCircle} title={"Contas conectadas"}>
        {connectedAccounts.map((account) => (
            <div key={account.id} className="flex items-center justify-between py-3">
                <div className="flex gap-1">
                    <img src={account.icon} alt="Social img" className="size-6 object fit -6"/>
                    <span className="text-gray-300">{account.name}</span>
                </div>
                <button
                  className={`px-3 py-1 rounded ${account.connected ? "bg-green-600 hover:bg-green-700" : "bg-gray-600 hover:bg-gray-700"} transition duration-200`}
                  onClick={() => {
                    setConnectedAccounts(
                      connectedAccounts.map((acc) =>
                        acc.id === account.id
                         ? {...acc, connected:!acc.connected }
                          : acc
                      )
                    )
                  }}
                >
                  {account.connected ? "Conectado" : "Conectar"}
                </button>
            </div>
        ))}
        <button className="mt-4 flex items-center text-indigo-400 hover:text-indigo-300 transsition duration-200">
          <Plus  size={18} className="mr-2"/>
          Adicionar Conta
        </button>
    </SettingSection>
  )
}

export default ConnectedAccounts