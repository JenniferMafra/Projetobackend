
import { v4 } from "uuid";
import { db } from "../db/conectionBancoDados.js";

export async function getCliente() {
  const [Clientes] = await db.query("SELECT * FROM clientes");
  return Clientes;
}

export async function getClienteById(id) {
  const [cliente] = await db.query("SELECT * FROM clientes WHERE id = ?", [id]);
  return cliente;
}

export async function createCliente(nome, cpf, endereco, telefone) {
  const [resultado] = await db.query("INSERT INTO clientes (id, nome, cpf, endereco, telefone) VALUES (?, ?, ?, ?, ?)", [v4(), nome, cpf, endereco, telefone]);

  return { nome, cpf, endereco, telefone };
}

export async function updateClienteService(id, body) {
  const { nome, cpf, endereco, telefone } = body
  const [cliente] = await db.query("UPDATE clientes SET nome = ?, cpf = ?, endereco = ?, telefone = ? WHERE id = ?", [nome, cpf,endereco,telefone, id]);

  return cliente;
}

export async function deleteClienteService(id) {
  const [cliente] = await db.query("DELETE FROM clientes WHERE id = ?", [id]);

  return cliente;
}

