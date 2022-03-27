import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    // this method sends the term to App component
    e.preventDefault();
    props.getTerm(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label className="ui center aligned header blue ">
            SEARCH HERE ❤
          </label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
export default SearchBar;

// class SearchBar extends React.Component {
// state = { term: "" };

// onInputChange = (e) => {
//   this.setState({ term: e.target.value });
// };

// onFormSubmit = (e) => {
//   // this method sends the term to App component
//   e.preventDefault();
//   this.props.getTerm(this.state.term);
// };

// render() {
//   return (
//     <div className="search-bar ui segment">
//       <form onSubmit={this.onFormSubmit} className="ui form">
//         <div className="field">
//           <label className="ui center aligned header blue ">
//             SEARCH HERE ❤
//           </label>
//           <input
//             type="text"
//             value={this.state.term}
//             onChange={this.onInputChange}
//           />
//         </div>
//       </form>
//     </div>
//   );
// }
// }

// export default SearchBar;
