import React, {FC} from 'react'

interface Props {
    item? : string
    breadCrumbArray?: string[]
}

const BreadCrumbLink: FC<Props> = ({
    item,
    breadCrumbArray
    }) => {
    return (
        <a  
            style={{
                fontSize: '16px',
                fontFamily: 'Lato, san-serif',
                color: '#000000',
                fontWeight: 600
            }}
            className = { item === breadCrumbArray?.[breadCrumbArray?.length-1] ? 'active' : '' } 
        >
            {item}
        </a>
    )
}

export default BreadCrumbLink