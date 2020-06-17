import React, { Component } from 'react';
import { 
    Text,
    TouchableWithoutFeedback, 
    View,
    LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux'
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component{
    
    componentWillUpdate(){
        LayoutAnimation.spring();
    }

    renderLibrary(){
        const {extended, library } = this.props;
        if(extended) {
            return (
                <CardSection>
                    <Text style = {{flex:1, fontSize: 18}}>{library.item.description}</Text>
                </CardSection>
                )
        }
    }
    render(){
        const { textStyles } = styles;
        const {id, title } = this.props.library.item;

        return (
            <TouchableWithoutFeedback
                onPress = {() => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style = {textStyles}>{title}</Text>
                    </CardSection>
                    {this.renderLibrary()}
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = {
    textStyles:{
        fontSize: 20,
        paddingLeft: 15
    }
}

const mapStateToProps = (state, ownProps) => {
    const extended = state.selectedLibraryId === ownProps.library.item.id
    return { extended }
}

export default connect(mapStateToProps, actions)(ListItem);