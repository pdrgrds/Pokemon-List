import React from "react";
import { API_POKEMON } from "./../../API/api.pokemon";
import "./../../utils/scss/pages.inicio.index.scss";
import { useLocation, useParams, Link } from 'react-router-dom'

class Inicio extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 0,
      next: null,
      previous: null,
      results: [],
    };
  }

  componentDidMount() {
    this.onInit();
  }

  onInit = async () => {
    const params = this.constructorParams();
    const dataPokemon = await API_POKEMON(params);
    const { count, next, previous, results } = dataPokemon;
    const LengthUrlWithoutId: number = 34;

    results.map((item: any) => {
      const URLData: string = item.url;
      const nroDigitoId = URLData.length - 35 + LengthUrlWithoutId;
      const idPokemon = URLData.substring(LengthUrlWithoutId, nroDigitoId);

      //agregar campo imagen
      item.imagen = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`;
    });

    let pagination:any = new URLSearchParams(this.props.location.search).get('pagination');

    if(pagination) {
        pagination = parseInt(pagination); 
    } 
    if(next){
        let _temp:string = "";
        pagination ? _temp = `?pagination=${pagination + 1}` : _temp = `?pagination=2`;
        this.setState({next: _temp})
    }
    if(previous){
        let _temp:string = "";
        pagination ? _temp = `?pagination=${pagination - 1}` : _temp = `?pagination=1`;
        this.setState({previous: _temp});
    }

    this.setState({ count, results });
  };

  constructorParams = (): string => {
    let param: string = "";
    const { params: { pokemon }, location } = this.props;
    const pagination:any = new URLSearchParams(location.search).get('pagination');

    param += "pokemon";
    if(pokemon) param += `/${pokemon}`;
    param += "?limit=15";
    if(pagination && pagination > 0) param +=`&offset=${(pagination-1) * 15}`;

    return param;
  }

  render() {
    const { results, count, next, previous } = this.state;
    return (
      <>
        <div className="contenedor">
          <div className="total__search">
            <p>Número total de pokemones: <strong>{count}</strong></p>
          </div>
          <div className="contenedor__listado">
              {
                results.map((item:any, key: number) => 
                  <Link key={key} to={`/pokemon/${item.name}`} className="item__listado">
                      <img src={item.imagen} height={50} />
                      <div className="block-texto">
                        <h3>{item.name.toUpperCase()}</h3>
                        <a>Información</a>
                      </div>
                  </Link>
                )
              }
          </div>
          <div className="contenedor__links">
              <div className="links">
                { previous && <Link reloadDocument to={previous} className="link link__left">ANTERIOR</Link> }
                { next && <Link reloadDocument to={next} className="link link__rigth">SIGUIENTE</Link> }
              </div>
          </div>
        </div>
      </>
    );
  }
}

const INICIO = () => {
    const location = useLocation();
    const params = useParams();

    return <Inicio location={location} params={params} />
}

export default INICIO;
