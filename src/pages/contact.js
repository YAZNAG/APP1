import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faGithub, faLinkedin, faWhatsapp as fabWhatsapp } from '@fortawesome/free-brands-svg-icons';


const Contact = () => {
    const handleSendMessage = () => {
        const message = `Nom: ${document.getElementById('name').value}\nEmail: ${document.getElementById('email').value}\nMessage: ${document.getElementById('message').value}`;
        window.open(`mailto:yassinezng@gmail.com?subject=Demande%20de%20contact&body=${encodeURIComponent(message)}`);
    };

    return (
        <div className="contact-page">
            <h1>Contactez-nous</h1>
            <p>Si vous avez des questions, des préoccupations ou des commentaires, n'hésitez pas à nous contacter. Notre équipe est là pour vous aider.</p>

            <div className="contact-info">
                <h2>Coordonnées de contact :</h2>
                <p>
                    <a href="https://wa.link/cjctk2" target="_blank">
                        <FontAwesomeIcon icon={fabWhatsapp} />
                        <span className="tel_title">Whatsapp : 0688218227</span>
                    </a>
                </p>
                <p className="email dis">
                    <a href="mailto:tecspe01@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span className="email_title">Email : yassinezng@gmail.com</span>
                    </a>
                </p>
                <p className="facebook dis">
                    <a href="https://web.facebook.com/profile.php?id=100070017270206" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                        <span className="facebook_title">Facebook : "AZER-TECH"</span>
                    </a>
                </p>
                <p className="github dis">
                    <a href="https://github.com/votre-utilisateur" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                        <span className="github_title">GitHub : YASSINE</span>
                    </a>
                </p>
                <p className="linkedin dis">
                    <a href="https://www.linkedin.com/in/votre-profil-linkedin" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                        <span className="linkedin_title">LinkedIn : YASSINE AZNAG</span>
                    </a>
                </p>
            </div>

            <div className="contact-form">
                <h2>Envoyez-nous un message :</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Nom :</label>
                        <input type="text" id="name" name="name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email :</label>
                        <input type="email" id="email" name="email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message :</label>
                        <textarea id="message" name="message" rows="4" required />
                    </div>

                    <button type="button" onClick={handleSendMessage}>Envoyer</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
