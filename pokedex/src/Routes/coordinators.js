export const goToHomePage = (history) => {
    history.push('/')
}

export const goToPokedexPage = (history) => {
    history.push('/pokedex')
}

export const goToDetailPage = (history, pokeId) => {
    history.push(`/detail/${pokeId}`)
}