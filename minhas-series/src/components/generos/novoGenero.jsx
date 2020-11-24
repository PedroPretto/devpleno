import React, {useState} from 'react'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const NovoGenero = () => {
    const [name, setName] = useState('')
    const [success, setSuccess] = useState(false)
    const onChange = evt => {
        setName(evt.target.value)
    }
    const save = () => {
        axios.post('/api/genres',{
            name
        }).then(res => {
            setSuccess(true)
        })
    }
    if(success){
        return <Redirect to='/generos'/>
    }
    return(
        <div className='container'>
            <h1>Novo Gênero</h1>
            <Form>
                <FormGroup>
                    <Label for="name">Nome</Label>
                    <Input type="text" name="name" value={name} onChange={onChange} id="name" placeholder="Nome do Gênero" />
                </FormGroup>
                <Button onClick={save} outline color="primary">Salvar</Button>
            </Form>
        </div>
        
    )
}

export default NovoGenero