import { Level } from "../../helpers/helper_imc";
import s from './GridItem.module.css';
import upImage from '../../images/up.png';
import downImage from '../../images/down.png';

type Props = {
   data: Level;
}

export function GridItem({data}:Props){
   return(
      <div className={s.main} style={{backgroundColor:data.color}}>
         <div className={s.gridIcon}>
            <img src={data.icon === 'up'? upImage : downImage} alt='' width='30'/>
         </div>
         <div className={s.gridTitle}>{data.title}</div>

         {data.yourImc &&
            <div className={s.yourImc}> Seu IMC é {data.yourImc} Kg/m² </div>
         }

         <div className={s.gridInfo}>
            <>

               IMC está entre <strong>{data.imc[0]}</strong>  e  <strong>{data.imc[1]}</strong>
         
            </>
         </div>
      </div>
   )
}