import './style.css';
import Logo from "../assets/logo.png";
import { click } from '@testing-library/user-event/dist/click';

function Dashboard() {
    return (
        <>
        <div className='header'>
            <div className='navbar-dash'>
                <div className="imgs">
                    <div className="container-image">
                        <img src={Logo} alt="logo" className="logo"/>
                    </div>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='/login'>Log In</a>
                    </li>
                </ul>
            </div>
        </div>
        <div>
            <div className='wrapper-dash'>
                <div className='row'>
                    <div className='column'>
                        <div className='textumkm-dash'>
                            <h1>UMKM Membangun Negeri</h1>
                            <p className='infotext-dash'>
                                UMKM atau Usaha Mikro Kecil dan Menengah adalah jenis usaha yang memiliki skala kecil dengan jumlah aset terbatas dan jumlah karyawan yang juga terbatas.
                            </p>
                            <div className="back-button">
                                <button><a href='/'>BACK</a> </button>
                            </div>
                            <p className='sosmed-text'>
                                Tinjau terlebih dahulu
                            </p>
                        </div>
                    </div>
                    <div className='column'>
                        <div className='bg-column'></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dashboard;