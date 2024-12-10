import { useState } from "react"
import SettingSection from "./SettingSection"
import { Bell } from "lucide-react"
import ToggleSwitch from "./ToggleSwitch"

const Notifications = () => {
   const [notifications, setNotifications] = useState({
        push:true,
        email: false,
        sms: true,
   })
   
  return (
    <SettingSection icon={Bell} title={"Notificações"}>
        <ToggleSwitch 
            label={"Notificações de Push"}
            isOn={notifications.push}
            onToggle={ () => setNotifications({...notifications, push: !notifications.push})}
        />
        <ToggleSwitch 
            label={" Notificações de Email"}
            isOn={notifications.email}
            onToggle={ () => setNotifications({...notifications, email: !notifications.email})}
        />
        <ToggleSwitch 
            label={" Notificações de SMS"}
            isOn={notifications.sms}
            onToggle={ () => setNotifications({...notifications, sms: !notifications.sms})}
        />
    </SettingSection>
  )
}

export default Notifications