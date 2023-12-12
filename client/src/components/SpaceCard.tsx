interface SpaceCard {
  title: string,
  image: string
}
import { useNavigate } from 'react-router-dom';

const SpaceCard = ({ title, image }: SpaceCard) => {
  const navigate = useNavigate();
  // const url = `/individual?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}`;
  const handleClick = () => {
		navigate('/individual', { state: { title } });
	};
  return (
    <div
      className="flex flex-col overflow-hidden w-[20%] h-[15em] bg-[#2b0452] rounded-[30px] hover:cursor-pointer"
      onClick={handleClick}
    >
      <img src={image} className="h-[80%]" />
      <p className="py-3 text-white text-xl font-extrabold">{title}</p>
    </div>
  );
}

export default SpaceCard;