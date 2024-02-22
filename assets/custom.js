$(document).ready(function(){ 
  /*
  * product page slider
  */
  var mob = $(".weglot").html();
  $(".mobile_weglot").html(mob);

  $('body').on('click', '.mobile_weglot a', function(e) {  
    e.preventDefault();     

    $(".mobile_weglot").find(".wg-drop.country-selector").toggleClass("closed");
    var id = $(this).attr("id");
    $(".weglot").find("#"+id).trigger("click");

  });

  var value = $('.custom_materiale').find("input[type=radio]:checked").siblings(".variant__button-label").text();
  $(".cst_material_text").html(value);

  $('body').on('click', '.custom_materiale', function() {
     $(".custom_color").find("input[type=radio]:checked").parents(".custom_color").trigger("click");
    var value = $(this).find(".variant__button-label").text();
    $(".cst_material_text").html(value);

  });


  $('.cstm_main_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.cstm_thumb_slider',
    prevArrow : '<button type="button" class="slick-prev"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-chevron-down" viewBox="0 0 28 16"><path d="M1.57 1.59l12.76 12.77L27.1 1.59" stroke-width="2" stroke="#000" fill="none" fill-rule="evenodd"></path></svg></button>',
    nextArrow : '<button type="button" class="slick-next"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-chevron-down" viewBox="0 0 28 16"><path d="M1.57 1.59l12.76 12.77L27.1 1.59" stroke-width="2" stroke="#000" fill="none" fill-rule="evenodd"></path></svg></button>',
  });


  $('.cstm_thumb_slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    slidesToScroll: 1,
    infinite:true,
    asNavFor: '.cstm_main_slider',
    dots: false,
    arrows: true,
    focusOnSelect: true,
    prevArrow : '<button type="button" class="slick-prev"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-chevron-down" viewBox="0 0 28 16"><path d="M1.57 1.59l12.76 12.77L27.1 1.59" stroke-width="2" stroke="#000" fill="none" fill-rule="evenodd"></path></svg></button>',
    nextArrow : '<button type="button" class="slick-next"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-chevron-down" viewBox="0 0 28 16"><path d="M1.57 1.59l12.76 12.77L27.1 1.59" stroke-width="2" stroke="#000" fill="none" fill-rule="evenodd"></path></svg></button>',


  });



  var options1 = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,    
    infinite: true,
    dots: false,
    focusOnSelect: true,
    prevArrow : '<button type="button" class="slick-prev"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-chevron-down" viewBox="0 0 28 16"><path d="M1.57 1.59l12.76 12.77L27.1 1.59" stroke-width="2" stroke="#000" fill="none" fill-rule="evenodd"></path></svg></button>',
    nextArrow : '<button type="button" class="slick-next"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-chevron-down" viewBox="0 0 28 16"><path d="M1.57 1.59l12.76 12.77L27.1 1.59" stroke-width="2" stroke="#000" fill="none" fill-rule="evenodd"></path></svg></button>',


  }

  var options2 = {
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite:true,
    //mobileFirst:true,
    asNavFor: '.cstm_main_slider',
    focusOnSelect: true,
    prevArrow : '<button type="button" class="slick-prev"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-chevron-down" viewBox="0 0 28 16"><path d="M1.57 1.59l12.76 12.77L27.1 1.59" stroke-width="2" stroke="#000" fill="none" fill-rule="evenodd"></path></svg></button>',
    nextArrow : '<button type="button" class="slick-next"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon--wide icon-chevron-down" viewBox="0 0 28 16"><path d="M1.57 1.59l12.76 12.77L27.1 1.59" stroke-width="2" stroke="#000" fill="none" fill-rule="evenodd"></path></svg></button>',

  }  



  /* 
 * window on load
 */ 
   $(window).on('load',function () {
  if($(".custom_color").length > 0){

    var customColor =   $(".custom_color").find("input[type=radio]:checked").parents(".custom_color").trigger('click');

  }
  //    var customColor =   $(".custom_color").find("input[type=radio]:checked").parents(".custom_color").attr('data-newcolor');

   });



  /*
*  varination based images in product slider
*/  
 // $('.custom_color').on('click',function(){ 
 if($(".custom_color").length > 0){
   $('body').on('click', '.custom_color', function() { 
var materiale = $(".product-block").find("input[name='Materiale']:checked").val();
//alert(materiale);
var trim_materiale = materiale.split('(');
 var colore = $(".product-block").find("input[name='Colore']:checked").val();
//console.log(colore);
var combination=colore+'-'+trim_materiale[0];

//const pattern = / /gi;
//const replacement = "-";
//combination = combination.replaceAll(pattern, replacement);     
//combination= combination.toLowerCase();
     
combination = $.trim(combination);
combination = combination.replace(" ","-");
combination= combination.toLowerCase();
combination = combination.replace(" ","-");
combination = combination.replace(" ","-");     
console.log(combination); 
     
    $(".spinner-loader").hide();
    $(".cstm_main_slider").show();
    $(".cstm_thumb_slider").show();
    var customColor = $(this).attr('data-newcolor');
// 	console.log(customColor);
if($('.main_thumbnails').children('.alt_'+combination).length > 0){
        
     var main_thumbnails = $('.main_thumbnails').children('.alt_'+combination);      
    var lower_thumbnails = $('.lower_thumbnails').children('.alt_'+combination);
   
     }else{
     
    var main_thumbnails = $('.main_thumbnails').children('.alt_'+customColor);
    var lower_thumbnails = $('.lower_thumbnails').children('.alt_'+customColor);
}
    var withoutaltMainImg = $('.main_thumbnails').children('.custom_alt');
    var withoutaltThumbImg =$('.lower_thumbnails').children('.custom_alt');
    if(main_thumbnails.html() != undefined){
      $('.cstm_main_slider').html('');
      $('.cstm_thumb_slider').html('');


      var sliderHtml1 ='';
      var sliderHtml2 ='';

      main_thumbnails.each(function(){
        sliderHtml1 +="<div class='cstm-main-media' data-fancybox='gallery'>"+$(this).html()+"</div>";
      });
      withoutaltMainImg.each(function(){
        sliderHtml1 +="<div class='cstm-main-media '>"+$(this).html()+"</div>";
      });

      lower_thumbnails.each(function(){
        sliderHtml2 +="<div class='cstm-lwr-media '>"+$(this).html()+"</div>";    
      });

      withoutaltThumbImg.each(function(){
        sliderHtml2 +="<div class='cstm-lwr-media '>"+$(this).html()+"</div>";

      });

      $('.cstm_main_slider').slick("unslick");
      $('.cstm_thumb_slider').slick("unslick");
      // add html
      $('.cstm_main_slider').html(sliderHtml1);
      $('.cstm_thumb_slider').html(sliderHtml2);

      // slick init
      $('.cstm_main_slider').slick(options1);
      $('.cstm_thumb_slider').slick(options2);

      $(".cstm_main_slider .cstm-main-media").each(function(index){
        $(this).find(".product-main-slide").attr("data-index",index);
      });
   
      var sectionId = $(".product-section").attr("data-section-id");
      var pswp =  document.querySelectorAll('.cstm_main_slider')[0];
       var imageZoom = new theme.Photoswipe(pswp, sectionId);
       
    }
    // main slider
  });
}

  /*
* home page colletion list slider
*/
  $('body').on('click', '.tag__checkbox-wrapper', function() {

    setTimeout(function(){
      if($(".collection-filter__item--count").length > 0){
        var totalProducts = 0;
        $(".totalProducts").each(function () {
          var count = $(this).attr("data-count");
          totalProducts =parseInt(totalProducts) + parseInt(count);
        });

        var htmlCount =  $(".collection-filter__item--count").html();
        var retArray = htmlCount.split(" ");

        $(".collection-filter__item--count").html(totalProducts+" "+retArray[1])

      }
    }, 1000);
  });
  setTimeout(function(){

    if($(".collection-filter__item--count").length > 0){
      var totalProducts = 0;
      $(".totalProducts").each(function () {
        var count = $(this).attr("data-count");
        totalProducts =parseInt(totalProducts) + parseInt(count);
      });

      var htmlCount =  $(".collection-filter__item--count").html();
      var retArray = htmlCount.split(" ");

      $(".collection-filter__item--count").html(totalProducts+" "+retArray[1])

    }



    $('.product_recomandetaion_slider').slick({
      arrows: true, 
      autoplay: false,
      infinite:true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:"<button type='button' class='custom-prev-btn slick-prev pull-left'><svg aria-hidden='true' focusable='false' role='presentation' class='icon icon--wide icon-chevron-down' viewBox='0 0 28 16'><path d='M1.57 1.59l12.76 12.77L27.1 1.59' stroke-width='2' stroke='000' fill='none' fill-rule='evenodd'></path></svg></button>",
      nextArrow:"<button type='button' class='custom-next-btn slick-next pull-right'><svg aria-hidden='true' focusable='false' role='presentation' class='icon icon--wide icon-chevron-down' viewBox='0 0 28 16'><path d='M1.57 1.59l12.76 12.77L27.1 1.59' stroke-width='2' stroke='000' fill='none' fill-rule='evenodd'></path></svg></button>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          } 
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            arrows:false,
            slidesToScroll: 1,
          },
        }
      ]
    });
  }, 1000); 
  setTimeout(function(){
    $('.product_recently_viewed_slider').slick({
      arrows: true, 
      autoplay: false,
      infinite:true,
      autoplaySpeed: 2000,
      slidesToShow: 4,
      slidesToScroll: 1,
      prevArrow:"<button type='button' class='slick-prev pull-left'><?xml version='1.0' ?><svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><title/><g data-name='1' id='_1'><path d='M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z'/></g></svg></button>",
      nextArrow:"<button type='button' class='slick-next pull-right'><?xml version='1.0' ?><svg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'><title/><g data-name='1' id='_1'><path d='M353,450a15,15,0,0,1-10.61-4.39L157.5,260.71a15,15,0,0,1,0-21.21L342.39,54.6a15,15,0,1,1,21.22,21.21L189.32,250.1,363.61,424.39A15,15,0,0,1,353,450Z'/></g></svg></button>",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        }
      ]
    });
  }, 3000);

  $('.custom-slider').slick({
    arrows: true, 
    autoplay: false,
    infinite:true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev pull-left'><?xml version='1.0' ?><svg aria-hidden='true' focusable='false' role='presentation' class='icon icon--wide icon-chevron-down' viewBox='0 0 28 16'><path d='M1.57 1.59l12.76 12.77L27.1 1.59' stroke-width='2' stroke='000' fill='none' fill-rule='evenodd'></path></svg></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><?xml version='1.0' ?><svg aria-hidden='true' focusable='false' role='presentation' class='icon icon--wide icon-chevron-down' viewBox='0 0 28 16'><path d='M1.57 1.59l12.76 12.77L27.1 1.59' stroke-width='2' stroke='000' fill='none' fill-rule='evenodd'></path></svg></button>",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      }
    ]
  });

 
  $('.custom-collection-slider').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true
        }
      }
    ]
  });


  $('.custom-collection-slider2').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          arrows: false,
          dots: true,
          initialSlide: 1
        }
      }

    ]
  });
   $(window).on('resize orientationchange', function() {
    $('.custom-collection-slider').slick('resize');
    $('.custom-collection-slider2').slick('resize');
  });
  
  /*
size-chart
*/  
  $("button").click(function(){
    $("#modal-content").fadeToggle( "slow" );
  });

  $('body').on('click', '.tag__category', function(e) {
    //code
    e.preventDefault();
    var href = $(this).find("a").attr("href");
    window.location.href= href;

  });

  $(document).ready(function(){
    $(".footer_info_inner").click(function(){
      $(this).toggleClass("active").next();
      $(".custom_footer").slideToggle(300);          

    });


  }); 


  var pageURL = $(location).attr("href");

  if(pageURL== 'https://carmens-it.myshopify.com/collections/' || pageURL =='https://carmens-it.myshopify.com/collections'){  
    $(location).prop('href', 'https://carmens-it.myshopify.com/collections/all');
  }


  $( "#shopify-section-template--15402639098033__1646302678120b3868" ).addClass( "instagram_feed_section" );

  

});