import Footer from "../components/Footer"
import NavbarComponent from "../components/Navbar"

const developers = [
  {
    name: 'Aria Putra Pratama',
    role: 'Front-end Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies libero et tellus fermentum, vel volutpat orci lacinia.',
    image:''
  },
  {
    name: 'Gilang Riyanto',
    role: 'Front-end Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies libero et tellus fermentum, vel volutpat orci lacinia.',
    image:''
  },
  {
    name: 'Muhammad Ariansyah',
    role: 'Back-end Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies libero et tellus fermentum, vel volutpat orci lacinia.',
    image:''
  },
  {
    name: 'Dinda Rosalin',
    role: 'UI/UX Designer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies libero et tellus fermentum, vel volutpat orci lacinia.',
    image:''
  },
  {
    name: 'Dwi Wahyu Riani',
    role: 'Project Manager',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies libero et tellus fermentum, vel volutpat orci lacinia.',
    image:''
  },
];

const containerStyle = {
  background: '#fcfafa',
  minHeight: '100vh',
};

const contentContainerStyle = {
  padding: '20px',
};

const headingStyle = {
  color: '#333',
};

const cardContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
};

const cardStyle = {
  background: '#fff',
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '20px',
  width: '100%', // Mengubah lebar menjadi 100%
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const cardHeadingStyle = {
  color: '#333',
  marginBottom: '10px',
};

const cardTextStyle = {
  color: '#666',
  marginBottom: '0',
};

function TentangKami() {
  return (
    <div style={containerStyle}>
      <NavbarComponent />
      <div style={contentContainerStyle}>
        <h1 style={headingStyle}>Tentang Kami</h1>
        <div style={cardContainerStyle}>
          {developers.map((developer, index) => (
            <div key={index} style={cardStyle}>
              <h3 style={cardHeadingStyle}>{developer.name}</h3>
              <p style={cardTextStyle}>{developer.role}</p>
              <p style={cardTextStyle}>{developer.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TentangKami