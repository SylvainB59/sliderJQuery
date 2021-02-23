$('.description p').text($('.miniatures div:first-child p').text())

function monSlider(){
    $(".miniatures img").click(function(){
        $('.slider img').attr('src',$(this).attr('src'))
        $('.description p').text($(this).next().text())
    })
}


// function genereTag(){

// }
// tag*2
$(".generer").click(function(){
    $('#tag').val("")
    let arrTag=[];
    $('#form1 input').each(function(){
        arrTag.push($(this).val())
    })
    for(let i=0;i<arrTag.length;i++){
        for(let j=i;j<arrTag.length;j++){
            if(i==j){
                continue;
            }else{
                $('#tag').val($('#tag').val()+arrTag[i]+', '+arrTag[j]+'\n').delay(1000)
            }
        }
    }
})
// tag*3
// $(".generer").click(function(){
//     $('#tag').val("")
//     let arrTag=[];
//     $('form input').each(function(){
//         arrTag.push($(this).val())
//     })
//     for(let i=0;i<arrTag.length;i++){
//         for(let j=i;j<arrTag.length;j++){
//             for(let k=j;k<arrTag.length;k++){
//                 if(i==j || j==k){
//                     continue;
//                 }else{
//                     $('#tag').val($('#tag').val()+arrTag[i]+', '+arrTag[j]+', '+arrTag[k]+'\n')
//                 }
//             }
//         }
//     }
// })
$(document).on('change','#menu',function(){
    console.log('.'+$('#menu').val().toLowerCase())
    let classMenu ='.'+$('#menu').val().toLowerCase()
    console.log($(classMenu));
    $(classMenu).toggleClass(classMenu);
});
$('.addMenu').click(function(){
    console.log($('#quantitee').val())
})


/****************************************/

function countdown(n){
    if(n<1){
      return [];
    }else{
      let countArray=countdown(n-1);
      countArray.unshift(n);
      return countArray;
    }
  }

// console.log(countdown(-1))

// console.log(countdown(10))

// console.log(countdown(5))


function rangeOfNumbers(startNum, endNum){
    if(endNum<startNum){
        return [];
    }else{
        let countArray=rangeOfNumbers(startNum, endNum-1);
        countArray.push(endNum);
        return countArray;
    }
}

// console.log(rangeOfNumbers(1, 5))

// console.log(rangeOfNumbers(6, 9)) 

// console.log(rangeOfNumbers(4, 4))