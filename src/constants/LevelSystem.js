import SeedIcon from '../../assets/seed.png'
import SproutIcon from '../../assets/sprout.png'
import BranchIcon from '../../assets/branch.png'
import FlowerIcon from '../../assets/flower.png'
import FruitIcon from '../../assets/cherry.png'
import RainbowIcon from '../../assets/rainbow.png'
import TreeIcon from '../../assets/tree.png'
const LevelSystem =[
{lv:0,name:'씨앗',condition:0,imgSrc: SeedIcon,bgColor:'#8f784b' },
{lv:1,name:'새싹',condition:5,imgSrc: SproutIcon,bgColor:'#81c147'},
{lv:2,name:'나뭇가지',condition:10,imgSrc: BranchIcon,bgColor:'#669900'},
{lv:3,name:'꽃',condition:15,imgSrc: FlowerIcon,bgColor:'orange'},
{lv:4,name:'나무',condition:30,imgSrc: TreeIcon,bgColor:'green'},
{lv:5,name:'열매',condition:70,imgSrc: FruitIcon,bgColor:'red'},
{lv:6,name:'무지개',condition:150,imgSrc: RainbowIcon,bgColor:'silver'}

];

export default LevelSystem; 