import {FaPen, FaTimes , FaRegCircle, FaCircle} from 'react-icons/fa';

function Icon({name} ){
    if(name=="circle"){
        return <FaRegCircle />
    }
    else if(name =="cross"){
        return <FaTimes />
    }
    else {
        return <FaPen />
    }

}

export default Icon;