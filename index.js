const json_server=require('json-server')
const cors=require('cors')
 
const server=json_server.create()
const middleware=json_server.defaults()
const db=json_server.router('db.json')


server.use(middleware)
server.use(cors())
server.use(db)

const PORT=8000
server.listen(PORT,()=>{
    console.log(`server listining in port ${PORT}`);
})