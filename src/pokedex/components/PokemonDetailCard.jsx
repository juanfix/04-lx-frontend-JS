import { useEffect } from "react";

export const PokemonDetailCard = ( props ) => {

    const { pokemonInfo } = props;

     const { 
        id,
        height,
        name,
        sprites,
        stats,
        types,
        abilities,
        weight
        } = pokemonInfo;

     useEffect(() => {
       return () => {
         
       }
     }, [props])
     

  return (
    <>
        {
            (id !== 0) && (
                <div className="row mt-5">
                    <div className="col-4">
                    <img
                        src={ sprites.front_default }
                        alt={ name }
                        className="img-thumbnail bg-dark w-100"
                    />
                    </div>
                    <div className="col-8">
                        <h3># { id } { name }</h3>
                        <ul className="list-group">
                            <li className="list-group-item list-group-item-dark"> <b>Type: </b> { types && types.map(oneType => <div key={ oneType.slot }>{ oneType.type.name }</div>) } </li>
                            <li className="list-group-item list-group-item-dark"> <b>Abilities: </b> { abilities && abilities.map(oneAbility => <div key={ oneAbility.slot }>{ oneAbility.ability.name }</div>) } </li>
                            <li className="list-group-item list-group-item-dark"> <b>Stats: </b> { stats && stats.map(oneStat => <div key={ oneStat.stat.name }>{ oneStat.stat.name }: { oneStat.base_stat }</div>) } </li>
                            <li className="list-group-item list-group-item-dark"> <b>Height: </b> { height } </li>
                            <li className="list-group-item list-group-item-dark"> <b>Weight: </b> { weight } </li>
                        </ul>
                    </div>
                </div>
            )
        }
    </>
  )
}
