<template>
    <Carousel :slides="heroSlides" />
  </template>
  
  <script setup>
  const heroSlides = [
  {
      img: '/images/hero-r.png',
      title: 'Innovation at its Best.',
      subtitle: 'Elevate your daily life.',
      description: 'Experience the next generation of smart solutions.',
      link: '/product-category/desktop',
      alt: 'desktop'
    },
    { 
      img: '/images/hero-g.png',
      title: 'The Future is Now.',
      subtitle: 'Level Up Your Reality.',
      description: 'Explore the pinnacle of creativity and high-performance tech. Elevate your experience.',
      link: '/product-category/custom',
      alt: 'desktop'
    },
    {
      img: '/images/hero-w.png',
      title: 'Discover New Horizons.',
      subtitle: 'Unleash Your Potential.',
      description: 'Dive into cutting-edge innovations and redefine your limits.',
      link: '/product-category/laptop',
      alt: 'laptop'
    }
  ];
  </script>