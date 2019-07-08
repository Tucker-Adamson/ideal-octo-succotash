import {
    faTrash,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faCircle,
    faPhoneSlash,
    faEthernet,
    faMapSigns,
    faLock
} from "@fortawesome/free-solid-svg-icons";

import { library } from "@fortawesome/fontawesome-svg-core";

const Icons = () => {
    return library.add(
        faTrash, 
        faSignOutAlt, 
        faEdit, 
        faSpinner, 
        faCircle, 
        faPhoneSlash, 
        faEthernet, 
        faMapSigns,
        faLock
    );
};

export default Icons;