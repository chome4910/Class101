const panelFaqContainer = document.querySelectorAll( '.panel-faq-container' );
let panelFaqAnswer = document.querySelectorAll( '.panel-faq-answer' );
const btnAllClose = document.getElementById( 'btn-all-close' );


for(let i = 0 ; i < panelFaqContainer.length ; i++){
    panelFaqContainer[i].addEventListener('click',function(){
        //클릭시 처리 할 일
        //faq 제목 클릭시 본문이 보이게 active 클래스 추가해줘~
        panelFaqAnswer[i].classList.add('active');                                                                                                                                                                                                                                                                                   
    })
}

btnAllClose.addEventListener( 'click', function() {
    // 버튼 클릭시 처리할 일
    for( let i=0; i < panelFaqAnswer.length; i++ ) {
        panelFaqAnswer[i].classList.remove( 'active' );
    }
    
} );
    
