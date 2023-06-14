import CareScale from './CareScale'
import '../styles/PlantItem.css'


function handleClick(plantName) {
   // console.log('✨ Ceci est un clic ✨')
    alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
}
//function PlantItem({ id, cover, name, water, light }) {
	function PlantItem({ cover, name, water, light, price }) {
return (
		//<li key={id} className='lmj-plant-item'>
        <li className='lmj-plant-item'  onClick={() => handleClick(name)}>
			<span className='lmj-plant-item-price'>{price}€</span>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
           
		</li>
      
	)
}

export default PlantItem