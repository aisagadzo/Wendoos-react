import React, { Component } from 'react';
import { Header, Segment, Icon, Grid, Divider, Rating } from 'semantic-ui-react';

export default class SegmentAd extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            showMore: false,

            one: '',
            two:'',
            three:'',
            four:'',
            five:'',
            rate:'',

            oneRate: false,

            width: window.innerWidth
        };
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

    handleRate = (e, { rating }) => {
        if(this.state.oneRate){
            return;
        }
        this.setState({rate: 1, oneRate: true})
        if(rating === 1) this.setState({one: 1})
        if(rating === 2) this.setState({two: 1})
        if(rating === 3) this.setState({three: 1})
        if(rating === 4) this.setState({four: 1})
        if(rating === 5) this.setState({five: 1})
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
                                    <p><b> {data.five + data.four + data.three + data.two + data.one + this.state.rate} bewertungen
                                        <br/> <br/>5 sterne {data.five + this.state.five}
                                        <br/>4 sterne {data.four + this.state.four}
                                        <br/>3 sterne {data.three + this.state.three}
                                        <br/>2 sterne {data.two + this.state.two}
                                        <br/>1 sterne {data.one + this.state.one}</b></p>
                                    <Rating icon='star' rating={data.bewertungen} maxRating={5} onRate={this.handleRate}/>
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
                                    <p><b> {data.five + data.four + data.three + data.two + data.one + this.state.rate} bewertungen
                                        <br/> <br/>5 sterne {data.five + this.state.five}
                                        <br/>4 sterne {data.four + this.state.four}
                                        <br/>3 sterne {data.three + this.state.three}
                                        <br/>2 sterne {data.two + this.state.two}
                                        <br/>1 sterne {data.one + this.state.one}</b></p>
                                    <Rating icon='star' rating={data.bewertungen} maxRating={5} onRate={this.handleRate}/>
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
