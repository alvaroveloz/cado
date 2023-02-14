import { useState } from 'react'

const formData = {
  search: '',
}

export const SearchForm = ({ onSearch }) => {
  const [formValues, setFormValues] = useState(formData);

  const onChangeSearch = ({ target }) => {
    const { name, value } = target;
    setFormValues({ ...formData, [name]: value });
  };

  const onSubmitSearch = (event) => {
    event.preventDefault();
    onSearch(formValues.search);
  };
  return (
    <form onSubmit={onSubmitSearch}>
      <input
        onChange={onChangeSearch}
        name='search'
        type='text'
        placeholder='Buscar por nombre o estatus'
        value={formValues.name}
      />
      <button> Filtrar</button>
    </form>
  );
};
