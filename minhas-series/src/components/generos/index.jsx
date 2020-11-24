import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Table, Alert, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
export const Generos = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get('/api/genres')
            .then(res => {
                setData(res.data.data)
            })
    })

    const deleteGenero = id => {
        axios.delete('/api/genres/'+id).then(res => {
            console.log(res)
        })
    }

    const renderizaLinha = record => {
        return(
            <tr key={record.id}>
                <th scope="row">{record.id}</th>
                <td>{record.name}</td>
                <td>
                    <Button outline onClick={() => deleteGenero(record.id)} color="danger">-</Button>
                    <Button outline className='ml-1' tag={Link} to={`/generos/${record.id}`} color="primary">Editar</Button>
                </td>
                
            </tr>
        )
    }

    if (data.length === 0){
        return(
            <div className='container'>
                <Alert color="warning">Ops! Você não possui gêneros criados! :(</Alert>
            </div>
        )
    }

    return(
        <div className='container'>
            <h1>Generos</h1>
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
                        <Button outline tag={Link} className='m-2' to='/generos/novo' color="success">Novo</Button>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}