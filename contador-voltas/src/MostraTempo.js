import React from 'react';

const MostraTempo = (props) => {
    const tempo = props.tempo;
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    const minStr = minutos < 10 ? '0' + minutos : minutos;
    const segStr = segundos < 10 ? '0' + segundos : segundos;
  
    return(
      <p className='tempo'>
        <span> {`${minStr}:${segStr}`} </span> <br/>
        Tempo médio por volta
      </p>
    );
}


export default MostraTempo;