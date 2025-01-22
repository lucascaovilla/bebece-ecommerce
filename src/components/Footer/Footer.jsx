import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <picture className="logo">
        <img src="/static/images/Logo.svg" alt="Logo Bebecê" />
      </picture>
      <ul className="social-medias">
        <li className="social-media">
          <a>
            <img src="/static/images/social-medias/instagram.svg" alt="Instagram"></img>
          </a>
        </li>
        <li className="social-media">
          <a>
            <img src="/static/images/social-medias/facebook.svg" alt="Facebook"></img>
          </a>
        </li>
        <li className="social-media">
          <a>
            <img src="/static/images/social-medias/pinterest.svg" alt="Pinterest"></img>
          </a>
        </li>
        <li className="social-media">
          <a>
            <img src="/static/images/social-medias/twitter.svg" alt="Twitter"></img>
          </a>
        </li>
        <li className="social-media">
          <a>
            <img src="/static/images/social-medias/tik-tok.svg" alt="TikTok"></img>
          </a>
        </li>
      </ul>
      <figure className="about-us">
        <figcaption>Sobre a empresa</figcaption>
        <ul>
          <li>
            <a>
              Quem somos
            </a>
          </li>
          <li>
            <a>
              Fale conosco
            </a>
          </li>
        </ul>
      </figure>
      <figure className="policies">
        <figcaption>Sobre a empresa</figcaption>
        <ul>
          <li>
            <a>
              Política de Privacidade
            </a>
          </li>
          <li>
            <a>
              Termos de Uso
            </a>
          </li>
          <li>
            <a>
              Política de Entrega
            </a>
          </li>
          <li>
            <a>
              Política de Cupom e Descontos
            </a>
          </li>
        </ul>
      </figure>
    </footer>
  );
};

export default Footer;
