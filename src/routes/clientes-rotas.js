
import { adicionaCliente, atualizaCliente, deletaCliente, ListaClientes, listaClientesById } from "../controller/cliente-controller.js"


export async function RotasClientes(fastify) {

  const clienteSchema = {
    type: 'object',
    required: ['nome', 'cpf', 'endereco', 'telefone'],
    properties: {
      id: { type: 'string' },
      nome: { type: 'string' },
      cpf: { type: 'string' },
      endereco: { type: 'string'},
      telefone: { type: 'string' }
      }
    }



  fastify.get('/',{
    schema: {
      description: 'Lista de clientes.',
      tags: ['Clientes'],
    },
    response: {
      200: clienteSchema
  }}, 
    ListaClientes)

  fastify.get('/:id',{
    schema:{
      description: 'Cliente por Id',
      tags:['cliente/id']
    } , 
    response:{
      200: clienteSchema
    }
  } ,
    listaClientesById)

  fastify.post('/', {
    schema: {
      description: 'Adicona um novo cliente',
      tags: ['ADD cliente'],
      body: {
        type: 'object',
        required: ['nome', 'cpf', 'endereco', 'telefone'],
        properties: {
          nome: { type: 'string' },
          cpf: { type: 'string' },
          endereco: { type: 'string' },
          telefone:{ type: 'string' }
          
        }
      }
    },
    response: {
      201: clienteSchema
    }
  },
    adicionaCliente)

  fastify.put('/:id',{
    schema: {
            description: 'Altera os dados do cliente',
            tags: ['cliente put'],
            params:{
              type:'object',
              properties:{
                id:{type: 'string'}
              }, required:['id']
            },
            body: {
                type: 'object',
                properties: {
                    nome: { type: 'string' },
                    cpf: { type: 'string' },
                    endereco: { type: 'string' },
                    telefone: { type: 'string' }
                }
            }
        },
        response: {
            201: clienteSchema

  }},
     atualizaCliente)

  fastify.delete('/:id',{schema:{
      description: ' Deleta cliente por Id',
      tags:['deleta cliente']
    }

  } ,
    deletaCliente)
}
