jQuery.getJSON(
    'https://api.jsonbin.io/b/5e905926172eb643896166e7',
    function(data) {
        console.log(data);
        jQuery('.create').on('click', function(){
            jQuery('#result').html(data.text);
        })
    }
);

jQuery('.change').on('click', function() {
    const var1 = jQuery('.inputVar1').val();
    const var2 = jQuery('.inputVar2').val();
    const var3 = jQuery('.inputVar3').val();
    const var4 = jQuery('.inputVar4').val();
    const var5 = jQuery('.inputVar5').val();
    const var6 = jQuery('.inputVar6').val();
    const speach = jQuery('.inputVarSpeach').val();


    const modText = {
        "text":[
            `Жили-были ${var1} да ${var2}` ,
            ` Была у них ${var3}`,
            ` Снесла ${var3} ${var4}, не простое - золотое`,
            ` - ${var1} бил, бил - не разбил`,
            ` - ${var2} била, била - не разбила`,
            ` ${var5} бежала, ${var6} задела, ${var4} упало и разбилось.`,
            ` ${var1} плачет, ${var2} плачет, а ${var3} кудахчет:`,
            ` ${speach}`
    ]}

    jQuery('#result').html(modText.text);
});