import React, { Component } from 'react';

import Loader from './Loader'

import './styles/PokemonsCard.css'

class PokemonsCard extends Component {
    
    // Se tiene que hacer una nueva consulta de los datos
    // para poder extraer más información de los pokemones.
    // En los sprites se encontrarán las url para las imágenes.
    // En los types serán los atributos que permiten tener clasificados
    // a los pokemones.
    // En las abilities, se mostraran todos los nombres de las
    // habilidades que tengan cada uno de ellos.

    state = {
        loading: true,
        error: null,
        data: {
            sprites: [],
            types: [{
                type: []
            }],
            abilities: [{
                ability: []
            }]
        }
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () => {

        this.setState({ loading: true, error: null });

        try {
            // Al traer los nombres de los pokemons la primera vez,
            // tendremos un dato llamado url que al acceder a él podremos
            // visualizar más información de estos.
            const response = await fetch(`${this.props.pokemon.url}`)
            const data = await response.json()
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    }


    render() {

        if (this.state.loading === true) {
            return <Loader/>
        }

        return (
            <tr className="text-center align-items-center">
              <td className="p-0">
                  <img className="img-fluid" src={this.state.data.sprites.front_default} alt={this.props.pokemon.name}/>
              </td>
              <td className="text-capitalize">{this.props.pokemon.name}</td>
              <td className="text-capitalize">
                  {this.state.data.types.map(pokemon => {
                      return(
                          <div key={`${this.props.pokemon.name}/${pokemon.type.name}`}>
                              {pokemon.type.name}
                          </div>
                      )
                  })}
              </td>
              <td className="text-capitalize">
                {this.state.data.abilities.map(pokemon => {
                        return(
                            <div key={`${this.props.pokemon.name}${pokemon.ability.name}`}>{pokemon.ability.name}</div>
                        )
                    })}
              </td>
            </tr>

        );
    }
}

export default PokemonsCard;