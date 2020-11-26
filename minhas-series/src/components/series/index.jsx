import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Table, Alert, Button} from 'reactstrap'
import {Link} from 'react-router-dom'

export const Series = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get('/api/series')
            .then(res => {
                setData(res.data.data)
            })
    })

    const deleteSerie = id => {
        axios.delete('/api/series/'+id).then(res => {
            console.log(res)
        })
    }

    const renderizaLinha = record => {
        return(
            <tr key={record.id}>
                <th scope="row">{record.id}</th>
                <td>{record.name}</td>
                <td>
                    <Button outline onClick={() => deleteSerie(record.id)} color="danger">-</Button>
                    <Button outline className='ml-1' tag={Link} to={`/series/${record.id}`} color="primary">Info</Button>
                </td>
                
            </tr>
        )
    }

    if (data.length === 0){
        return(
            <div className='container'>
                <Alert color="warning">Ops! Você não possui séries criadas! :(</Alert>
                <Button outline tag={Link} className='m-2' to='/series/novo' color="success">Nova Série</Button>
            </div>
        )
    }

    return(
        <div className='container'>
            <h1>Séries</h1>
            <Table dark>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderizaLinha)}
                    <tr>
                        <Button outline tag={Link} className='m-2' to='/series/novo' color="success">Nova Série</Button>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
export default Series