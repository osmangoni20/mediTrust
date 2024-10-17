import style from '@/styles/Sass/Components/DashboardPart/_dashboardHeader.module.scss';
import Link from 'next/link';
const DashboardMenuHeder = ({menuHeader}) => {
    return (
       <div className={`${style.menuHeder} flex justify-between items-center `}>
           <h5>{menuHeader}</h5>
           <Link href={'/'}>
           <h5>Home</h5>
           </Link>
       </div>
    );
};

export default DashboardMenuHeder;