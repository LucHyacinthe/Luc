// const planteList: string[] = [
//     'monstera'

// ] 
export const planteList: Array<{ name: string, category: string, id: string, isSpecialOffer: boolean }> = [
    {
        name: 'monstera',
        category: 'classique',
        id: '1ed',
        isSpecialOffer: false
    },
    {
        name: 'ficius lyrata',
        category: 'classique',
        id: '2ed',
        isSpecialOffer: false
    },
    {
        name: 'photos argente',
        category: 'classique',
        id: '3ed',
        isSpecialOffer: true
    },
    {
        name: 'yuccca',
        category: 'classique',
        id: '4ed',
        isSpecialOffer: false
    },
    {
        name: 'palmier',
        category: 'classique',
        id: '5ed',
        isSpecialOffer: true
    },
    {
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
        isSpecialOffer: true
	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
        isSpecialOffer: false
	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
        isSpecialOffer: true
	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
        isSpecialOffer:false
	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
        isSpecialOffer: false
	}

];

export const ShoppingList = () => {
    const categories = planteList.reduce(
        (acc: string[], plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div>
            <ul>
                {categories.map((cat) => (
                    <span key={cat}>{cat}{" :"}</span>
                ))}
			</ul>
            <ul className='lmj-plant-list'>
                {planteList.map((plant) => (
                    <li className='itemPlant'>
                        <span>{plant.name}</span>{":"}
                        <span>{plant.isSpecialOffer && <span> Bien</span>}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

