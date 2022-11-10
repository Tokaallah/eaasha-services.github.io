// -----------------------------------------------------------------------------
// WHEN DOCUMENT IS READY
// -----------------------------------------------------------------------------
$(document).ready(function(){

    // -----------------------------------------------------------------------------
    // DESKTOP NAVIGATION MENU
    // -----------------------------------------------------------------------------
    var desktopNavigationMenu = $('.desktop-navigation-bar');
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 200) {
            desktopNavigationMenu.removeClass("transparent");
        } else{
            desktopNavigationMenu.addClass("transparent");
        }
    });

    // -----------------------------------------------------------------------------
    // FILTERATION
    // -----------------------------------------------------------------------------
    var filterationBar = $('.filteration.fixed-on-scroll');
    var filterBtn = $('.filteration .filter-btn');
    var filterPopUp = $('.filteration .filter-popup');
    var filterCloseBtn = $('.filteration  .close-filter-form');
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 700) {
            filterationBar.addClass("show");
        } else{
            filterationBar.removeClass("show");
        }
    });
    filterBtn.on("click", function(){
        filterPopUp.toggleClass('open');
        console.log('Open');
    });
    filterCloseBtn.on("click", function(e){
        e.preventDefault();
        filterPopUp.removeClass('open');
    });

    // -----------------------------------------------------------------------------
    // SHOPPING CART
    // -----------------------------------------------------------------------------
    var shoppingCartBtn = $('.shopping-cart');
    var shoppingCartSideBar = $('.shopping-cart-sidebar');
    var shoppingCartSideBarCloseBtn = shoppingCartSideBar.find('.close-shopping-cart');
    var shoppingCartSideBarOverlay = shoppingCartSideBar.find('.overlay');
    shoppingCartBtn.on("click", function(){
        shoppingCartSideBar.addClass('open');
        $('body').addClass('no-vertical-scroll');
    });
    shoppingCartSideBarCloseBtn.on("click", function(){
        shoppingCartSideBar.removeClass('open');
        $('body').removeClass('no-vertical-scroll');
    })
    shoppingCartSideBarOverlay.on("click", function(){
        shoppingCartSideBar.removeClass('open');
        $('body').removeClass('no-vertical-scroll');
    })

    // -----------------------------------------------------------------------------
    // HOMEPAGE OFFERS & PROMOTIONS SLIDER
    // -----------------------------------------------------------------------------
    var homepageOffersPromotions = $('.homepage-offers-promotions .offers-promotions-slider');
    homepageOffersPromotions.slick({
        autoplay: true,
        autoplaySpeed: 2500,
        dots: false,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        infinte: true,
        pauseOnHover: true,
        draggable: false
    });

    // -----------------------------------------------------------------------------
    // SERVICE PROVIDER GALLERY SLIDER
    // -----------------------------------------------------------------------------
    var homepageOffersPromotions = $('.service-provider-gallery .service-provider-gallery-slider');
    homepageOffersPromotions.slick({
        autoplay: true,
        autoplaySpeed: 0,
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        speed: 4000,
        infinte: true,
        pauseOnHover: true,
        draggable: false
    });

    // -----------------------------------------------------------------------------
    // TABS SWITCHER
    // -----------------------------------------------------------------------------
    var tabsBar = $('.tabs-bar');
    var tabsLists = tabsBar.find('.tabs-list');
    tabsLists.on("click", function(){
        let targetTab = $(this).attr('data-tab');
        $('[tab-data]').hide();
        $('[tab-data='+ targetTab +']').show();
        tabsLists.removeClass('active');
        $(this).addClass('active');
    });

    // -----------------------------------------------------------------------------
    // FIXED SERVICE PROVIDER CATEGORY LIST ON SCROLLING
    // -----------------------------------------------------------------------------
    var serviceProviderMenu = $('.service-provider-menu');
    $(window).scroll(function() {
        if ($(window).scrollTop() >= 650) {
            serviceProviderMenu.addClass("fixed");
        } else{
            serviceProviderMenu.removeClass("fixed");
        }
    });

    // -----------------------------------------------------------------------------
    // SERVICE PROVIDER CATEGORIES MENU SCROLLING
    // -----------------------------------------------------------------------------
    var menuListCategory = serviceProviderMenu.find('.categories-list .categories a');
    var menuCategories = serviceProviderMenu.find('.menu-categories');
    menuListCategory.on("click", function(){
        menuListCategory.removeClass("active");
        $(this).addClass("active");
        let menuCategoryClicked = $(this).attr('categoryName');
        let categoryToScrollTo = menuCategories.find("[categoryData='" + menuCategoryClicked + "']");
        console.log(categoryToScrollTo);
        $('body, html').animate({
            scrollTop: categoryToScrollTo.offset().top-110
        }, 500);
    })

    // -----------------------------------------------------------------------------
    // SERVICE PROVIDER CATEGORIES LIST TRACKING
    // -----------------------------------------------------------------------------
    var menuCategory = menuCategories.find(".meal-category");
    $(window).scroll(function(){
        menuCategory.each(function(){ 
            if($(this).isInViewport()){
                let currentCategory = $(this).attr('categoryData');
                menuListCategory.removeClass('active');
                $('.categories-list .categories a[categoryName="'+ currentCategory +'"]').addClass('active');
            }            
        }); 
    });

    // -----------------------------------------------------------------------------
    // CREDIT CARD EXPIRY DATE INPUT MASK
    // -----------------------------------------------------------------------------
    $('.expiry-date-mask').mask('00/00');

    // -----------------------------------------------------------------------------
    // SCROLL TO TOP
    // -----------------------------------------------------------------------------
    var scrollToTop = $('.scroll-to-top');
    $(window).scroll(function(){
        if ($(window).scrollTop() >= 700) {
            scrollToTop.addClass("show");
        } else{
            scrollToTop.removeClass("show");
        }
    });
    scrollToTop.on('click', function(){
        $('body, html').animate({
            scrollTop: 0
        }, 1000);
    });

    // -----------------------------------------------------------------------------
    // FUNCTION TO DETECT IF ELEMENT IS IN VIEW PORT
    // -----------------------------------------------------------------------------
    $.fn.isInViewport = function(){
        var elementTop = $(this).offset().top+500;
        var elementBottom = elementTop + $(this).outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();
        return elementBottom > viewportTop && elementTop < viewportBottom;
    }

    // -----------------------------------------------------------------------------
    // ORDER REVIEW POPUP
    // -----------------------------------------------------------------------------
    var reviewBtn = $('.review-btn');
    var reviewPopUp = $('.review-popup');
    var reviewPopUpCloseBtn = reviewPopUp.find('.close-popup-btn');
    reviewBtn.on("click", function(){
        reviewPopUp.addClass('open');
        $('body').addClass('no-vertical-scroll');
    });
    reviewPopUpCloseBtn.on("click", function(){
        reviewPopUp.removeClass('open');
        $('body').removeClass('no-vertical-scroll');
    })
});