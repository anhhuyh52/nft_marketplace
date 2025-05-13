import FreeToEarnIcon from '../assets/FreeToEarnIcon';
import RankingIcon from '../assets/RankingIcon';
import VideoNftIcon from '../assets/VideoNftIcon';
import HowToBuyIcon from '../assets/HowToBuyIcon';
import NewNftsIcon from '../assets/NewNftsIcon';
import RoadmapsIcon from '../assets/RoadmapsIcon';

const features = [
  { Icon: FreeToEarnIcon, label: 'FREE TO EARN' },
  { Icon: RankingIcon, label: 'RANKING' },
  { Icon: VideoNftIcon, label: 'VIDEO-NFT' },
  { Icon: HowToBuyIcon, label: 'HOW TO BUY' },
  { Icon: NewNftsIcon, label: 'NEW NFTS', isNew: true },
  { Icon: RoadmapsIcon, label: 'ROADMAPS' },
];

export default function FeatureNav() {
  return (
    <div className='bg-neutral-normal py-6 flex items-center justify-center '>
       <div className="flex items-center justify-center md:justify-between w-full max-w-[1128px]">
      {features.map(({ Icon, label, isNew }, index) => (
        <div key={index} className="w-16 md:w-20 text-center flex flex-col items-center justify-center md:gap-3 text-white relative">
          <div className="relative flex items-center justify-center w-12 h-12 mx-auto mb-2">
            <div className='w-8 md:w-auto'>
              <Icon className="w-full h-full" />
            </div>
            {isNew && (
              <span className="absolute -top-1 -right-2 bg-red-600 text-xs px-1 rounded">NEW</span>
            )}
          </div>
          <div className="text-[10px] md:text-sm font-medium">{label}</div>
        </div>
      ))}
    </div>
    </div>
   
  );
}
