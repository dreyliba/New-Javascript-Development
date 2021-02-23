import React, { Component } from 'react'
import { Input, Select, Button } from 'antd';

import './search.scss';

const { Option } = Select;

class Search extends Component {
    onFormSubmit(event) {
        event.preventDefault();
    }
    render() {
        return (
            <div className='search-component'>
                <form className='search-component-form' onSubmit={(event) => this.onFormSubmit(event)}>
                    <div>
                        <Input 
                            name='query'
                            className='search'
                            size='large'
                            placeholder='Search for (e.g Hardware)'
                            value={this.props.query}
                            onChange={(event) => this.props.onChange(event)}
                        />
                    </div>
                    <div className='search-option'>
                        <Input.Group compact>
                        <Input 
                            name='distance' 
                            value={this.props.distance}
                            onChange={(event) => this.props.onChange(event)}
                            name='distance'
                        />
                        <Select defaultValue='distance'>
                            <Option value='Distance'>Distance (km)</Option>
                            <Option value='Current location'>Current location</Option>
                        </Select>
                        <Button 
                            className='btn-search'
                            type='primary'
                            shape='round'
                            size='medium'
                            htmlType='submit'
                        >
                            Search
                        </Button>
                        </Input.Group>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;