let navigation_bar = document.querySelector('.navbar');
let menus_btn = document.querySelector('.menu-btn');
let close_btn = document.querySelector('.close-btn');

menus_btn.addEventListener('click',function() {
    navigation_bar.classList.add('active2');
});


close_btn.addEventListener('click',function() {
    navigation_bar.classList.remove('active2');
});

//nav code end
//image code
(function() {
    const pictures = [
        "img1",
        "img2",
        "img3",
        "img4",
        "img5"
    ];
    const buttons = document.querySelectorAll('.btn');
    const imgContainer = document.querySelector('.img-container')
    let counter = 0;


    buttons.forEach(function(button) {
        button.addEventListener('click',function(e) {
            if(button.classList.contains('btn-left')){
                counter--
                if(counter<0){
                    counter = pictures.length-1;
                }
                imgContainer.style.backgroundImage=`url('./images/${pictures[counter]}.jpg')`
            }
            if(button.classList.contains('btn-right')){
                counter++
                if(counter>pictures.length-1){
                    counter = 0
                }
                imgContainer.style.backgroundImage=`url('./images/${pictures[counter]}.jpg')`
            }
        })
    })
})();
//image code end

//our latest collection
  var fullImgBox = document.getElementById('fullImgBox');
  var fullImg = document.getElementById('fullImg');

  function openFullImg(pic) {
    fullImgBox.style.display = "flex";
    fullImg.src=pic;

  }
  function closeFullImg() {
    fullImgBox.style.display="none";
  }
//our latest collection end
