import React, { Component } from 'react'
import { PushpinOutlined, TagOutlined } from '@ant-design/icons';

import './search-result-item.scss';

class SearchResultItem extends Component {
    render() {
        return (
            <div className='search-result-item'>
                <div className='result-item__name'>
                    <span>JJ's Chika-an</span>
                    <span className='result-item__distance'>2 KM</span>
                </div>
                <div className='result-item__description'>
                    <PushpinOutlined />
                    <span>Capt. Flordelis, Street, Hilongos, Leyte</span>
                </div>
                    <TagOutlined />
                    <span className='tags'>Restaurant</span>
            </div>
        );
    }
}

export default SearchResultItem;