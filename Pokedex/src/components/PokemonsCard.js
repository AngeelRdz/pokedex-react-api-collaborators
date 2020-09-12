import React, { Component } from 'react';

import Loader from './Loader'

import './styles/PokemonsCard.css'

class PokemonsCard extends Component {
    

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
              <th scope="row form-check">
                <input type="checkbox" className="form-check-input position-static" id={this.props.pokemon.name} onClick={this.props.checkboxChange}/>
              </th>
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