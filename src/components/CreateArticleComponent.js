import React from 'react';

function Embed({ content }) {
  if (content.startsWith('http')) {
    if (content.match(/\.(jpg|jpeg|png|gif|bmp)$/)) {
      // Handle image links
      const imageStyle = 'max-width: 60%; max-height: 30vh; height: auto; width: auto;';
      return <img className="responsive-image" src={content} alt="Image" style={imageStyle} />;
    } else if (content.includes('youtube.com/watch') || content.includes('youtu.be/')) {
      // Handle YouTube links
      const youtubeId = getYouTubeId(content);
      if (youtubeId) {
        return (
          <div className="video-responsive">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${youtubeId}`}
              frameBorder="0"
              allowFullScreen
              title="Embedded Video"
            />
          </div>
        );
      }
    }
  }

  // Handle regular links
  return (
    <a href={content} target="_blank" rel="noopener noreferrer">
      {content}
    </a>
  );
}

function getYouTubeId(link) {
  // Extract the YouTube video ID from the link
  const youtubeIdRegex = /[?&]v=([A-Za-z0-9_\-]+)/;
  const match = link.match(youtubeIdRegex);
  return match ? match[1] : null;
}

export default Embed;