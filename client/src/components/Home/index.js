import { React, useEffect, useState } from 'react';
import { convert } from '../../service';

const Home = () => {
  useEffect(() => {});
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const convertNumb = () => {
    setResult('');
    setError('');
    convert(input)
      .then(res => {
        if (res.data.result.error) {
          setError(res.data.result.error);
        } else {
          setResult(res.data.result.value);
        }
      })
      .catch(e => {
        setError('Bad request !');
        console.log(e);
      });
  };
  return (
    <div className='container' style={{ marginTop: '130px' }}>
      <div className='row'>
        <div className='col-md-4'>
          <label htmlFor='input' className='form-label'>
            Entrez un nombre arabe :
          </label>
          <input
            type='number'
            min='1'
            value={input}
            onChange={el => {
              setInput(el.target.value);
            }}
            className='form-control'
            id='input'
          />
          <div className='text-danger'>{error}</div>
        </div>
        <div className='col-md-1 p-4 mt-2 align-self-center'>{'=>'}</div>
        <div className='col-md-3'>
          <label htmlFor='result' className='form-label'>
            Résultat :
          </label>
          <input type='text' className='form-control' id='result' value={result} readOnly />
        </div>
      </div>
      <div className='row'>
        <div className='col-md-3 mt-3'>
          <button className='btn btn-primary' type='submit' onClick={convertNumb}>
            CONVERTIR
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
