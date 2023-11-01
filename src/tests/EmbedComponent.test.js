import TextToLinksConverter from '../components/EmbedComponent';

test('Should convert URLs to anchor tags', () => {
  const text = 'Check out this website https://www.example.com';
  const convertedText = TextToLinksConverter(text);
  expect(convertedText).toContain('Check out this website ');
  expect(convertedText).toContain('<a href="https://www.example.com"');
  expect(convertedText).toContain('target="_blank" rel="noreferrer">https://www.example.com</a>');
});

test('Should convert image URLs to img tags', () => {
  const text = 'Here is an image https://www.example.com/image.jpg';
  const convertedText = TextToLinksConverter(text);
  expect(convertedText).toContain('Here is an image ');
  expect(convertedText).toContain('<img src="https://www.example.com/image.jpg"');
  expect(convertedText).toContain('alt="Image" style="max-width: 50%; max-height: 25%" />');
});

test('Should convert YouTube video URLs to iframe tags', () => {
  const text = 'Check out this YouTube video https://www.youtube.com/watch?v=videoId123';
  const convertedText = TextToLinksConverter(text);
  expect(convertedText).toContain('Check out this YouTube video ');
  expect(convertedText).toContain('<div class="video-container"><iframe width="640" height="360"');
  expect(convertedText).toContain('src="https://www.youtube.com/embed/videoId123" frameborder="0" allowfullscreen></iframe></div>');
});

test('Should convert multiple link types in the same text', () => {
    const text = 'Check out this image https://www.example.com/image.jpg and this YouTube video https://www.youtube.com/watch?v=videoId456';
    const convertedText = TextToLinksConverter(text);
    expect(convertedText).toContain('Check out this image ');
    expect(convertedText).toContain('<img src="https://www.example.com/image.jpg"');
    expect(convertedText).toContain('alt="Image" style="max-width: 50%; max-height: 25%" />');
    expect(convertedText).toContain('and this YouTube video ');
    expect(convertedText).toContain('<div class="video-container"><iframe width="640" height="360"');
    expect(convertedText).toContain('src="https://www.youtube.com/embed/videoId456" frameborder="0" allowfullscreen></iframe></div>');
  });

test('Should handle text without URLs', () => {
  const text = 'This is just plain text with no URLs';
  const convertedText = TextToLinksConverter(text);
  expect(convertedText).toEqual(text);
});

test('Should handle empty input', () => {
  const text = '';
  const convertedText = TextToLinksConverter(text);
  expect(convertedText).toBeNull();
});
