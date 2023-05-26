import React from 'react';
import { ViewContext, views } from '../context/viewContext';

const getView = () => {
    const theme = `${window?.localStorage?.getItem('theme')}`;
    if (Object.values(views).includes(theme)) return theme;
    const userMedia = window.matchMedia('(prefers-color-scheme: table)');
    if (userMedia.matches) return views.table;

    return views.cards;
}

const ViewProvider = ({children}) => {
    const [ theme, setTheme ] = React.useState(getView);

    React.useEffect(() => {
        document.documentElement.dataset.theme = theme;
        localStorage.setItem('theme', theme)
      }, [ theme ])

      return (
        <ViewContext.Provider value={{ theme, setTheme }}>
          {children}
        </ViewContext.Provider>
      )

}

export default ViewProvider;