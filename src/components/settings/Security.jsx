import { Lock } from "lucide-react"
import SettingSection from "./SettingSection"
import ToggleSwitch from "./ToggleSwitch"
import { useState } from "react"

const Security = () => {
  const [twoFactor, setTwoFactor] = useState(true)

  return (
    <SettingSection icon={Lock} title={"Segurança"} >
        <ToggleSwitch 
            label={"Dois fatores de Autentificação"}
            isOn={twoFactor}
            onToggle={() => setTwoFactor(!twoFactor)}
        />
        <div className="mt-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-200 w-full sm:w-auto">
                Alterar Senha
            </button>
        </div>
    </SettingSection>
  )
}

export default Security