import React, { Component } from 'react';
import { Header, Segment, Form, Container, Button, Menu, Sidebar, Ref, Image, Icon, Search} from 'semantic-ui-react';
import _ from 'lodash'
import Logo from './img/1.png';
import SearchSidebar from './Search';
import SidebarBottom from './img/2.png'
import {source} from './data';

export default class SidebarWendoos extends React.Component {
    constructor() {
        super();
        this.state = {
            value:'',
        };
    }


    componentWillMount() {
        this.resetComponent()
    }

    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, { result }) => this.setState({ value: result.title }, this.props.getHeaderText(result.title, result.grupation))

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 300)
    }

    sidebarToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-hidden');
    }

    render() {
        const { isLoading, value, results } = this.state
        return (
            <div>
                <div className="sidebar">
                    <a className="sidebarToggle" onClick={this.sidebarToggle} href="#"><Icon name='bars' size='large'/></a>

                    <div >
                        <img className="logo" src={Logo}></img>
                        <div style={{marginLeft: '7%' }}>
                        <Search
                            loading={isLoading}
                            onResultSelect={this.handleResultSelect}
                            onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                            results={results}
                            value={value}
                            {...this.props}
                        />
                        </div>
                        <Menu
                            animation='push'
                            inverted
                            style={{backgroundColor:'#153753'}}
                            vertical
                            stackable
                            onHide={this.handleSidebarHide}
                            visible={true}
                            size='large'
                        >
                            <div>
                                { source.map(el=>(
                                    <Menu.Item as='a'>
                                        <Menu.Header onClick={()=>{
                                            this.props.getHeaderText(el.title, el.grupation);
                                            this.resetComponent();
                                        }}>{el.title} <span style={{color:'#4183c4'}}>{el.price}</span></Menu.Header>
                                    </Menu.Item>
                                ))
                                }
                            </div>
                        </Menu>
                        <img className="sidebarBottom" src={SidebarBottom}></img>
                    </div>
                </div>
            </div>
        )
    }
}
