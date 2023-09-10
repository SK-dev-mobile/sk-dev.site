document.addEventListener('mousemove', function(event){
    let card_x = getTransformValue(event.clientX,window.innerWidth,54);
    let card_y = getTransformValue(event.clientY,window.innerHeight,54);
    let shadow_x = getTransformValue(event.clientX,window.innerWidth,20);
    let shadow_x_b = getTransformValue(event.clientX,window.innerWidth,54);
    let shadow_y = getTransformValue(event.clientY,window.innerHeight,20);
    let shadow_y_b = getTransformValue(event.clientY,window.innerHeight,54);
    let text_shadow_x = getTransformValue(event.clientX,window.innerWidth,16);
    let text_shadow_y = getTransformValue(event.clientY,window.innerHeight,16);
    $(".floating").css("transform","rotateX("+card_y/1+"deg) rotateY("+card_x+"deg)");
    $(".floating-no").css("transform","rotateX("+card_y/1+"deg) rotateY("+card_x+"deg)");
    $(".floating").css("box-shadow",-card_x+"px "+card_y/1+"px 55px rgba(0, 0, 0, .55)");
    $(".floating").find(".svg").css("filter","drop-shadow("+-shadow_x+"px "+shadow_y/1+"px 4px rgba(0, 0, 0, .6))");
    $(".floating-no").find(".svg").css("filter","drop-shadow("+-shadow_x_b+"px "+shadow_y_b/1+"px 4px rgba(0, 0, 0, .6))");
    $(".floating").find(".text").css("text-shadow",-text_shadow_x+"px "+text_shadow_y/1+"px 6px rgba(0, 0, 0, .8)");
    $(".floating-no").find(".text").css("text-shadow",-text_shadow_x+"px "+text_shadow_y/1+"px 6px rgba(0, 0, 0, .8)");
});
function getTransformValue(v1,v2,value){
    return ((v1/v2*value-value/2)*1).toFixed(1);
}
