import React, { Component } from 'react'
import { PushpinOutlined, TagOutlined } from '@ant-design/icons';

import './search-result-item.scss';

class SearchResultItem extends Component {
    render() {
        const { result } = this.props;
        const tags = result.tags.split(',');
        debugger;
        return (
            <div className='search-result-item'>
                <div className='result-item__name'>
                    <span>{result.name}</span>
                    <span className='result-item__distance'>{result.distance.toFixed(2)}KM</span>
                </div>
                <div className='result-item__description'>
                    <PushpinOutlined />
                    <span>{result.address}</span>
                </div>
                    <TagOutlined />
                    {
                        tags && tags.map((tags, index) => <span key={index} className='tags'>{tags}</span>)
                    }
                    
            </div>
        );
    }
}

export default SearchResultItem;