/****** carousel ******/
(function(){
    function slide(){
      var imgShow=document.querySelector(
        "#car a.show"
      );
      imgShow.className="";
      if(imgShow.nextElementSibling!=null)
        imgShow.nextElementSibling.className="show";
      else
        imgShow.parentNode.children[0].className="show";
    }
    var timer=setInterval(slide,3500);

    var slider=document.getElementById("car");
    slider.onmouseover=function(){
      clearInterval(timer);
      timer=null;
    }
    slider.onmouseout=function(){
      timer=setInterval(slide,2000);
    }   
  })();
// new - rel;
$(function(){
    $(".my-small").hover(function(){
      var $img=$(this);
      var src=$img.attr("data-target")
      $(".my-big").attr("src",src)
    }) 
})