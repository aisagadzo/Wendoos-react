import React, { Component } from 'react';
import { Header, Segment, Icon, Grid, Divider, Rating } from 'semantic-ui-react';

export default class SegmentAd extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            showMore: false,



            oneRate: false,

            bewertungenObj:{
                one: 0,
                two:0,
                three:0,
                four:0,
                five:0,
                rate:0,
                bewertungen:0
            },

            width: window.innerWidth
        };
    }


    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);

        if(localStorage.getItem(`${this.props.data.title}`)){
            let bewertungenObj = JSON.parse(localStorage.getItem(`${this.props.data.title}`));
            console.log('bewertungenObj', bewertungenObj);
            this.setState({bewertungenObj})
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({width: window.innerWidth});
    };

    handleRate = (e, { rating }) => {
        const {bewertungenObj} = this.state;

        //just one rate for one company
        if(this.state.oneRate){
            return;
        }
        this.setState({ oneRate: true})

        if(rating === 1) this.setState(prevState => ({
            bewertungenObj: {
                ...prevState.bewertungenObj,
                one: bewertungenObj.one + 1,
                bewertungen: bewertungenObj.bewertungen === 0 ? 1 : (bewertungenObj.bewertungen + 1)/2
            }
        }))
        if(rating === 2) this.setState(prevState => ({
            bewertungenObj: {
                ...prevState.bewertungenObj,
                two: bewertungenObj.two + 1,
                bewertungen:  bewertungenObj.bewertungen === 0 ? 2 : (bewertungenObj.bewertungen + 2)/2
            }
        }))
        if(rating === 3) this.setState(prevState => ({
            bewertungenObj: {
                ...prevState.bewertungenObj,
                three: bewertungenObj.three + 1,
                bewertungen:  bewertungenObj.bewertungen === 0 ? 3 : (bewertungenObj.bewertungen + 3)/2
            }
        }))
        if(rating === 4) this.setState(prevState => ({
            bewertungenObj: {
                ...prevState.bewertungenObj,
                four: bewertungenObj.four + 1,
                bewertungen:  bewertungenObj.bewertungen === 0 ? 4 : (bewertungenObj.bewertungen + 4)/2
            }
        }))
        if(rating === 5) this.setState(prevState => ({
            bewertungenObj: {
                ...prevState.bewertungenObj,
                five: bewertungenObj.five + 1,
                bewertungen:  bewertungenObj.bewertungen === 0 ? 5 : (bewertungenObj.bewertungen + 5)/2
            }
        }))

        this.setState(prevState => ({
            bewertungenObj: {
                ...prevState.bewertungenObj,
                rate: bewertungenObj.rate + 1
            }
        }))

        if(localStorage.getItem(`${this.props.data.title}`)){
            let bewertungenObj_ = {
                one: rating === 1 ? 1 + bewertungenObj.one : bewertungenObj.one,
                two: rating === 2 ? 1 + bewertungenObj.two : bewertungenObj.two,
                three: rating === 3 ? 1 + bewertungenObj.three : bewertungenObj.three,
                four: rating === 4 ? 1 + bewertungenObj.four : bewertungenObj.four,
                five: rating === 5 ? 1 + bewertungenObj.five : bewertungenObj.five,
                rate: bewertungenObj.rate + 1,
                bewertungen: ((bewertungenObj.five*5 + bewertungenObj.four*4 + bewertungenObj.three*3 + bewertungenObj.two*2 + bewertungenObj.one + rating)/(bewertungenObj.rate + 1)).toFixed(0)
            }
            console.log('bewertungenObj_', bewertungenObj_);
            localStorage.removeItem(`${this.props.data.title}`);
            localStorage.setItem(`${this.props.data.title}`, JSON.stringify(bewertungenObj_));
        }
        else
        {
            let bewertungenObj = {
                one: rating === 1 ? 1 : 0,
                two: rating === 2 ? 1 : 0,
                three: rating === 3 ? 1 : 0,
                four: rating === 4 ? 1 : 0,
                five: rating === 5 ? 1 : 0,
                rate: 1,
                bewertungen: rating
            }
            localStorage.setItem(`${this.props.data.title}`, JSON.stringify(bewertungenObj));
        }
    }


    render() {
        const {data} = this.props;
        const {width} = this.state;
        const isMobile = width <= 500;
        if (isMobile) {
            return (
                <div style={{color: '#153753'}}>
                    <Segment raised color='blue'>
                        <h2><b>{this.props.data.title}</b></h2>
                        <Divider/>
                        <Grid divided>
                            <Grid.Row>
                                <Grid.Column textAlign='center' verticalAlign='middle'>
                                    <img src={this.props.data.imgLogoName}/>
                                    <p><b>{this.props.data.descriptionText}</b></p>
                                    <Divider/>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column verticalAlign='middle'>
                                    <p><Icon name='point' color='blue'/><b>{data.ort}</b></p>
                                    <p><Icon name='point' color='blue'/><b>{data.address}</b></p>
                                    <p><Icon name='phone' color='blue'/><b>{data.phone}</b></p>
                                    <p><Icon name='mail' color='blue'/><b>{data.mail}</b></p>
                                    <p><Icon name='world' color='blue'/><b>{data.web}</b></p>
                                    <Divider/>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Column verticalAlign='middle' textAlign='center'>
                                    <div
                                        style={{float: 'left', marginRight: '13px', height: '100%', marginTop: '50px'}}>
                                        <img src={this.props.data.codeImg}/></div>
                                    <p><b> {this.state.bewertungenObj.rate} bewertungen
                                        <br/> <br/>5 sterne {this.state.bewertungenObj.five}
                                        <br/>4 sterne {this.state.bewertungenObj.four}
                                        <br/>3 sterne {this.state.bewertungenObj.three}
                                        <br/>2 sterne {this.state.bewertungenObj.two}
                                        <br/>1 sterne {this.state.bewertungenObj.one}</b></p>
                                    <Rating icon='star' rating={this.state.bewertungenObj.bewertungen} maxRating={5} onRate={this.handleRate}/>
                                <br/>
                                <Divider/>
                                <Icon link name={this.state.showMore ? 'chevron circle up' : 'chevron circle down'}
                                      color='blue' size='big'
                                      onClick={() => this.setState({showMore: !this.state.showMore})}/>
                                </Grid.Column>
                            </Grid.Row>
                            {this.state.showMore && <Grid.Row>
                                <Grid.Column verticalAlign='middle'>
                                    <img src={this.props.data.moreInfoImg1}/>
                                    <Divider/>
                                </Grid.Column>
                            </Grid.Row>}
                            {this.state.showMore && <Grid.Row>
                                <Grid.Column textAlign='justified' verticalAlign='middle'>
                                    <p><b>{this.props.data.moreInfoText}</b></p>
                                    <Divider/>
                                </Grid.Column>
                                </Grid.Row>}
                            {this.state.showMore && <Grid.Row>
                                <Grid.Column verticalAlign='middle'>
                                    <img src={this.props.data.moreInfoImg2}/>
                                </Grid.Column>
                            </Grid.Row>}
                        </Grid>
                    </Segment>
                    <br/>
                </div>
            )
        }
        else {
            return (
                <div style={{color: '#153753'}}>
                    <Segment raised color='blue'>
                        <h2><b>{this.props.data.title}</b></h2>
                        <Divider/>
                        <Grid columns={3} divided>
                            <Grid.Row>
                                <Grid.Column textAlign='center' verticalAlign='middle'>
                                    <img src={this.props.data.imgLogoName}/>
                                    <p><b>{this.props.data.descriptionText}</b></p>
                                    <Icon link name={this.state.showMore ? 'chevron circle up' : 'chevron circle down'}
                                          color='blue' size='big'
                                          onClick={() => this.setState({showMore: !this.state.showMore})}/>

                                </Grid.Column>
                                <Grid.Column verticalAlign='middle'>
                                    <p><Icon name='point' color='blue'/><b>{data.ort}</b></p>
                                    <p><Icon name='point' color='blue'/><b>{data.address}</b></p>
                                    <p><Icon name='phone' color='blue'/><b>{data.phone}</b></p>
                                    <p><Icon name='mail' color='blue'/><b>{data.mail}</b></p>
                                    <p><Icon name='world' color='blue'/><b>{data.web}</b></p>
                                </Grid.Column>
                                <Grid.Column verticalAlign='middle' textAlign='center'>
                                    <div
                                        style={{float: 'left', marginRight: '13px', height: '100%', marginTop: '20px'}}>
                                        <img src={this.props.data.codeImg}/></div>
                                    <p><b> {this.state.bewertungenObj.rate} bewertungen
                                        <br/> <br/>5 sterne {this.state.bewertungenObj.five}
                                        <br/>4 sterne {this.state.bewertungenObj.four}
                                        <br/>3 sterne {this.state.bewertungenObj.three}
                                        <br/>2 sterne {this.state.bewertungenObj.two}
                                        <br/>1 sterne {this.state.bewertungenObj.one}</b></p>
                                    <Rating icon='star' rating={this.state.bewertungenObj.bewertungen} maxRating={5} onRate={this.handleRate}/>
                                </Grid.Column>
                            </Grid.Row>
                            {this.state.showMore && <Divider/>}
                            {this.state.showMore && <Grid.Row>

                                <Grid.Column verticalAlign='middle'>
                                    <img src={this.props.data.moreInfoImg1}/>
                                </Grid.Column>
                                <Grid.Column textAlign='justified' verticalAlign='middle'>
                                    <p><b>{this.props.data.moreInfoText}</b></p>
                                </Grid.Column>
                                <Grid.Column verticalAlign='middle'>
                                    <img src={this.props.data.moreInfoImg2}/>
                                </Grid.Column>
                            </Grid.Row>
                            }
                        </Grid>
                    </Segment>
                    <br/>
                </div>
            )
        }
    }
}
