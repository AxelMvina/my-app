import React, {useState} from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';
import DescCollapseAbout from '../../Components/DescCollapseAbout';
import Footer from '../../Components/Footer/Footer';
import Logements from "../../assets/Data/Data.json";
import './LocationPage.scss'

const findLocationID =(id) =>{
    return Logements.find((Logement) => Logement.id === id);
}

function LocationPage() {
    const {id} = useParams();
    const Logement = findLocationID(id);
    const tags = Logement.tags;
    const pictures = Logement.pictures;
    const equipments = Logement.equipments;

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex(currentIndex === 0 ? pictures.length - 1 : currentIndex - 1);
    };

    const nextSlide = () => {
        setCurrentIndex(currentIndex === pictures.length - 1 ? 0 : currentIndex + 1);
    };

    const renderStars = (rating) => {
        const totalStars = 5;
        return Array.from({ length: totalStars }, (_, index) => (
            <span key={index} className="star">
                {index < rating ? "★" : "☆"}
            </span>
        ));
    };

  return (
    <div className='LocationPage'>
        <Navbar/>

        <div className='LocationPage_carrousel'>
                <button onClick={prevSlide} className='LocationPage_carrousel_buttonPrev'>❮</button>
                <img src={pictures[currentIndex]} alt={`photo logement ${currentIndex + 1}`}/>
                <div className='LocationPage_carrousel_index'>
                        {currentIndex + 1} / {pictures.length}
                </div>
                <button onClick={nextSlide} className='LocationPage_carrousel_buttonNext'>❯</button>
        </div>
        <div className='LocationPage_container'>
            <div className='LocationPage_title'>
                <h2>{Logement.title}</h2>
                <h3>{Logement.location}</h3>
                <div className='LocationPage_title_tag'>
                    {tags.map((tag, index) => {
                        return (
                            <p key={index}>{tag}</p>
                        );
                        })
                    }
                </div>
            </div>
            <div className='LocationPage_owner'>
                <div className='LocationPage_owner_content'>
                    <h4>{Logement.host.name}</h4>
                    <img className='LocationPage_owner_content_badge'src={Logement.host.picture} alt='Photo du propriétaire'></img>
                </div>
                <div className='LocationPage_owner_stars'>
                    {renderStars(Logement.rating)}
                </div>
            </div>
        </div>
        <div className='LocationPage_desccollapse'>
            <DescCollapseAbout title="Description" text={Logement.description} />
            


            <DescCollapseAbout title="Equipements" 
        
            text={equipments.map((equipment, index)=>{
                return <p key={index} className="collapse_content_eguipments">{equipment}</p>
            })
            }
                
            />
        </div>
        <Footer/>
    </div>
  )
}

export default LocationPage;