import React, {useEffect} from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';

const VideoDetail = ({video}) => {
// useEffect(()=>{
//   return <ReactPlayer
//     url={video}
//     config={{
//       vimeo: {
//         playerOptions: {
//           color: '783fbe',
//           controls: false
//         }
//       }
//     }}
//   />

// },[]);

  return (
    <VideoDetailWrapper>
      <ReactPlayer
        url={video}
        config={{
          vimeo: {
            playerOptions: {
              color: '783fbe',
              controls: false
            }
          }
        }}
      />
    </VideoDetailWrapper>
  )
}

const VideoDetailWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 2rem auto;
flex:3;
`;

export default VideoDetail
