import Footer from "../components/Footer"
import NavbarComponent from "../components/Navbar"

const developers = [
  {
    name: 'Aria Putra Pratama',
    role: 'Front-end Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies libero et tellus fermentum, vel volutpat orci lacinia.',
    image: '',
    linkedin: 'https://id.linkedin.com/in/aria-putra-pratama-209482283',
    github: 'https://github.com/ARIA260702'
  },
  {
    name: 'Gilang Riyanto',
    role: 'Front-end Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies libero et tellus fermentum, vel volutpat orci lacinia.',
    image: '',
    linkedin: 'https://www.linkedin.com/in/gilangriyanto/',
    github: 'https://github.com/gilangriyanto'
  },
  {
    name: 'Muhammad Ariansyah',
    role: 'Back-end Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies libero et tellus fermentum, vel volutpat orci lacinia.',
    image: '',
    linkedin: 'https://www.linkedin.com/in/m-ariansyah',
    github: 'https://github.com/AriiAnn'
  },
  {
    name: 'Dinda Rosalin Husna',
    role: 'UI/UX Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies libero et tellus fermentum, vel volutpat orci lacinia.',
    image: '',
    linkedin: 'http://www.linkedin.com/in/dindarosalin',
    github: 'https://github.com/dindarosalin'
  },
  {
    name: 'Dwi Wahyu Riani',
    role: 'Project Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies libero et tellus fermentum, vel volutpat orci lacinia.',
    image: '',
    linkedin: '',
    github: ''
  },
];

function TentangKami() {
  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <h3 className="text-center m-2">Tentang Kami</h3>
        <div>
          {developers.map((developer, index) => (
            <div key={index} className="card mb-3 row">
              <div className="card-body">
                <img src={developer.image} alt="Foto Developer" />
                <h5 className="card-title">{developer.name}</h5>
                <p className="card-subtitle mb-2 text-body-secondary">{developer.role}</p>
                <p className="card-text">{developer.description}</p>
                <a href={developer.linkedin} className="card-link" target="_blank" rel="noopener noreferrer">Linkedin</a>
                <a href={developer.github} className="card-link" target="_blank" rel="noopener noreferrer">Github</a>
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