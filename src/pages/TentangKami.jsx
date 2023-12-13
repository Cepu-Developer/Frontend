/* eslint-disable react/jsx-key */
import Footer from "../components/Footer"
import NavbarComponent from "../components/Navbar"

const developers = [
  {
    name: 'Aria Putra Pratama',
    role: 'Front-end Developer',
    description: 'Mahasiswa Sistem Informasi Universitas Malikussaleh',
    image: 'public/profile/aria.jpeg',
    linkedin: 'https://id.linkedin.com/in/aria-putra-pratama-209482283',
    github: 'https://github.com/ARIA260702',
    email: 'https://wa.me/6282283135932'
  },
  {
    name: 'Gilang Riyanto',
    role: 'Front-end Developer',
    description: 'Mahasiswa Teknik Informatika Institut Teknologi Telkom Purwokerto',
    image: 'public/profile/gilang.jpeg',
    linkedin: 'https://www.linkedin.com/in/gilangriyanto/',
    github: 'https://github.com/gilangriyanto',
    email: 'https://wa.me/6281336353371'
  },
  {
    name: 'Muhammad Ariansyah',
    role: 'Back-end Developer',
    description: 'Mahasiswa Sistem Informasi Universitas Malikussaleh',
    image: 'public/profile/ari.jpeg',
    linkedin: 'https://www.linkedin.com/in/m-ariansyah',
    github: 'https://github.com/AriiAnn',
    email: 'https://wa.me/6285156820186'
  },
  {
    name: 'Dinda Rosalin Husna',
    role: 'UI/UX Designer',
    description: 'Mahasiswa Teknologi Rekayasa Perangkat Lunak Politeknik Negeri Banyuwangi',
    image: 'public/profile/dinda.jpg',
    linkedin: 'http://www.linkedin.com/in/dindarosalin',
    github: 'https://github.com/dindarosalin',
    email: 'dindarosalin24@gmail.com'
  },
  {
    name: 'Dwi Wahyu Riani',
    role: 'Project Manager',
    description: 'Mahasiswa Sistem Telekomunikasi Universitas Pendidikan Indonesia',
    image: 'public/profile/riani.JPG',
    linkedin: 'http://www.linkedin.com/in/yannriani',
    github: 'https://github.com/yannriani',
    email: 'https://wa.me/6288802984592'
  },
];

function TentangKami() {
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <div className="row mt-3">
          <div className="col-sm-6 mx-auto d-block">
            <div className="card-body"></div>
            <h4>Tentang <strong>Kami</strong></h4>
            <p>Tim Pengembang Aplikasi Udarakita</p>
          </div>
          <div className="col-sm-6 text-end">
            <a href="https://www.instagram.com/udarakita.bycepu" target="blank" rel="noopener noreferrer" className="btn btn-outline-success">
              Official Udarakita.
              <i className="m-2 fa-brands fa-instagram fa-l"></i>
            </a>
          </div>
        </div>
        <div className="row">
          {developers.map((developer, index) => (
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div key={index} className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-2 my-2">
                    <img src={developer.image} className="img rounded mx-2" alt={developer.name} />
                  </div>
                  <div className="col-md-10">
                    <div className="card-body row">
                      <section className="col-sm-9">
                        <h5 className="card-title">{developer.name}</h5>
                        <p className="card-subtitle mb-2 text-body-secondary">{developer.role}</p>
                        <p className="card-text">{developer.description}</p>
                      </section>
                      <section className="col-sm-3">
                        <a href={developer.linkedin} className="card-link" target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-linkedin-in fa-l"></i>
                        </a>
                        <a href={developer.github} className="card-link" target="_blank" rel="noopener noreferrer">
                          <i className="fa-brands fa-github fa-l"></i>
                        </a>
                        <a href={developer.email} className="card-link" target="_blank" rel="noopener noreferrer">
                          <i className="fa-regular fa-envelope fa-l"></i>
                        </a>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TentangKami