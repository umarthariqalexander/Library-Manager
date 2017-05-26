import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';


class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }
  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
        return (
          <CardSection>
            <Text style={{ flex: 1 }}>{library.description}</Text>
          </CardSection>
        );
    }
  }
  render() {
    const { textStyle } = styles;
    console.log(this.props);
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => this.props.SelectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={textStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
    textStyle: {
      fontSize: 18,
      paddingLeft: 10
    },
    descriptionStyle: {

    }
};

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return { expanded };
};
export default connect(mapStateToProps, actions)(ListItem);
