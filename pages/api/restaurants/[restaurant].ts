import { restaurant } from '../../../data.js';

export default function handler(req, res) {
    const httpMethod = req.method;
    const { name, rate, location, description, image } = req.body ;

    const id = req.query.restaurant;
    const results = restaurant.filter((restaurant) => restaurant.id === parseInt(id));


    switch (httpMethod) {
        //Method GET/id
        case 'GET':
            if (results.length > 0) {
                res.status(200).json(results[0]);
            } else {
                res.status(404).json({ message: `Restaurant with id ${id} not found`})
            }
            break
        //Methode PUT
        case 'PUT':
            if (results.length > 0) {
                res.status(200).json({
                    id: results.length=id,
                    name,
                    rate,
                    location,
                    description,
                    image,
                })
            } else {
                res.status(404).json({ message: `Restaurant with id ${id} not found`})
            }
            break
        //Methode DELETE
        case 'DELETE':
            if(results.length > 0){
                restaurant.splice(restaurant.indexOf(results[0]),1);
                res.status(200).json({
                  massage: `Restaurant with id ${id} was deleted`
                })
              }else{
                res.status(404).json(
                  {massage: `Restaurant with id ${id} not found`}
                );
              }
        
            break;
        default:
            res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${httpMethod} not allowed`);
    }
}