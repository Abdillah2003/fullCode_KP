import Coba from "../assets/background.jpg"
import './style.css';
import { FaSearch } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";

function Gallery() {
    const [sort, setSort] = useState("asc");
    const [submited, setSubmited] = useState("");
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [access_token, setToken] = useState('');

    useEffect(() => {
      const access_token = localStorage.getItem('token')
      setToken(access_token)
      setLoading(true)
  
      fetch("http://34.101.113.12/api/umkm", {
        method: "GET",
        headers: {
          'Authorization': `Bearer ${access_token}`,
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        setData(data.data);
        setLoading(false);
      }).catch(error => {
        console.log(error)
        setLoading(false)
      })
   },[])
  
    console.log(data);

    return (
        <>
        <Navbar />
        <div className="wrapper-gallery">
          <div className="sort-container">
            <div className="options">
              <select
                onChange={(e) => setSort(e.target.value)}
                data-testid="sort"
                className="form-select"
                style={{}}
              >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
              </select>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmited(search);
                }}
              >
              </form>
            </div>
          </div>
          <div className="search">
            <input className="input-search" type="search" data-testid="search" onChange={(e) => setSearch(e.target.value)} placeholder="Search"/>
            <button>
              <FaSearch className="search-icon"/>
            </button>
          </div>
        </div>
        <div className="textumkm-gallery">
          <h1>Gallery UMKM</h1>
        </div>
        {data.map((user) => (
          <div className="wrapperdata-gallery">
          <div>
            <img src={user.gambar_umkm} alt={user.nama_umkm} />
          </div>
          <div className="infotext-gallery">
            <h1>{user.nama_umkm}</h1>
            <h2>{user.detail_umkm}</h2>
            <p>{user.motto_umkm}</p>
          </div>
        </div>    
        ))}  
        </>
    );
}

export default Gallery;