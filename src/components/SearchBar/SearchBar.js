import React from 'react';
import './SearchBar.css';

// search bar will communicate with Yelp API
// requests to Yelp API must follow formatting and naming conventions
// set by the API -> so an object with keys and values that conform
// to what the API expects to receive must be created
const sortByOptions = {
  'Best Match': 'best_match',
  'Highest Rated': 'rating',
  'Most Reviewed': 'review_count'
}

class SearchBar extends React.Component {
  //dynamically create the list items needed to display sort sortByOptions
  //help future proof against potential changes to Yelp API

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      location: '',
      sortBy: 'best_match'
    };

    this.handleSortByChange = this.handleSortByChange.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);

    this.handleSearch = this.handleSearch.bind(this);
  }


   getSortByChange(sortByOption) {
    if(this.state.sortBy === sortByOption){
      return 'active';
    }
  }

  //sets the state of a sorting option
   handleSortByChange(sortByOption) {
    this.setState({
      sortBy: sortByOption
    });
  }

   handleTermChange(e) {
    this.setState({
      term: e.target.value
    });
  }

   handleLocationChange(e) {
    this.setState({
      location: e.target.value
    });
  }

   handleSearch(e) {
    this.props.searchYelp(this.state.term, this.state.location, this.state.sortBy);

    e.preventDefault();
  }

  renderSortByOptions() {
    return Object.keys(sortByOptions).map(sortByOption => {
      const sortByOptionValue = sortByOptions[sortByOption];
      return(
        <li key={sortByOptionValue} className={this.getSortByChange(sortByOptionValue)}
          onClick= {this.handleSortByChange.bind(this, sortByOptionValue)}>
          {sortByOption}
        </li>
      );
    });
  }

  render() {
    return(
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          <ul>
            {this.renderSortByOptions()}
          </ul>
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" onChange={this.handleTermChange} />
          <input placeholder="Where?" onChange={this.handleLocationChange} />
        </div>
        <div className="SearchBar-submit">
          <a href='#' onClick={this.handleSearch}>Let&#39;s Go</a>
        </div>
      </div>
    );
  }
}

export default SearchBar;
