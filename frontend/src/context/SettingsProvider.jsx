import { createContext, useState, useEffect } from "react";

export const SettingsContext = createContext();

export function SettingsProvider({ children }) {

    const defaultSettings = {
        theme: "light",
        typingSound: false,
        fontSize: "normal"
    };

    const [settings, setSettings] = useState(() => {
        const saved = localStorage.getItem("type2code-settings");
        return saved ? JSON.parse(saved) : defaultSettings;
    });

    function updateSetting(key, value) {
        setSettings((prev) => ({
            ...prev,
            [key]: value
        }));
    }

    useEffect(() => {
        localStorage.setItem("type2code-settings", JSON.stringify(settings));
    }, [settings]);
    useEffect(() => {
        document.body.dataset.theme = settings.theme;
        document.body.dataset.font = settings.fontSize;
    }, [settings]);

    return (
        <SettingsContext.Provider value={{ settings, updateSetting }}>
            {children}
        </SettingsContext.Provider>
    );
}