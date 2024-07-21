import React from 'react';
import { Image, ImageProps } from '@chakra-ui/react';

import bullEye from '../assets/Emojis/bulls-eye.webp';
import thumbsUp from '../assets/Emojis/thumbs-up.webp';
import meh from '../assets/Emojis/meh.webp';

interface Props {
  rating: number;
}

const Emoji: React.FC<Props> = ({ rating }) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: 'meh' },
    4: { src: thumbsUp, alt: 'recommend' },
    5: { src: bullEye, alt: 'exceptional' },
  };

  return <Image {...emojiMap[rating]} boxSize="25px" />;
};

export default Emoji;
