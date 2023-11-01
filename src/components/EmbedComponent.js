const TextToLinksConverter = (text) => {
  if (!text) {
    return null;
  }

  const urlRegex = /(https?:\/\/[^\s/$.?#].[^\s]*)/g;

  const parts = text.split(urlRegex);

  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      if (part.match(/\.(jpeg|jpg|gif|png|webp|bmp|svg)$/)) {
        return `<img src="${part}" alt="Image" style="max-width: 50%; max-height: 25%" />`;
      } else if (part.includes('youtube.com/watch?v=')) {
        const videoId = part.split('v=')[1];
        return `<div class="video-container"><iframe width="640" height="360" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe></div>`;
      } else {
        return `<a href="${part}" target="_blank" rel="noreferrer">${part}</a>`;
      }
    } else {
      return part;
    }
  }).join('');
};

export default TextToLinksConverter;
