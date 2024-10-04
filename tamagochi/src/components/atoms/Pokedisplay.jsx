import React, { useState } from 'react'

const Pokedisplay = ({ id, name, sprites, ...props }) => {
    const [shiny, setShiny] = useState(false)
    const [back, setBack] = useState(false)

    const altGenerator = (backOption = false) => {
        // console.log(props, id, name)


        let sentence = "";

        sentence += shiny ? "Shiny " : "Default ";
        sentence += backOption ? "back " : "";
        sentence += "picture of " + name
        return sentence;
    }



    return (
        <div>
            <div onClick={() => setBack(!back)}>

                <span>{id} --- {name}</span>
            </div>
            <div onClick={() => setShiny(!shiny)}>


                <img src={
                    shiny ?
                        sprites?.front_shiny :
                        sprites?.front_default
                } alt={altGenerator()} />


                {back ? <img src={shiny ?
                    sprites?.back_shiny :
                    sprites?.back_default
                } alt={altGenerator(true)}
                /> : <></>}
            </div>
        </div>
    )
}

export default Pokedisplay