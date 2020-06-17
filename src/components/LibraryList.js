import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FlatList }from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component{
    
    renderLibrary(library){
        return <ListItem library = {library}/>
    }

    render(){
        return (
            <FlatList
                data = {this.props.libraries}
                keyExtractor = {(library) => library.id}
                renderItem = {this.renderLibrary}
            />
        )
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
}

export default connect(mapStateToProps)(LibraryList);