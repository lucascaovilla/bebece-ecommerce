import React from 'react';
import './Blog.scss';
import SliderComponent from '../SliderComponent/SliderComponent';
import BlogPost from '../BlogPost/BlogPost';

const Blog = () => {
  return (
    <section className="blog">
      <div className="title">
        <h3>Conheça mais</h3>
        <h6>Fique por dentro de tudo que acontece na Bebecê</h6>
      </div>
      <SliderComponent autoplay={true} darkDots={true} >
        <BlogPost image="static/images/blog/blog-post-1.png" title="NOVO LOGO, MESMA ESSÊNCIA" caption="Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!" />
        <BlogPost image="static/images/blog/blog-post-1.png" title="NOVO LOGO, MESMA ESSÊNCIA" caption="Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!" />
        <BlogPost image="static/images/blog/blog-post-1.png" title="NOVO LOGO, MESMA ESSÊNCIA" caption="Trazendo conforto através das linhas finas e grossas + uma paleta de cores vibrante e cheia de atitude, o resultado é um visual que traduz nossa essência: autêntica e surpreendente!" />
      </SliderComponent>
    </section>
  );
};

export default Blog;
