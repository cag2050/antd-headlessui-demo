import {Image} from "antd";
import DeleteIcon from '../static/images/delete-icon-disabled.png'
import DeleteIconDisabled from '../static/images/delete-icon.png'
import {useState} from "react";

const ImageDemo = () => {
    const [deleteIconDisabled, setDeleteIconDisabled] = useState(true)



    return (
        <>
            {!deleteIconDisabled ?
                <Image
                    src={DeleteIcon}
                    preview={false}
                >
                </Image>
                :
                <Image
                    src={DeleteIconDisabled}
                    preview={false}
                >
                </Image>

            }
        </>
    )
}

export default ImageDemo;