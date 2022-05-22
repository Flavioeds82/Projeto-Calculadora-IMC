import { useState } from 'react';
import s from './App.module.css';
import img1 from "./images/powered.png";

function App() {
	const [height_field, setHeight] = useState<number>(0);
	const [weight_field, setWeight] = useState<number>(0);
	
	function imc(){
		if(height_field && weight_field){

		}else{
			alert('Digite todos os campos')
		}
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
				placeholder='Digite sua Altura. Ex: 1.85 (em metros)'
				value={height_field > 0 ? height_field : ''}
				onChange={e => setHeight((parseFloat(e.target.value)))}
				/>
				<input 
				type="number"
				placeholder='Digite eu peso. Ex: 85.3 (em Kg)'
				value={weight_field > 0 ? weight_field : ''}
				onChange={e => setWeight((parseFloat(e.target.value)))}
				/>
				<button onClick={imc}>Calcular</button>
			 </div>
			 <div className={s.right_side}>
				***dir
			 </div>
		 </div>
		</div>
	)
}

export default App;
