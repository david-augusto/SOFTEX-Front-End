import express, { response } from 'express';
import routes from './routes';

const app = express();

app.post('/', (request, Response)=>{
    try{
        const project = awaitProject.create(req.body);

        return resizeBy.send({project});
    } catch (err) {
        return resizeBy.status(404).send({erro: 'erro na criação de um novo projeto'});
    }
});

app.get('/projects', (request, Response)=>{
    return response.json([
        "projeto 1",
        "projeto2",
    ])
});

app.get('/projects/id', (request, Response)=>{

    try{
        resizeBy.send({ user:request.userid});
    } catch(er){
        return resizeBy.satus(400). send({erro: 'erro em achar o projeto'})
    }

});

app.put(/projects/:IdleDeadline, (req, res)=>{
    Project.update(req.params.id);
});

app.delete('/projects/:id', (req, res)=>{
    Project.findByIdAndRemove(req.params.projectId);

    return res.status(204);
});