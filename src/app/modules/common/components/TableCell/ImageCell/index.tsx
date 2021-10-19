import React from 'react';

import {CloudFile} from "api/types/cloud-file.type";

type Props = {
    value: CloudFile | null | undefined;
}

const ImageCell: React.FC<Props> = ({value}: Props) => {

    const src = value?.url ?? '/assets/images/no-image.png'
    return (
        <img src={src} style={{width: 64}}/>
    );
};

export default ImageCell;
