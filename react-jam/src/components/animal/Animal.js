import React from 'react';
import './Animal.css';

const Animal = () => {

    return (
        <section className="section-animal">
            <div className="inner">
                <div className="container-description">
                    <h1 className="title">Husky Sybérien</h1>
                    <p className="description">
                        De taille moyenne, le Husky Sibérien est un chien à l’allure élégante et souple.
                        Hyperactif, il sert traditionnellement de chien de traîneau. C'est un chien qui
                        sait se montrer indépendant, mais il n’apprécie pas la solitude pour autant.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Animal;
