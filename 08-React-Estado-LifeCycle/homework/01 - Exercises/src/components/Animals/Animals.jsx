import React from 'react';
// import styledAnimals from './Animals.module.css'

export default class Animals extends React.Component {

  render() {

    const { animals } = this.props

    return <div>
      {animals.map((animal) => (
        <div>
          <h5>{animal.name}</h5>
          <img src={animal.image} alt={animal.name} width="300px" />
          <br />
          <span>{animal.specie}</span>
        </div>
      ))}
    </div>
  }
}
