import React, { Component } from 'react';
import { Header, Segment, Icon, Grid, Divider, Rating } from 'semantic-ui-react';

export default class SegmentAd extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            showMore: false,

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
    }


    render() {
        const {data} = this.props;
        const {width} = this.state;
        const isMobile = width <= 500;
        if (isMobile) {
            return (
                <div style={{color: '#153753'}}>
                    <Segment raised color='blue'>
                        <h3><b>{this.props.data.title}</b></h3>
                        <Divider/>
                        <Grid divided>
                            <Grid.Row>
                                <Grid.Column textAlign='center' verticalAlign='middle'>
                                    <img src={data.imgLogoName}/>
                                    <p><b>{data.descriptionText}</b></p>
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
                                        style={{ marginRight: '0px', height: '100%', marginTop: '1px'}}>
                                        <img src={data.codeImg}/></div>
                                    <p><b> _ bewertungen
                                        <br/>
                                        <br/>5 sterne _
                                        <br/>4 sterne _
                                        <br/>3 sterne _
                                        <br/>2 sterne _
                                        <br/>1 sterne _
                                    </b></p>
                                    <Rating icon='star' rating={5} maxRating={5} onRate={this.handleRate}/>
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
                                    <p><b>{data.moreInfoText}</b></p>
                                    <Divider/>
                                </Grid.Column>
                                </Grid.Row>}
                            {this.state.showMore && <Grid.Row>
                                <Grid.Column verticalAlign='middle'>
                                    <img src={data.moreInfoImg2}/>
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
                        <h2><b>{data.title}</b></h2>
                        <Divider/>
                        <Grid columns={3} divided>
                            <Grid.Row>
                                <Grid.Column textAlign='center' verticalAlign='middle'>
                                    <img src={data.imgLogoName}/>
                                    <p><b>{data.descriptionText}</b></p>
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
                                        <img src={data.codeImg}/></div>
                                    <p><b> _ bewertungen
                                        <br/>
                                        <br/>5 sterne _
                                        <br/>4 sterne _
                                        <br/>3 sterne _
                                        <br/>2 sterne _
                                        <br/>1 sterne _
                                    </b></p>
                                    <Rating icon='star' rating={5} maxRating={5} onRate={this.handleRate}/>
                                </Grid.Column>
                            </Grid.Row>
                            {this.state.showMore && <Divider/>}
                            {this.state.showMore && <Grid.Row>

                                <Grid.Column verticalAlign='middle'>
                                    <img src={data.moreInfoImg1}/>
                                </Grid.Column>
                                <Grid.Column textAlign='justified' verticalAlign='middle'>
                                    <p><b>{data.moreInfoText}</b></p>
                                </Grid.Column>
                                <Grid.Column verticalAlign='middle'>
                                    <img src={data.moreInfoImg2}/>
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
