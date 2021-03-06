import React from 'react'

import Rest from './hooks/rest'

const baseURL = 'https://mymoney-107da.firebaseio.com/'

const {useGet, usePost, useDelete} = Rest(baseURL)

function App() {
  const data = useGet('meses')
  // const [postData, post] = usePost('movimentacoes/2019-08')
  // const [deleteData, remove] = useDelete()
  // const saveNew = () => {
  //   post({valor: 10, descricao: 'olá'})
  // }
  // const doRemove = () =>{
  //   remove('movimentacoes/2019-08/-MNQWOwzIZKB_Jd8Uw8B')
  // }
  console.log(data.loading)
  return (
    <div>

      <nav className='navbar navbar-light bg-light'>
        <div className="container">
          <a className='navbar-brand'>mymoney</a>
        </div>
      </nav>
      
      <h2>Adicionar Mês</h2>

      <select>
        <option value="2019">2019</option>
        <option value="2020">2020</option>
      </select>
      <select>
        <option value="01">01</option>
        <option value="01">02</option>
      </select>
      <button>Adicionar Mês</button>
      {
        data.loading && <span>Carregando...</span>
      }
      {
        !data.loading && (

          <table className="table">
            <thead>
              <tr>
                <th>Mês</th>
                <th>Previsão de Entrada</th>
                <th>Entrada</th>
                <th>Previsão de Saída</th>
                <th>Saída</th>
              </tr>
            </thead>
            <tbody>
              {
                Object
                  .keys(data.data)
                  .map(mes => {
                    return(
                      <tr key={mes}>
                        <td>{mes}</td>
                        <td>{data.data[mes].previsao_entrada}</td>
                        <td>{data.data[mes].entrada}</td>
                        <td>{data.data[mes].previsao_saida}</td>
                        <td>{data.data[mes].saida}</td>
                      </tr>
                    )
                  })
              }
              
            </tbody>
          </table>

        )
      }
      <pre>{JSON.stringify(data)}</pre>


    </div>
  )
}

export default App
