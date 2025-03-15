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
      img: '/images/hero-w.png',
      title: 'Discover New Horizons.',
      subtitle: 'Unleash Your Potential.',
      description: 'Dive into cutting-edge innovations and redefine your limits.',
      link: '/product-category/laptop',
      alt: 'laptop'
    },
    // {
    //   img: '/images/hero-gaming.png', 
    //   title: 'Dominate the Game.',
    //   subtitle: 'Precision. Power. Performance.',
    //   description: 'Engineered for victory. Experience unparalleled gaming with our high-end rigs and peripherals.',
    //   link: '/product-category/gaming-pcs', 
    //   alt: 'gaming desktop'
    // },
    // {
    //   img: '/images/hero-vr.png', 
    //   title: 'Enter the Metaverse.',
    //   subtitle: 'Immerse Yourself in Next-Gen Gaming.',
    //   description: 'Break boundaries with cutting-edge VR and AR technology. Step into a new dimension of gaming.',
    //   link: '/product-category/vr-ar', 
    //   alt: 'virtual reality headset'
    // },
    // {
    //   img: '/images/hero-peripherals.png',
    //   title: 'Arm Yourself for Victory.',
    //   subtitle: 'Ultimate Control. Unmatched Response.',
    //   description: 'Equip yourself with the best gaming peripherals.',
    //   link: '/product-category/gaming-peripherals',
    //   alt: 'gaming peripherals'
    // }
  ];
  </script>