var texto="";
var terminar=0;
var mensaje=1;
var actual=1;
var antes=1;
var idioma=0;
var no_avanzar=0;
var minimo=1;
var maximo=13;
var d_mapa=0;
var lan="es";
var cb="#fff";
var audio = new Audio();
funciones={
		muestra_ayuda:function()
		{
			console.log("muestra ayuda");
			if(actual>=3)
			{
				$("#pendulo").show(1000);
				$("#pendulo").css("display","");
				$("#g").show(1000);
				$("#g").css("display","");
				if(actual!=3)
				{
					if(actual!=9)
					{
						if(actual>9)
						{
							$("#p").hide(1000);
							$("#ins_act").hide(1000);
							$("#g").hide(1000);
							$("#ins_dia").hide(1000);
						}
						else
						{
							$("#p").show(1000);
							$("#p").css("display","");
							$("#ins_act").show(1000);
							$("#ins_act").css("display","");
							$("#ins_dia").show(1000);
							$("#ins_dia").css("display","");
							
						}	
						
					}
					else
					{
						$("#p").hide(1000);
						$("#ins_act").hide(1000);
						$("#ins_dia").show(1000);
						$("#ins_dia").css("display","");
					}
				}
				else
				{
					$("#p").hide(1000);
					$("#ins_act").hide(1000);
					$("#ins_dia").show(1000);
					$("#ins_dia").css("display","");
				}
				$("#i").show(1000);
				$("#i").css("display","");
				
				$("#ins_len").show(1000);
				$("#ins_len").css("display","");
			}
			else
			{
				funciones.oculta_ayuda();
				$("#i").show(1000);
				$("#i").css("display","");
				
				$("#ins_len").show(1000);
				$("#ins_len").css("display","");
			}
		},
		oculta_ayuda:function()
		{
			console.log("oculta ayuda");
			$("#ins_dia").hide(1000);
			$("#ins_act").hide(1000);
			$("#ins_len").hide(1000);
			if(actual<3)
			{
				$("#g").hide(1000);
				$("#p").hide(1000);
				$("#i").hide(1000);
				$("#pendulo").hide(1000);
			}
		},
		transicion:function(t)
		{
			console.log("transicion");
			funciones.oculta_ayuda();
			if(t=='dia')
			{//Sí es día carga la noche
				audio.src = "img/audio/audio_noche_"+lan+"_"+actual+".mp3";
				audio.play();
				$("#g").attr("alt","noche");
				$("#img_"+lan+"_"+actual).animate({backgroundColor:"black"},1200);
				$("body").animate({backgroundColor:"black"},1200);
				$(".fon").animate({opacity:0.2})
				$(".texto_esp").animate({opacity:0.1})
				$(".img_dia").animate({opacity:0.1});
				$("#titulo_"+lan+"_"+actual).animate({color:"#AFD5F3"},1000);
				$("#textodia_"+lan+"_"+actual).css("z-index",1);
				$("#textodia_"+lan+"_"+actual).css("position","absolute");
				$("#textonoche_"+lan+"_"+actual).css("position","relative");
				$("#textonoche_"+lan+"_"+actual).css("z-index",20);
				$("#textodia_"+lan+"_"+actual).animate({color:"#111"},100);
				$(".libro").animate({color:"#AFD5F3"},100);
				$("#textonoche_"+lan+"_"+actual).animate({color:"#AFD5F3"},1000);
				$(".libros").animate({color:"#AFD5F3"},1000);
			}
			else
			{
				audio.src = "img/audio/audio_dia_"+lan+"_"+actual+".mp3";
				audio.play();
				$("#g").attr("alt","dia");
				$("#img_"+lan+"_"+actual).animate({backgroundColor:"white"},1200);
				$(".fon").animate({opacity:0.4})
				$(".texto_esp").animate({opacity:1})
				$(".img_dia").animate({opacity:1});
				$("body").animate({backgroundColor:"white"},1200);
				$("#titulo_"+lan+"_"+actual).animate({color:"#333B55"},1000);
				$("#textodia_"+lan+"_"+actual).css("z-index",20);
				$("#textonoche_"+lan+"_"+actual).css("z-index",1);	
				$("#textodia_"+lan+"_"+actual).css("position","relative");
				$("#textonoche_"+lan+"_"+actual).css("position","absolute");
				$("#textonoche_"+lan+"_"+actual).animate({color:"#efffff"},1000);
				$("#textodia_"+lan+"_"+actual).animate({color:"#333B55"},100);
				$(".libros").animate({color:"#333B55"},1000);
				
			
			}
		},
		mueve_izquierda:function(event)
		{
			console.log("mueve izquierda");
			$("#info_principal").show(500);
			$("#d_act").html("");
			$(".mensaje").hide();
			mensaje=0;
			$("#d_act").hide();
			$("#actividades").hide();
			funciones.oculta_menu();
			console.log(actual);
			if(idioma==1)
			{
				actual--;
			}
			if(actual+1<=maximo)
			{
				if(idioma==1)
				{
					actual++;
				}
				$("body").animate({scrollTop:0},200);
				console.log("d_mapa="+d_mapa);
				console.log("idioma="+idioma);
				console.log("antes="+antes);
				console.log("actual="+actual);
				if(d_mapa==1)
				{
					$("#img_"+lan+"_"+antes).hide();
					d_mapa=0;
				}
				else
				{
					if(idioma==1)
					{
						if(lan=='es')
						{
							$("#img_en_"+actual).hide();
						}
						else
						{
							$("#img_es_"+actual).hide();
						}
						idioma=0;
						actual--;
					}
					else
					{
						$("#img_"+lan+"_"+actual).hide();
					}
				}
				
				actual++;
				$("#img_"+lan+"_"+actual).show();
				if(actual==2)
				{
					zzz="#img_"+lan+"_"+actual;
					/*setTimeout(function(){$(zzz+" .imgmapa").each(function(){
						tz=$(this).attr("src");
						tzm=tz.split("_");
						z=tzm[0]+".png";
						$(this).attr("src",z);
						});},5000); */
				}
				$("#g").attr("alt","dia");
				funciones.transicion();
				funciones.muestra_ayuda();
			}
			$("body").animate({backgroundColor:cb},1200);
		},
		mueve_derecha:function(event)
		{
			console.log("mueve derecha");
			funciones.oculta_menu();
			if(actual-1>=minimo)
			{
				$("body").animate({scrollTop:0},200);
				$("#img_"+lan+"_"+actual).hide();
				actual--;
				$("#img_"+lan+"_"+actual).show();
				$("#g").attr("alt","dia");
				funciones.transicion();
				funciones.muestra_ayuda();
			}
		},
		actividad:function(event)
		{
			console.log("actividad");
			funciones.oculta_menu();
			$("#pendulo").animate({"top":"-35px"}).delay(400).animate({"top":"-5px"},funciones.muestra_actividad());
			
		},
		muestra_actividad:function()
		{
			console.log("muestra actividad");
			audio.pause();
			audio.src = "img/audio/actividad"+actual+"_"+lan+".mp3";
			audio.play();
			cb=$("body").css("background-color");
			$("body").animate({backgroundColor:"white",scrollTop:0},1200);
			$("#info_principal").animate({"height":"0"},function(){$("#info_principal").hide();});
			$("#d_act").hide();
			$("#img_load").show();
			$("#actividades").show();
			$.ajax({url:"actividad_"+actual+".html",type:"post",success:function(html){$("#d_act").html(html);$("#img_load").hide();$("#d_act").show();}})
		},
		libros:function()
		{
			console.log("libros");
			audio.pause();
			zt=this.href.split("#");
			audio.src = "img/audio/"+zt[1]+"_"+lan+".mp3";
			audio.play();
			funciones.oculta_menu();
			cb=$("body").css("background-color");
			$("body").animate({backgroundColor:"white",scrollTop:0},1200);
			$("#info_principal").animate({"height":"0"},function(){$("#info_principal").hide();});
			$("#d_act").hide();
			$("#img_load").show();
			$("#actividades").show();
			zt=this.href.split("#");
			$.ajax({url:zt[1]+".html",type:"post",success:function(html){$("#d_act").html(html);$("#img_load").hide();$("#d_act").show();}})
			return false;
		},
		regresar:function()
		{
			console.log("regresar");
			$("body").animate({backgroundColor:cb,scrollTop:0},1200);
			$("#info_principal").show(500);
			$("#d_act").html("");
			$("#d_act").hide();
			$("#actividades").hide();
			idioma=1;
			funciones.mueve_izquierda();
		},
		muestra_menu:function()
		{
			$(".mensaje").hide(9);
			console.log("muestra menu");
			$("#d_menu").show(400);
			no_avanzar=1;
			console.log(no_avanzar);
		},
		oculta_menu:function()
		{
			console.log("oculta menu");
			$("#d_menu").hide(400);
			no_avanzar=0;
		}
		
	}
$(function(){
		//Configurar el idioma
		tmplan=window.location.href.split("#");
		if(tmplan[1]=='en')
		{
			$("#lan").val(tmplan[1]);
			$("#img_es_1").hide();
			$("#img_en_1").show();
			$("#i").text("Es");
			$("#ins_len").text("Español");
			$("#ins_dia").text("Additional information");
			$("#ins_act").text("view Activity");
			$("#menu1").attr("src","img/ui/menu1_en.png");
			$("#menu2").attr("src","img/ui/menu2_en.png");
			$("#menu3").attr("src","img/ui/menu3_en.png");
			$("#menu4").attr("src","img/ui/menu4_en.png");
			$("#menu5").attr("src","img/ui/menu5_en.png");
			$("#menu6").attr("src","img/ui/menu6_en.png");
		}
		lan=$("#lan").val();
		//Cargar audio
		audio.src = "img/audio/audio_dia_"+lan+"_1.mp3";
		//Iniciar audio
        audio.play();
        //Ocultar cargando.. de jquery-ui
        $(".ui-loader").hide();
        //Click para ver informacion oculta
		$("#g").click(function()
		{
			$("#pendulo").animate({"top":"-35px"}).delay(400).animate({"top":"-5px"});
			if($(this).attr("alt")=='dia')
			{
				funciones.oculta_ayuda();
				funciones.transicion('dia');
			}
			else
			{

				funciones.transicion('noche');
			}
		});
		//deslizar el dedo a la izquierda
		$("#marco").on( "swipeleft", funciones.mueve_izquierda);
		//tocar pantalla
		$("#marco").click(function(){ if(no_avanzar==1){funciones.oculta_menu();}else{ if(mensaje==1){$("#mensaje").hide();}else{funciones.mueve_izquierda();}}});
		//$("#actividades").click(function(){$(".mensaje").hide();mensaje=0;});
		$("#backmsg").click(function(){
			mensaje=0;
			$("#mensaje").hide();
			if(terminar==1)
			{
				if(lan=='es')
				{
					texto=texto_es;
				}
				else
				{
					texto=texto_en;
				}	
				$("#mensaje").html("<img src='img/ui/tarjeta_c.png' style='width:100%;position:absolute;z-index:20002'/><br><p style='width:80%;margin-top:200px;left:10%;position:relative;z-index:20003;text-align:center;'>"+texto+"</p>");
				$("#mensaje").show();
				terminar=0;
			}
			else
			{
				$("#backmsg").hide();
			}
			
			});
		//deslizar el dedo a la derecha
		$("#marco").on( "swiperight", funciones.mueve_derecha);
		//tocar pendulo de actividad
		$("#p").on("tap",funciones.actividad);
		$(".libros").on("tap",funciones.libros);
		//tocar boton de regresar de actividad
		$("#bck").on("tap",funciones.regresar);
		//tocar boton de Menu
		$("#menu").click(function(){funciones.muestra_menu();return false;});
		//Cambiar idioma
		$("#i").click(function(){
			if(lan=="es")
			{
				lan="en";
				$("#lan").val("en");
				$("#i").text("Es");
				$("#ins_len").text("Español");
				$("#ins_dia").text("Additional information");
				$("#ins_act").text("view Activity");
				$("#menu1").attr("src","img/ui/menu1_en.png");
				$("#menu2").attr("src","img/ui/menu2_en.png");
				$("#menu3").attr("src","img/ui/menu3_en.png");
				$("#menu4").attr("src","img/ui/menu4_en.png");
				$("#menu5").attr("src","img/ui/menu5_en.png");
				$("#menu6").attr("src","img/ui/menu6_en.png");
			}
			else
			{
				lan="es";
				$("#lan").val("es");
				$("#i").text("En");
				$("#ins_len").text("English");
				$("#ins_dia").text("Toque para ir a información complementaria");
				$("#ins_act").text("Toque para ir actividad");
				$("#menu1").attr("src","img/ui/menu1_es.png");
				$("#menu2").attr("src","img/ui/menu2_es.png");
				$("#menu3").attr("src","img/ui/menu3_es.png");
				$("#menu4").attr("src","img/ui/menu4_es.png");
				$("#menu5").attr("src","img/ui/menu5_es.png");
				$("#menu6").attr("src","img/ui/menu6_es.png");
			}
			idioma=1;
			funciones.mueve_izquierda();
			return false;
			})
		//Mapa
		$(".lmapa").click(function(){
			d_mapa=1;
			antes=actual;
			tmp=this.href.split("#_");
			actual=tmp[1]-1;
			funciones.mueve_izquierda();
			return false;
			});
	});
