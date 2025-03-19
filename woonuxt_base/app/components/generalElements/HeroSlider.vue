<template>
    <Carousel :slides="heroSlides" />
  </template>
  
  <script setup>
  const heroSlides = [
  {
      img: '/images/hero-r.png',
      title: 'Innovation at its Best.',
      subtitle: 'Elevate your daily life.',
      description: 'Experience the next generation of Productivity.',
      link: '/product-category/desktop',
      alt: 'desktop'
    },
    { 
      img: '/images/hero-g.png',
      title: 'The Future is Now.',
      subtitle: 'Level Up Your Reality.',
      description: 'Explore the pinnacle of creativity and high-performance tech.',
      link: '/product-category/made-to-order',
      alt: 'desktop'
    },
    {
      img: '/images/hero-b.png',
      title: 'Unleash Your Potential.',
      subtitle: 'Precision. Power. Performance.',
      description: 'Dive into cutting-edge innovations and redefine your limits.',
      link: '/product-category/laptop',
      alt: 'laptop'
    },
    {
      img: '/images/hero-w.png',
      title: 'Arm Yourself for Victory.',
      subtitle: 'Ultimate Control. Unmatched Response.',
      description: 'Equip yourself with the best gaming accessories.',
      link: '/product-category/accessories',
      alt: 'accessories'
    }
  ];
  </script>