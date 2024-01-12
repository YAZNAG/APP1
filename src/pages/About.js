import React from 'react';

const About = () => {
    const aboutPageStyle = {
        textAlign: 'center',
        backgroundColor: '#f4f4f4',
        padding: '20px',
    };

    const headingStyle = {
        fontSize: '2rem',
        color: '#333',
    };

    const paragraphStyle = {
        fontSize: '1.2rem',
        lineHeight: '1.6',
        color: '#555',
    };

    return (
        <div style={aboutPageStyle}>
            <h1 style={headingStyle}>À propos de notre magasin de laptops</h1>
            <p style={paragraphStyle}>Bienvenue sur notre boutique en ligne spécialisée dans les laptops haut de gamme. Nous nous engageons à fournir à nos clients les derniers modèles de laptops de qualité supérieure, offrant des performances exceptionnelles et une expérience utilisateur inégalée.</p>
            <p>Nos valeurs fondamentales sont l'innovation, la qualité et le service client. Chacun de nos laptops est soigneusement sélectionné pour répondre aux besoins de nos clients, que ce soit pour le travail, les loisirs, le gaming ou d'autres utilisations.</p>
            <p>Nous sommes fiers de vous offrir :</p>
            <ul>
                <li>Une gamme diversifiée de laptops, des ultraportables aux machines de gaming de pointe.</li>
                <li>Des produits de marques réputées, avec des composants de haute qualité.</li>
                <li>Un service client exceptionnel pour répondre à toutes vos questions et préoccupations.</li>
                <li>Des offres spéciales et des promotions régulières pour rendre nos produits encore plus accessibles.</li>
            </ul>
            <p>Nous espérons que vous trouverez le laptop parfait pour répondre à vos besoins, que ce soit pour le travail, les études ou le divertissement. Merci de nous faire confiance pour votre prochain achat de laptop.</p>
            <p>N'hésitez pas à nous contacter si vous avez des questions ou des commentaires. Nous sommes là pour vous aider à prendre la meilleure décision en matière d'informatique.</p>
        </div>
    );
}

        

export default About;
