import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
})

const FavoriteContextProvider = ({ children }) => {
    const [favMealsIds, setFavMealsIds] = useState([])

    const addFavorite = (id) => {
        setFavMealsIds((currentFavIds) => [...currentFavIds, id])
    }

    const removeFavorite = (id) => {
        setFavMealsIds((currentFavIds) => currentFavIds.filter(mealId => mealId !== id))
    }

    const value = {
        ids: favMealsIds,
        addFavorite,
        removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoriteContextProvider