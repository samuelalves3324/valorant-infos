import React from 'react';

class FormFilter extends React.Component {
  render() {
    const { onChange, valueInput, valueSelect } = this.props;
    return (
      <form className='form-filter'>
        <h1>CONHEÇA OS AGENTES DO VALORANT!</h1>
        <div className='filters-section'>
          <div className='input-section'>
            <label htmlFor="filterInput">
              <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
              <input type="text" placeholder="Buscar agentes" name="filterInput" className="filter-input" onChange={onChange} value={valueInput} id="filterInput" />
            </label>
          </div>
          <select name="filterSelect" id="filterSelect" onChange={onChange} value={valueSelect}>
            <option className='options'>Selecione uma função</option>
            <option className='options'>Duelista</option>
            <option className='options'>Sentinela</option>
            <option className='options'>Iniciador</option>
            <option className='options'>Controlador</option>
          </select>
        </div>
      </form>
    );
  }
}

export default FormFilter;
