var texto = `<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*
</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes 
e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital 
paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; 
Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b>
<br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, 
oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South
<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; 
<br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>
A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética
<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; 
Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br>
</body></html>`;

let escolha = prompt("Escolha a cidade: 1-São Paulo, 2-Las vegas, 3-Moscou");
switch(escolha){
	case "1":
		alert("Bem-vindo a São paulo");
		break;
	case "2":
		alert("bem-vindo a Las Vegas");
		break;
	case "3":
		alert("Bem-vindo a Moscou");
		break;   
    default:
        alert(" Error:Cidade não encontrada");
}
let roteiro = prompt("Escolha o roteiro: 1-todos os roteiros A, 2-todos os roteiros B, 3-todos os roteiros C,"); 
switch(roteiro){
	case "1":
		var roteiroasp = "MASP;Parque Trianon;Rua Augusta";
        var roteiroalv = "Fonte do Bellagio;Principais Cassinos;Madame Tussauds";
        var roteiroamo = "Museu Histórico do Estado;Catedral de São Basílico;Mausoléu de Lênin";
		var roteiroa = [roteiroasp] + [roteiroalv] + [roteiroamo];
		var listaderoteiroa = roteiroa.split("[]");
		alert(listaderoteiroa);
		alert("Quantidade de locais citados por roteiro: 3");
		break;
	case "2":
		var roteirobsp = "Catedral da Sé; Pátio do Colégio; Rua Augusta";
		var roteiroblv = "Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado;";
		var roteirobmo = "Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou";
		var roteirob =[roteirobsp] + [roteiroblv] +[roteirobmo];
		var listaderoteirob = roteirob.split("[]");
		alert(listaderoteirob);
		alert("Quantidade de locais citados por roteiro: 3");
		break;
	case "3":
		var roteirocsp = "Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila";
		var roteiroclv = "Outlet Premium North; Stratosphere; Apple Fashion Show";
		var roteirocmo = "Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station";
		var roteiroc =[roteirocsp] + [roteiroclv] +[roteirocmo];
		var listaderoteiroc = roteiroc.split("[]");
		alert(listaderoteiroc);
		alert("Quantidade de locais citados por roteiro: 3");
		break;
	default:
		alert(" Error: Roteiro não encontrada");
}
let pontosturisticos = prompt(`Escolha o Ponto turistico: 
							   1-Avenida Paulista , 2- Centro de São Paulo, 3-Vila Madalena, 
							   4-Las Vegas Boulevard South, 5-Downtown, 6-Las Vegas Boulevard North,
 							   7-Praça Vermelha, 8-Centro de Moscou, 9-Obras pela cidade de Moscou`); 
switch(pontosturisticos){
	case "1":
		var roteiroasp = "MASP;Parque Trianon;Rua Augusta";  
		alert(roteiroasp);     
		break;
	case "2":
		var roteirobsp = "Catedral da Sé; Pátio do Colégio; Rua Augusta";
		alert(roteirobsp);
		break;
	case "3":
		var roteirocsp = "Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila";
		alert(roteirocsp);
		break;
    case "4":
		var roteiroalv = "Fonte do Bellagio;Principais Cassinos;Madame Tussauds";
		alert(roteiroalv);
		break;
	case "5":
		var roteiroblv = "Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado;";
		alert(roteiroblv);
		break;
	case "6":
		var roteiroclv = "Outlet Premium North; Stratosphere; Apple Fashion Show";
		alert(roteiroclv);
		break;
	case "7":
		var roteiroamo = "Museu Histórico do Estado;Catedral de São Basílico;Mausoléu de Lênin";
		alert(roteiroamo);
		break;
	case "8":
		var roteirobmo = "Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou";
		alert(roteirobmo);	
		break;
	case "9":
		var roteirocmo = "Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station";
		alert(roteirocmo);
		break;			
	default:
		alert(" Error: Ponto turistico não encontrado");
}

