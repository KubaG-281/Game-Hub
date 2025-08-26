import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";

interface Props {
  rating: number;
}

interface ImageProps {
  src: string;
  alt: string;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh" },
    4: { src: thumbsUp, alt: "thumbsUp" },
    5: { src: bullsEye, alt: "bullseye" },
  };

  return (
    <img width="25px" src={emojiMap[rating].src} alt={emojiMap[rating].alt} />
  );
};

export default Emoji;
