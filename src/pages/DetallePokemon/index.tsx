import React from 'react';
import { API_POKEMON } from "./../../API/api.pokemon";
import { useLocation, useParams } from 'react-router-dom';
import './../../utils/scss/pages.detallePokemon.scss';

class DetallePokemon extends React.Component<any,any>{
    constructor(props: any) {
        super(props);
        this.state = {
            data: {
                name: '',
                sprites: {},
                abilities: {},
                stats: [],
                types: [],
                moves: []
            }
        };
    }

    componentDidMount(){
        this.onInit()
    }

    onInit = async () => {
        const { params: { id } } = this.props;
        const dataPokemon = await API_POKEMON(`pokemon/${id}`);
        const { name, sprites, abilities, stats, types, moves } = dataPokemon;
        const data = {
            name,
            sprites,
            abilities,
            stats,
            types,
            moves
        }
        console.log(data);
        this.setState({data});
    }

    render(){
        const { data } = this.state;
        return(
            <div className='contenedor'>
                <div className='detail_pokemon'>
                    <div className='imagen'>
                        <img src={data.sprites.front_default} alt="Not Found :c"/>
                        <div className='tipo'>
                            {data.types?.map((item:any, index:number) => 
                                <a key={index}>{item.type.name}</a>
                            )}
                        </div>
                    </div>
                    <div className='description'>
                        <h2>{data.name.toUpperCase()}</h2>
                        <div className='stats'>
                            <h3>Estadísticas iniciales</h3>
                            <div className='group__stats'>
                                <ul>
                                    {
                                        data.stats?.map((item:any, index:number) => 
                                            <li className='item__stats' key={index}>
                                                <p><strong>{item.stat.name}</strong>: {item.base_stat}</p>
                                            </li>
                                        )
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='group_moves'>
                        <hr/>
                        <h2>Lista de Movimientos</h2>
                        <ul className='list__moves'>
                            {
                                data.moves?.map((item:any, index:number) => 
                                    <li className='item__move' key={index}>
                                        <p>{item.move.name}</p>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const DETALLEPOKEMON = () => {
    const params = useParams();

    return <DetallePokemon params={params} />
}


export default DETALLEPOKEMON;