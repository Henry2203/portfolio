
<?php // 
if ($_SERVER['REQUEST_METHOD'] == 'POST') 
{ 		
	$file = 'raportti.txt'; 
	if (is_writable($file)) 
		{ 
		file_put_contents( $file, $_POST['r1'] . " " . PHP_EOL, FILE_APPEND); 
		file_put_contents( $file, $_POST['r2'] . " " . PHP_EOL, FILE_APPEND); 
		file_put_contents( $file, $_POST['r3'] . " " . PHP_EOL, FILE_APPEND); 
		file_put_contents( $file, $_POST['r4'] . " " . PHP_EOL, FILE_APPEND);
		file_put_contents( $file, $_POST['r5'] . " " . PHP_EOL, FILE_APPEND);
		file_put_contents( $file, $_POST['r6'] . " " . PHP_EOL, FILE_APPEND);
		file_put_contents( $file, $_POST['r7'] . " " . PHP_EOL, FILE_APPEND);
		file_put_contents( $file, $_POST['r8'] . " " . PHP_EOL, FILE_APPEND);
		file_put_contents( $file, $_POST['r9'] . " " . PHP_EOL, FILE_APPEND);
		file_put_contents( $file, $_POST['r10'] . " " . PHP_EOL, FILE_APPEND);
		file_put_contents( $file, $_POST['r11'] . " " . PHP_EOL, FILE_APPEND); 		
		file_put_contents( $file, "*---*" . " " . PHP_EOL, FILE_APPEND);
		}
	else { print 'Suojausongelmia?';} 	
		print '******************* <br>' ;
		print '*** Tallessa   **** <br>' ;
		print '******************* <br>' ;
		print '<form action="muil_rapo.php" >';
		print '<input type="submit" name="submit" value="Takaisin" />';
} 
else 
{
?>
<h1>Täytä tiedot: </h1>
<br>
<form action="muil_rapo.php" method="post">
Etunimi <br><textarea name="r1" rows="2" cols="20" ></textarea> <br>
Sukunimi <br><textarea name="r2" rows="2" cols="20" ></textarea> <br>
Sähköposti <br><textarea name="r3" rows="2" cols="20" ></textarea> <br>
Henkilötunnus <br><textarea name="r4" rows="2" cols="20" ></textarea> <br>
Puhelinnumero <br><textarea name="r5" rows="2" cols="20" ></textarea> <br>
Käyttöjärjestelmän päivitysten
asennukset<br><textarea name="r6" rows="2" cols="20" >Tehty</textarea> <br>
Valmistajan ohjelmisto ja laiteajurien
päivitykset<br><textarea name="r7" rows="2" cols="20" >Tehty</textarea> <br>
Virustorjuntaohjelmiston asennus <br><textarea name="r8" rows="2" cols="20" >Tehty</textarea> <br>
Nettiyhteyden asennus ja toimivuuden
tarkistus<br><textarea name="r9" rows="2" cols="20" >Tehty</textarea> <br>
Nettiselaimien asennukset<br><textarea name="r10" rows="2" cols="20" >Tehty</textarea> <br>
Muiden ohjelmien asennukset <br><textarea name="r11" rows="2" cols="20" >Tehty</textarea> <br>

<br>
JA TALLENNA: 
<input type="submit" name="submit" value="PAINA" /> TÄSTÄ!
<?php 
}  
?>

