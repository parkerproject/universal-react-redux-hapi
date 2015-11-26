import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Helmet from 'react-helmet';
// import Link from './Link';
import RepositoryList from '../components/RepositoryList';
import SearchStatus from '../components/SearchStatus';
import * as RepositoryActions from '../actions/repository';
import resolve from '../decorators/redux-resolve';

function mapStateToProps(state) {
  return {
    repositories: state.repository,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(RepositoryActions, dispatch);
}

class Repositories extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    // if (this.props.repositories.fetchedCount === 0) {
    //   this.props.repositorySearch();
    // }
  }

  render() {
    return (
      <div className="Repositories">
        <Helmet title="Repositories example" meta={[
          {name: 'description', content: 'Repository search'},
        ]} />
        <SearchStatus {...this.props.repositories}/>
        <RepositoryList {...this.props.repositories}/>
		  </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(resolve((resolver, props, getState) => {
  // if (props.repositories.fetchedCount === 0) {
  resolver.resolve(props.repositorySearch);
  // }
  // if (!isLoaded(getState())) {
  //   resolver.resolve(props.load);
  // }
})(Repositories));
