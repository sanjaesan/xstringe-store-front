/**
 * App configuration.
 * This file is used to configure the app settings.
 * Below are the default values.
 */
export default defineAppConfig({
  siteName: 'Xstringe',
  shortDescription: 'Xstringe store front.',
  description: `Xstringe is an e-commerce platform dedicated to providing high-quality and high-performance workstations for creative professionals`,
  baseUrl: 'https://xstringe.shop',
  siteImage: 'https://xstringe.shop/wp-content/uploads/2025/02/xstringe-logo-black.png',
  storeSettings: {
    autoOpenCart: true,
    showReviews: true,
    showFilters: true,
    showOrderByDropdown: true,
    showSKU: true,
    showRelatedProducts: true,
    showProductCategoriesOnSingleProduct: true,
    showBreadcrumbOnSingleProduct: true,
    showMoveToWishlist: true,
    hideBillingAddressForVirtualProducts: false,
    initStoreOnUserActionToReduceServerLoad: true,
    saleBadge: 'percent', // 'percent', 'onSale' or 'hidden'
    socialLoginsDisplay: 'buttons', // 'buttons' or 'icons'
  },
});
