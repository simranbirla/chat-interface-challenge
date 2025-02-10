import { useContext, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Themes, ThemeStore } from "../../context/ThemeContext";
import { languages } from "../../utils/languages";

const Settings: React.FC = () => {
    const [speechEnabled, setSpeechEnabled] = useState(localStorage.getItem("speech") ?? "true")
    const [language, setLanguage] = useState(localStorage.getItem('lang') ?? languages[0])
    const { theme, changeTheme } = useContext(ThemeStore);


    const handleLanguage = (lang: string) => {
        localStorage.setItem('lang', lang)
        setLanguage(lang)
    }

    const handlSpeechEnabled = (isEnabled: string) => {
        localStorage.setItem('speech', isEnabled)
        setSpeechEnabled(isEnabled)
    }

    return (
        <div className={`flex items-center justify-center h-screen dark:bg-gray-900 dark:text-white  bg-gray-100 text-gray-900}`}>
            <div className="w-96 p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800">
                <h2 className="text-xl font-semibold text-center mb-4">Settings</h2>

                {/* Language Selector */}
                <div className="mb-4">
                    <label className="block text-sm font-medium">Language</label>
                    <select
                        className="mt-1 w-full p-2 border rounded-lg bg-gray-100 dark:bg-gray-700"
                        value={language}
                        onChange={(e) => handleLanguage(e.target.value)}
                    >
                        {languages.map(l => <option value={l}>{l}</option>)}
                    </select>
                </div>

                <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">Speech Enabled</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={speechEnabled === "true"} onChange={() => handlSpeechEnabled(speechEnabled === "true" ? "false" : "true")} />
                        <div className="w-10 h-5 bg-gray-300 peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-4 after:w-4 after:transition-transform peer-checked:after:translate-x-5"></div>
                    </label>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Theme</span>
                    <button
                        onClick={() => changeTheme()}
                        className="flex items-center px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-700"
                    >
                        {theme === Themes.light ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-blue-500" />}
                        <span className="ml-2">{theme === Themes.light ? "Light" : "Dark"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
