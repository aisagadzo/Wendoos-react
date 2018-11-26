import React, { Component } from 'react';
import { Pagination, Segment, Form, Select, Header, Button, Icon } from 'semantic-ui-react';
import moment from 'moment';

import SidebarWendoos from "./Sidebar";
import SegmentAd from './SegmentAd';
import {bewOptions, ortOptions, segmentAds, sidebarGrupations} from "./data";
import Img1 from './img/3.png';
import Img1_ from './img/3_.png';
import Img2 from './img/4.png';
import Img3 from './img/5.png';
import Img4 from './img/13.png';
import Img5 from './img/14.png';
import Img6 from './img/15.png';
import Img7 from './img/16.png';

const numberOfSegmentAds = 10;

export default class Wendoos extends React.Component {
    constructor() {
        super();

        this.topImages = [Img1, Img1_,];
        this.rightImages = [Img5, Img6, Img7, Img5];

        this.state = {
            segmentAds_:[],
            activePage: 1,
            headerText: '',
            grupation: '',
            bewertungen: '',
            ort: '',

            topImageIndex: moment(new Date()).format('X')%this.topImages.length,
            rightImageIndex: moment(new Date()).format('X')%this.rightImages.length,

            width: window.innerWidth,
            isSearch: false

        };
        this.handlePaginationChange = this.handlePaginationChange.bind(this);
        this.getSegmentAds = this.getSegmentAds.bind(this);
        this.getFilterData = this.getFilterData.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.changeTopImage = this.changeTopImage.bind(this)
        this.changeRightImage = this.changeRightImage.bind(this)
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth});
    };


    componentDidMount(){
        let segmentAds_ = segmentAds.map(el => ({
            ...el, ort: ortOptions.find(e => e.key === el.ortId).text,
            bewertungen: ((el.five*5 + el.four*4 + el.three*3 + el.two*2 + el.one)/(el.five + el.four + el.three + el.two + el.one)).toFixed(0)
        }));
        console.log('segmentAds_', segmentAds_);
        this.setState({segmentAds_});

        this.timeout = setTimeout(
            this.changeTopImage,
             7000
        )

        this.timeout = setTimeout(
            this.changeRightImage,
            7000
        )

    }

    changeTopImage () {
        this.setState(function ({ topImageIndex }) {
            const nextTopImageIndex = ++topImageIndex % this.topImages.length

            return { topImageIndex: nextTopImageIndex }
        }, function () {
            this.timeout = setTimeout(
                this.changeTopImage,
                7000
            )
        })
    }

    changeRightImage () {
        this.setState(function ({ rightImageIndex }) {
            const nextRightImageIndex = ++rightImageIndex % this.rightImages.length

            return { rightImageIndex: nextRightImageIndex }
        }, function () {
            this.timeout = setTimeout(
                this.changeRightImage,
                7000
            )
        })
    }

    handleInputChange(e, { name, value }) {
        if(this.state.isSearch) { this.setState({isSearch: false, headerText: '' ,grupation: '',bewertungen: '', ort: '',})}
        this.setState({ [name]: value, activePage: 1 });
    }

    handlePaginationChange(e, { activePage }){
        this.setState({ activePage });
        window.scrollTo(0, 0);
    }

    getSegmentAds(){
        const {activePage} = this.state;
        if(activePage === 1) return this.getFilterData().filter((el, index) => index<numberOfSegmentAds);
        if(activePage === 2) return this.getFilterData().filter((el, index) => index>=numberOfSegmentAds && index<(numberOfSegmentAds*2));
        if(activePage === 3) return this.getFilterData().filter((el, index) => index>=(numberOfSegmentAds*2) && index<(numberOfSegmentAds*3));
        if(activePage === 4) return this.getFilterData().filter((el, index) => index>=(numberOfSegmentAds*3) && index<(numberOfSegmentAds*4));
        if(activePage === 5) return this.getFilterData().filter((el, index) => index>=(numberOfSegmentAds*4) && index<(numberOfSegmentAds*5));
        if(activePage === 6) return this.getFilterData().filter((el, index) => index>=(numberOfSegmentAds*5) && index<(numberOfSegmentAds*6));
        if(activePage === 7) return this.getFilterData().filter((el, index) => index>=(numberOfSegmentAds*6) && index<(numberOfSegmentAds*7));
        if(activePage === 8) return this.getFilterData().filter((el, index) => index>=(numberOfSegmentAds*7) && index<(numberOfSegmentAds*8));
        if(activePage === 9) return this.getFilterData().filter((el, index) => index>=(numberOfSegmentAds*8) && index<(numberOfSegmentAds*9));
        if(activePage === 10) return this.getFilterData().filter((el, index) => index>=(numberOfSegmentAds*9) && index<(numberOfSegmentAds*10));

    }

    getFilterData(){
        const {bewertungen, ort, grupation, segmentAds_, isSearch, headerText} = this.state;
        if(bewertungen === '0') this.setState({bewertungen: null});
        if(ort === '0') this.setState({ort: null});

        if(isSearch) return segmentAds_.filter(el => el.title === headerText);

        if(grupation && !bewertungen && !ort) return segmentAds_.filter(el => el.grupation === grupation);
        else if(!grupation && bewertungen && !ort) return segmentAds_.filter(el => el.bewertungen === bewertungen);
        else if(!grupation && !bewertungen && ort) return segmentAds_.filter(el => el.ortId === ort);
        else if(grupation && bewertungen && !ort) return segmentAds_.filter(el => el.grupation === grupation && el.bewertungen === bewertungen);
        else if(grupation && !bewertungen && ort) return segmentAds_.filter(el => el.grupation === grupation && el.ortId === ort);
        else if(!grupation && bewertungen && ort) return segmentAds_.filter(el => el.bewertungen === bewertungen && el.ortId === ort);
        else if(grupation && bewertungen && ort) return segmentAds_.filter(el => el.grupation === grupation && el.bewertungen === bewertungen && el.ortId === ort);
        else return segmentAds_;

    }


    render() {
    const {activePage} = this.state;
    const {width} = this.state;
    const isMobile = width <= 768;

        return (
            <div>
                <div className='topPageLine'></div>
                <div>
                    <SidebarWendoos
                        getHeaderText={(headerText, grupation, isSearch) => {this.setState({headerText, grupation, isSearch, activePage: 1}); window.scrollTo(0, 0);}}
                    />
                </div>
                <div className='page'>
                            <Segment.Group raised horizontal>
                                <Segment><img  className='topImages' src={ this.topImages[this.state.topImageIndex] } /></Segment>
                                <Segment><img className='topImages' src={Img2}/></Segment>
                                <Segment textAlign='center' ><img className='topImages' src={Img3}/>
                                    <div className="hawdText">
                                        <b><p className="fontSizeHawd">HAWD-DESIGN.NET</p>
                                        art@hawd-design.net<br/>
                                        +43 660 44 00 350</b></div>
                                </Segment>
                            </Segment.Group>
                    <div className='rightPage'>
                        <img className='topImages' src={Img4}/>
                        <Segment.Group raised>
                            <Segment clearing><img className='topImages' src={ this.rightImages[this.state.rightImageIndex] }/></Segment>
                            <Segment clearing><img className='topImages' src={ this.rightImages[(this.state.rightImageIndex+1)% this.rightImages.length] }/></Segment>
                            <Segment clearing><img className='topImages' src={ this.rightImages[(this.state.rightImageIndex+2)% this.rightImages.length] }/></Segment>
                            <Segment clearing><img className='topImages' src={ this.rightImages[(this.state.rightImageIndex+3)% this.rightImages.length] }/></Segment>
                        </Segment.Group>
                    </div>

                    <div className='leftPage'>
                       <Segment raised>
                           {!this.state.isSearch && <Header as='h3' style={{color: '#1c557d'}}>{this.state.headerText}
                            {this.state.headerText && <Header style={{fontSize: '9px', marginRight:'0px'}} floated="right" >
                                <Icon className="remove" color='orange' style={{cursor: 'pointer'}}
                                      onClick={()=> this.setState({headerText: null, grupation: null, activePage: 1})}
                                />
                            </Header>}
                        </Header>}
                            <Form size={isMobile ? 'mini' : 'small'}>
                                <Form.Group widths='equal'>
                                    <Form.Field
                                        value={this.state.ort}
                                        name='ort'
                                        control={Select}
                                        options={ortOptions}
                                        placeholder='Ort..'
                                        onChange={this.handleInputChange}
                                        search
                                    />
                                    <Form.Field
                                        value={this.state.bewertungen}
                                        name='bewertungen'
                                        control={Select}
                                        options={bewOptions}
                                        placeholder='Bewertungen...'
                                        onChange={this.handleInputChange}
                                        search/>
                                </Form.Group>
                            </Form>
                        </Segment>
                        <br/>
                        {this.getSegmentAds().map((el, index)=>(
                            <SegmentAd data={el} toast={this.toast}/>
                            ))
                        }
                        <div style={{marginLeft: isMobile ? '10%' : '30%', marginBottom:'5%'}}><Pagination
                            activePage={activePage}
                            onPageChange={this.handlePaginationChange}
                            totalPages={this.getFilterData().length/numberOfSegmentAds}
                        /></div>
                    </div>
                </div>
            </div>
        )
    }
}
