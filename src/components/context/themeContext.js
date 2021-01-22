import React , {useState} from 'react'

export const ThemeContext = React.createContext();

export const ThemeContextProvider = (props) => {
    const [theme,setTheme] = useState({
        isDarkMode : false,
        primaryBackground : "#F2F3F5",
        secondaryBackground : "#fff",
        primaryTextColor : "#1f1f1f",
        secondaryTextColor : "#1c1e21"
    });
    
    
    return (
        <ThemeContext.Provider value={[theme,setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    )
}
