const navItems = [
  {
    label: "HOME",
    path: "/",
  },
  {
    label: "SHOP",
    path: "/shop",
    hasMegaMenu: true,
    megaMenuData: [
      {
        title: "SHOP PAGES",
        links: [
          { name: "Default", link: "/shop" },
          { name: "Topbar", link: "/shop-topbar" },
          { name: "Collapse", link: "/shop-collapse" },
          { name: "Simple", link: "/shop-simple" },
          { name: "Masonry", link: "/shop-masonry" },
        ],
      },
      {
        title: "PRODUCT PAGES",
        links: [
          { name: "Default", link: "/shop-single" },           
          { name: "Images Left", link: "/product-left" },      
          { name: "Image Grid", link: "/product-grid" },       
          { name: "Image Slider", link: "/product-slider" },   
          { name: "Images Stacked", link: "/product-stacked" },
        ],
      },
      {
        title: "OTHER PAGES",
        links: [
          { name: "Collection", link: "/collection" },         
          { name: "LookBook", link: "/lookbook" },             
          { name: "Categories Page", link: "/categories" },    
          { name: "Shopping Cart", link: "/cart" },            
          { name: "Wishlist", link: "/wishlist" },             
          { name: "Order Tracking", link: "/order-tracking" }, 
          { name: "Checkout", link: "/checkout" },             
          { name: "Checkout — 2 Columns", link: "/checkout-2-columns" }, 
        ],
      },
      {
        title: "ELEMENTS",
        links: [
          { name: "Accordion", link: "/elements/accordion" },        
          { name: "Pricing Table", link: "/elements/pricing" },      
          { name: "Google Maps", link: "/elements/maps" },           
          { name: "Message Box", link: "/elements/message-box" },    
          { name: "Progress Bars", link: "/elements/progress" },     
          { name: "Charts", link: "/elements/charts" },              
          { name: "Icon Box", link: "/elements/icon-box" },          
          { name: "Product Tabs", link: "/elements/product-tabs" },  
          { name: "Products Grid", link: "/elements/products-grid" },
          { name: "Tabs", link: "/elements/tabs" },                  
          { name: "Video Players", link: "/elements/video-players" },
          { name: "Team", link: "/elements/team" },                  
          { name: "Buttons", link: "/elements/buttons" },            
          { name: "Testimonials", link: "/elements/testimonials" },  
          { name: "Social Icons", link: "/elements/social-icons" },  
          { name: "Blog Posts", link: "/elements/blog-posts" },      
        ],
      },
    ],
  },
  {
    label: "COLLECTION",
    path: "/collection",
  },
  {
    label: "JOURNAL",
    path: "/journal",
    hasMegaMenu: true,
    megaMenuData: [
      {
        title: "BLOG STYLES",
        links: [
          { name: "Alternative", link: "/journal/alternative" },
          { name: "Small images", link: "/journal/small-images" },
          { name: "Blog chess", link: "/journal/chess" },
          { name: "Masonry grid", link: "/journal/masonry" },
        ],
      },
      {
        title: "SINGLE POST",
        links: [
          { name: "Standard Post", link: "/journal/standard" },
          { name: "Video Post", link: "/journal/video" },
          { name: "Audio Post", link: "/journal/audio" },
        ],
      },
      {
        title: "NAVIGATION",
        links: [
          { name: "Simple", link: "/journal/nav-simple" },
          { name: "Image Background", link: "/journal/nav-bg" },
        ],
      },
    ],
  },
  {
    label: "LOOKBOOK",
    path: "/lookbook",
  },
  {
    label: "PAGES",
    path: "#",
    hasDropdown: true,
    dropdownData: [
      { name: "About", link: "/about" },
      { name: "Contact Us", link: "/contact" },
      { name: "Store Locator", link: "/store-locator" },
      { name: "FAQ", link: "/faq" },
      { name: "Coming Soon", link: "/coming-soon" },
      { name: "404", link: "/404" },
    ],
  },
];
export { navItems };