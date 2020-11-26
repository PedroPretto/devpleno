import React, {useEffect, useState} from 'react'
import {Form, FormGroup, Label, Input, Button, Badge} from 'reactstrap'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

const InfoSerie = ({match}) => {
    const [form, setForm] = useState({})
    const [success, setSuccess] = useState(false)
    const [mode, setMode] = useState('INFO')
    const [genres, setGenres] = useState([])
    const [data, setData] = useState({})

    useEffect(() => {
        axios
            .get('/api/series/' + match.params.id)
            .then(res => {
                setData(res.data)
                setForm(res.data)
            })
    }, [match.params.id])

    useEffect(() => {
        axios
            .get('/api/genres/')
            .then(res => {
                setGenres(res.data.data)
            })
    }, [])


    //custom header
    const masterHeader = {
        height: '50vh',
        minHeight: '500px',
        backgroundImage: `url('${data.background}`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
    }

    const onChange = field => evt => {
        setForm({
            ...form,
            [field]: evt.target.value

        })
    }

    const seleciona = value => () => {
        setForm({
            ...form,
            status: value
        })
    }

    const save = () => {
        axios
            .put('/api/series/' + match.params.id,form)
            .then(res => {
            setSuccess(true)
        })
    }
    if(success){
        return <Redirect to='/series'/>
    }
    return(
        <div>
            <header style={masterHeader}>
                <div className='h-100' style={{background: 'rgba(0,0,0,0.7)'}}>
                    <div className='h-100 container'>
                        <div className='row h-100 align-items-center'>
                            <div className='col-3'>
                                <img className='img-fluid img-thumbnail' src={data.poster} alt={data.name}/>
                            </div>
                            <div className='col-8'>
                                <h1 className='font-weight-light text-white'>{data.name}</h1>
                                <div className='lead text-white'>
                                    {data.status === 'ASSISTIDO' ? <Badge color='success'>Assistido</Badge> : <Badge color='warning'>Para assistir</Badge>}
                                    Gênero: {data.genre}
                                    <div>
                                        <Button outline color='primary' onClick={() => setMode(mode === 'EDIT' ? 'INFO' : 'EDIT')}>Editar</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            
            {
                mode === 'EDIT' && 
                <div className='container'>
                    <h1>Editar Série</h1>
                    <Form>
                        <FormGroup>
                            <Label htmlFor="name">Nome</Label>
                            <Input type="text" name="name" value={form.name} onChange={onChange('name')} id="name" placeholder="Nome da Série" />
                            <Label htmlFor="comments">Comentários</Label>
                            <Input type="text" name="name" value={form.comments} onChange={onChange('comments')} id="name" placeholder="Comentário da Série" />
                            <Label htmlFor="gênero">Gênero</Label>
                            <Input type="select" name="select" onChange={onChange('genre_id')}>
                                {genres.map(genre => <option key={genre.id} value={genre.id} selected={data.genre === genre.name}>{genre.name}</option>)}
                            </Input>
                            <div className='container'>
                                <div>
                                    <Label check htmlFor="assistido">
                                        <Input type="radio" name="status" id='assistido' value='ASSISTIDO'  checked={form.status === 'ASSISTIDO'} onClick={seleciona('ASSISTIDO')}/>
                                        <Badge color='success'>Assistido</Badge>
                                    
                                    </Label>
                                </div>
                                <div>
                                    <Label check htmlFor="paraAssistir">
                                        <Input type="radio" name="status" id='paraAssistir' value='PARA_ASSISTIR' checked={form.status === 'PARA_ASSISTIR'} onClick={seleciona('PARA_ASSISTIR')} />
                                        <Badge color='warning'>Para assistir</Badge>
                                    </Label>
                                </div>
                                
                            </div>

                            
                        </FormGroup>
                        <Button onClick={save} outline color="primary">Salvar</Button>
                    </Form>
                </div>
            }
        </div>
        
        
    )
}

export default InfoSerie