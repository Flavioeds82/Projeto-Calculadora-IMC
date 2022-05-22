import { useState } from 'react';
import s from './App.module.css';
import img1 from "./images/powered.png";
import img2 from "./images/leftarrow.png";
import {levels, calculateImc, Level} from './helpers/helper_imc';
import { GridItem } from './components/GridItem';

function App() {
	const [height_field, setHeight] = useState<number>(0);
	const [weight_field, setWeight] = useState<number>(0);
	const [showItem, setShowItem] = useState<Level | null>(null);
	
	function imc(){
		if(height_field && weight_field){
			setShowItem(calculateImc(weight_field, height_field))
		}else{
			alert('Digite todos os campos')
		}
	}
	function backButton(){
		setShowItem(null);
		setHeight(0);
		setWeight(0);
	}

	return (
		<div className={s.main}>
		 <header>
			 <div className={s.container_header}>
				 <img src={img1} alt="" width={150}/>
			 </div>
		 </header>
		 <div className={s.container}>
			 <div className={s.left_side}>
				<h1> Calcule o seu IMC </h1>
				<p>IMC é a sigla para Índice de Massa Corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
				<input 
				type="number"
				placeholder='Digite eu peso (Kg)'
				value={weight_field > 0 ? weight_field : ''}
				onChange={e => setWeight((parseFloat(e.target.value)))}
				/>
				<input 
				type="number"
				placeholder='Digite sua Altura (metros)'
				value={height_field > 0 ? height_field : ''}
				onChange={e => setHeight((parseFloat(e.target.value)))}
				/>
				<button onClick={imc}>Calcular</button>
			 </div>
			 <div className={s.right_side}>
				 {!showItem &&
				 	<div className={s.grid}>
						{levels.map((item, index)=>(
							<GridItem key={index} data={item}/>
					))}

					</div>
				 }
				 {showItem &&
				 	<div className={s.gridBig}>
						 <div className={s.arrow} onClick={backButton}>
							 <img src={img2} alt="" width={25}/>
						 </div>
						 <GridItem data={showItem}/>
					</div>
						
					}

				
			 </div>
		 </div>
		</div>
	)
}

export default App;
