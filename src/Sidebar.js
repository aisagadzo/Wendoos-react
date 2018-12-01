import React, { Component } from 'react';
import { Header, Segment, Form, Container, Button, Menu, Sidebar, Ref, Image, Icon, Search} from 'semantic-ui-react';
import _ from 'lodash'
//import Logo from './img/1.png';
// import SidebarBottom from './img/2.png'
import {segmentAds, sidebarGrupations} from './data';

const Logo = "http://hawd-design.net/rijad/wendoos-2/images/1.png";
const SidebarBottom = "http://hawd-design.net/rijad/wendoos-2/images/2.png";

export default class SidebarWendoos extends React.Component {
    constructor() {
        super();
        this.state = {
            value:'',
            segmentAds_:[],
            width: window.innerWidth,
            hide: false,
        };
    }


    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);

        this.resetComponent()

        let segmentAds_ = segmentAds.map(el => ({
            ...el, description: sidebarGrupations.find(e => e.grupation === el.grupation).title,
        }));
        console.log('segmentAds_', segmentAds_);
        this.setState({segmentAds_});
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth});
    };


    resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })

    handleResultSelect = (e, { result }) => this.setState({ value: result.title }, this.props.getHeaderText(result.title, result.grupation, true))

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(this.state.segmentAds_, isMatch),
            })
        }, 300)
    }

    sidebarToggle(e) {
        e.preventDefault();
        document.body.classList.toggle('sidebar-hidden');
    }

    render() {
        const {width} = this.state;
        const isMobile = width <= 768;
        const { isLoading, value, results } = this.state
        return (
            <div>
                <div className="sidebar">

                    <div >
                        <div style={{float:'right', marginRight:'25px'}}><a className="sidebarToggle" onClick={this.sidebarToggle} href="#"><Icon name='bars' size='large'/></a></div>

                        <img className="logo" onClick={()=>window.location.reload()} src={Logo}></img>
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
                                { sidebarGrupations.map(el=>(
                                    <Menu.Item as='a'>
                                        <Menu.Header onClick={()=>{
                                            this.props.getHeaderText(el.title, el.grupation, false);
                                            this.resetComponent();
                                            window.scrollTo(0, 0);
                                            if (isMobile) document.body.classList.toggle('sidebar-hidden');
                                        }}>{el.title} <span style={{color:'#4183c4'}}>{el.count}</span></Menu.Header>
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
