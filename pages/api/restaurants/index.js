import { restaurant } from "../../../data";

export default function handler(req, res) {
    const httpMethod = req.method;
    const { name, rate, location, description, image } = req.body ;

    switch (httpMethod) {
        case 'GET':
            res.status(200).json(restaurant);
            break;
        case 'POST':
            res.status(200).json({
                id: restaurant.length+1,
                name,
                rate,
                location,
                description,
                image
            });
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${httpMethod} not allowed`);
    }
}