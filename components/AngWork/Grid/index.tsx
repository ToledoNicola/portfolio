import { FunctionComponent } from "react";
import style from "./Grid.module.scss";
interface GridProps {
    
}
 
const Grid: FunctionComponent<GridProps> = ({children}) => {
    return ( <div className={style.grid}>{children}</div> );
}
 
export default Grid;