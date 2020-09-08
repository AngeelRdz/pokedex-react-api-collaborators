import React from 'react';

import PokemonsCard from './PokemonsCard'

// Usando React Hooks filtramos los datos basándonos en la
// búsqueda del usuario, para obtener un nuevo conjunto de
// datos al cual llamaremos filteredPokemon.

function useSearchPokemons(pokemons){
    const [query, setQuery] = React.useState('')
    const [filteredPokemons, setFilteredPokemons] = React.useState(pokemons)

    React.useMemo(() => {
      const result = pokemons.filter(pokemon => {
        return `${pokemon.name}`
        .toLowerCase()
        .includes(query.toLowerCase())
      })
      setFilteredPokemons(result)
    }, [pokemons, query])
  
    return {query, setQuery, filteredPokemons}
}

function PokemonsList(props){

    const pokemons = props.pokemons
    
    const {query, setQuery, filteredPokemons} = useSearchPokemons(pokemons)

    if (filteredPokemons.length === 0) {
        return (
          <div>
            <h3 className="text-white">Lista de pokemones</h3>
            <div>
                <div className="form-group">
                  <label className="text-white">Encuentra el pokemon que estás buscando</label>
                  <input 
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value)
                    }}
                    />
                </div>
            </div>
            <div className="container">
                  <h3 className="text-white">No se encontraron Pokemones</h3>
            </div>
          </div>
        );
    }
        
    return (
        <div className="text-center mt-3">
            <h3 className="text-white">Lista de pokemones</h3>
            <p className="text-white text-muted">*Limitado a la región de Kanto*</p>
            <div>
                <div className="form-group">
                  <input 
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value)
                    }}
                    placeholder="Busca tu pokemon"
                    />
                </div>
            </div>
            <div>
                <label className="text-white">Son 150 pokemones de la region de Kanto</label>

                <table className="table table-bordered bg-white text-center align-items-center">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Imágen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Tipo</th>
                        <th scope="col">Habilidades</th>
                      </tr>
                    </thead>
                    <tbody>
                        {filteredPokemons.map(pokemon => {
                            return(
                                <PokemonsCard checkboxChange={props.onCheckboxChange} className="h-100" key={pokemon.name} pokemon={pokemon}/>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );  
}

export default PokemonsList;