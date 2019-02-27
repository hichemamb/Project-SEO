import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import serpent from '../../assets/images/serpent.png';


const Home = () => {

    return (
        <div className="Home">
            <section className="section-acceuil">
                <div className="container-title">
                    <h1 className="title-acceuil">Choisir un animal</h1>
                </div>
                <nav>
                    <ul className="container-list">
                        <Link class="link-list" to={"/animal"}>
                            <li className="list">
                                <img className="img-list" src={serpent} alt="Image de serpent"/>
                                    <h3 className="title-list">Le mamba-noir</h3>
                            </li>
                        </Link>

                        <Link class="link-list" to={"/animal"}>
                            <li className="list">
                                <img className="img-list" src={serpent} alt=""/>
                                    <h3 className="title-list">Le singe araignées</h3>
                            </li>
                        </Link>

                        <Link class="link-list" to={"/animal"}>
                            <li className="list">
                                <img className="img-list" src={serpent} alt=""/>
                                    <h3 className="title-list">Le lion de la savane</h3>
                            </li>
                        </Link>
                        <Link class="link-list" to={"/animal"}>
                            <li className="list">
                                <img className="img-list" src={serpent} alt=""/>
                                    <h3 className="title-list">L'Husky Sybérien</h3>
                            </li>
                        </Link>
                    </ul>
                </nav>
            </section>
        </div>
);
};

export default Home;
