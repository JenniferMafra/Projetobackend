
import { createCliente, deleteClienteService, getCliente, getClienteById, updateClienteService } from "../services/clientes-serviços.js"


export async function ListaClientes(req, res) {
  const Clientes = await getCliente()

  return res.send(Clientes)
}

export async function listaClientesById(req, res) {
  const [cliente] = await getClienteById(req.params.id)

  return res.code(200).send(cliente)
}

export async function adicionaCliente(req, res) {
  const { nome, cpf, endereco, telefone } = req.body

  const novoCliente = await createCliente(nome, cpf, endereco, telefone)

  return res.code(201).send(novoCliente)
}

export async function atualizaCliente(req, res) {
  const clienteAtualizado = await updateClienteService(req.params.id, req.body)

  return res.code(200).send(clienteAtualizado)
}

export async function deletaCliente(req, res) {
  const clienteDeletado = await deleteClienteService(req.params.id)

  if (clienteDeletado.affectedRows !== 1) {
    return res.code(404).send("O cliente não foi deletado.")
  }

  return res.code(200).send("Cliente deletado com sucesso.")
}

