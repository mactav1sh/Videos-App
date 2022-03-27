import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import useVideos from "../hooks/useVideo";

const App = (props) => {
  // useState Hook
  // const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  //***********************************/
  // Using custom Hook
  const [videos, search] = useVideos("cars");
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  //***********************************/
  // useEffect Hook
  // useEffect(() => {
  //   getTerm("cars");
  // }, []);

  //Rest of component

  // const getTerm = async (term) => {
  //   const response = await youtube.get("/search", {
  //     params: {
  //       q: term,
  //     },
  //   });
  //   setVideos(response.data.items);
  // };

  // setSelectedVideo(response.data.items[0]);
  return (
    <div className="ui container">
      <SearchBar getTerm={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={(video) => setSelectedVideo(video)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;

// class App extends React.Component {
// state = { videos: [], selectedVideo: null };

// componentDidMount() {
//   this.getTerm("cars");
// }

// onVideoSelect = (video) => {
//   this.setState({ selectedVideo: video });
//   console.log(video);
// };

// getTerm = async (term) => {
//   const response = await youtube.get("/search", {
//     params: {
//       q: term,
//     },
//   });
//   this.setState({
//     videos: response.data.items,
//     selectedVideo: response.data.items[0],
//   });
//   console.log(this.state.videos);
// };

//   render() {
//     return (
//       <div className="ui container">
//         <SearchBar getTerm={this.getTerm} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList
//                 videos={this.state.videos}
//                 onVideoSelect={this.onVideoSelect}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
// export default App;
