import React from 'react';

import PokemonsCard from './PokemonsCard'
import SavePokemonsModal from './SavePokemonsModal'

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
                <h3 className="text-white">No pokemons were found</h3>
            </div>
          </div>
        );
    }
        
    return (
        <div className="text-center mt-3">
            <h3 className="text-white">Lista Pokemon</h3>
            <p className="text-white text-muted">Region de Kanto</p>
            <div>
                <div className="form-group">
                  <label className="text-white">Busca a tu Pokemon</label>
                  <input 
                    type="text"
                    className="form-control"
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value)
                    }}
                    placeholder="Ej. charmander"
                    />
                </div>
            </div>
            <div>
                <label className="text-white">Elige los pokemones que desees añadir</label>
                <p className="text-white text-muted">**</p>
                <button className="btn btn-success mb-3">
                    Guardar
                </button>
                <table className="table table-bordered bg-white text-center align-items-center">
                    <thead className="thead-light">
                      <tr>
                        <th scope="col">Checar</th>
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
                <button  className="btn btn-success mt-3 mb-3">
                    Guardar
                </button>
                {/* Al presionar el boton guardar, mandaremos a llamar el modal.
                El modal nos servirá para desplegar un elemento que está 
                fuera de nuestra aplicación, pero que si se encuentra en el DOM. */}
                <SavePokemonsModal
                    isOpen={props.modalIsOpen}
                    onClose={props.onCloseModal}
                    onSave={props.onSave}
                    data={props.selectedPokemons}
                />
            </div>
        </div>
    );  
}

export default PokemonsList;