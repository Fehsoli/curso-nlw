import {Request, Response} from 'express'
import knex from '../database/connection'

class PointsController {
    async index(request: Request, response: Response){
        //Terá 3 filtros: Cidade, Estado (UF) e Itens através do query.params

        const { city, uf, items } = request.query

        const parsedItems = String(items)
            .split(',')
            .map(item => Number(item.trim()))

        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct() 
            .select('points.*'); //buscar apenas os dados na tabela points

        console.log(points)
        return response.json(points)
    }

    async show(request: Request, response: Response){
        const { id } = request.params //id = request.params.id Como a variável tem o mesmo nome (id), pode-se utilizar as {}

        const point = await knex('points').where('id', id).first()

        if (!point){
            return response.status(400).json({ message: 'Point not found!'})
        }

        /**
         * SELECT * FROM items
         *   JOIN point_items ON items.id = point_items.items_id
         * WHERE point_items.point_id = {id}
         */ 

        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id)
            .select('items.title')

        return response.json({ point, items})
    }

    async create(request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body
    
        const trx = await knex.transaction()

        const point = {
            image: 'https://images.unsplash.com/photo-1501523460185-2aa5d2a0f981?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        }
    
        const insertedIds = await trx('points').insert(point)
    
        const point_id = insertedIds[0]
    
        const pointItems = items.map((item_id: number) => {
            return {
                item_id,
                point_id,
            }
        })
    
        await trx('point_items').insert(pointItems)

        await trx.commit()
    
        return response.json({
            id: point_id,
            ...point,
        })
    }
}

export default PointsController